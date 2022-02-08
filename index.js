require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

// var witchPlayerList = []

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
}); //create new client

werewolfContext = {
  playerList: []
}

let context = {
  client,
  prefix: "sudo",
  owners: ['241958969495650306', '337055700163362816'], // [Yussuki, Pedro]
  werewolfContext
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (context, reload) => require("./handlers/events")(context, reload)
client.loadCommands = (context, reload) => require("./handlers/commands")(context, reload)

client.loadEvents(context, false)
client.loadCommands(context, false)

module.exports = context

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);