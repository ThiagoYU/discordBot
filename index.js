require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

var witchPlayerList = []

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]}); //create new client

// When client is ready, execute this function
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const commandHandler = require("./commands")

client.on("messageCreate",commandHandler)


//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token