const { MessageActionRow, MessageButton } = require("discord.js")

const startVote = (werewolfContext, msgEmbed) => {
    // Creating buttons and rows
    components = []
    werewolfContext.aliveList.forEach((member, index) => {
        if (index % 5 === 0)
            components.push(new MessageActionRow())

        components.at(-1).addComponents([
            // example: vote-Yussuki
            new MessageButton().setCustomId(`vote-${member.displayName}`).setStyle("PRIMARY").setLabel(member.displayName)
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

module.exports = startVote