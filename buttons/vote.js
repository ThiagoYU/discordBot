const prophet = require("../commands/werewolf/states/prophet")

module.exports = {
    name: "vote",
    // vote-username
    run: async (context, interaction, parameters) => {
        // check state
        // if state == prophet.name
            // auxState = prophet


        // auxState.check()
        interaction.reply(`You voted in ${parameters[0]}`)
    }
}
