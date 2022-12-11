const { Events, ActivityType } = require('discord.js');

module.exports = { 
    name: Events.ClientReady,
    once: true,
    execute(client) {
        client.user.setActivity('at your command', {type: ActivityType.Playing });
        console.log(`----------------------------------------------`);
        console.log(`SENPAI! [${client.user.tag}] just woke up!`);
        console.log(`----------------------------------------------`);
    },
};