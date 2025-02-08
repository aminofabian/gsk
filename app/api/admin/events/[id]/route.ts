import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { EventType } from "@prisma/client";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
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
      materials,
      memberPrice,
      nonMemberPrice
    } = body;

    if (!title || !description || !type || !startDate || !endDate || !venue || !objectives) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    if (typeof memberPrice !== 'number' || typeof nonMemberPrice !== 'number') {
      return new NextResponse("Pricing must be numeric values", { status: 400 });
    }

    const event = await db.event.update({
      where: {
        id: params.id,
      },
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
        memberPrice: memberPrice ?? null,
        nonMemberPrice: nonMemberPrice ?? null,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("[EVENT_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await db.event.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("[EVENT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 