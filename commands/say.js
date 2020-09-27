module.exports = {
	name: 'say',
    description: 'botに引数を発言させます',
    aliases: ['s'],
    cooldown: 5,
	execute(message, args) {
        const config = require('../config.json')

        if(!args.length)return message.channel.send("引数を入力してください。例)" + `${config.prefix}say あいうえお`)

        const sayMessage = args.join(" ");
        message.delete().catch(msg=>{});
        message.channel.send(sayMessage);

	},
};