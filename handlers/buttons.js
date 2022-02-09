const { getFiles } = require("../utils/file")

module.exports = (context, reload) => {
    const { client } = context

    let buttons = getFiles("./buttons/", ".js")

    if (buttons.length === 0) {
        console.log("No buttons to load")
    }

    buttons.forEach((file, index) => {
        if (reload)
            delete require.cache[require.resolve(`../buttons/${file}`)]

        const button = require(`../buttons/${file}`)
        client.buttons.set(button.name, button)
    }) 
}