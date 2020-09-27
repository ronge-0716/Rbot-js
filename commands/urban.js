module.exports = {
	name: 'ur',
    description: `引数に入力された言葉の意味を検索します。\n英吾の単語しか検索できません。説明文はgoogle翻訳を使用しているため、所々文章がおかしいですが、ご了承ください。`,
    cooldown: 5,
	async execute(message, args) {
        const Discord = require('discord.js');
        const querystring = require('querystring');
        const config = require('../config.json')

        if (!args.length) {
            return message.channel.send(`検索する単語が入力されていません！\`${config.prefix}ur [検索したい単語(英語)]\`で検索できます。`);
        }

        const query = querystring.stringify({ term: args.join(' ') });
        const fetch = require('node-fetch')
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

        if (!list.length) {
            return message.channel.send(`検索しましたが、${args.join(' ')}という単語は見つかりませんでした...`);
        }

        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

        const [answer] = list;

        // const embed = new MessageEmbed()
	    //     .setColor('#EFFF00')
	    //     .setTitle(answer.word)
	    //     .setURL(answer.permalink)
	    //     .addFields(
		//         { name: 'Definition', value: trim(answer.definition, 1024) },
		//         { name: 'Example', value: trim(answer.example, 1024) },
		//         { name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` }
        //     );

        const urembed = new Discord.MessageEmbed()

        const translate = require('translation-google');
        await translate(`${trim(answer.definition, 1024)}`, {from: 'en', to: 'ja'}).then(res=>urembed.addFields({name:"定義",value:res.text}))
        await urembed.setTitle(answer.word)
        await urembed.setURL(answer.permalink)
        await translate(`${trim(answer.example, 1024)}`, {from: 'en', to: 'ja'}).then(res=>urembed.addFields({name:"例",value:res.text}))
        message.channel.send(urembed)
	},
}