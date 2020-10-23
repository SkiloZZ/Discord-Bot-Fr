const Discord = require('discord.js');

module.exports.run = (client, message) => {
    const member = message.mentions.members.first()
    
    if (!member) {
    return message.reply(`Il faut que tu mentionnes une personne.`)
    }
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission d'expulser.")
    if (!member.kickable) {
    return message.reply(`Je ne peux pas kick ce membre.`)
    }
    return member
    .kick()
    .then(() => message.reply(`${member.user.tag} a été kick.`))
    .catch(error => message.reply("Une erreur s'est produite."))
}
  
  
  module.exports.help = {
      name: "kick"
  }
  