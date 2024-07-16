export default defineEventHandler(async (event) => {
    const projects = await useDrizzle().select().from(tables.projects).all()

    return projects
})

