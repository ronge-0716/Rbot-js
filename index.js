const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const config = require('./config.json')
const fetch = require('node-fetch');
const winston = require('winston')
const Canvas = require('canvas');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'log' }),
	],
	format: winston.format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
});

client.on('ready', () => logger.log('info', 'The message.client is online! : ' + new Date()));
client.on('debug', m => logger.log('debug', m));
client.on('warn', m => logger.log('warn', m));
client.on('error', m => logger.log('error', m));

process.on('uncaughtException', error => logger.log('error', error));

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('message', async message =>{

    if(message.author.bot)return

    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.channel.send(`クールダウン中！${command.name}コマンドはあと${timeLeft.toFixed(1)}秒後に使用できますです`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        client.commands.get(commandName).execute(message, args);
    }catch (error) {
        console.error(error);
        message.reply('エラー:' + error.message);
    }

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('そのコマンドはMDでは使用できません！');
    }

    if (command.args && !args.length) {
        		let reply = `引数が入力されていません`;

        		if (command.usage) {
        			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        		}

        		return message.channel.send(reply);
    	}

})

client.on('message', message =>{
    if (message.author.bot) return;
    if(config.debug_globalchat == "on"){
      if(message.guild.id !== config.debug_server){
        return;
      }
    }
    if (message.channel.name === 'rmessage.client-global')
    {
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        message.client.channels.cache.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                if (channel.name === 'rmessage.client-global')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }
            if (!message.attachments.cache.forEach(attachment =>
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(3066993)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                if (channel.name === 'rmessage.client-global')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }));
            return;
        });
    }


  })//グローバルチャット

  const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};//canvas

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.id === '697420867986129057');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/98e13cdc-ea94-4b94-89f0-65b5005f0489%2F8CQvVRV.cced9193.png?v=1594436377090');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL());
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(member.guild.name + `へようこそ！, ${member}!`, attachment);
});//入退室ログ未検証

client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.find(ch => ch.id === '697420867986129057');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://cdn.glitch.com/98e13cdc-ea94-4b94-89f0-65b5005f0489%2F8CQvVRV.cced9193.png?v=1594436377090');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('see you ,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL());
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`またね、, ${member}さん...`, attachment);
});//入退室ログ未検証

client.on('ready', message =>{
    function bot_ping(){
      client.user.setActivity(`[r!help] | ${client.guilds.size} guilds | varsion:${config.varsion}, ping:${client.ws.ping}ms`,{type:'PLAYING'});
    }
    setTimeout(bot_ping, 1000);
  })

client.login(process.env.TOKEN)
