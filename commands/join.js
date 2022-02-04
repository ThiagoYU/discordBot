module.exports = function (msg, context) {
    witchPlayerList = context.witchPlayerList
    // If author already in list
    if (witchPlayerList.indexOf(msg.author) !== -1) {
        // Notify user it is already in image
        msg.reply(`${msg.author} is already registered in the game.`)
    } else {
        // Add user in the list
        witchPlayerList.unshift(msg.author)
        msg.reply(`${msg.author} added to the game! \\o/`)
    }
}