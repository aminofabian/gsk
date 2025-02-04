import { NextResponse } from "next/server";
import { uploadToS3 } from "@/lib/s3-upload";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const banners = await prisma.banner.findMany({
      orderBy: { order: "asc" },
      where: { active: true },
    });
    return NextResponse.json(banners);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch banners" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;
    
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const url = await uploadToS3(file);
    
    const banner = await prisma.banner.create({
      data: {
        title: "New Banner",
        image: url,
        link: "/",
        cta: "Learn More",
        order: 0,
      },
    });

    return NextResponse.json({ url, banner });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const banner = await prisma.banner.update({
      where: { id: data.id },
      data: {
        title: data.title,
        image: data.image,
        link: data.link,
        cta: data.cta,
        order: data.order,
        active: data.active,
      },
    });
    return NextResponse.json(banner);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update banner" }, { status: 500 });
  }
} 