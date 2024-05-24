export default defineEventHandler(async (event) => {
    const activities = await useDrizzle().select().from(tables.activities).all()

    return activities
})

