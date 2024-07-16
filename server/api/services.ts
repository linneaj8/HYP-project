export default defineEventHandler(async (event) => {
    const services = await useDrizzle().select().from(tables.services).all()

    return services
})

