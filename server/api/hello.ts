export default defineEventHandler(async (event) => {
    const todo = await useDrizzle().insert(tables.services).values({
        name: "TEST",
        description: "DESC",
        img: "IMGGG",
        createdAt: new Date()
    }).returning().get()
    const activities = await useDrizzle().select().from(tables.services).all()

    return activities
})

