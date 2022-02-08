module.exports = {
    name: "clearPlayers",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        if (werewolfContext.playerList.length) {
            werewolfContext.playerList.length = 0
            message.reply('The player list was cleared')
        } else {
            message.reply('Player list is already empty.')
        }
    }
}
