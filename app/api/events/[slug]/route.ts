import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = 'nodejs';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const event = await db.event.findUnique({
      where: { 
        slug: params.slug,
      },
      include: {
        attendees: true,
        organizers: true,
      },
    });

    if (!event) {
      return new NextResponse("Event not found", { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error("[EVENT_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 