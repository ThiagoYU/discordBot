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

client.on('messageCreate', async msg => {
    if (msg.content.toLowerCase() === 'ping') {
        // Reply pong
        msg.reply('Pong!');
    }
    else if (msg.content.toLowerCase() === 'pong') {
        // Reply ping
        msg.reply('Ping!');
    }
    // Example to send a image
    else if (msg.content.toLowerCase() === 'image') {
        // Reply with a image
        msg.reply({
            content: 'This is a image!',
            files: ["./test.png"]
        });
    }
    // Get info from user whom sent the message
    else if (msg.content.toLowerCase() === 'user') {
        // Reply with author and username
        msg.reply(`author: ${msg.author}\nusername: ${msg.author.username}`);
    }
    // Add user in list
    else if (msg.content.toLowerCase() === 'join') {
        // If author already in list
        if (witchPlayerList.indexOf(msg.author) !== -1) {
            // Notify user it is already in image
            msg.reply(`${msg.author} is already registered in the game.`)
        } else {
            // Add user in the list
            witchPlayerList.unshift(msg.author)
            msg.reply(`${msg.author} added to the game! \\o/`)
        }
    }
    // Remove user from list
    else if (msg.content.toLowerCase() === 'leave') {
        var index = witchPlayerList.indexOf(msg.author)
        // If user is not in the list
        if (index === -1) {
            // Notify it
            msg.reply(`${msg.author} is not registered in the game.`)
        } else {
            // Remove user from list
            witchPlayerList.splice(index, 1)
            msg.reply(`${msg.author} left the game...`)
        }
    }
    // List all users in list
    else if (msg.content.toLowerCase() === 'list') {
        // Check if list is empty
        if (witchPlayerList.length === 0) {
            msg.reply('No player joined the game Q-Q')
        } else {
            witchPlayerMessage = `List of players (${witchPlayerList.length}):\n`
            // For each user in list
            witchPlayerList.forEach((user, index) => {
                // Add him in message
                witchPlayerMessage = witchPlayerMessage.concat(`${index+1}. ${user.username}\n`)
            })
            // Send list
            msg.reply(witchPlayerMessage)
        }
    }
    // Clear list of users
    else if (msg.content.toLowerCase() === 'clear') {
        if (witchPlayerList.length) {
            witchPlayerList.length = 0
            msg.reply('The player list was cleared')
        } else {
            msg.reply('Player list is alreay empty.')
        }   
    }
    // Add role DJ to user
    else if (msg.content.toLowerCase() === 'roleadd') {
        // Checking if role exists
        role = msg.member.guild.roles.cache.find(role => role.name === "DJ")
        if (role) {
            // Check if user have the role already
            if (msg.member.roles.cache.has(role.id)) {
                // Notify user that it already have this role
                msg.reply(`${msg.author} already have ${role.name} role`)
            } else {
                // Adding role to user (member)
                msg.member.roles.add(role)
                msg.reply('Role added ^^')
            }
        } else {
            console.log('Role does not exist')
        }
    }
    // Remove role DJ from user
    else if (msg.content.toLowerCase() === 'roleremove') {
        //Checking if role exists
        role = msg.member.guild.roles.cache.find(role => role.name === "DJ")
        if (role) {
            // Check if user already have the role
            if (msg.member.roles.cache.has(role.id)) {
                // Remove the role
                msg.member.roles.remove(role)
                msg.reply('Role removed TT~TT')
            } else {
                // Notify user that it doesn't have this role
                msg.reply(`${msg.author} doesn't have the ${role.name} role`)
            }
        } else {
            console.log('Role does not exist')
        }
    }
    // Create category and text channels
    else if (msg.content.toLowerCase() === 'setup') {
        // List of text channels
        children = [{name: "General"}, {name: "Assassin"}, {name: "Angel"}]

        // Check if category exists
        category = await msg.guild.channels.cache.find(c => c.name == 'Sleep City', {type: 'GUILD_CATEGORY'})
        if (!category) {
            // Create category if it doesn't exists
            category = await msg.guild.channels.create('Sleep City', {type: 'GUILD_CATEGORY'})
            console.log(`${category.name} category created`)
        }

        // For each channel in list
        children.forEach(child => {
            // Check if channel exists inside the category
            channel = category.children.find(c => c.name == child.name.toLowerCase())
            // Create channel if it doesn't exists
            if (!channel) {
                category.createChannel(child.name, {type: 'GUILD_TEXT'})
                console.log(`Created ${child.name} text channel in ${category.name} category`)
            }
        });
    }
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token