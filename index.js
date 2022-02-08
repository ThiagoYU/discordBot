require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "DIRECT_MESSAGES"
  ],
  partials: ["CHANNEL"]
}); //create new client

werewolfContext = {
  playerList: [],
  assassinQty: 1,
  assassinList: [],
  prophetQty: 1,
  prophetList: [],
  angelQty: 1,
  angelList: [],
  state: {
    states: {
      "Not started": 0,
      "Assassin":    1,
      "Prophet":     2,
      "Angel":       3,
      "Villagers":   4,
      "Game over":   5
    },
    current: 0
  }
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