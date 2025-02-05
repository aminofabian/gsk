import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { EventType } from "@prisma/client";
import { uploadToS3 } from "@/lib/s3";

export async function GET() {
  try {
    const session = await auth();

    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const events = await db.event.findMany({
      include: {
        attendees: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        organizers: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
      orderBy: {
        startDate: 'desc',
      },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error("[EVENTS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const formData = await req.formData();
    
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const type = formData.get("type") as EventType;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;
    const venue = formData.get("venue") as string;
    const objectives = JSON.parse(formData.get("objectives") as string);
    const cpdPoints = Number(formData.get("cpdPoints"));
    const speakers = JSON.parse(formData.get("speakers") as string);
    const moderators = JSON.parse(formData.get("moderators") as string);
    const capacity = formData.get("capacity") ? Number(formData.get("capacity")) : null;
    const registrationDeadline = formData.get("registrationDeadline") as string;

    if (!title || !description || !type || !startDate || !endDate || !venue || !objectives) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Handle file uploads
    const materials: Record<string, string> = {};
    const files = formData.getAll("materials") as File[];
    
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileUrl = await uploadToS3(buffer, file.name, file.type);
      materials[file.name] = fileUrl;
    }

    const event = await db.event.create({
      data: {
        title,
        description,
        type,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        venue,
        objectives,
        cpdPoints: cpdPoints || 0,
        speakers: speakers || [],
        moderators: moderators || [],
        capacity,
        registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : null,
        materials,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("[EVENTS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 