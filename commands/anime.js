const axios = require('axios');
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anime')
        .setDescription('Everything Anime related')
        .addSubcommand(subcommand =>
            subcommand.setName('sfw')
                .setDescription('Post a sfw anime image (presented by waifu.pics/api)')
                .addStringOption(option =>
                    option.setName('category')
                        .setDescription('Choose your Anime Girl')
                        .setRequired(true)
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
                        )))
        .addSubcommand(subcommand =>
            subcommand.setName('nsfw')
                .setDescription('Post a nsfw anime image (presented by waifu.pics/api)')
                .addStringOption(option =>
                    option.setName('category')
                    .setDescription('Choose your Anime Girl!')
                    .setRequired(true)
                    .addChoices(
                        { name: 'Blowjob', value: 'blowjob' },
                        { name: 'Neko', value: 'neko' },
                        { name: 'Waifu', value: 'waifu' },
                    ))),
    async execute(interaction) {
        if(interaction.options.getSubcommand() === 'sfw') {
            const category = interaction.options.getString('category');
            const BASE_URL = `https://waifu.pics/api/sfw/${category}`;
            axios.get(BASE_URL).then(async response => 
                { await interaction.reply(response.data.url); });
        } else if(interaction.options.getSubcommand() === 'nsfw') {
            const category = interaction.options.getString('category');
            const BASE_URL = `https://waifu.pics/api/nsfw/${category}`;
            axios.get(BASE_URL).then(async response => 
                { await interaction.reply(response.data.url); });
        }
    },
};


/*  */