const express = require("express");

const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public/"));

const expressServer = app.listen(3000);

const io = socketio(expressServer, {
    cors: {
        origin: ["http://localhost"] // TODO: One of the important option for deploying websocket
    }
});

io.on("connection", (socket) => {
  console.log("Socket Id:", socket.id);

  socket.on("newMessageToServer", (dataFromClient) => {
    console.log("Message:", dataFromClient);
    io.emit('newMessageToClients', dataFromClient)
});

});
