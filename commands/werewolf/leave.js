module.exports = {
    name: "leave",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfGame, message, args }) => {
        var index = werewolfGame.machine.context.playerList.indexOf(message.member.id)
        // If user is not in the list
        if (index === -1) {
            // Notify it
            message.reply(`${message.member} doesn't make part of the village.`)
        } else {
            if (werewolfGame.machine.context.currentState != 'lobby')
                throw("?You can't leave once joined :smiling_imp:")

            // Remove user from list
            werewolfGame.machine.context.playerList.splice(index, 1)
            message.reply(`${message.member} ran from the village... :house_abandoned:`)
        }
    }
}
