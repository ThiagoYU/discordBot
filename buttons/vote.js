module.exports = {
    name: "vote",
    // vote-username
    run: async (context, interaction, parameters) => {
        werewolfContext = context.werewolfGame.machine.context
        
        // auxState.check()
        interaction.reply(`You voted in ${parameters[0]}`)
    }
}
