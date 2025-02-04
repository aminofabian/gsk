import { NextResponse } from "next/server";
import { uploadToS3 } from "@/lib/s3-upload";
import { auth } from "@/auth";

export async function POST(request: Request) {
  const session = await auth();

  // Check if user is authenticated
  if (!session) {
    return NextResponse.json(
      { 
        error: "Unauthorized", 
        details: "You must be logged in to upload banners",
        success: false 
      },
      { 
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  try {
    console.log('Starting banner upload process...');
    
    const formData = await request.formData().catch(error => {
      console.error('FormData parsing error:', error);
      throw new Error('Failed to parse form data');
    });
    
    const file = formData.get("file");
    
    // Type check and logging
    if (file instanceof File) {
      console.log('File received:', {
        type: file.type,
        size: file.size,
        name: file.name
      });
    } else {
      console.error('Invalid file object received:', typeof file);
      return NextResponse.json(
        { 
          error: "Invalid file object",
          details: `Expected File, got ${typeof file}`,
          success: false
        },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      console.error('Invalid file type:', file.type);
      return NextResponse.json(
        { 
          error: "Invalid file type. Please upload an image.",
          details: `File type ${file.type} is not supported`,
          success: false
        },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      console.error('File too large:', file.size);
      return NextResponse.json(
        { 
          error: "File too large. Maximum size is 5MB.",
          details: `File size ${file.size} exceeds limit of ${5 * 1024 * 1024}`,
          success: false
        },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    console.log('Starting S3 upload for file:', file.name);
    
    // Upload to S3
    const imageUrl = await uploadToS3(file);
    
    console.log('S3 upload successful:', imageUrl);

    return NextResponse.json(
      { 
        url: imageUrl, 
        success: true,
        message: 'File uploaded successfully'
      },
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error: any) {
    console.error("Detailed upload error:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return NextResponse.json(
      { 
        error: "Error uploading banner",
        details: error.message,
        success: false,
        timestamp: new Date().toISOString()
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 