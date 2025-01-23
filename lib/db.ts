import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
  var prisma: ReturnType<typeof prismadb> | undefined
}

const prismadb = () => {
  return new PrismaClient().$extends(withAccelerate())
}

const db = globalThis.prisma || prismadb()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db

export default db
