module.exports = {
    name: "test",
    run: async (context, interaction, parameters) => {
         if (!interaction.guild) 
            return interaction.reply({context: "This button can only be used in a guild!", ephemeral: true})
            
        const member = await interaction.guild.members.fetch(interaction.member.id)
        return interaction.reply({ content: "This is a button", ephemeral: true})
    }
}