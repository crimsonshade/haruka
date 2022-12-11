const axios = require('axios');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime-image')
        .setDescription('Sends an Anime Image')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('Choose your Anime Girl')
                .addChoices(
                    { name: 'Waifu', value: 'waifu' },
                    { name: 'Neko', value: 'neko'},
                    { name: 'Cuddle', value: 'cuddle' },
                    { name: "Cry", value: 'cry'},
                    { name: 'Kiss', value: 'kiss'},
                    { name: 'Lick', value: 'lick'},
                    { name: 'Pat', value: 'pat'},
                    { name: 'Smug', value: 'smug'},
                    { name: 'Bonk', value: 'bonk'},
                    { name: 'Blush', value: 'blush'},
                    { name: 'Yeet', value: 'yeet'},
                    { name: 'Smile', value: 'smile'},
                    { name: 'Nom', value: 'nom'},
                    { name: 'Bite', value: 'bite'},
                    { name: 'Kill', value: 'kill'},
                    { name: 'Kick', value: 'kick'},
                    { name: 'Poke', value: 'poke'},
                )),
    async execute(interaction) {
        const category = interaction.options.getString('category');
        const BASE_URL = `https://waifu.pics/api/sfw/${category}`;
        axios.get(BASE_URL).then(async response => 
            {await interaction.reply(response.data.url);})
    },
};


