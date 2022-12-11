const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provies information about the user'),
    async execute(interaction) {
        const client = interaction.client;
        const userEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('User Information')
        .setAuthor({ name: `${client.user.tag}`})
        .setThumbnail(`${interaction.user.displayAvatarURL()}`)
        .setDescription(`Here are some informations about @${interaction.user.tag}`)
        .addFields(
            { name: 'Joined at', value: `${interaction.member.joinedAt}`, inline: true },
            { name: 'Created at', value: `${interaction.user.createdAt}`, inline: true }
        )
            // 
        await interaction.reply({ embeds: [userEmbed] });
    },
};