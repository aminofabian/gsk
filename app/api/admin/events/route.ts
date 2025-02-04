import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { EventType } from "@prisma/client";

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

    const body = await req.json();
    const { 
      title, 
      description, 
      type, 
      startDate, 
      endDate, 
      venue,
      objectives,
      cpdPoints,
      speakers,
      moderators,
      capacity,
      registrationDeadline,
      materials 
    } = body;

    if (!title || !description || !type || !startDate || !endDate || !venue || !objectives) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const event = await db.event.create({
      data: {
        title,
        description,
        type: type as EventType,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        venue,
        objectives,
        cpdPoints: cpdPoints || 0,
        speakers: speakers || [],
        moderators: moderators || [],
        capacity,
        registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : null,
        materials: materials || {},
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("[EVENTS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 