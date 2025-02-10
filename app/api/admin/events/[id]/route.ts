import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { EventType } from "@prisma/client";
import { generateSlug } from "@/lib/utils";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const formData = await req.formData();
    
    // Parse the form data
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const type = formData.get('type') as EventType;
    const startDate = formData.get('startDate') as string;
    const endDate = formData.get('endDate') as string;
    const venue = formData.get('venue') as string;
    const objectives = JSON.parse(formData.get('objectives') as string);
    const cpdPoints = parseInt(formData.get('cpdPoints') as string) || 0;
    const speakers = JSON.parse(formData.get('speakers') as string);
    const moderators = JSON.parse(formData.get('moderators') as string);
    const capacity = formData.get('capacity') ? parseInt(formData.get('capacity') as string) : null;
    const registrationDeadline = formData.get('registrationDeadline') as string;
    const materials = formData.get('materials') ? JSON.parse(formData.get('materials') as string) : {};

    // Parse price values
    const memberPriceStr = formData.get('memberPrice') as string;
    const nonMemberPriceStr = formData.get('nonMemberPrice') as string;
    
    // Convert prices to numbers or null
    const memberPrice = memberPriceStr === 'null' || memberPriceStr === '' ? null : parseFloat(memberPriceStr);
    const nonMemberPrice = nonMemberPriceStr === 'null' || nonMemberPriceStr === '' ? null : parseFloat(nonMemberPriceStr);

    if (!title || !description || !type || !startDate || !endDate || !venue || !objectives) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Get the current event to check if title has changed
    const currentEvent = await db.event.findUnique({
      where: { id: params.id },
    });

    if (!currentEvent) {
      return new NextResponse("Event not found", { status: 404 });
    }

    // Generate new slug if title has changed
    let slug = currentEvent.slug;
    if (title !== currentEvent.title) {
      let baseSlug = generateSlug(title);
      slug = baseSlug;
      let counter = 1;

      // Check for existing slugs and generate a unique one
      while (true) {
        const existing = await db.event.findUnique({
          where: { 
            slug,
            NOT: {
              id: params.id
            }
          },
        });

        if (!existing) break;
        slug = `${baseSlug}-${counter}`;
        counter++;
      }
    }

    const event = await db.event.update({
      where: {
        id: params.id,
      },
      data: {
        title,
        description,
        type: type as EventType,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        venue,
        slug,
        objectives,
        cpdPoints,
        speakers,
        moderators,
        capacity,
        registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : null,
        materials,
        memberPrice,
        nonMemberPrice
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("[EVENT_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();

    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await db.event.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("[EVENT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 