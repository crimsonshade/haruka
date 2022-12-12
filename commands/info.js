const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const moment = require("moment/moment");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('I tell you something about me!'),
    async execute(interaction) {
        const client = interaction.client;
        const creator = process.env.CREATER_ID;

        const infoEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Infos about me!')
        .setThumbnail(`${client.user.avatarURL()}`)
        .setFooter({ text: 'crafted with ♥️ by `Crimsonshade`' })
        .setDescription(`Here are some informations about me! Feel free to use my commands Senpai!`)
        .addFields(
            { name: 'Birthday:', value: 'My birthday is the `' + moment(client.user.createdAt).format('DD-MMM-YYYY') + '`'},
            { name: `Creator:`, value: 'My creater is ' + `<@${creator}> ` +'` (my only Darling 😽)`'}, 
        )

        await interaction.reply({ embeds: [infoEmbed] });
    },
};