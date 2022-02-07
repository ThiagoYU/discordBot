module.exports = {
    name: "listplayers",
    category: "game",
    permissions: [],
    devOnly: false,
    run: async ({ witchPlayerList, message, args }) => {
        // Check if list is empty
        if (witchPlayerList.length === 0) {
            message.reply('No player joined the game Q-Q')
        } else {
            witchPlayerMessage = `List of players (${witchPlayerList.length}):\n`
            // For each user in list
            witchPlayerList.forEach((user, index) => {
                // Add him in message
                witchPlayerMessage = witchPlayerMessage.concat(`${index + 1}. ${user.username}\n`)
            })
            // Send list
            message.reply(witchPlayerMessage)
        }
    }
}
