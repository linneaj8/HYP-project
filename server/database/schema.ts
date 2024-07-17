import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const contacts = sqliteTable('contacts', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    fullname: text('fullname').notNull(),
    email: text('email').notNull(),
    subject: text('subject').notNull(),
    message: text('message').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
})

export const projects = sqliteTable('projects', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    description: text('description').notNull(),
    img: text('img').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
})

export const services = sqliteTable('services', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    description: text('description').notNull(),
    img: text('img').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
})

export const people = sqliteTable('people', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('fullname').notNull(),
    experience: integer('experience').notNull(),
    role: text('role').notNull(),
    education: text('education').notNull(),
    serviceID: integer('serviceID').references(() => services.id),
    projectID: integer('projectID').references(() => projects.id),
    serviceLeader: integer('serviceLeader').notNull(),
    projectLeader: integer('projectLeader').notNull(),
    description: text('description').notNull(),
    img: text('img').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
})

export const comments = sqliteTable('comments', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('fullname').notNull(),
    description: text('message').notNull(),
    serviceID: integer('serviceID').references(() => services.id),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
})