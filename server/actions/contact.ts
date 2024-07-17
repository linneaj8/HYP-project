export default defineFormActions({
    default: async (event) => {
        const formData = await readFormData(event)

        const request = await useDrizzle().insert(tables.contacts).values({
            fullname: formData.get("name"),
            email: formData.get("mail"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            createdAt: new Date()
        }).returning().get()

        return actionResponse(event, { sent: true });
    }
})  