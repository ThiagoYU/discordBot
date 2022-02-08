module.exports = {
    name: "list",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        // Check if list is empty
        if (werewolfContext.playerList && werewolfContext.playerList.length === 0) {
            message.reply('The village is empty... :house_abandoned::house_abandoned::house_abandoned:')
        } else {
            playerListMessage = `Inhabitants of the village (${werewolfContext.playerList.length}):\n`
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
