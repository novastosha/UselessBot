module.exports = {

  name: "evaluate",

  execute: function (message,args){


    const utils = require("../.././utils.js");

    var embed = utils.getEmbedMessage("bad","Ignore");

    if(args.length === 0){
      embed = utils.getEmbedMessage("bad","Missing arguments!");
      message.channel.send({embed});
      return;
    }else if (args.length >= 1) {
      const fs = require("fs");
      toEval = combineArguments(0,args) +";";
      fs.writeFile('eval.js', "module.exports = { eval: function (message) { return "+toEval+" } };", function (err) {
          if (err) throw err;
          const eval = require("../.././eval.js");
          embed = utils.getEmbedMessage("middle",'Trying to eval: '+toEval);
          message.channel.send({embed });
          embed = utils.getEmbedMessage("correct",'The evaluation returned the following output: "'+eval.eval(message)+'"');
          message.channel.send({embed });
          fs.unlinkSync("eval.js");
      });



    }



  }
};
function combineArguments(fromArg,args) {

  var inArg = 0;
  var combined = "";

  args.forEach(arg => {

    if(inArg >= fromArg){
      combined = combined + arg + " ";
    }

    inArg++;
  });

  return combined;

}
