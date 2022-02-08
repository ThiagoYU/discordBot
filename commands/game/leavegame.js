module.exports = {
    name: "leavegame",
    category: "game",
    permissions: [],
    devOnly: false,
    run: async ({ witchPlayerList, message, args }) => {
        var index = witchPlayerList.indexOf(message.author)
        // If user is not in the list
        if (index === -1) {
            // Notify it
            message.reply(`${message.author} is not registered in the game.`)
        } else {
            // Remove user from list
            witchPlayerList.splice(index, 1)
            message.reply(`${message.author} left the game...`)
        }
    }
}
