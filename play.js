const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();







































// const connect = require("./client.js")

// const setupInput = require("./input.js")

 
// console.log("Connecting ...");
// const connectObj = connect();


// // call the setupInput function to enable the input interface
// setupInput(connectObj);