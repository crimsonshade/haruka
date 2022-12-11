const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('I tell you something about me!'),
    async execute(interaction) {
        const client = interaction.client;
        const infoEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Infos about me!')
        .setAuthor({ name: `${interaction.user.username}`})
        .setThumbnail(`${client.user.avatarURL()}`)
        .setFooter({ text: 'Still under construction. `written by Crimsonshade`' })
        .setDescription(`Here are some informations about me! Feel free to use my commands Senpai!`)
        .addFields(
            { name: 'Created:', value: 'I was created on `' + client.user.createdAt + '`', inline: true},
            { name: `Creator:`, value: 'My creater is **Crimsonshade#2000** `(my one and only Darling 😽)`', inline: true}, 
            { name: 'Commands:', value: 'Here are some commands, you can give me master!'},
            { name: '`ping`', value: 'I just reply with "pong!"', inline: true},
            { name: '`user`', value: 'I show you some informations about yourself!', inline: true},
            { name: '`server`', value: 'I give you some informations about your server!', inline: true },
            { name: '`info`', value: "This Embed right here 😺", inline: true},
            { name: '`anime-image`', value: 'I show you a beatiful image/gif, based on the category you like!', inline: true}
        )
        await interaction.reply({ embeds: [infoEmbed] });
    },
};