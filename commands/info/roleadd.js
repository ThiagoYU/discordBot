module.exports = {
    name: "roleadd",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        // Checking if role exists
        role = message.member.guild.roles.cache.find(role => role.name === "DJ")
        if (role) {
            // Check if user have the role already
            if (message.member.roles.cache.has(role.id)) {
                // Notify user that it already have this role
                message.reply(`${message.author} already have ${role.name} role`)
            } else {
                // Adding role to user (member)
                message.member.roles.add(role)
                message.reply('Role added ^^')
            }
        } else {
            console.log('Role does not exist')
        }
    }
}
