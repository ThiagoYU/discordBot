const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "button",
    category: "info",
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("This is a MessageEmbed").setDescription("This is a description").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("test-1").setStyle("DANGER").setLabel("DANGER"),
                    new MessageButton().setStyle("LINK").setLabel("LINK").setURL("https://google.com"),
                    new MessageButton().setCustomId("test-3").setStyle("PRIMARY").setLabel("PRIMARY"),
                    new MessageButton().setCustomId("test-4").setStyle("SECONDARY").setLabel("SECONDARY"),
                    new MessageButton().setCustomId("test-5").setStyle("SUCCESS").setLabel("SUCCESS")
                ])
            ]
        })
    }
}