module.exports = {
	name: 'ping',
    description: 'Botの応答速度を表示します。',
    cooldown: 5,
    aliases: ['pings'],
	async execute(message,) {

        if (message.author.id === '502816456052834314') {

            if(message.content.includes("token"))return;

          let evaled;
          try {
            evaled = await eval(args.join(' '));
            message.channel.send(`<@${message.author.id}>,\n` + "```" + inspect(evaled) + "```");
            console.log(inspect(evaled));
          }
          catch (error) {
            console.error(error);
            message.channel.send(
              {embed:{
                color:0xff0000,
                title:"エラーが発生しました。",
                fields:[
                  {
                    name:"エラー内容",
                    value:"`" + error.message +"`"
                  }
                ]
              }});
          }
        }else message.channel.send("あなたは開発者ではありません")
        .then(message.console)

	},
};