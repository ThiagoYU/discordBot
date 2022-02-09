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

werewolfRoles = new Map()
werewolfRoles.set("angel", { quantity: 1, playerList: []})
werewolfRoles.set("assassin", { quantity: 0, playerList: []})
werewolfRoles.set("prophet", { quantity: 0, playerList: []})

werewolfContext = {
  playerList: [],
  aliveList: [],
  roles: werewolfRoles,
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
client.events   = new Discord.Collection()
client.buttons  = new Discord.Collection()

client.loadCommands = (context, reload) => require("./handlers/commands")(context, reload)
client.loadEvents   = (context, reload) => require("./handlers/events")(context, reload)
client.loadButtons  = (context, reload) => require("./handlers/buttons")(context, reload)

client.loadCommands(context, false)
client.loadEvents(context, false)
client.loadButtons(context, false)

module.exports = context

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);