module.exports = {
	name: 'giveaway',
    description: '抽選ができます。\n例)\`giveaway (時間(s,m,dが使えます)) (当選できる人数) (商品名)\`',
    cooldown: 5,
	execute(message,) {

        const { GiveawaysManager } = require("discord-giveaways");
        const ms = require("ms");
        const manager = new GiveawaysManager(bot, {
            storage: "./giveaways.json",
            updateCountdownEvery: 10000,
            default: {
            botsCanWin: false,
            embedColor: "#FF0000",
            reaction: "🎉"
            }
        });

        message.client.giveawaysManager = manager;

        message.client.giveawaysManager.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnerCount: parseInt(args[1]),
            reaction:"🎉",
            messages: {
              giveaway: "🎉🎉 **GIVEAWAY** 🎉🎉",
              giveawayEnded: "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
              timeRemaining: "残り時間: **{duration}**!",
              inviteToParticipate: "🎉を押して抽選に参加しましょう！",
              winMessage: "おめでとうございます！, {winners}!**{prize}**を手に入れました！!",
              embedFooter: "Giveaways",
              noWinner: "投票者がいなかったため、givewayは終了しました。",
              hostedBy: "開催者: {user}",
              winners: "人当選可能です",
              endedAt: "終了済み",
              units: {
                seconds: "秒",
                minutes: "分",
                hours: "時間",
                days: "日",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
              }
            }
          });//givewaystart

	},
};