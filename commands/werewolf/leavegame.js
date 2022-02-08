module.exports = {
    name: "leavegame",
    category: "game",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        var index = werewolfContext.playerList.indexOf(message.author)
        // If user is not in the list
        if (index === -1) {
            // Notify it
            message.reply(`${message.author} is not registered in the game.`)
        } else {
            // Remove user from list
            werewolfContext.playerList.splice(index, 1)
            message.reply(`${message.author} left the game...`)
        }
    }
}
