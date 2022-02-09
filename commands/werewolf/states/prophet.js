const { MessageEmbed } = require("discord.js")
const startVote = require("../utils/vote")

module.exports = {
    name: "prophet's turn",
    voteMessage: new MessageEmbed().setTitle("Prophet voting").setDescription("Choose one to know it's role").setColor("AQUA"),
    startVote: startVote
}
