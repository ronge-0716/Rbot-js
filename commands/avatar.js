module.exports = {
	name: 'avatar',
    description: 'Botの応答速度を表示します。',
    cooldown: 5,
    aliases: ['iconurl', 'icon'],
	execute(message,) {

        message.channel.send(message.author.avatarURL())

	},
};