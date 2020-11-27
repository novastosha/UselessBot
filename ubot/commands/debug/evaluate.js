module.exports = {

  name: "evaluate",

  execute: function (message,args){

    //const utils = require("../../utils.js");
    //message.channel.send({ utils.getEmbedMessage("bad","Nope") });

    const utils = require("../.././utils.js");

    var embed = utils.getEmbedMessage("bad","Ignore");

    if(args.length === 0){
      embed = utils.getEmbedMessage("bad","Missing arguments!");
      message.channel.send({embed});
      return;
    }else if (args.length >= 1) {
    }



  }
};
