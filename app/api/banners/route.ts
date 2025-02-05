import { NextResponse } from "next/server";
import { uploadToS3 } from "@/lib/s3-upload";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    console.log("Fetching banners...");
    const banners = await prisma.banner.findMany({
      orderBy: { order: "asc" },
      where: { active: true },
    });
    console.log(`Found ${banners.length} active banners`);
    return NextResponse.json(banners);
  } catch (error) {
    console.error("Error fetching banners:", error);
    return NextResponse.json({ error: "Failed to fetch banners" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    console.log("Creating new banner...");
    const session = await auth();
    if (!session?.user) {
      console.log("Unauthorized attempt to create banner");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const title = formData.get("title") as string || "New Banner";
    const subtitle = formData.get("subtitle") as string || "Subtitle";
    const ctaText = formData.get("ctaText") as string || "Learn More";
    const ctaLink = formData.get("ctaLink") as string || "/";
    
    let imageUrl = "/images/placeholder-banner.jpg";
    
    if (file) {
      console.log("Uploading file to S3...");
      imageUrl = await uploadToS3(file);
      console.log("File uploaded successfully:", imageUrl);
    }
    
    // Get the highest order number
    const highestOrder = await prisma.banner.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });
    
    const newOrder = (highestOrder?.order ?? -1) + 1;
    console.log("Creating banner with order:", newOrder);
    
    // Create new banner
    const banner = await prisma.banner.create({
      data: {
        title,
        subtitle,
        imageUrl,
        ctaText,
        ctaLink,
        order: newOrder,
        active: true,
        date: new Date(),
      },
    });

    console.log("Banner created successfully:", banner.id);
    return NextResponse.json({ banner });
  } catch (error) {
    console.error("Error creating banner:", error);
    return NextResponse.json({ error: "Failed to create banner" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    console.log("Updating banner...");
    const session = await auth();
    if (!session?.user) {
      console.log("Unauthorized attempt to update banner");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const { id, title, subtitle, imageUrl, ctaText, ctaLink, order, active, date } = data;

    console.log("Updating banner with ID:", id);
    const banner = await prisma.banner.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(subtitle && { subtitle }),
        ...(imageUrl && { imageUrl }),
        ...(ctaText && { ctaText }),
        ...(ctaLink && { ctaLink }),
        ...(typeof order === 'number' && { order }),
        ...(typeof active === 'boolean' && { active }),
        ...(date && { date: new Date(date) }),
      },
    });
    
    console.log("Banner updated successfully");
    return NextResponse.json(banner);
  } catch (error) {
    console.error("Error updating banner:", error);
    return NextResponse.json({ error: "Failed to update banner" }, { status: 500 });
  }
} 