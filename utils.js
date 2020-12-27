
var client;
module.exports = {

    

    init: function(clientV){

        client = clientV;
        console.log(client);
    },

    getClient : function (){
        return client;
    },

    makeTextChannel: function (message,name){
        var server = message.guild;
    
        server.createChannel(name, "text");
    },
    makeTicketTextChannel: function (message){
        var guild = message.guild;
        var name = message.author.id;
        guild.channels.create("ticket-"+name, { reason: 'Ticket for user: '+name })
            .then(console.log)
            .catch(console.error);

    },
    getMember: function(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.members.get(toFind);

        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }

        if (!target)
            target = message.member;

        return target;
    },

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    },

    getEmbedMessage: function(type,message){
      var embed = null;
      if(type.toLowerCase() === "correct"){
          embed = {
  "title": ":white_check_mark: "+message,
  "color": 2553394
};

      }else if (type.toLowerCase() === "bad") {
        embed = {
"title": ":no_entry_sign: "+message,
"color": 16131622
};
      }else if (type.toLowerCase() === "middle") {
        embed = {
"title": message,
"color": 9079434
};
      }else{
        console.log("Bad message type: "+type);
      }

    return embed;
    }
}
