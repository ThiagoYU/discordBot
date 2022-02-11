## About This repo
This is a generic bot for study propouses, we'd been implemented the WereWolf game as the first project in this collection of bot capabilities
### requirements
- node 17+
- xstate
- discord
- dotenv

### how to run the bot
After having all the requirements installed create a new discord app following this tutorial:[Discord Doc](https://docs.discord4j.com/discord-application-tutorial/)

Once get the bot authentication key, set it up at the .env file as the following example

```
CLIENT_TOKEN='YOUR_DISCORD_TOKEN'
```

Finally, lounch your bot by executing the following command at the root of the project

```
node index.js
```

## WereWolf BOT

The Werewolf game consists of a turn game that is managed by the bot.
there are three different roles that players can be.
 - Assasin
 - Angel
 - prophet
 And the rest of the participants which no role was attributed will be automaticaly Villagers.

### Game roules

- Assasins can choose one player to kill
- Angel can choose one player to save
- prophet can choose one player to know about their role

The game consists in turns, after all, turns the village wake up and the bot will send a summary that what happens on the last night that is whether or not someone 

### Implementation details

This Project consists mainly of a state machine that controls all the stats of the game. for that, we are using the xstate.js module. The main method commands/werewolf/states/stateMachine.js