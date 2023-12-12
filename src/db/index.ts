import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient(); // we use db object to create, save, delete, update in database
