module.exports = {
    name: "pong",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        message.reply("ping")
    }
}