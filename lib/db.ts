import { PrismaClient } from '@prisma/client'
import { Pool } from '@neondatabase/serverless'

const connectionString = process.env.DATABASE_URL!
const pool = new Pool({ connectionString })

const prismadb = new PrismaClient({
  adapter: {
    pool: {
      pool,
      options: { connectionString }
    }
  }
})

export default prismadb
