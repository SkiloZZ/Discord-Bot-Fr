const Discord = require("discord.js")
const config = require('../config');

module.exports = bot => {
     console.log(`${bot.user.username} est en ligne.`)


    let statuses = [
        `${config.prefix}help`,
        `SkiloZ#0212`
        
        
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 750)

}


