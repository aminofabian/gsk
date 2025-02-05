import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export async function GET() {
  try {
    const banners = await db.banner.findMany({
      orderBy: {
        order: 'asc'
      }
    });

    return NextResponse.json(banners);
  } catch (error) {
    console.error("[BANNERS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session || session.user.role !== UserRole.ADMIN) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { title, subtitle, imageUrl, date, ctaText, ctaLink } = body;

    if (!title || !subtitle || !date) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Get the highest order
    const lastBanner = await db.banner.findFirst({
      orderBy: {
        order: 'desc'
      }
    });

    const newOrder = lastBanner ? lastBanner.order + 1 : 1;

    const banner = await db.banner.create({
      data: {
        title,
        subtitle,
        imageUrl,
        date: new Date(date),
        ctaText,
        ctaLink,
        order: newOrder,
      }
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.error("[BANNERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 