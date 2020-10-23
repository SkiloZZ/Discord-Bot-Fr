const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
        let messagecount = parseInt(args[0]);
        let user = message.mentions.users.first();
      
        if(isNaN(messagecount) && !user) return message.channel.send(":x: " + "| Entre une valeur de messages à supprimé!");
      
        if(messagecount > 100 && !user){
          message.channel.send(":x: " + "| Uniquement 100 message en une fois!")
        }else if(messagecount < 2 && !user) {
          message.channel.send(":x: " + "| Il faut plus de 2 messages à supprimer!")
        } else {
      
        if(!user) {
          message.channel.fetchMessages({limit: messagecount}).then(messages => {
            message.channel.bulkDelete(messages, true)
            message.channel.send(":white_check_mark: " + "| J'ai supprimé ``" + messages.size +"`` messages avec succès.").then(msg => {
              msg.delete(3000)
            });
          });
        } else {
          message.channel.fetchMessages().then(messages => {
            let usermsgs = messages.filter(msg => msg.author.id == user.id);
            message.channel.bulkDelete(usermsgs, true)
            message.channel.send(":white_check_mark: " + "| J'ai supprimé ``" + usermsgs.size +"`` messages avec succès.").then(msg => {
              msg.delete(3000)
            });
        });
      }
      }
      } else {
      return message.reply(":x: " + "| Tu n'as pas la permission d’utiliser ça")
    }
        }

module.exports.help = {
    name: 'clear'
}