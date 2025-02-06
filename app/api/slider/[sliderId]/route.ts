import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";

export async function PATCH(
  req: Request,
  { params }: { params: { sliderId: string } }
) {
  try {
    const session = await auth();
    if (!session || session.user.role !== UserRole.ADMIN) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { text, link, active } = body;

    if (!text) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const sliderInfo = await db.sliderInfo.update({
      where: {
        id: params.sliderId
      },
      data: {
        text,
        link,
        active
      }
    });

    return NextResponse.json(sliderInfo);
  } catch (error) {
    console.error("[SLIDER_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { sliderId: string } }
) {
  try {
    const session = await auth();
    if (!session || session.user.role !== UserRole.ADMIN) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const sliderInfo = await db.sliderInfo.delete({
      where: {
        id: params.sliderId
      }
    });

    return NextResponse.json(sliderInfo);
  } catch (error) {
    console.error("[SLIDER_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 