module.exports = {
    name: "listplayers",
    category: "game",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        // Check if list is empty
        if (werewolfContext.playerList && werewolfContext.playerList.length === 0) {
            message.reply('No player joined the game Q-Q')
        } else {
            playerListMessage = `List of players (${werewolfContext.playerList.length}):\n`
            // For each user in list
            werewolfContext.playerList.forEach((user, index) => {
                // Add him in message
                playerListMessage = playerListMessage.concat(`${index + 1}. ${user.username}\n`)
            })
            // Send list
            message.reply(playerListMessage)
        }
    }
}
