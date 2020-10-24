const Discord = require('discord.js');

module.exports.run = (client, message) => {
    const member = message.mentions.members.first()
    
    if (!member) {
    return message.reply(`il faut que tu mentionnes une personne.`)
    }
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("tu n'as pas la permission d'expulser.")
    if (!member.kickable) {
    return message.reply(`je ne peux pas expulser ce membre.`)
    }
    return member
    .kick()
    .then(() => message.reply(`${member.user.tag} a été kick.`))
    .catch(error => message.reply("une erreur s'est produite."))
}
  
  
  module.exports.help = {
      name: "kick"
  }
  
