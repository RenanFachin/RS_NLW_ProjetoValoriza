import { PrismaClient } from '@prisma/client'

// Executando o prismaClient
export const prismaClient = new PrismaClient({
    log: ['query']
})