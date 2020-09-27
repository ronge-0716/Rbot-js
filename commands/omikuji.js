module.exports = {
	name: 'omikuji',
    description: 'おみくじを引くことができます',
    cooldown: 5,
	async execute(message,) {

        message.channel.send("おみくじを始めるよー");
            const omikuji_message = await message.channel.send({embed:{description:"ガラガラガラ………………スッ"}})
            var omikujis = ["thinking吉", "Rbot吉", "兄吉" , "小吉", "末吉", "中吉", "吉", "凶", "大吉",]; //ここにおみくじの結果を追加できるよ
            var random = Math.floor(Math.random() * omikujis.length);
            const omikuji_embed = {embed:{title:"結果!!",color:3066993,description:omikujis[random],}}
            function omikuji_kekka(){
                omikuji_message.edit(omikuji_embed)
            }
            setTimeout(omikuji_kekka,3000)

	},
};