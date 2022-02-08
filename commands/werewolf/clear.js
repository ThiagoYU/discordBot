module.exports = {
    name: "clear",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        if (werewolfContext.state.current != werewolfContext.state.states['Not started'])
            throw("?The game already started, try again later")

        if (werewolfContext.playerList.length) {
            werewolfContext.playerList.length = 0
            message.reply('The village is empty now... :house_abandoned::house_abandoned::house_abandoned: ')
        } else {
            message.reply('The village is already empty... :house_abandoned::house_abandoned::house_abandoned: ')
        }
    }
}
