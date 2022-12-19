const net = require('net');
const fs = require('fs');

const server = net.createServer();

server.on("connection", (client) => {
  client.setEncoding("utf-8");
  console.log("New client connected!");
  client.write("Hello there");

  client.on("data", (data) => {
    console.log("Message from client:", data);
  });

  client.on("data", (data) => {
    fs.readFile(`files/${data}`, "utf-8", (err, data) => {
      if(err) {
        console.log(err);
      } else {
        client.write(data);
      }
    })
  })

})

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});