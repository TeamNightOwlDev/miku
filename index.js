const Discord = require('discord.js')
const client = new Discord.Client();


client.on('ready', () => {
    client.user.setActivity('Music', { type: 'STREAMING' })
    console.log('I am ready!')
  });
  client.on('message', message => {
    // If the message is "ping"
    if (message.content.startsWith('+')) {

        const args = message.content.slice(1).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
        console.log(`${message.member.user.tag} used the following command: ${command} | in server: ${message.guild.name}`)

        switch(command){
            case 'ping':
            return message.channel.send({embed: {
                color: 0xd81ad5,
                description: ':ping_pong: | Mikus Latency is `' + `${Math.round(client.ping)}` + ' ms`'
            }}).catch(err => console.log(`Tried To Send Response In ${message.channel}, but an error was returned. Missing Permissions?`))
            break;

            case 'say':
            if(message.member.id === '313260766147117056' || '516840368843522073'){
                let phrase = args.slice(0).join(" ");
                message.delete();
                message.channel.send(phrase).catch(err => console.log(`${message.member.user.tag} Tried To Say A Phrase, But No Input Was Given`))
            }
            else
              return simpleEmbed(':no_entry_sign: You Do Not Have Permission To Use This Command')
            break;

            case 'reboot':
            console.log(message.member.id)
            if(message.member.id === '313260766147117056'){
                simpleEmbed(':arrows_counterclockwise: Rebooting')
                .then(()=>client.destroy())
                .then(() =>client.login('Token-Here'))
                .then(()=> simpleEmbed('Reboot Successful!'))
            }
            return simpleEmbed(':no_entry_sign: You Do Not Have Permission To Use This Command')
            break;
            case 'help':
                message.author.send("Your message here.")
            break;
        }

      // Send "pong" to the same channel
    }
    function simpleEmbed(msg){
      message.channel.send({embed: {
        color: 0xd81ad5,
        description: msg
      }})
    }
  });



client.login('Token-Here')