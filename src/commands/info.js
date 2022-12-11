const { EmbedBuilder } = require('discord.js');

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

module.exports = {
	name: 'info',
    description: 'Gives you information about the bot!',
    execute(interaction) {
        interaction.reply({ embeds: [informationEmbed] });
    }
};