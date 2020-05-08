const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();
//const { Client, Attachment } = require('discord.js');
const fs = require('fs');

var t,y,mo,d,h,m,s,nowtime;
function time(){
  process.env.TZ = 'Asia/Tokyo';
  t=new Date()
  y=t.getFullYear();
  mo=t.getMonth();
  mo=(mo + 1);
  d=t.getDate();
  h=t.getHours();
  h=('0'+h).slice(-2);
  m=t.getMinutes();
  m=('0'+m).slice(-2);
  s=t.getSeconds();
  s=('0'+s).slice(-2);
  nowtime=y+'/'+mo+'/'+d+' | '+h+':'+m+':'+s;
}

const version = "1.0";

let ronge
let ronge2
let Rbot
let Rbot2
let Rbot_sub
let Rbot_sub2

bot.on('message', message =>{
    bot.users.cache.forEach(user => {
        if(user.id === "502816456052834314"){
            ronge = user.presence.status;
            if(user.presence.status === "online"　|| user.presence.status === "idle"){
                ronge2 =  ":green_circle:" 
            }else {ronge2 =  ":red_circle:" }
        }
    })//ronge
    
    bot.users.cache.forEach(user => {
        if(user.id === "650973245792714762"){
            Rbot = user.presence.status;
            if(user.presence.status === "online"){
                Rbot2 =  ":green_circle:" 
            }else {Rbot2 =  ":red_circle:" }
        }
    })//Rbot
    
    bot.users.cache.forEach(user => {
        if(user.id === "634020309464383488"){
            Rbot_sub = user.presence.status;
            if(user.presence.status === "online"){
                Rbot_sub2 =  ":green_circle:" 
            }else {Rbot_sub2 =  ":red_circle:" }
        }
    })//Rbot_sub
    
    bot.channels.cache.forEach(channel => {
        if(channel.id === "693322854107709481"){
            channel.messages.fetch("693323017828433970")
            .then(msg => {
                const online_panel = {
                    title:"Rbot関連アカウントのオンライン状況 :thinking:",
                    fields:[
                        {
                            name:"[制作者]ろんげ･|9 Ø /V (?, €", value:ronge + " " + ronge2
                        },
                        {
                            name:"[Bot]Rbot",　value:Rbot + " " + Rbot2
                        },
                        {
                            name:"[サブBot]Rbot-sub",　value:Rbot_sub + " " + Rbot_sub2
                        }
                    ]
                }
                msg.edit({embed:online_panel})
            })
        }
    })
    
    bot.users.cache.forEach(user => {
        if(user.id === "502816456052834314"){
            ronge = user.presence.status;
            if(user.presence.status === "online"　|| user.presence.status === "idle"){
                ronge2 =  ":green_circle:" 
            }else {ronge2 =  ":red_circle:" }
        }
    })//ronge
  
    bot.users.cache.forEach(user => {
        if(user.id === "650973245792714762"){
            Rbot = user.presence.status;
            if(user.presence.status === "online"){
                Rbot2 =  ":green_circle:" 
            }else {Rbot2 =  ":red_circle:" }
        }
    })//Rbot
  
    bot.users.cache.forEach(user => {
        if(user.id === "634020309464383488"){
            Rbot_sub = user.presence.status;
            if(user.presence.status === "online"){
                Rbot_sub2 =  ":green_circle:" 
            }else {Rbot_sub2 =  ":red_circle:" }
        }
    })//Rbot_sub
    
    bot.channels.cache.forEach(channel => {
        if(channel.id === "701201236459782285"){
            channel.messages.fetch("701201236459782285")
            .then(msg => {
                const online_panel = {
                    title:"Rbot関連アカウントのオンライン状況 :thinking:",
                    fields:[
                        {
                            name:"[制作者]ろんげ･|9 Ø /V (?, €", value:ronge + " " + ronge2
                        },
                        {
                            name:"[Bot]Rbot",　value:Rbot + " " + Rbot2
                        },
                        {
                            name:"[サブBot]Rbot-sub", value:Rbot_sub + " " + Rbot_sub2
                        }
                    ]
                }
                msg.edit({embed:online_panel})
            })
        }
    })
})


bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '入退室ログ');
    if (!channel) return;
    channel.send({
        embed:{
            title:"新しい人がやってきました！",
      color:3066993,
      timestamp:new Date(),
      fields:[
        {
          name: "入室者",
          value:`${member} さんです！よろしくお願いします！`
        }
      ]
    }
  });
});

bot.on('message', async (message) => {
    
    if(message.mentions.users.has(message.client.user.id))
    {
        message.reply( 'んあ？' );
        return;
    }


    if (message.content.startsWith("おやすみ")) return message.channel.send('お疲れ様でした!どうぞゆっくり疲れをいやしてください！')
    if (message.content.startsWith("おはよ")) return message.channel.send('おはようございます！朝ごはんはちゃんと食べてね！')
    if (message.content.startsWith("こんにちは")) return message.channel.send('こんにちは！')
    if (message.content.startsWith("よろしくっ(*｀･ω・)ゞ'")) return message.channel.send('よろしくっ(*｀･ω・)ゞ')
    if (message.content.startsWith("こんばん")) return message.channel.send('こんばんわ！いい夜ですね！')
    if (message.content.startsWith("疲れた")) return message.channel.send('お疲れ様です')
    if (message.content.startsWith("暇")) return message.channel.send('平和ですねぇ…。')

    if (message.content.startsWith("ロード")){ 
        var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "loading" );
        message.channel.send( emoji );
    }
    if (message.content.startsWith("ぴょんぴょん")){
        message.delete();
        var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "jumping_owo_type3" );
        message.channel.send( emoji );
    }
    if (message.content.startsWith("くさ")){ 
        var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "kusahaeru" );
        message.channel.send( emoji );
    }

    switch(message.content){
        case "こんにちは":
            message.channel.send('こんです～')
        break
        case "しんきんぐ":
            message.delete().catch(O_o=>{});
            message.channel.sendMessage(':thinking:')
        break
        case "バグ":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "OwO_failed")
            message.channel.send( emoji );
        break
        case "低才能値九尾出ない":
            message.channel.sendMessage('ガンバルドォン！www')
        break
        case "しんきんぐ":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "loop_thinking" );
            message.channel.send( emoji );
        break
        case "しんきんぐ2かいてん":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "thinkingkaiten" );
            message.channel.send( emoji );
        break
        case "しんきんぐぐちゃ":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "thinkinggutya" );
            message.channel.send( emoji );
        break
        case "しんきんぐうんこ":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "thinkingunko" );
            message.channel.send( emoji );
        break
        case "しんきんぐうごうご":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "thinkingugougo" );
            message.channel.send( emoji );
        break
        case "しんきんぐ2くるくる":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "thinkingukurukuru2" );
            message.channel.send( emoji );
        break
        case "しんきんぐくるくる":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "thinkingkurukuru" );
            message.channel.send( emoji );
        break
        case "頭おかしいよ":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "kokokoko" );
            message.channel.send( emoji );
        break
        case "まって":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "wait" );
            message.channel.send( emoji );
        break
        case "かまって":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "banban" );
            message.channel.send( emoji );
        break
        case "lol":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "lol" );
            message.channel.send( emoji );
        break
        case "あっ":
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "JyoJyo" );
            message.channel.send( emoji );
        break
        case "bot":
            var emoji = bot.emojis.cache.find( emoji => emoji.name ===  "bot" );
            message.channel.send( emoji );
        break
        case "せやな":
            message.delete();
            var emoji = bot.emojis.cache.find( emoji => emoji.name === "seyana" );
            message.channel.send( emoji );
        break

    }

})//文章応答

bot.on('message', async message => {

    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const author = message.author.tag
    const log = bot.channels.cache.filter(ch => ch.id === config.log_channel).forEach(ch =>
        ch.send({
            embed:{
                title:"コマンド実行log",
                color:3066993,
                description:"`[実行者]:"+author+" | Id:"+message.author.id+"\n[鯖名]:"+message.guild.name+"| id:"+message.guild.id+"\n[使用コマンド]:"+command+"\n[引数1]:"+args[0]+"\n[引数2]:"+args[1]+"\n[引数3]:"+args[2]+"`",
            }
        })
    )

    const perms = message.member.permissions;

    if (message.author.bot) return;

    switch(command){
        case "ping":
            message.channel.send(` Ping を確認しています...`)
            .then((pingcheck) => pingcheck.edit(`botの速度|${pingcheck.createdTimestamp - message.createdTimestamp} ms\nAPIの速度|${Math.round(bot.ping)}ms`))
        break
        case "bs":
            message.channel.send({
                embed: {
                    author: {
                        name: "Rbot",
                        icon_url: "https://lh3.googleusercontent.com/MmS5-aDxBra2F0J0jU0lhJHVdcsbvjRk-RoYdhKiH8_UBdGnTP1w9g5J_82USceRWziau5d76pezhcBuSFIWh_eafmH8H4MBNQMnIvgthCfIwnHEyww=w673"
                    },
                    title: "Rbotを作るうえで参考にしたサイト、動画です",
                    color: 3066993,
                    timestamp: new Date(),
                    footer: {
                        icon_url: bot.user.avatarURL(), text: "©️ろんげ･|9 Ø /V (?, €#6269|Rbot"
                    },
                    fields: [
                        {
                            name: "botの基礎", value: "https://www.youtube.com/watch?v=9CDPw1lCkJ8"
                        },
                        {
                            name: "グロチャ",value: "https://qiita.com/Yopon/items/05b65f445a48d3759c50"
                        },
                    ]
                }
            });
        break
        case "sinfo":
            message.channel.send({
                embed:{
                    title:'ここのサーバー名',
                    color: 3066993,
                    description: message.guild.name,
                    fields: [
                        {
                            name: "サーバー人数", value: message.guild.memberCount
                        },
                        {
                            name: "サーバー制作日" , value: message.guild.createdAt
                        },
                        {
                            name: "サーバー所有者", value: message.guild.owner
                        },
                        {
                            name: "国",　value: message.guild.region
                        }
                    ]
                }
            })
        break
        case "my":
            message.channel.send({
                embed:{
                    title:'あなたのユーザ名',
                    color: 3066993,
                    description: (message.author.tag),
                    fields: [
                        {
                            name: "あなたのid", value: message.author.id
                        },
                        {
                            name:"アカウントが作成された時間", value:message.author.createdAt
                        },
                        {
                            name:"Botかどうか", value: message.author.bot
                        },
                        {
                            name:"アイコンURL", value: message.author.avatarURL()
                        }
                    ]
                }
            })
        break
        case "say":
            if(!args[0]) return;
            message.delete()
            message.channel.send(args[0]);
        break
        case "sjoin":
            message.channel.send({
                embed:{
                    title:'bot導入サーバー',
                    color: 3066993,
                    description: bot.guilds.cache.map(g => g.name).join("\n"),
                    fields: [
                        {
                            name: "導入サーバー数",
                            value: `${bot.guilds.cache.size}サーバー` 
                        },
                    ]
                }
            })
        break
        case "info":
            if(message.author.id == config.admin_id){
                if(!args[0])return;
                const infoMessage = args[0]
                bot.channels.cache.forEach(channel => {
                    if (channel.name === "rbot-info"){
                        channel.send({
                            embed:{
                                title:'Rbotインフォ',
                                color: 3066993,
                                timestamp: new Date(),
                                thumbnail: {
                                    url: message.guild.iconURL()
                                },
                                description: (infoMessage),
                            }
                        });
                    }
                    if(channel.name === "rbot-global"){
                        channel.send({embed:{
                            title:'Rbotインフォ',
                            color: 3066993,
                            timestamp: new Date(),
                            thumbnail: {url: message.guild.iconURL()},
                            description: (infoMessage),
                        }});
                    }
                })
            }else{message.channel.send('あなたはこのコマンドを実行できません！')}
        break
        case "addrole":
            if (perms.has("ADMINISTRATOR")) {
                if (!args[0] || !args[1]) return;
                message.guild.roles.create({
                    data:{
                        'name': args[0],
                        'color': args[1]
                    }
                }).then(
                message.channel.send({
                    embed:{ title:'役職を作成しました!', }
                }))
            }else{message.channel.send('管理者以外は実行できません')}
        break
        case "rolelist":
            message.channel.send({
                embed: {
                    color: 3066993,
                    timestamp: new Date(),
                    thumbnail: {
                        url: message.guild.iconURL()
                    },
                    title: "役職一覧",
                    description: message.guild.roles.cache.map(role => role.name).join("\n"),
                    fields: [
                        {
                            name: "ロールの数", value: message.guild.roles.cache.size
                        }
                    ]
                }
            });
        break
        case "cinfo":
            message.channel.send({
                embed:{
                    color: 3066993,
                    timestamp: new Date(),
                    thumbnail :{
                        url: message.guild.iconURL()
                    },
                    title: "このチャンネルの情報",
                    fields:[
                        {
                            name: "チャンネル名", value: message.channel.name
                        },
                        {
                            name:"チャンネルID", value: message.channel.id
                        },
                        {
                            name: "チャンネルの種類", value: message.channel.type
                        },
                        {
                            name: "チャンネルが作成された時間", value: message.channel.createdAt
                        }
                    ]
                }
            });
        break
        case "ques":
            if(message.guild.id === config.official_guild_id){
                bot.channels.cache.forEach(channel => {
                    if (channel.name === "質問部屋作成"){
                        if(!args[0])return;

                        message.guild.channels.create(message.author.username, { type: 'text' })
                        .then((channel) => {
                            channel.setParent(config.question_opench_id)
                            channel.send({
                                embed:{
                                    title: `${message.author.username}からの質問です！`,
                                    color: 3066993,
                                    timestamp: new Date(),
                                    thumbnail:{
                                        url:message.author.displayAvatarURL()
                                    },
                                    fields: [
                                        {
                                            name: `質問内容`, value: args[0]
                                        },
                                    ]
                                }
                            });
                        });
                    }
                });
            }
        break
        case "close":
            if(message.guild.id === config.official_guild_id){
                message.channel.setParent(config.question_closech_id)
            }
        break
        case "chname":
            if(message.guild.id === config.official_guild_id){
                if(!args[0]) return;
                bot.channels.cache.get(message.channel.id).setName(args[0]);
            }
        break
        case "addch":
            if (perms.has("ADMINISTRATOR")) {
                if(!args[0]) return;
                message.delete().catch(O_o=>{});
                message.guild.channels.create(args[0], { type : 'text'})
                .then((ch) => {
                    message.channel.send({
                        embed:{
                            title:"チャンネルを作成しました",
                            color:3066993,
                            timestamp:new Date(),
                            thumbneil:{
                                url:message.guild.iconURL()
                            },
                            fields:[
                                {
                                    name:"チャンネル名", value:args[0]
                                }
                            ]
                        }
                    })  
                    ch.send({
                        embed:{
                            color:3066993,
                            timestamp:new Date(),
                            thubneil:{
                                url:message.guild.iconURL()
                            },
                            fields:[
                                {
                                    name:"チャンネル作成者", value:message.author.username + 'が作成しました',
                                }
                            ]
                        }
                    });
                }).catch( (err) => {
                    message.chanel.send({
                        embed:{
                            title:"チャンネルの作成に失敗しました", 
                            color: 3066993, 
                            titmestamp: new Date(),  
                            thumbnail: {
                                url:message.guid.iconURL()
                            }
                        }
                    })
                });
            }
        break
        case "embed":
          const emtitle = args[0]
          const emcontent = args[1]
          const emcolor = args[2]
          message.delete();
          message.channel.send({
            embed:{
              title:emtitle,
              color:emcolor,
              timestamp:new Date(),
              description:emcontent,
              footer:{
                icon_url: message.author.avatarURL({format: "png" , dynamic: true}), text: message.member.displayName
                }
              }
            })
        break
        case "teian":
            bot.channels.cache.forEach(channel => {
                if (channel.id === config.teian_channel_id){
                    channel.send({
                        embed:{
                            title:"提案が届きました！",
                            color: 3066993,
                            timestamp: new Date(),
                            thumbnail: { url: message.guild.iconURL({format: "png" , dynamic: true}) },
                            fields:[
                                {
                                    name:"提案者", value: message.author.tag
                                },
                                {
                                    name:"id", value: message.author.id
                                },
                                {
                                    name:"鯖名", value: message.guild.name
                                },
                                {
                                    name:"id", value: message.guild.id
                                },
                                {
                                    name:"提案内容", value: args[0]
                                }
                            ]
                        }
                    });
                }
            });
            await message.channel.send("提案内容が送信されました！")
        break
        case "dice":
            const dicerange = args[0]
            if(!dicerange) return;
            const dice = Math.floor(Math.random() * dicerange);
            message.channel.send(dice + "が出ました！");
        break
        case "setgame":
            if(message.author.id === config.admin_id){
                const game = args[0]
                if(!game) return;
                bot.user.setActivity(game, {type: "PLAYING"});
            }else message.channel.send("あなたは開発者ではありません")
            
        break

    }
});

bot.on('message', message =>{
    if (message.channel.name === 'rbot-global'){
        
        if (message.author.bot) return;
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        bot.channels.cache.forEach(channel =>
            {
                if (message.attachments.size <= 0)
                {
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                    if (channel.name === 'rbot-global') return channel.send(embed)
                }
                if (!message.attachments.forEach(attachment => {
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(3066993)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                    if (channel.name === 'rbot-global')return　channel.send(embed)
                }));
                return;
            });
        }
})//グローバルチャット



bot.on('message', async message => {
    const { inspect } = require('util');
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content.indexOf(config.prefix) !== 0) return
    
    if (command === 'eval') {
        if (message.author.id == config.admin_id) {
            let evaled;
            try {
                evaled = await eval(args.join(' '));
                message.channel.send(inspect(evaled));
                //console.log(inspect(evaled));
                }
                catch (error) {
                    console.error(error);
                    message.channel.send(error.message);
                }
            }else message.channel.send("あなたは開発者ではありません")
            .then(message.console)
    }
});//evalコマンド

bot.on('message', async (message) => {
    const re = new RegExp('https://discordapp.com/channels/([0-9]{18})/([0-9]{18})/([0-9]{18})')
    const results = message.content.match(re)
    if (!results) return;
    
    const guild_id = results[1]
    const channel_id = results[2]
    const message_id = results[3]

    const channel = bot.channels.cache.get(channel_id);
    if (!channel) return;
    
    channel.messages.fetch(message_id).then(msg => message.channel.send({
        embed:{
            author:{
                name:"メッセージ送信者：" + msg.author.tag + "\nID：" + msg.author.id, icon_url: msg.author.avatarURL()
            },
            footer:{
                text:`サーバー名：${msg.guild.name}\n ID：${msg.guild.id}\nチャンネル名：${msg.channel.name}\nID：${msg.channel.id}`, url: msg.guild.iconURL(),
            },
            description:"送信されたメッセージ：```" + msg.content + "```",
        }
    })).catch(console.error);
});//url展開

bot.on('message', async (msg) => {
    if(msg.content !== "rs!help"){
        if (!msg.content.toLowerCase().startsWith(config.prefix) || msg.author.bot) return;
        const args = msg.content.slice(config.prefix.length).split(/ +/g);
        const command = args.shift().toLowerCase();
        
        if (command == 'help') {
            msg.delete()
            const options = { limit: 15 * 1000, min: 1, max: 10, page: 1}//helpのページ
            
            const pages = {
                1: {
                    title:"Rbotのヘルプです",
                    color:3066993,
                    description:"下にあるリアクションを押してページ移動してください\nゴミ箱のリアクションを押すとこの埋め込みを消すことができます",
                    footer:{
                        text:"1/10"
                    }
                },//ページ1
                2:{
                    title:"目次です",
                    color:3066993,
                    fotter:{
                        text:"2/10"
                    },
                    fields:[
                        {
                            name:"P1",
                            value:"helpの使い方"
                        },
                        {
                            name:"P12",
                            value:"目次"
                        },
                        {
                            name:"P3",
                            value:"Botの情報"
                        },
                        {
                            name:"P4",
                            value:"コマンド一覧(情報系)"
                        },
                        {
                            name:"P5",
                            value:"コマンド一覧(機能系)"
                        },
                        {
                            name:"P6",
                            value:"コマンド一覧(その他)"
                        },
                        {
                            name:"P7",
                            value:"その他Botの機能"
                        },
                        {
                            name:"P8",
                            value:"リンク一覧"
                        },
                        {
                            name:"P9",
                            value:"その他"
                        },
                        {
                            name:"P10",
                            value:"参考文献(未完成)"
                        },
                    ]
                },// ページ2
    
                3:{
                    title:"このBotの情報",
                    color:3066993,
                    footer:{
                        text: "3/10"
                    },
                    fields:[
                        {
                            name:"Bot名",
                            value:"Rbot"
                        },
                        {
                            name:"作成者",
                            value:"ろんげ･|9 Ø /V (?, €#6269"
                        },
                        {
                            name:"使用言語",
                            value:"Discord.js"
                        },
                        {
                            name:"ファイル容量",
                            value:"3.84 MB"
                        },
                        {
                            name:"Bot作成日",
                            value:"2019年12月2日08時15分16秒"
                        }
                    ]
                },//ページ3
                4:{
                    title:"コマンド一覧(情報系統)",
                    color:3066993,
                    footer:{
                        text:"4/10"
                    },
                    description:"コマンドプレフィックスは「r!」です",
                    fields:[
                        {
                            name:"ping",
                            value:"Botの速度をはかります"
                        },
                        {
                            name:"help",
                            value:"これを表示します"
                        },
                        {
                            name:"sinfo",
                            value:"サーバーの情報を表示します"
                        },
                        {
                            name:"cinfo",
                            value:"チャンネルの情報を表示します"
                        },
                        {
                            name:"my",
                            value:"自分の情報を表示します"
                        },
                        {
                            name:"sjoin",
                            value:"このBotが入っているサーバー一覧を表示します"
                        },
                        {
                            name:"rolelist",
                            value:"サーバーのロールの一覧を表示します"
                        },
                    ]
                },//ページ4
                5:{
                    title:"コマンド一覧(機能系)",
                    color:3066993,
                    footer:{
                        text:"5/10"
                    },
                    fields:[
                        {
                            name:"say (文章)",
                            value:"(文章)を繰り返してくれます"
                        },
                        {
                            name:"addrole (名前) (色(10進数))",
                            value:"(名前)という名前のロールが作れます\nroleの権限が必要です"
                        },
                        {
                            name:"embed (タイトル) (内容) (色(10進数))",
                            value:"埋め込みを作成できます"
                        },
                        {
                            name:"doce (範囲(数字))",
                            value:"(範囲)で指定した範囲の乱数を表示します"
                        },
                    ]
                },//ページ5
                6:{
                    title:"コマンド一覧(その他)",
                    color:3066993,
                    footer:{
                        text:"6/10"
                    },
                    fields:[
                        {
                            name:"teian",
                            value:"開発者に提案を送信できます。"
                        },
                    ]
                },//ページ6
                7:{
                    title:"その他Botの機能",
                    color:3066993,
                    footer:{
                        text:"7/10"
                    },
                    fields:[
                        {
                            name:"グローバルチャット",
                            value:"[`rbot-global`]という名前のチャンネルを作ると、このBotの\nグローバルチャットに接続できます"
                        },
                        {
                            name:"info",
                            value:"[`rbot-info`]という名前のチャンネルを作り、Rbot-subというこのBotのサブBotを入れておくと\nこのBotのお知らせの通知を受け取ることができます"
                        },
                    ]
                },//ページ7
                8:{
                    title:"リンクまとめ",
                    color:3066993,
                    footer:{
                        text:"8/10"
                    },
                    description:"[Rbotの招待リンク](https://discordapp.com/api/oauth2/authorize?client_id=650973245792714762&permissions=8&scope=bot)\n\n[Rbot-subの招待リンク](https://discordapp.com/api/oauth2/authorize?client_id=634020309464383488&permissions=0&scope=bot)\n\n[このBotの公式鯖](https://discord.gg/tjkh2FM)\n\n[このbotのホームページ(作成中)](https://sites.google.com/view/discord-rbot/%E3%83%9B%E3%83%BC%E3%83%A0)\n\n[RbotのGitHub](https://github.com/ronge-0716/Rbot-js)\n\n[Rbot-subのgitHub](https://github.com/ronge-0716/Rbot-sub-js)",
                },//ページ8
                9:{
                    title:"その他",
                    color:3066993,
                    footer:{
                        text:"9/10"
                    },
                    description:"何か開発者に連絡したいととがあれば、ろんげ･|9 Ø /V (?, €#6269へDMを送るか、\n[teian]コマンドを使ってください。\n\nこのBotのGuthub通知を受け取りたいという方は、サーバーの招待リンクと、設定したいチャンネルのwebhookを送ってくだされば、設定します。"
                },//ページ9
                10:{
                    title:"このBotを作るにあたって...",
                    color:3066993,
                    footer:{
                        text:"10/10"
                    },
                    description:"ここには参考にしたwebページなどを書く予定です。\n現在履歴をあさっています..."
                },//ページ10
            }//helpのページ
            const awaitReactions = async (msg, m, options, filter) => {
                const { min, max, page, limit } = options;
                m.awaitReactions(filter, { max: 1, time: limit, errors: ['time'] })
                .then(async (collected) => {
                    const reaction = collected.first()
                    if (reaction.emoji.name === '⬅') {
                        await removeReaction(m, msg, '⬅');
                        if (options.page != options.min) {
                            options.page = options.page - 1;
                            await m.edit({ embed: pages[options.page] });
                        }
                        awaitReactions(msg, m, options, filter);
                    }
                    else if (reaction.emoji.name === '➡') {
                        await removeReaction(m, msg, '➡');
                        if (options.page != options.max) {
                            options.page = options.page + 1;
                            await m.edit({ embed: pages[options.page] });
                        }
                        awaitReactions(msg, m, options, filter);
                    }
                    else if (reaction.emoji.name === '🗑') {
                        return await m.delete();
                    }
                    else {
                        awaitReactions(msg, m, options, filter);
                    };
                }).catch(() => {});
            }
            const m = await msg.channel.send({ embed: pages[options.page] });
            await m.react('⬅');
            await m.react('➡');
            await m.react('🗑');
            const filter = (reaction, user) => {
                return ['⬅', '➡', '🗑'].includes(reaction.emoji.name) && user.id == msg.author.id;
            };
            awaitReactions(msg, m, options, filter);
            const removeReaction = async (m, msg, emoji) => {
                try { m.reactions.find(r => r.emoji.name == emoji).users.remove(msg.author.id); } catch(err) {}
            }
        }
    }//command helpの
});//client.onの

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "[r!help]でヘルプを表示!" + "現在のバージョン：" + version} });
    console.log('起動');
    const ch_name = "rbot起動ログ";

    bot.channels.cache.forEach(channel => {
        if (channel.name === ch_name) {
            channel.send({
                embed: {
                    color: 753684,
                    description: 'Rbotが起動しました！',
                    fields:[
                        {
                            name:"認識しているサーバー数",
                            value:bot.guilds.cache.size
                        },
                        {
                            name:"認識しているチャンネル数",
                            value:bot.channels.cache.size
                        },
                        {
                            name:"認識している人数",
                            value:bot.users.cache.size
                        },
                    ]
                }
            });
        }
    });
    bot.user.setUsername("Rbot！" + "v." + version);
});



bot.login(process.env.DISCORD_BOT_TOKEN);