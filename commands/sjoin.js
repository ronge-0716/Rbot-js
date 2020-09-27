module.exports = {
	name: 'sjoin',
    description: 'Botの導入サーバーの名前一覧と、その数を表示します。',
    cooldown: 5,
    aliases: ['servers'],
	async execute(message, args) {

        const sjoin = await message.channel.send(
            {embed:{
              title:'bot導入サーバー',
              color: 3066993,
              description: message.client.guilds.cache.map(g => g.name).join("\n"),
              fields: [{
                name: "導入サーバー数",
                value: `${message.client.guilds.cache.size}サーバー` },
              ]
            }
          }
          )
          if(message.author.id === "502816456052834314"){
            sjoin.edit(
              {embed:{
                title:'bot導入サーバー',
                color: 3066993,
                description: message.client.guilds.cache.map(g => g.name + " | " + g.id).join("\n"),
                fields: [{
                  name: "導入サーバー数",
                  value: `${message.client.guilds.cache.size}サーバー` },
                ]
              }
            }
            )
          }

	},
};