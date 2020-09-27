module.exports = {
	name: 'cat',
    description: 'send cat image',
    cooldown: 5,
	async execute(message, args) {
        const fetch = require('node-fetch');
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);
	},
};