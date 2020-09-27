module.exports = {
	name: 'info',
    description: '開発者専用',
    cooldown: 5,
	execute(message, args,) {

        if(message.author.id == '502816456052834314'){
            const infoMessage = args.join(" ");
            const infoch_name = "rbot-info";
            message.client.channels.cache.forEach(channel => {
              if (channel.name === "rbot-info"){
                channel.send({embed:{
                  title:'Rbotインフォ',
                  color: 3066993,
                  timestamp: new Date(),
                  thumbnail: {
                    url: message.guild.iconURL()
                  },
                  description: (infoMessage),
                }});
              }
          if(channel.name === "rbot-global"){
            channel.send({embed:{
              title:'Rbotインフォ',
              color: 3066993,
              timestamp: new Date(),
              thumbnail: {url: message.guild.iconURL()},
              description: (infoMessage),
            }});
          }
        });
      }else{message.channel.send('あなたはこのコマンドを実行できません！')}

    },
};