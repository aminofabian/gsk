import { PrismaClient } from '@prisma/client'
import { neon } from '@neondatabase/serverless'

const connectionString = process.env.DIRECT_URL!

const prismadb = new PrismaClient({
  datasources: {
    db: {
      url: connectionString
    }
  }
})

export default prismadb
