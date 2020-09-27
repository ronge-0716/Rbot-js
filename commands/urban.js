module.exports = {
	name: 'ur',
    description: 'ur',
    cooldown: 5,
	async execute(message, args) {
        const Discord = require('discord.js');
        const querystring = require('querystring');

        if (!args.length) {
            return message.channel.send('You need to supply a search term!');
        }

        const query = querystring.stringify({ term: args.join(' ') });
        const fetch = require('node-fetch')
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

        if (!list.length) {
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
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