const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'コマンド一覧の表示やコマンドのヘルプを表示します',
	aliases: ['commands','helps'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {

            data.push('コマンドリスト:');
            data.push(commands.map(command => `${command.name}`).join(' / '));
            data.push(`\`rt!help [command name]\`でコマンドのヘルプを表示します`);

             return message.channel.send(data, { split: true })
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('そのようなコマンドはありません');
        }
        data.push(`\nコマンド名: ${command.name}`);

        if (command.aliases) data.push(`\n代替え可能な文字列: ${command.aliases.join(',' )}`);
        if (command.description) data.push(`\n詳細: ${command.description}`);
        if (command.usage) data.push(`\nUsage: ${prefix}${command.name} ${command.usage}`);

        data.push(`\nクールダウン: ${command.cooldown || 3} second(s)`);

         message.channel.send(`\`\`\`${data}\`\`\``, { split: true });

	},
};