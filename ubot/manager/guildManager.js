var theClient = null;
var theDiscord = null;
var thePrefix = null;
const fs = require("fs");
var Utils = null;

module.exports = {
  init: function (client,discord,prefix,utils) {
      theClient = client;
      theDiscord = discord;
      thePrefix = prefix;
      Utils = utils;

  },

  getGuildJSON: function (id){
    if(fs.existsSync(".././guilds/"+id+".json")){
      return fs.readFile(".././guilds/"+id+".json", 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        return data;
      });

    }else{
      return null;
    }
  },

    // NOTE: Created two instances of it to be able to use it in the same file...

  checkExistance: function (id){
    if(fs.existsSync(".././guilds/"+id+".json")){
      return true;
    }else{
      return false;
    }
  },

  createGuildFile: function (id){
    if(!checkExistance(id)){
      fs.writeFileSync("./guilds/"+id+'.json', 'Hey there!');
    }
  },
  write: function (id,index,value){
    if(checkExistance(id)){
      currentJSON = getGuildJSON(id);
      currentJSON.index = value;
      fs.writeFile("./guilds/"+id+'.json', JSON.parse(currentJSON), function (err) {
          if (err) console.log("Could write to guild file!");
      });
    }else{
      createGuildFile(id);
    }
  }
};

function checkExistance(id) {
  if(fs.existsSync(".././guilds/"+id+".json")){
    return true;
  }else{
    return false;
  }
}

function createGuildFile(id) {
  if(!checkExistance(id)){
    fs.writeFile(".././guilds/"+id+'.json', " ", function (err) {
        if (err) console.log("Could not create guild file!");
    });
  }
}
