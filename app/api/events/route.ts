import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    console.log("[EVENTS_API] Starting to fetch events");
    
    // Test database connection
    try {
      await db.$connect();
      console.log("[EVENTS_API] Database connection successful");
    } catch (dbError) {
      console.error("[EVENTS_API] Database connection failed:", dbError);
      throw new Error("Database connection failed");
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
    
    // Return a proper JSON error response
    return new NextResponse(
      JSON.stringify({ 
        error: "Failed to fetch events",
        details: error instanceof Error ? error.message : "Unknown error"
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  } finally {
    try {
      await db.$disconnect();
      console.log("[EVENTS_API] Database disconnected successfully");
    } catch (error) {
      console.error("[EVENTS_API] Error disconnecting from database:", error);
    }
  }
} 