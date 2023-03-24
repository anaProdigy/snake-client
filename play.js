const connect = require("./client.js")

const setupInput = require("./input.js")

 
console.log("Connecting ...");
const conn = connect();


// call the setupInput function to enable the input interface
setupInput(conn);