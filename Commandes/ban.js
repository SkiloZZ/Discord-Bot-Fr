const Discord = require("discord.js")

module.exports.run = async (client, message) => {
    const member = message.mentions.members.first()
    
    if (!member) {
    return message.reply(`Il faut que tu mentionnes une personne.`)
    }
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Vous n'avez pas la permission de bannir.")
    if (!member.bannable) {
    return message.reply(`Je ne peux pas ban ce membre,desolé.`)
    }
    return member
    .ban()
    .then(() => message.reply(`${member.user.tag} a été ban.`))
    .catch(error => message.reply("Une erreur s'est produite."))
}
  
  module.exports.help = {
      name: "ban"
  }
  
