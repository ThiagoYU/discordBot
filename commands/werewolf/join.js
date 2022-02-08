module.exports = {
    name: "join",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        if (werewolfContext.state.current != werewolfContext.state.states['Not started'])
            throw("?The game already started, try again later")

        // If author already in list
        if (werewolfContext.playerList.indexOf(message.author) !== -1) {
            // Notify user it is already in image
            message.reply(`${message.author} is already part of the village.`)
        } else {
            // Add user in the list
            werewolfContext.playerList.unshift(message.author)
            message.reply(`${message.author} joined the village! \\o/`)
        }
    }
}
