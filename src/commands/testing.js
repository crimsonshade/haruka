const { default: axios } = require("axios");

module.exports = {
	name: 'testing',
    description: 'tests something',
    execute(interaction) {
        axios.get('https://api.waifu.pics/sfw/neko')
        .then(response => {
            const data = response[0];
            interaction.reply(data);
        })
    }
};