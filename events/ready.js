const chalk = require('chalk');
const { Events, ActivityType } = require('discord.js');

module.exports = { 
    name: Events.ClientReady,
    once: true,
    execute(client) {
        client.user.setActivity('at your command', {type: ActivityType.Playing });
        console.log(`----------------------------------------------`);
        console.log(chalk.red.bold('SENPAI!') + ` [${chalk.blue.bold(client.user.tag)}] just woke up!`);
        console.log(`----------------------------------------------`);
    },
};