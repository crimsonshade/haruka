require('dotenv').config();
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
            .setName('baka')
            .setDescription('Call a random guy a baka')
            .addChannelOption(option =>
                option.setName('channel')
                    .setRequired(true)
                    .setDescription('Choose a channel')),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const randomMember = channel.members.random();
        interaction.reply(`<@${randomMember.user.id}> is a **BAKA**!`);
    }
}