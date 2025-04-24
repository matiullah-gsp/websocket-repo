const socket = io("http://localhost:3000");
const adminSocket = io("http://localhost:3000/admin");

socket.on("connect", () => {
  console.log("client side socket id:", socket.id);
});

adminSocket.on("connect", () => {
  console.log("client side socket id:", socket.id, "joined admin!");
});

socket.on("newMessageToClients", (dataFromServer) => {
  console.log("Data From Servers", dataFromServer);
  document.querySelector("#messages").innerHTML +=
    "<li>" + dataFromServer.text + "</li>";
});

document.querySelector("#message-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const messageInput = document.querySelector("#user-message");
  const newMessage = messageInput.value;
  if (!newMessage) {
    return;
  }
  socket.emit("newMessageToServer", { text: newMessage });
  messageInput.value = "";
});
