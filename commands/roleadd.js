module.exports = function (msg) {
    // Checking if role exists
    role = msg.member.guild.roles.cache.find(role => role.name === "DJ")
    if (role) {
        // Check if user have the role already
        if (msg.member.roles.cache.has(role.id)) {
            // Notify user that it already have this role
            msg.reply(`${msg.author} already have ${role.name} role`)
        } else {
            // Adding role to user (member)
            msg.member.roles.add(role)
            msg.reply('Role added ^^')
        }
    } else {
        console.log('Role does not exist')
    }
}