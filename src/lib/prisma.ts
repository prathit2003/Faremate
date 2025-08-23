import { PrismaClient } from "@prisma/client";

declare global {
  // allow global prisma in dev to avoid multiple instances
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"], // ✅ use new
  });

// attach to global in dev mode
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
