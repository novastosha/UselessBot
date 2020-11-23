var theClient = null;
var theDiscord = null;

module.exports = {
  init: function (client,discord) {
      theClient = client;
      theDiscord = discord;

      console.log(theClient.readyTimestamp);
  },
  registerCommand: function (code_name) {
  }
};
