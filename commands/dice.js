module.exports = {
	name: 'dice',
    description: '乱数を生成します',
    cooldown: 5,
	execute(message,args) {

        const dicerange = args[0]
        const dice = Math.floor(Math.random() * dicerange);
        message.channel.send(dice + "が出ました！")

	},
};