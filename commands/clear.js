
module.exports = function (msg) {
    if (witchPlayerList.length) {
        witchPlayerList.length = 0
        msg.reply('The player list was cleared')
    } else {
        msg.reply('Player list is alreay empty.')
    }
}