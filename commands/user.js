const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const moment = require("moment/moment");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provies information about the user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Select a user, you want to get some infos')),
    async execute(interaction) {
        const client = interaction.client;
        const user = interaction.options.getUser('user') ?? interaction.user;
        const userTag = interaction.options.getUser('user').tag ?? interaction.user.tag
        const userEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('User Information')
        .setThumbnail(`${user.displayAvatarURL()}`)
        .setDescription(`Here are some informations about @${userTag}`)
        .addFields(
            { name: 'Joined at', value: `${moment(user.member.joinedAt).format('DD MMM YYYY')}`, inline: true },
            { name: 'Created at', value: `${moment(user.createdAt.format('DD MMM YYYY'))}`, inline: true }
        )
        
        await interaction.reply({ embeds: [userEmbed] });
    },
};