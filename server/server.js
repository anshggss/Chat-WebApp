const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socketIo(server,{
  cors:{
    origin: '*'
  }
});



io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join", (username) => {
    console.log(`${username} has joined the chat`);
  });

  socket.on("sendMessage", (messageData) => {
    io.emit("receiveMessage", messageData); // Broadcast the message to all users
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
