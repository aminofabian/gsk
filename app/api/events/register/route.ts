import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    // Get the authenticated user
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Parse and validate the request body
    const body = await req.json();
    const { eventId } = z.object({
      eventId: z.string().min(1, "Event ID is required"),
    }).parse(body);

    // Check if user exists
    const user = await db.user.findUnique({
      where: { id: session.user.id }
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Check if event exists and get its details
    const event = await db.event.findUnique({
      where: { id: eventId },
      include: {
        attendees: {
          select: { id: true }
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

    // Check if event is at capacity
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
    const updatedEvent = await db.event.update({
      where: { id: eventId },
      data: {
        attendees: {
          connect: { id: session.user.id }
        }
      },
      include: {
        attendees: true
      }
    });

    return NextResponse.json({
      message: "Successfully registered for the event",
      event: updatedEvent
    });

  } catch (error) {
    console.error("[EVENT_REGISTRATION_ERROR]", error);

    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid request data", { status: 400 });
    }

    return new NextResponse(
      "Internal Server Error", 
      { status: 500 }
    );
  }
} 