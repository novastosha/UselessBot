module.exports = {

  name: "mute",

  execute: function (message,args){

    const utils = require("../.././utils.js");

    var embed = null;
    if(args.length === 0){
      embed = utils.getEmbedMessage("bad","Missing arguments!");
    }else if(args.length === 1){
        
    }else if (args.length > 1) {
      embed = utils.getEmbedMessage("bad","Way too many arguments!");

    }

    message.channel.send({ embed });
  }
};
