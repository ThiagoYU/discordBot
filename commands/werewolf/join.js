module.exports = {
    name: "join",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfGame, message, args }) => {
        if (werewolfGame.machine.context.currentState != 'lobby')
            throw("?The game already started, try again later")

        // If author already in list
        if (werewolfGame.machine.context.playerList.indexOf(message.member) !== -1) {
            // Notify user it is already in image
            message.reply(`${message.member} is already part of the village.`)
        } else {
            // Add user in the list
            werewolfGame.machine.context.playerList.unshift(message.member)
            message.reply(`${message.member} joined the village! \\o/`)
        }
    }
}
