const express = require("express");

const app = express();
const socketio = require("socket.io");
const namespaces = require("./data/namespaces");

app.use(express.static(__dirname + "/public/"));

const expressServer = app.listen(3000);

const io = socketio(expressServer, {
  cors: {
    origin: ["http://localhost"],
  },
});

io.on("connection", (socket) => {
  socket.on("clientConnect", () => {
    console.log("Socket", socket.id, "has been connected!");
    io.emit("welcome", { message: "Welcome to server!" });
    io.emit('nsList', namespaces)
  });
});

