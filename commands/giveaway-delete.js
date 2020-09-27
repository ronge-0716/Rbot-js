module.exports = {
	name: 'giveaway-delete',
    description: '引数でメッセージのIDを指定してgiveawayを中断できます。',
	execute(message,) {

        const { GiveawaysManager } = require("discord-giveaways");
        const manager = new GiveawaysManager(bot, {
            storage: "./giveaways.json",
            updateCountdownEvery: 10000,
            default: {
                botsCanWin: false,
                embedColor: "#FF0000",
                reaction: "🎉"
            }
        });

bot.giveawaysManager = manager;

        let messageID = args[0];
        message.client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("giveawayが削除されました");
        }).catch((err) => {
            message.channel.send("giveawayが見つかりませんmessage.id:`"+messageID+"`, メッセージidを確認してください");
        });

	},
};