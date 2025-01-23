import { PrismaClient } from '@prisma/client'
import { Pool, neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

const connectionString = process.env.DATABASE_URL!

// Required for Vercel Edge Functions
neonConfig.webSocketConstructor = ws
const pool = new Pool({ connectionString })

const prismadb = new PrismaClient({
  datasources: {
    db: {
      url: connectionString
    }
  }
})

export default prismadb
