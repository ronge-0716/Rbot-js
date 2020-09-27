module.exports = {
	name: 'rolelist',
    description: 'コマンドが送信されたサーバーのロールの名前一覧とその数を表示します',
    cooldown: 5,
    aliases: ['rlist', 'roles'],
    guildOnly: true,
	execute(message,) {

        message.channel.send({
            embed: {
              color: 3066993,
              timestamp: new Date(),
              thumbnail: {
                url: message.guild.iconURL()
              },
              title: "役職一覧",
              description: message.guild.roles.cache.map(role => role.name).join("\n"),
              fields: [
                {
                  name: "ロールの数",
                  value: `${message.guild.roles.cache.size}`
                }
              ]
            }
          });

},
};