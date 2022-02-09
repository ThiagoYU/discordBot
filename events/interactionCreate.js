module.exports = {
    name: "interactionCreate",
    run: async (context, interaction) => {
        if (interaction.isButton())
            handleButton(context, interaction)
    }
}

const handleButton = (context, interaction) => {
    const { client } = context

    // "name-param1-param2-..."
    const [name, ...params] = interaction.customId.split("-")

    const button = client.buttons.get(name)
    if (!button) return // Button not found

    button.run(context, interaction, params)
}