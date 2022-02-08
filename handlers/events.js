const { getFiles } = require("../utils/file")


module.exports = (context, reload) => {
    const {client} = context

    let events = getFiles("./events/", ".js")

    if (events.length === 0){
        console.log("No events to load")
    }

    events.forEach((f, i) => {
        if (reload) 
            delete require.cache[require.resolve(`../events/${f}`)]
        const event = require(`../events/${f}`)
        client.events.set(event.name, event)

        if (!reload)
            console.log(`${i + 1}. ${f} loaded`)
    })

    if (!reload)
        initEvents(context)
}

function triggerEventHandler(context, eventName, ...args){
    const {client} = context 

    try {
        if (client.events.has(eventName))
            client.events.get(eventName).run(context, ...args)
        else 
            throw new Error(`Event ${eventName} does not exist`)
    }
    catch(err){
        console.error(err)
    }
}

function initEvents(context) {
    const {client} = context

    client.on("ready", () => {
        triggerEventHandler(context, "ready")
    })

    client.on("messageCreate", (message) => {
        triggerEventHandler(context, "messageCreate", message)
    })
}
