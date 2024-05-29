export default defineEventHandler(async (event) => {
    /* 
    const ss = await useDrizzle().insert(tables.services).values({
        name: "TEST",
        description: "DESC",
        img: "IMGGG",
        createdAt: new Date()
    }).returning().get()
    */

    const services = await useDrizzle().select().from(tables.services).all()

    return services
})

