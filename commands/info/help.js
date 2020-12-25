const discord = require("discord.js");

module.exports = {

  name: "help",

  execute: function (message,args){
    var embed = {
      "title": "Help",
      "description": "The main help command, for Mod help type: !help mod",
      "color": 1,
      "footer": {
        "text": "Requested by: "+message.author
      },
      "author": {
        "name": "Useless Bot"
      },
      "fields": [
        {
          "name": "Fun",
          "value": "!help fun"
        },
        {
          "name": "Games",
          "value": "Coming soon..."
        }
      ]
    };

    message.channel.send({ embed });
  }
};
