sendDM = require("./utils/dmRole")

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
        freePlayers = werewolfContext.playerList
        while (werewolfContext.assassinList.length < werewolfContext.assassinQty) {
            // Get random index and player
            r = Math.random()*freePlayers.length
            randomIndex = Math.floor(r)
            randomPlayer = freePlayers[randomIndex]

            // Add random player to assassin list
            werewolfContext.assassinList.push(randomPlayer)

            // Remove random player from freePlayers
            freePlayers.splice(randomIndex, 1)

            // Send player its role
            sendDM(randomPlayer, 'assassin')
        }

        while (werewolfContext.angelList.length < werewolfContext.angelQty) {
            // Get random index and player
            r = Math.random()*freePlayers.length
            randomIndex = Math.floor(r)
            randomPlayer = freePlayers[randomIndex]

            // Add random player to angel list
            werewolfContext.angelList.push(randomPlayer)

            // Remove random player from freePlayers
            freePlayers.splice(randomIndex, 1)

            // Send player its role
            sendDM(randomPlayer, 'angel')
        }

        while (werewolfContext.prophetList.length < werewolfContext.prophetQty) {
            // Get random index and player
            r = Math.random()*freePlayers.length
            randomIndex = Math.floor(r)
            randomPlayer = freePlayers[randomIndex]

            // Add random player to prophet list
            werewolfContext.prophetList.push(randomPlayer)

            // Remove random player from freePlayers
            freePlayers.splice(randomIndex, 1)

            // Send player its role
            sendDM(randomPlayer, 'assassin')
        }
    }
}
