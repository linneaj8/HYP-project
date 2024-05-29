export default defineEventHandler(async (event) => {
    const service = await useDrizzle().select().from(tables.services).where(eq(tables.services.id, event.context.params.id));
    return service
})

