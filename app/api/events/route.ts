import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // First try to get total count of events without any filters
    const totalEventsCount = await db.event.count();
    console.log("[EVENTS_GET] Total events in database:", totalEventsCount);

    // Get count of future events
    const futureEventsCount = await db.event.count({
      where: {
        endDate: {
          gte: new Date(),
        },
      },
    });
    console.log("[EVENTS_GET] Future events count:", futureEventsCount);
    console.log("[EVENTS_GET] Current server time:", new Date().toISOString());

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

    console.log("[EVENTS_GET] Successfully fetched events. Count:", events.length);
    
    // Log first event details if available
    if (events.length > 0) {
      console.log("[EVENTS_GET] First event details:", {
        id: events[0].id,
        title: events[0].title,
        startDate: events[0].startDate,
        endDate: events[0].endDate
      });
    }

    return NextResponse.json(events);
  } catch (error) {
    const err = error as Error;
    console.error("[EVENTS_GET] Detailed error:", {
      message: err.message,
      stack: err.stack,
      name: err.name
    });
    
    // Check database connection
    try {
      await db.$queryRaw`SELECT 1`;
      console.log("[EVENTS_GET] Database connection test: successful");
    } catch (dbError) {
      console.error("[EVENTS_GET] Database connection test failed:", dbError);
    }

    return new NextResponse(
      JSON.stringify({ 
        error: "Internal Server Error", 
        message: err.message 
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 