import { NextResponse } from "next/server";
import { auth } from "@/auth";
import db from "@/lib/db";

export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const values = await req.json();

    // Update user profile in database
    const updatedUser = await db.user.update({
      where: { id: session.user.id },
      data: {
        title: values.title,
        bio: values.bio,
        specialization: values.specialization,
        hospital: values.hospital,
        profileSlug: values.profileSlug,
        // Handle arrays separately to avoid potential issues
        socialLinks: {
          deleteMany: {},
          create: values.socialLinks
        },
        education: {
          deleteMany: {},
          create: values.education
        },
        achievements: {
          deleteMany: {},
          create: values.achievements
        }
      }
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("[PROFILE_UPDATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return new NextResponse("Slug is required", { status: 400 });
    }

    const user = await db.user.findUnique({
      where: { profileSlug: slug },
      select: {
        firstName: true,
        lastName: true,
        title: true,
        bio: true,
        specialization: true,
        hospital: true,
        profileSlug: true,
        socialLinks: true,
        education: true,
        achievements: true,
      }
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("[PROFILE_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 