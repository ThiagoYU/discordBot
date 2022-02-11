module.exports = {
    name: "clear",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfGame, message, args }) => {
        if (werewolfGame.machine.context.currentState != 'lobby')
            throw("?The game already started, try again later")

        if (werewolfGame.machine.context.playerList.length) {
            werewolfGame.machine.context.playerList.length = 0
            message.reply('The village is empty now... :house_abandoned::house_abandoned::house_abandoned: ')
        } else {
            message.reply('The village is already empty... :house_abandoned::house_abandoned::house_abandoned: ')
        }
    }
}
