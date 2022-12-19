const net = require("net");
const readline = require('readline');

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

const conn = net.createConnection({
  host: "localhost",
  port: 3000,
});


conn.on("data", (data) => {
  console.log("Server says: ", data);
});

conn.on("connect", () => {
  // conn.write("dan-luu.txt");
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const askInput = () => {
    rl.question('Input name of file: ', (answer) => {
      conn.write(answer);
  
      if(answer === 'x') {
        process.exit();
      }
      askInput();
    })
  }
  askInput();


});

conn.setEncoding("utf-8");
