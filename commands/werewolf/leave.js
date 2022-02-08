module.exports = {
    name: "leave",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        var index = werewolfContext.playerList.indexOf(message.author)
        // If user is not in the list
        if (index === -1) {
            // Notify it
            message.reply(`${message.author} doesn't make part of the village.`)
        } else {
            if (werewolfContext.state.current != werewolfContext.state.states['Not started'])
                throw("?You can't leave once joined :smiling_imp:")

            // Remove user from list
            werewolfContext.playerList.splice(index, 1)
            message.reply(`${message.author} ran from the village... :house_abandoned:`)
        }
    }
}
