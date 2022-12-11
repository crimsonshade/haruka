const axios = require('axios');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime')
        .setDescription('Everything Anime related')
        .addSubcommand(subcommand =>
            subcommand.setName('image')
                .setDescription('Post an anime image (presented by waifu.pics/api)')
                .addStringOption(option =>
                    option.setName('category')
                        .setDescription('Choose your Anime Girl')
                        .addChoices(
                            { name: 'Bite', value: 'bite'},
                            { name: 'Blush', value: 'blush'},
                            { name: 'Bonk', value: 'bonk'},
                            { name: "Cry", value: 'cry'},
                            { name: 'Cuddle', value: 'cuddle' },
                            { name: 'Kick', value: 'kick'},
                            { name: 'Kill', value: 'kill'},
                            { name: 'Kiss', value: 'kiss'},
                            { name: 'Lick', value: 'lick'},
                            { name: 'Neko', value: 'neko'},
                            { name: 'Nom', value: 'nom'},
                            { name: 'Pat', value: 'pat'},
                            { name: 'Poke', value: 'poke'},
                            { name: 'Smile', value: 'smile'},
                            { name: 'Smug', value: 'smug'},
                            { name: 'Waifu', value: 'waifu' },
                            { name: 'Yeet', value: 'yeet'},
                        ))),
    async execute(interaction) {
        const category = interaction.options.getString('category');
        const BASE_URL = `https://waifu.pics/api/sfw/${category}`;
        axios.get(BASE_URL).then(async response => 
            { await interaction.reply(response.data.url); });
    },
};


