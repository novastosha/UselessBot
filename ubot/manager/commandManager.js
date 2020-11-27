var theClient = null;
var theDiscord = null;
var thePrefix = null;
var commands = [ ];
const fs = require("fs");
var Utils = null;


module.exports = {
  init: function (client,discord,prefix,utils) {
      theClient = client;
      theDiscord = discord;
      thePrefix = prefix;
      Utils = utils;
      console.log("Client started at: "+utils.formatDate(theClient.readyTimestamp));
  },
  readCommandFolder: function (file = './commands/') {
      rg(file);
  },

  get: function (command){
    return commands.find(element => element.name === command);
  }
};

function registerCommand(code_name) {
        commands.push(code_name);
        console.log("The command: "+code_name.name+" has been registered!");

}
function rg(file) {
  fs.readdirSync(file).forEach(command =>{

      var lastState = file;
      if(command.endsWith(".js")){

        console.log("Loading command: "+command);
        try {
          const commandReq = require("."+file+command);
          if(commandReq.name != null){
            registerCommand(commandReq);
          }else{
            console.log("ERROR: Does not contain name!");
          }
        } catch (e) {
          console.log("   ");
          console.log("ERROR: "+e.message);
          console.log("ERROR: Cannot load! "+command);
        }

      }else{
        if(fs.existsSync("./commands/"+command+"/")){
          if(fs.lstatSync("./commands/"+command+"/").isDirectory()){
            console.log("Checking for commands in: "+"./commands/"+command);
            file = "./commands/"+command+"/";

            rg(file);
          }
        }
      }


  });
}
