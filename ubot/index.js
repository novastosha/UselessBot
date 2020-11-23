const discord = require('discord.js');
const client = new discord.Client();

function main() {
    console.log("Bot starting...");
    client.on("ready", () =>{
      console.log("Client Ready!");
    });
    client.on('message', msg => {
      if (msg.content === 'ping') {
        msg.reply('Pong!');
      }
    });
}
client.login('Token')
main()
