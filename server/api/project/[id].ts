import projects from "../projects";

export default defineEventHandler(async (event) => {
    const _project = await useDrizzle().select().from(tables.projects).where(eq(tables.projects.id, event.context.params.id));

    let project = {
        "project": _project[0],
        "people": await useDrizzle().select().from(tables.people).where(and(eq(tables.people.projectID, event.context.params.id), eq(tables.people.projectLeader, 1)))
    }
    return project;
})

