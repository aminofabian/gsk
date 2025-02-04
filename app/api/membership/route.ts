import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      designation,
      specialization,
      licenseNumber,
      hospital,
      address,
      city,
      county,
      postalCode,
      password,
    } = data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create membership application with user
    const application = await prisma.membershipApplication.create({
      data: {
        phone,
        designation,
        specialization,
        licenseNumber,
        hospital,
        address,
        city,
        county,
        postalCode,
        status: "PENDING",
        user: {
          create: {
            email,
            password: hashedPassword,
            firstName,
            lastName,
            role: "USER",
          }
        }
      },
      include: {
        user: true
      }
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = application.user;
    
    return NextResponse.json({ ...application, user: userWithoutPassword });
  } catch (error) {
    console.error("Error creating membership:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 