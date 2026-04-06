import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Usando a variável de ambiente diretamente
    url: process.env.DATABASE_URL,
  },
});