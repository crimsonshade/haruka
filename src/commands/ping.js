module.exports = {
	name: 'ping',
    description: 'Ping!',
    execute(interaction) {
        interaction.reply(`Pong!`);
    }
};