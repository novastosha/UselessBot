module.exports = {

  name: "channel",

  execute: function (message,args){

    const utils = require("../.././utils.js");
    const guildManager = require("../.././manager/guildManager.js");

    var embed = null;
    if(args.length === 0){
      embed = utils.getEmbedMessage("bad","Missing arguments!");
    }else if(args.length === 1){
        type = args[0];
        if(type.toLowerCase() === "suggestions"){

            channelID = message.channel.id;
            guildID = message.guild.id;
            embed = utils.getEmbedMessage("correct","The suggestions' channel has been set to: "+message.channel);
            guildManager.createGuildFile(guildID);
            guildManager.write(guildID,"suggestions_channel",channelID);
        }

    }else if (args.length > 1) {
      embed = utils.getEmbedMessage("bad","Way too many arguments!");

    }

    message.channel.send({ embed });
  }
};
