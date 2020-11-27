module.exports = {

  name: "evaluate",

  execute: function (message,args){
    const fs = require("fs");
    fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
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
