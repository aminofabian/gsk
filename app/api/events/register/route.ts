import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { z } from "zod";

const registerSchema = z.object({
  eventId: z.string(),
});

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { eventId } = registerSchema.parse(body);

    // First check if the user exists
    const user = await db.user.findUnique({
      where: { id: session.user.id }
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Check if event exists and get its current state
    const event = await db.event.findUnique({
      where: { id: eventId },
      include: {
        attendees: {
          select: {
            id: true
          }
        }
      }
    });

    if (!event) {
      return new NextResponse("Event not found", { status: 404 });
    }

    // Check if registration is closed
    if (event.registrationDeadline && new Date(event.registrationDeadline) < new Date()) {
      return new NextResponse("Registration is closed for this event", { status: 400 });
    }

    // Check if event is full
    if (event.capacity && event.attendees.length >= event.capacity) {
      return new NextResponse("Event is at full capacity", { status: 400 });
    }

    // Check if user is already registered
    const isAlreadyRegistered = event.attendees.some(
      (attendee) => attendee.id === session.user.id
    );

    if (isAlreadyRegistered) {
      return new NextResponse("Already registered for this event", { status: 400 });
    }

    // Register user for the event
    await db.event.update({
      where: { id: eventId },
      data: {
        attendees: {
          connect: { id: user.id }
        }
      }
    });

    return NextResponse.json({
      message: "Successfully registered for the event"
    });
  } catch (error) {
    console.error("[EVENT_REGISTRATION]", error);
    
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid request data", { status: 400 });
    }

    return new NextResponse(
      "Internal Server Error", 
      { status: 500 }
    );
  }
} 