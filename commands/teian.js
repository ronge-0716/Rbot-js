module.exports = {
	name: 'otoiawase',
    description: '開発者に提案、問い合わせができます',
    cooldown: 5,
    aliases: ['teian'],
	execute(message,) {

        const teianMessage = args.join(" ");
      message.client.channels.cache.forEach(channel => {
        if (channel.id === "655729271607787522"){
          channel.send({
            embed:{
              title:"提案が届きました！",
              color: 3066993,
              timestamp: new Date(),
              thumbnail: {
                url: message.guild.iconURL()
              },
              fields:[
                {
                  name:"提案者",
                  value:message.author.tag
                },
                {
                  name:"id",
                  value:message.author.id
                },
                {
                  name:"鯖名",
                  value:message.guild.name
                },
                {
                  name:"id",
                  value:message.guild.id
                },
                {
                  name:"提案内容",
                  value:teianMessage
                }
              ]
        }
      });
        }
    }
    )
    .then(message.channel.send("提案内容が送信されました！"))

	},
};