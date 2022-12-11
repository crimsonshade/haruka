require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('node:fs');

const TOKEN = process.env.BOT_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

main();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);

    if(!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
    }
});

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.login(TOKEN);

async function main() {
    const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

    for(const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
        console.log(`Loaded [${file}]`);
    }

}