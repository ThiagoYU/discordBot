module.exports = {
    name: "image",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        // Reply with a image
        message.reply({
            content: 'This is a image!',
            files: ["./test.png"]
        });
    }
}
