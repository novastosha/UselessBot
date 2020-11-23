const discord = require('discord.js');
const client = new discord.Client();

function main() {
    console.log("Bot starting...");
    client.on("ready", () =>{
      console.log("Client Ready!");
    });
}
client.login('NzgwMzM2NDUxMjIwNTM3MzY1.X7tm8w.6z5tugL4obfblpfnRFlwrMPZeQQ')
main()
