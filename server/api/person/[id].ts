export default defineEventHandler(async (event) => {
    const person = await useDrizzle().select().from(tables.people).where(eq(tables.people.id, event.context.params.id)).leftJoin(tables.projects, eq(tables.projects.id, tables.people.projectID)).leftJoin(tables.services, eq(tables.services.id, tables.people.serviceID));
    return person[0]
})

