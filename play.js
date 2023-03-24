
const connect = require("./client.js")


console.log("Connecting ...");
connect();



const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
 
};


// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();


































// const connect = require("./client.js")

// const setupInput = require("./input.js")

 
// console.log("Connecting ...");
// const connectObj = connect();


// // call the setupInput function to enable the input interface
// setupInput(connectObj);