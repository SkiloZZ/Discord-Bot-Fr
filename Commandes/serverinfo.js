const Discord = require('discord.js');

module.exports.run = (client, message) => {

    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(`Information sur le serveur _${message.guild.name}_`)
        .setThumbnail(message.guild.iconURL)
        .addField('Nom du serveur :', message.guild.name)
        .addField('ID du serveur :', message.guild.id)
        .addField('Nombre de rôles : ', message.guild.roles.size + ' ' + 'rôles')
        .addField('Nombre de membres :', message.guild.members.size + ' ' + 'membres')
        .addField('Nombre de salons : ', message.guild.channels.size + ' ' + 'salons')
        .addField('Date de création : ', message.guild.createdAt)
        .addField('Nom du créateur : ', message.guild.owner.user.tag) 
    .setTimestamp(new Date());
        
    message.channel.send(embed)

}

module.exports.help = {
    name: 'serverinfo'
}