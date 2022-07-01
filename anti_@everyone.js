const { Permissions, MessageEmbed } = require('discord.js')
client.on('messageCreate' async (msg) => {
    if (msg.author.permission.has(Permissions.FLAGS.ADMINISTRATOR)) return ;
    msg.delete()
    const embed = new MessageEmbed()
      .setTitle("에블핑 감지")
      .setColor(0xff0000)
    if (msg.content.includes('@everyone')) {
    msg.channel.send({ embeds: [embed]})
    }
})
