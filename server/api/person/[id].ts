export default defineEventHandler(async (event) => {
    const person = await useDrizzle().select().from(tables.people).where(eq(tables.people.id, event.context.params.id));
    return person
})

