const Discord = require('discord.js')
const config = require('../config');

module.exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(":pushpin: Commandes du bot.")
    .setDescription("**Mon prefix est** `" +  config.prefix + "`")
    .addField(":hammer: Commandes de Modération", "`ban` - `clear` - `kick` - `reload` - `templock`")
    .addField(":package: Commandes Utiles", " `help` - `serverinfo` - `say`")
    .addField(":clown: Commandes Fun", "`avatar` - `google`")
   .setTimestamp(new Date());
    message.channel.send(embed)
}

module.exports.help = {
    name: 'help'
}