module.exports = {
    name: "joingame",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        // If author already in list
        if (werewolfContext.playerList.indexOf(message.author) !== -1) {
            // Notify user it is already in image
            message.reply(`${message.author} is already registered in the game.`)
        } else {
            // Add user in the list
            werewolfContext.playerList.unshift(message.author)
            message.reply(`${message.author} added to the game! \\o/`)
        }
    }
}
