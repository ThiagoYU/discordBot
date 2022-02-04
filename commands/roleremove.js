module.exports = function (msg) {
    //Checking if role exists
    role = msg.member.guild.roles.cache.find(role => role.name === "DJ")
    if (role) {
        // Check if user already have the role
        if (msg.member.roles.cache.has(role.id)) {
            // Remove the role
            msg.member.roles.remove(role)
            msg.reply('Role removed TT~TT')
        } else {
            // Notify user that it doesn't have this role
            msg.reply(`${msg.author} doesn't have the ${role.name} role`)
        }
    } else {
        console.log('Role does not exist')
    }
}