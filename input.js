
// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  if (key === "\u0003") { // if user presses Ctrl+C
    process.exit(); // exit the process
  }
};
// setup interface to handle user input from stdin

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);



  return stdin;
};


module.exports = setupInput