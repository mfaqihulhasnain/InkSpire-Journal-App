import { PrismaClient } from "@prisma/client";

let db;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient({
    log: ["error"],
    errorFormat: "minimal",
  });
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient({
      log: ["query", "error", "warn"],
    });
  }
  db = globalThis.prisma;
}

export { db };