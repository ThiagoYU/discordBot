require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

// var witchPlayerList = []

const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
}); //create new client


let context = {
  client,
  prefix: "sudo",
  owners: ['241958969495650306', '337055700163362816'], // [Yussuki, Pedro] 
  witchPlayerList: []
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (context, reload) => require("./handlers/events")(context, reload)
client.loadCommands = (context, reload) => require("./handlers/commands")(context, reload)

client.loadEvents(context, false)
client.loadCommands(context, false)

module.exports = context


// // When client is ready, execute this function
// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// const commandHandler = require("./commands")

// client.on("messageCreate", commandHandler)


//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);