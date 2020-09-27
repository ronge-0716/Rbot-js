module.exports = {
	name: 'cinfo',
    description: 'コマンドが送信されたチャンネルの情報を送信します',
    cooldown: 5,
    aliases: ['channelinfo', 'chinfo'],
    guildOnly: true,
	execute(message,) {

        function createTimes(type){
            let create = type.createdAt
            const year = create.getFullYear();
            const mon = create.getMonth() + 1;
            const day = create.getDate();
            const hour = create.getHours();
            const min = create.getMinutes();
            const hour_jp = hour - 3;
            return `${year}年${mon}月${day}日${hour_jp}時${min}分`
          }

        message.channel.send({
            embed:{
              color: 3066993,
              timestamp: new Date(),
              thumbnail :{
                url: message.guild.iconURL()
              },
              title: "channel info",
              fields:[
                {
                  name: "name",
                  value:message.channel.name,
                  inline:true
                },
                {
                  name:"ID",
                  value: message.channel.id,
                  inline:true
                },
                {
                  name: "type",
                  value:message.channel.type
                },
                {
                  name:"topic",
                  value:message.channel.topic
                },
                {
                  name: "create time",
                  value:createTimes(message.channel),
                  inline:true
                }
              ]
            }
          });
},
};