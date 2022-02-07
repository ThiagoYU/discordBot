module.exports = {
    name: "roleremove",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        //Checking if role exists
        role = message.member.guild.roles.cache.find(role => role.name === "DJ")
        if (role) {
            // Check if user already have the role
            if (message.member.roles.cache.has(role.id)) {
                // Remove the role
                message.member.roles.remove(role)
                message.reply('Role removed TT~TT')
            } else {
                // Notify user that it doesn't have this role
                message.reply(`${message.author} doesn't have the ${role.name} role`)
            }
        } else {
            console.log('Role does not exist')
        }
    }
}
