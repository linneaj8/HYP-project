export default defineEventHandler(async (event) => {
    const people = await useDrizzle().select().from(tables.people).all()
    return people
})

