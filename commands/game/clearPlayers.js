module.exports = {
    name: "clearPlayers",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({witchPlayerList, message, args }) => {
        if (witchPlayerList.length) {
            witchPlayerList.length = 0
            message.reply('The player list was cleared')
        } else {
            message.reply('Player list is already empty.')
        }
    }
}
