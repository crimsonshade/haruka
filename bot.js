require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');
const TOKEN = process.env.BOT_TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Whe nthe client is ready, run this code
client.once(Events.ClientReady, c => {
    console.log('---------------------------------');
    console.log(`Read! Logged in as [${client.user.tag}]`);
    console.log('---------------------------------');
});

// Log in to Discord with your client's token
client.login(TOKEN);