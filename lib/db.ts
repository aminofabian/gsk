import { PrismaClient } from '@prisma/client'
import { Pool } from '@neondatabase/serverless'

declare global {
  var prisma: PrismaClient | undefined
}

const connectionString = process.env.DIRECT_URL!
const pool = new Pool({ connectionString })

const prismadb = globalThis.prisma || new PrismaClient({
  datasources: {
    db: {
      url: connectionString
    }
  }
})

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

export default prismadb
