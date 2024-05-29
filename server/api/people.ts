export default defineEventHandler(async (event) => {
    /*
    const pp = await useDrizzle().insert(tables.people).values({
        name: "TEST",
        role: "Base role",
        education: "Education desc",
        projectID: 1,
        serviceID: 1,
        description: "DESC",
        img: "IMGGG",
        createdAt: new Date()
    }).returning().get()
    */

    const people = await useDrizzle().select().from(tables.people).all()
    return people
})

