const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ping',
    description: 'Ping!',
    cooldown: 5,
	execute(message, args) {
        message.channel.send(` Ping を確認しています...`)
        .then((pingcheck) => pingcheck.edit(`botの速度(タイムスタンプ式)|${pingcheck.createdTimestamp - message.createdTimestamp} ms\nBotの速度(bot.ping式)|${Math.round(client.ws.ping)}ms`))

	},
};