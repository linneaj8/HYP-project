export default defineEventHandler(async (event) => {
    const project = await useDrizzle().select().from(tables.projects).where(eq(tables.projects.id, event.context.params.id));
    return project[0]
})

