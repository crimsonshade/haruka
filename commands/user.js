const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const moment = require("moment/moment");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provies information about the user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Select user to cuddle')),
    async execute(interaction) {
	    const target = interaction.options.getUser('user') ?? interaction.user;
        const guild = interaction.guild.members.fetch(target.id);
        const userEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('User Information')
	.setThumbnail(`${target.avatarURL()}`)
        .setDescription(`Here are some informations about <@${target.id}>`)
        .addFields(
            { name: 'Joined at', value: `${guild.joinedAt}`, inline: true },
            { name: 'Created at', value: '`' + moment(target.createdAt).format('DD MMM YYYY') + '`', inline: true }
        )
        
        await interaction.reply({ embeds: [userEmbed] });
    },
};
