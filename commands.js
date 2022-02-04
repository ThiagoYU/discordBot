

const clear = require('./commands/clear.js');
const image = require('./commands/image.js');
const join = require('./commands/join.js');
const leave = require('./commands/leave.js');
const list = require('./commands/list.js');
const ping = require('./commands/ping.js');
const pong = require('./commands/pong.js');
const roleadd = require('./commands/roleadd.js');
const roleremove = require('./commands/roleremove.js');
const setup = require('./commands/setup.js');
const user = require('./commands/user.js');

const commands = {
    clear,
    image,
    join,
    leave,
    list,
    ping,
    pong,
    roleadd,
    roleremove,
    setup,
    user
}
const context = {
    state: 0,
    witchPlayerList: [],
    tokens: []
}

module.exports = async function (msg) {
    var preCommand = "sudo"
    let command = msg.content
    if (command.startsWith(preCommand)) {
        command = command.slice(preCommand.length + 1)
    let tokens = msg.content.split(" ");
        context.tokens = tokens;
        commands[command](msg, context);
    }
}