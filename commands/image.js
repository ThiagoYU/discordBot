module.exports = function (msg) {
    // Reply with a image
    msg.reply({
        content: 'This is a image!',
        files: ["./test.png"]
    });
}