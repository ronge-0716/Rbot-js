module.exports = {
	name: 'cat',
    description: 'ランダムな猫の画像を送信します。',
    cooldown: 5,
    aliases: ['cats', 'catimage'],
	async execute(message, args) {
        const fetch = require('node-fetch');
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);
	},
};