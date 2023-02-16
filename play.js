const connect = require("./client.js")

 
console.log("Connecting ...");
connect();

const handleUserInput = function(key) {
  if (key === "\u0003") { // if user presses Ctrl+C
    process.exit(); // exit the process
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

// call the setupInput function to enable the input interface
setupInput();