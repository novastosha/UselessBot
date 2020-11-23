const discord = require('discord.js');
const client = new discord.Client();
const commandManager = require("./commands/manager/commandManager.js");
const prefix = '!';


function main() {
    client.on("ready", () =>{
      console.log("Client Ready!");
      commandManager.init(client,discord);
      commandManager.registerCommand('hehe');
    });

    console.log("Bot starting...");

    client.on('message', async message => {

      if (message.author.bot) return;
      if (!message.guild) return;
      if (!message.content.startsWith(prefix)) return;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();


    });

}
client.login('Token')
main()
