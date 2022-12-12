const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Here are some commands you can give me!'),
    async execute(interaction) {
        const client = interaction.client;
        
        const helpEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('My Commands')
            .setFooter({text: 'crafted with ♥️ by Crimsonshade'})
            .setDescription('Here are some commands, I can perform for you. Feel free to use them Senpai!')
            .addFields(
                { name: '`/ping`', value: 'I just reply with "Pong!"', inline:true },
                { name: '`user`', value: 'I show you some informations about yourself!', inline: true},
                { name: '`server`', value: 'I give you some informations about your server!', inline: true },
                { name: '`info`', value: "This Embed right here 😺", inline: true},
                { name: '`anime`', value: 'the `sfw` subcommand shows you some funny photos!\nThe `nsfw` does something else 😼', inline: true},
                { name: '`baka`', value: 'You have to select a `Voice Channel` and I call a random guy in there a **BAKA**!', inline: true }
            )


        await interaction.reply({ embeds: [helpEmbed] });
    }
}