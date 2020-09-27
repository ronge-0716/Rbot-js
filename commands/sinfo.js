module.exports = {
	name: 'sinfo',
    description: 'サーバーの情報を表示します。',
    cooldown: 5,
    aliases: ['serverinfo'],
    guildOnly: true,
	execute(message,) {
        message.guild.members.fetch().then(fetchedMembers => {

        const Online = fetchedMembers.filter(member => member.presence.status === 'online');
        const Offline = fetchedMembers.filter(member => member.presence.status === 'offline');
        const idle = fetchedMembers.filter(member => member.presence.status === 'idle');
        const dnd = fetchedMembers.filter(member => member.presence.status === 'dnd');

      const g = message.guild
      const creatg = g.createdAt
      const year = creatg.getFullYear();
      const mon = creatg.getMonth() + 1;
      const day = creatg.getDate();
      const hour = creatg.getHours();
      const min = creatg.getMinutes();
      const hour_jp = hour - 3;

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
          color: 3066993,
          author:{
            name:`${g.name} | ID:${g.id}`,
            icon_url:g.iconURL(),
          },
          thumbnail:{
            url:g.iconURL()
          },
          fields: [
            {
              name:"地域",
               value:g.region,
              inline: true
             },
             {
              name:"作成日",
               value:createTimes(message.guild),
              inline: true
             },
            {
              name:"サーバー所持者",
              value:`${g.owner} | ID:${g.ownerID} `
            },
            {
              name:"channel",
              value:g.channels.cache.size,
              inline: true
            },
            {
               name:"member",
               value:`all member:${g.members.cache.size}\nonline member:${Online.size}\noffline member:${Offline.size}\nidle member:${idle.size}\ndnd member:${dnd.size}`,
               inline: true
            },
            {
              name:"role",
              value:g.roles.cache.size,
              inline: true
            }
          ],
        }
      }
      );

        });
	},
};