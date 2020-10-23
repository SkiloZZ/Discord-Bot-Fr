const Discord = require('discord.js');
const config = require('../config');

module.exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor('RED')
        .setTitle('✅ Fichier rechargé ✅')
        .setDescription(`Le fichier **${args[0]}.js** a été rechargé avec succès.`)

    if (message.author.id != config.ownerID) {
        return message.channel.send('Seul le créateur de ce bot peut utiliser cette commande.');
    }

    if (!args[0]) {
        return message.channel.send('Veuillez spécifier un fichier à recharger.');
    }

    try {
        delete require.cache[require.resolve(`./${args.join(' ')}.js`)];
        client.commands.delete(args.join(' '));
        let pull = require(`./${args.join(' ')}`);
        client.commands.set(args.join(' '), pull);
    } catch (e) {
        const errorembed = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle('Une erreur s\'est produite')
            .setDescription("Le fichier `" + args + "` n'a pas été trouvé dans le dossier /Commandes.")

        message.channel.send(errorembed);
        return;
    }

    message.channel.send(embed);
}

module.exports.help = {
    name: 'reload'
}
