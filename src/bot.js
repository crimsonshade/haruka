require('dotenv').config();
const { REST, Routes,  Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const TOKEN = process.env.BOT_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    client.user.setActivity('in my support server', {type: "PLAYING"});
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  else if (interaction.commandName === 'info') {
    await interaction.reply({ embeds: [informationEmbed] });
  }
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

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'info',
    description: 'Sends an information about the bot',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.login(TOKEN);