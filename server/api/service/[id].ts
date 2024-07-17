export default defineEventHandler(async (event) => {
    const _service = await useDrizzle().select().from(tables.services).where(eq(tables.services.id, event.context.params.id));
    
    let service = {
        "service": _service[0],
        "people": await useDrizzle().select().from(tables.people).where(and(eq(tables.people.serviceID, event.context.params.id), eq(tables.people.serviceLeader, 1)))
    }
    return service;
})

