import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { UserRole } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      designation,
      speciality,
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

    // Create user with membership application
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: UserRole.USER,
        membershipApplication: {
          create: {
            phone,
            designation,
            speciality,
            licenseNumber,
            hospital,
            address,
            city,
            county,
            postalCode,
            status: "PENDING"
          }
        }
      },
      include: {
        membershipApplication: true
      }
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("Error creating membership:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 