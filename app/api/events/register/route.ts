import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { eventId } = body;

    if (!eventId) {
      return new NextResponse("Event ID is required", { status: 400 });
    }

    // Check if user is already registered
    const event = await db.event.findFirst({
      where: {
        id: eventId,
        attendees: {
          some: {
            id: session.user.id
          }
        }
      }
    });

    if (event) {
      return new NextResponse("Already registered for this event", { status: 400 });
    }

    // Register user for the event
    await db.event.update({
      where: {
        id: eventId,
      },
      data: {
        attendees: {
          connect: {
            id: session.user.id
          }
        }
      }
    });

    return new NextResponse("Successfully registered for event", { status: 200 });
  } catch (error) {
    console.error("[EVENT_REGISTRATION]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 