const { createMachine, interpret } = require('xstate')

const actions = require('./actions')

werewolfRoles = new Map()
werewolfRoles.set("angel", { quantity: 0, playerList: []})
werewolfRoles.set("assassin", { quantity: 0, playerList: []})
werewolfRoles.set("prophet", { quantity: 1, playerList: []})

const werewolfMachine = createMachine(
    {
        id: 'werewolfGame',
        initial: 'lobby',
        context: {
            playerList: [], // list of all players
            playersAlive: [], // list of players still alive
            playersVoted: [], // list of players that already voted
            voteMap: new Map(), // Vote of who voted in who
            roles: werewolfRoles, // map of roles defined above
            currentState: '', // game's current state
            guildId: '', // Guild Id where the game is happening
            channel: '' // Game channel
        },
        states: {
            lobby: {
                entry: (context) => {
                    context.currentState = 'lobby'
                },
                on: {
                    START: {
                        target: 'prophetTurn',
                        actions: ['setPlayerRoles']
                    }
                }
            },
            prophetTurn: {
                entry: 'prophetEntry',
                on: {
                    VOTE: {
                        target: 'villageAwaken',
                        cond: 'checkProphetVotes'
                    }
                },
                exit: (context) => {context.playersVoted.length = 0} // Reset votes
            },
            villageAwaken: {
                entry: (context) => {
                    context.currentState = 'villageAwaken'
                },
            }
        }
    },
    {
        actions: actions,
        guards: {
            checkProphetVotes: (context) => {
                const prophet = context.roles.get('prophet')

                // if there's no prophet
                if (!prophet.playerList) {
                    return true
                }
                
                // Return when all prophets voted
                return context.playersVoted.length == prophet.playerList.length
            }
        }
    }
)

module.exports = interpret(werewolfMachine).onTransition((state) => {
    console.log(`Changed to ${state.value} state`)
}).start()
