args: true,

module.exports = {
	name: 'none',
	description: '開発者の実験等',
	execute(message, args) {
        if(args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};