module.exports = {
	name: 'quiz',
    description: 'zuize',
    cooldown: 5,
	execute(message, args) {
        const quiz = require('../quize.json');
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} せいかいです！!`);
            })
            .catch(collected => {
                message.channel.send('時間切れ...');
            });
        });


	},
};