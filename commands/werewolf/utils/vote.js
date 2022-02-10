const { MessageActionRow, MessageButton } = require("discord.js")

const startVote = (werewolfContext, msgEmbed) => {
    // Creating buttons and rows
    components = []
    werewolfContext.aliveList.forEach((user, index) => {
        if (index % 5 === 0)
            components.push(new MessageActionRow())

        components.at(-1).addComponents([
            new MessageButton().setCustomId(`vote-${user.username}`).setStyle("PRIMARY").setLabel(user.username)
        ])
    })
    components.push(new MessageActionRow().addComponents([
        new MessageButton().setCustomId('vote-skip').setStyle("PRIMARY").setLabel('SKIP')
    ]))

    werewolfContext.channel.send({
        embeds: [
            msgEmbed
        ],
        components: components
    })
}

const endVote = (werewolfContext) => {
// update who is died
// send result
}

module.exports = startVote