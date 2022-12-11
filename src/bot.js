require('dotenv').config();
const { REST, Routes,  Client, GatewayIntentBits, EmbedBuilder, Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const TOKEN = process.env.BOT_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setActivity('in my support server', {type: "PLAYING"});
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
  
    /* if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
    }
    else if (interaction.commandName === 'info') {
    await interaction.reply({ embeds: [informationEmbed] });
    } */
});

const informationEmbed = new EmbedBuilder()
    .setTitle('Crimson Bot')
    .setDescription('This bot was created for testing some stuff, and playing around with javascript. Here are some information about me! Feel free to use me 😏')
    .setColor(0x0099FF)
    .setURL('https://crmsn.xyz/')
    .setThumbnail(`https://i.waifu.pics/DDVvMj4.jpg`)
    .setAuthor({name: 'Crimsonshade', iconURL: `https://crmsn.xyz/netliheart.svg`})
    .setFields(
        {name: 'Commands', value: 'Here you can find a list of commands, I can do. Feel free to use them!' },
        { name: 'ping', value: 'Just replies with "Pong!"', inline: true },
        { name: 'info', value: 'Sends this embed', inline: true}
    )
    .setTimestamp()
    .setFooter({text: 'This bot is still under construction. Please be kind with it!'});

/* const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'info',
    description: 'Sends an information about the bot',
  },
]; */

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.login(TOKEN);