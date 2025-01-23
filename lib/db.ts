import { PrismaClient } from '@prisma/client/edge'
import { Pool } from '@neondatabase/serverless'

const connectionString = process.env.DIRECT_URL!

const pool = new Pool({ connectionString })

const prismadb = new PrismaClient({
  datasources: {
    db: {
      url: connectionString
    }
  }
})

export default prismadb
