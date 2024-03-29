let connection;
const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }

  if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'd') {
    connection.write('Move: right');
  } else if (data === 'q') {
    connection.write("Say: Heloooooooo");
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



module.exports = setupInput ;

















