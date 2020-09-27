module.exports = {
	name: 'sinfo',
    description: 'sinfo',
    cooldown: 5,
	execute(message, args) {
        message.guild.members.fetch().then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
            // We now have a collection with all online member objects in the totalOnline variable
            message.channel.send(`There are currently ${totalOnline.size} members online in this guild!`);
        });
	},
};