export default defineEventHandler(async (event) => {
    const _service = await useDrizzle().select().from(tables.services).where(eq(tables.services.id, event.context.params.id));
    
    let service = {
        "service": _service[0],
        "people": await useDrizzle().select().from(tables.people).where(eq(tables.people.serviceID, event.context.params.id))
    }
    return service;
})

