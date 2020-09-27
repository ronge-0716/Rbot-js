module.exports = {
	name: 'quiz',
    description: `クイズコマンドです。ランダムに問題が表示されるので、そのあとに答えを発言してください。\n制限時間は30秒です。\n制限時間内ならば何回でも間違えることが可能です。`,
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