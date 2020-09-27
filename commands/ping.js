module.exports = {
	name: 'ping',
    description: 'Botの応答速度を表示します。',
    cooldown: 5,
    aliases: ['pings'],
	execute(message,) {

        message.channel.send("pingを確認しています...")
      .then( msg => msg.edit(
          {embed:{
              title:"ping",
              description:`\`\`\`${message.client.ws.ping}ms\`\`\``
            }}))

	},
};