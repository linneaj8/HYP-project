import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const activities = sqliteTable('activities', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
})