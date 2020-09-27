module.exports = {
	name: 'embed',
    description: 'botに埋め込みを発言させます。引数1:タイトル, 引数2:内容, 引数3:色(10 or 16進数)',
    cooldown: 5,
	execute(message,args) {

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
                    icon_url: message.author.avatarURL(),
                    text:`${message.member.displayName}`,
                }
            }
        })

	},
};