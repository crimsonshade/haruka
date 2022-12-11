require('dotenv').config();
const { REST, Routes,  Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const TOKEN = process.env.BOT_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  else if (interaction.commandName === 'embed') {
    await interaction.reply({ embeds: [informationEmbed] });
  }
});

const informationEmbed = new EmbedBuilder()
    .setTitle('Some title')
    .setDescription('this is a testing embed')
    .setColor(0x0099FF)
    .setURL('https://crmsn.xyz/')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .setAuthor({name: 'Crimsonshade', iconURL: 'https://i.imgur.com/AfFp7pu.png'})
    .setFields(
        {name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true},
    )
    .addFields({name: 'Inline field title', value: 'Some valye here', inline: true})
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({text: 'Some footer text'});

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