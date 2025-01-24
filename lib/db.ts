import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient({
  datasourceUrl: process.env.PRISMA_ACCELERATE_URL
});

export default prisma;
