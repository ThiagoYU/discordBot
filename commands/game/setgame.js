module.exports = {
    name: "setgame",
    category: "game",
    permissions: [],
    devOnly: true,
    run: async ({ client, message, args }) => {
        // List of text channels
        children = [{name: "General"}, {name: "Angel", role: 'angel'}, {name: "Assassin", role: 'assassin'}]
        guild = message.guild


        // Check if category exists
        category = guild.channels.cache.find(c => c.name == 'Sleep City', {type: 'GUILD_CATEGORY'})
        if (!category) {
            // Create category if it doesn't exists
            category = await guild.channels.create('Sleep City', {type: 'GUILD_CATEGORY'})
        }

        everyoneRole = guild.roles.everyone
        // For each channel in list
        children.forEach(child => {
            // Check if channel exists inside the category
            channel = category.children.find(c => c.name == child.name.toLowerCase())
            // Create channel if it doesn't exists
            if (!channel) {
                category.createChannel(child.name, {type: 'GUILD_TEXT'})
                    .then( ch => {
                        if (child.role) {
                            role = guild.roles.cache.find(r => r.name === child.role)
                            if (!role) {
                                return console.log(`${child.role} role does not exist`)
                            }
                    
                            ch.permissionOverwrites.create(role, {VIEW_CHANNEL: true})
                            ch.permissionOverwrites.create(everyoneRole, {VIEW_CHANNEL: false})
                        }
                        console.log(`Created ${child.name} text channel in ${category.name} category`)
                    })
            }
        });

        return message.reply('Game successfully setted up')
    }
}
