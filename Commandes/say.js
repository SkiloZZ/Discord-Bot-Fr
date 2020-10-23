const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription('Vous ne pouvez pas m\'utiliser pour mentionner tout les membres du serveur.')

    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR') && message.content.includes('@everyone')) {
        return message.channel.send(embed);
    }

    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR') && message.content.includes('@here')) {
        return message.channel.send(embed);
    }
    let sayembed = new Discord.RichEmbed()

    .setColor("RED")
    .setDescription(args.join(" "))
    message.channel.send(sayembed)
 
} 

module.exports.help = {
    name: 'say'
}
