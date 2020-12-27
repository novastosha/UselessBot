const discord = require('discord.js');
const client = new discord.Client();
const commandManager = require("./manager/commandManager.js");
const guildManager = require("./manager/guildManager.js");
const prefix = '-';
const utils = require('./utils.js');
const listener = require('./listener.js');

client.login('');
function main() {
  
    client.on("ready", () =>{
      console.log("Client Ready!");
      commandManager.init(client,discord,prefix,utils);
      guildManager.init(client,discord,prefix,utils);
      commandManager.readCommandFolder();
      listener.init(client);
      listener.setListening(true);
      utils.init(client);
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

main();
