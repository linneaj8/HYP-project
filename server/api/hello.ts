export default defineEventHandler(async (event) => {
    const todo = await useDrizzle().insert(tables.activities).values({
        name: "TEST",
        createdAt: new Date()
    }).returning().get()
    const activities = await useDrizzle().select().from(tables.activities).all()

    return activities
})

