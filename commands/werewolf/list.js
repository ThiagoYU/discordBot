module.exports = {
    name: "list",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfGame, message, args }) => {
        // Check if list is empty
        if (werewolfGame.machine.context.playerList && werewolfGame.machine.context.playerList.length === 0) {
            message.reply('The village is empty... :house_abandoned::house_abandoned::house_abandoned:')
        } else {
            let playerListMessage = `Inhabitants of the village (${werewolfGame.machine.context.playerList.length}):\n`
            // For each member in list
            werewolfGame.machine.context.playerList.forEach((member, index) => {
                // Add it in the message
                playerListMessage = playerListMessage.concat(`${index + 1}. ${member.displayName}\n`)

            })
            // Send list
            message.reply(playerListMessage)
        }
    }
}
