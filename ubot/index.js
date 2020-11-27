const discord = require('discord.js');
const client = new discord.Client();
const commandManager = require("./manager/commandManager.js");
const prefix = '-';
const utils = require('./utils.js');

function main() {
    client.on("ready", () =>{
      console.log("Client Ready!");
      commandManager.init(client,discord,prefix,utils);
      commandManager.readCommandFolder();
    });

    client.on('message', async message => {

      if (message.author.bot) return;
      if (!message.guild) return;
      if (!message.content.startsWith(prefix)) return;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();

      if (cmd.length === 0) return;


      commandManager.get(cmd).execute(message,args);

    });

    console.log("Bot starting...");


}
client.login('NzgwMzM2NDUxMjIwNTM3MzY1.X7tm8w.-uWgU14uSBxgl9P1aRNO9eQlsUA')
main()
