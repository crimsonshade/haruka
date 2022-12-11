const axios = require('axios');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime-image')
        .setDescription('Sends an Anime Image'),
    async execute(interaction) {
        const BASE_URL = 'https://api.waifu.pics/sfw/neko';
        axios.get(BASE_URL).then(async response => 
            {await interaction.reply(response.data.url);})
    },
};