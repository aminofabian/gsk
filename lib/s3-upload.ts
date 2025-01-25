import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Validate environment variables
const requiredEnvVars = [
  'AWS_REGION',
  'AWS_ACCESS_KEY_ID',
  'AWS_SECRET_ACCESS_KEY',
  'AWS_S3_BUCKET_NAME'
] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToS3(file: File): Promise<string> {
  try {
    const fileBuffer = await file.arrayBuffer();
    const fileName = `banners/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '-')}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
      Body: Buffer.from(fileBuffer),
      ContentType: file.type,
      ACL: 'public-read',
    });

    await s3Client.send(command);

    const imageUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    
    // Verify the URL is valid
    try {
      await fetch(imageUrl, { method: 'HEAD' });
    } catch (error) {
      throw new Error('Failed to verify uploaded image URL');
    }

    return imageUrl;
  } catch (error: any) {
    console.error('S3 upload error:', error);
    throw new Error(error.message || 'Failed to upload file to S3');
  }
} 