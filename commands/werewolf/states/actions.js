const { MessageEmbed } = require("discord.js")
const startVote = require("../utils/vote")

prophetEmbedMessage = new MessageEmbed().setTitle("Prophet voting").setDescription("Choose one to know it's role").setColor("AQUA")

module.exports = {
    setPlayerRoles: (context) => {
        // Save all players as alive
        context.aliveList = context.playerList.slice()

        // Give roles to the players
        freePlayers = context.playerList.slice()

        context.roles.forEach((role, roleName) => {
            while (role.playerList.length < role.quantity) {
                // Get random index and player
                randomIndex = Math.floor(Math.random()*freePlayers.length)
                randomPlayer = freePlayers[randomIndex]
        
                // Add random player to role list
                role.playerList.push(randomPlayer)
        
                // Remove random player from freePlayers
                freePlayers.splice(randomIndex, 1)
        
                // Send player its role
                randomPlayer.send(`Congrats! You've received the role of the ${roleName}`)
            }
        });
    },
    prophetEntry: (context) => {
        context.currentState = 'prophetTurn'
        prophetRole = context.roles.get('prophet')
        
        if (!prophetRole.playerList) 
            return console.log("No prophet, no need to start this vote turn")

        startVote(context, prophetEmbedMessage)
    }
}
