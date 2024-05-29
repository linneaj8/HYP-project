import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
export { sql, eq, and, or } from 'drizzle-orm'

import * as schema from '../database/schema'
import * as drizzleConf from '../../drizzle.config'

export const tables = schema

export function useDrizzle() {
  return drizzle(createClient({ url: drizzleConf.default.dbCredentials.url}), { schema })
}

// export type activity = typeof schema.activities.$inferSelect