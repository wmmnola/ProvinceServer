const express = require("express");
const app = express();
const server = app.listen(3000);
let connections = [];

app.use(express.static("public"));

let socket = require("socket.io")
let io = socket(server);

io.sockets.on("connection", newConnection)

function newConnection(socket) {
  connections.push(socket);
}
