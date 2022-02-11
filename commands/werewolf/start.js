module.exports = {
    name: "start",
    category: "werewolf",
    permissions: [],
    devOnly: false,
    run: async ({ werewolfGame, message, args }) => {
        // Check if game state is lobby
        if (werewolfGame.machine.context.currentState != 'lobby')
            throw("?The game already started, try again later")

        // Check if there's enough players
        if (!werewolfGame.machine.context.playerList.length)
            throw("?No game can start with no players")

        minPlayers = 0
        werewolfGame.machine.context.roles.forEach(role => {
            minPlayers = minPlayers + role.quantity
        })

        if (minPlayers == 0 || minPlayers > werewolfGame.machine.context.playerList.length)
            throw(`?Not enought players, need at least ${minPlayers} people`)

        // Save this channel
        werewolfGame.machine.context.channel = message.channel

        // Send START event to the game
        werewolfGame.send('START')
    }
}
