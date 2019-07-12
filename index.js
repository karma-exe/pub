const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '='
bot.on("ready",function() {
    var servers = bot.guilds.array().map(g => g.name).join('\n');
    bot.user.setActivity("🔞𝙍𝙄𝙑𝙀𝙍𝘿𝘼𝙇𝙀💕");
    bot.user.uptime
    console.log("Le bot "+bot.user.username+" est bien été connecté \n" + servers);
});

bot.login("NTg5MDQxNjYwNDI4NTUwMTQ1.XSiNwg.Fxvfymb_Lnv0vDyVY-1G71XkrFQ");
bot.on('message', message => {
    if(message.content.startsWith(prefix + 'mp')){
        message.delete()
        let infoEmbed = new Discord.RichEmbed()
      .setTitle("🔞𝙍𝙄𝙑𝙀𝙍𝘿𝘼𝙇𝙀💕")
      .setColor('#000000')
      .addField('**Event De Qualité ! :zap:** ', "Evenement RiverSex, Vérité-Vérité ext ")
      .addField("**Serveur à l'écoute :heart: **", "Des propositions ? Donnez les nous ! ")
      .addField('**Communauté Active :gem: **', "Plus vous êtes actifs, plus nous sommes comblés" )
      .addField('**GiveAways Prévus :tada:**  ', "Multiples prix à gagner ")
      .addField('**LE SERV**', 'https://discord.gg/ZdVTH8d ')
      .setThumbnail('https://media.discordapp.net/attachments/596138646667657237/596501090258780196/Wq60k0L.gif')
      .setImage('https://cdn.discordapp.com/attachments/563486450612568064/598681320322891776/betty_1.gif')
      .setFooter('𝙍𝙄𝙑𝙀𝙍𝘿𝘼𝙇𝙀')
      .setTimestamp()
      message.guild.members.forEach((player) => {
          message.guild.member(player).send(infoEmbed)
        
      });
    }
})


