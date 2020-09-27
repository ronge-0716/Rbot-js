module.exports = {
	name: 'setgame',
    description: '開発者専用コマンドです。',
	execute(message,) {

        if(message.author.id == '502816456052834314', '549881392499130369'){
            const game = args[0]
            bot.user.setActivity(game,{type:'PLAYING'});
            }else message.channel.send("あなたは開発者ではありません")

	},
};