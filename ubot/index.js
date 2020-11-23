const discord = require('discord.js');
const client = new discord.Client();

function main() {
    console.log("Bot starting...");
    client.on("ready", () =>{
      console.log("Client Ready!");
    });
}
client.login('Token')
main()
