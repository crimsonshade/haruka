const { Events } = require('discord.js');

module.exports = { 
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`----------------------------------------------`);
        console.log(`SENPAI! ${client.user.tag} just woke up!`);
        console.log(`----------------------------------------------`);
    },
};