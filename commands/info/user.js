module.exports = {
    name: "user",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        // Reply with author and username
        message.reply(`author: ${message.author}\nusername: ${message.author.username}`);
    }
}
