const utils = require("../.././utils.js");
const listenerClass = require("../.././listener.js");
var listener = null;
var b = null;
var  eventType = null;
var method = null;
var client = utils.getClient();

class Listener {



  constructor (event,methodL) {

    eventType = event;
    method = methodL;
  }
  getEvent(){
      return this.eventType;
  }

  break(){
      b = false;
  }

  start(){
          utils.getClient().on(this.eventType,function (arg1 = null,arg2= null,arg3= null,arg4= null,arg5= null){
              console.log("event happened");
              method.listenMethod(arg1,arg2,arg3,arg4,arg5);
          });
  
  }


}

module.exports = {

    name: "ticket",
  


    listenMethod : function (arg1,arg2,arg3,arg4,arg5) {
        console.log(arg1.author.id);
    },

    execute: function (message,args){
  

  
      var embed = null;
      if(args.length === 0){
        embed = utils.getEmbedMessage("bad","Missing arguments!");
      }else if(args.length === 1){
          if(args[0].toLowerCase() === "new"){
            utils.makeTicketTextChannel(message);
            //messageReactionAdd
            b = true;
            listener = new Listener("channelCreate",this);
            listener.start();
          }
      }else if (args.length > 1) {
        embed = utils.getEmbedMessage("bad","Way too many arguments!");
  
      }
  
      if(embed != null){
        message.channel.send({ embed });
      }
      
    }
  };