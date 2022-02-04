module.exports = function (msg) {
    // Reply with author and username
    msg.reply(`author: ${msg.author}\nusername: ${msg.author.username}`);
}