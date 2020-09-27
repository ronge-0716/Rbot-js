module.exports = {
	name: 'my',
    description: 'コマンド送信者の情報を送信します',
    cooldown: 5,
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

        message.channel.send(
            {embed:{
              title:'your info',
              color: 3066993,
              description: "tag:" + message.author.tag,
              thumbnail:{
                url:message.author.avatarURL({format:'png', dynamic:true})
              },
              fields: [{
                name: "name",
                value:message.author.username,
                inline: true
              },
              {
                name:"id",
                value:message.author.id,
                inline: true
              },
              {
                name:"status",
                value:message.author.presence.status,
              },
              {
                name:"custom status",
                value:message.author.presence.activities,
                inline:true
              },
              {
                name:"create time",
                value:createTimes(message.author),
                inline:true
              },
              {
                name:"iconURL",
                value:message.author.avatarURL(),
                inline: true
              },
            ]
          }
        }
        )

	},
};