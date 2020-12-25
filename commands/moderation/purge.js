module.exports = {

  name: "purge",

  execute: async function (message,args){

    const utils = require("../.././utils.js");

    var embed = null;
    if(args.length === 0){
      embed = utils.getEmbedMessage("bad","Missing arguments!");
    }else if(args.length === 1){
      if(isNaN(args[0]) === true){
        embed = utils.getEmbedMessage("bad","The argument is not a number!");
        return message.channel.send({ embed });
      }
      toPurge = args[0];
      if(toPurge === 0){
          embed = utils.getEmbedMessage("bad","The argument cannot be 0");
          return message.channel.send({embed});
      }
      message.channel.messages.fetch({ limit: toPurge }).then(messages => {
        message.channel.bulkDelete(messages
      )});
      embed = utils.getEmbedMessage("correct","Purged "+toPurge+" message from this channel!");
    }else if (args.length > 1) {
      embed = utils.getEmbedMessage("bad","Way too many arguments!");

    }

    message.channel.send({ embed });
  }
};
