import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/schema.ts',
  // schema: "./src/schema/*",
  out: './server/database/migrations',
  dbCredentials: {
    url: 'file:db.db'
  },
})