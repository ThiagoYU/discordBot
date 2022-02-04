module.exports = function (msg,context) {
    witchPlayerList = context.witchPlayerList
    var index = witchPlayerList.indexOf(msg.author)
    // If user is not in the list
    if (index === -1) {
        // Notify it
        msg.reply(`${msg.author} is not registered in the game.`)
    } else {
        // Remove user from list
        witchPlayerList.splice(index, 1)
        msg.reply(`${msg.author} left the game...`)
    }
}