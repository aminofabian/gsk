import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

const connectionString = process.env.DATABASE_URL!
const pool = new Pool({ connectionString })

const prismadb = new PrismaClient({
  adapter: new PrismaNeon(pool)
})

export default prismadb
