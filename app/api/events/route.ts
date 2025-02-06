import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    console.log("[EVENTS_API] Starting to fetch events");
    
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

    console.log("[EVENTS_API] Found events:", events.length);
    console.log("[EVENTS_API] First event (if any):", events[0]);

    // Set proper headers and return response
    return new NextResponse(JSON.stringify(events), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("[EVENTS_API] Error fetching events:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch events" }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
} 