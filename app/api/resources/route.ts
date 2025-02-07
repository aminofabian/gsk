import { NextResponse } from 'next/server';
import { auth } from "@/auth";
import { prisma } from '@/lib/prisma';
import { ResourceType } from '@prisma/client';

// Get all resources
export async function GET() {
  try {
    const resources = await prisma.resource.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Create a new resource
export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await req.json();
    const resource = await prisma.resource.create({
      data: {
        title: body.title,
        description: body.description,
        type: body.type as ResourceType,
        category: body.category,
        fileUrl: body.fileUrl,
        userId: session.user.id,
      },
    });

    return NextResponse.json(resource);
  } catch (error) {
    console.error('Error creating resource:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Delete a resource
export async function DELETE(req: Request) {
  try {
    const session = await auth();
    if (!session?.user || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new NextResponse('Resource ID is required', { status: 400 });
    }

    await prisma.resource.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting resource:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 