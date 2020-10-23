const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    const membre = message.guild.member(message.mentions.members.first() || message.member);

    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(`Avatar de _${membre.user.username}_`)
        .setImage(membre.user.displayAvatarURL)

    message.channel.send(embed);
}

module.exports.help = {
    name: 'avatar'
}
