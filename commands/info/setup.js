module.exports = {
    name: "setup",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({ client, message, args }) => {
        // List of text channels
        children = [{ name: "General" }, { name: "Assassin" }, { name: "Angel" }]

        // Check if category exists
        category = await message.guild.channels.cache.find(c => c.name == 'Sleep City', { type: 'GUILD_CATEGORY' })
        if (!category) {
            // Create category if it doesn't exists
            category = await message.guild.channels.create('Sleep City', { type: 'GUILD_CATEGORY' })
            console.log(`${category.name} category created`)
        }

        // For each channel in list
        children.forEach(child => {
            // Check if channel exists inside the category
            channel = category.children.find(c => c.name == child.name.toLowerCase())
            // Create channel if it doesn't exists
            if (!channel) {
                category.createChannel(child.name, { type: 'GUILD_TEXT' })
                console.log(`Created ${child.name} text channel in ${category.name} category`)
            }
        });
    }
}
