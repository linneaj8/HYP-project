export default defineEventHandler(async (event) => {
    /*
    const pp = await useDrizzle().insert(tables.projects).values({
        name: "TEST",
        description: "DESC",
        img: "IMGGG",
        createdAt: new Date()
    }).returning().get()
    */

    const projects = await useDrizzle().select().from(tables.projects).all()

    return projects
})

