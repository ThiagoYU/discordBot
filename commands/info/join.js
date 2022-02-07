module.exports = {
    name: "join",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ witchPlayerList, message, args }) => {
        // If author already in list
        if (witchPlayerList.indexOf(message.author) !== -1) {
            // Notify user it is already in image
            message.reply(`${message.author} is already registered in the game.`)
        } else {
            // Add user in the list
            witchPlayerList.unshift(message.author)
            message.reply(`${message.author} added to the game! \\o/`)
        }
    }
}
