module.exports = {
    name: "ready",
    run: async (context) => {
        console.log("Logged in as " + context.client.user.tag)
    }
}
