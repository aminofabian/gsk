import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";

export async function GET() {
  try {
    // Get session but don't require it
    const session = await auth();

    const events = await db.event.findMany({
      include: {
        attendees: session ? {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        } : false,
      },
      orderBy: {
        startDate: 'asc',
      },
      where: {
        endDate: {
          gte: new Date(),
        },
      },
    });

    // Transform the events to ensure they have an attendees array even when not authenticated
    const transformedEvents = events.map(event => ({
      ...event,
      attendees: session ? event.attendees : []
    }));

    if (!transformedEvents.length) {
      console.log("[EVENTS_GET] No events found in database");
    } else {
      console.log(`[EVENTS_GET] Found ${transformedEvents.length} events`);
    }

    return NextResponse.json(transformedEvents);
  } catch (error) {
    console.error("[EVENTS_GET] Error fetching events:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch events" }), 
      { status: 500 }
    );
  }
} 