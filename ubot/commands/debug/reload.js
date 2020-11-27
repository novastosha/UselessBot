module.exports = {

  name: "reload",

  execute: function (message,args){
    if(args.length == 0){
      message.channel.send("Reload what? :thinking:")
      return;
    }else if (args.length == 1) {
      if(args[0].toLowerCase() === "commands"){

        message.channel.send("Reloading commands! :robot:");

        console.log("Reloading commands!");
        console.log("   ");
        console.log("    ");
        const commandManager = require("../../manager/commandManager.js");
        message.channel.send("Clearing arrays!");
        commandManager.commands = [];
        commandManager.readCommandFolder();
        message.channel.send("Reloaded!");
      }
      return;
    }else{
      message.channel.send("Too many arguments! :head_bandage:");
      return;
    }

  }
};
