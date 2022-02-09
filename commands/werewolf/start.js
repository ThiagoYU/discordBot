Discord = require("discord.js")

module.exports = {
    name: "start",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfContext, message, args }) => {
        if (werewolfContext.state.current != werewolfContext.state.states['Not started'])
            throw("?The game already started, try again later")

        // Check if there's enough players

        // Give roles to the players
        freePlayers = werewolfContext.playerList.slice()

        werewolfContext.roles.forEach(role => {
            defineRoles(role, freePlayers)
        });
    }
}

defineRoles = (role, freePlayers) => {
    while (role.playerList.length < role.quantity) {
        // Get random index and player
        randomIndex = Math.floor(Math.random()*freePlayers.length)
        randomPlayer = freePlayers[randomIndex]

        // Add random player to role list
        role.playerList.push(randomPlayer)

        // Remove random player from freePlayers
        freePlayers.splice(randomIndex, 1)

        // Send player its role
        randomPlayer.send(`Congrats! You've received the role of the ${role.name}`)
    }
}