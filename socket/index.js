import { Server } from "socket.io";
// const server = require('http').createServer();
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;
  //bookmarking
const io = new Server({
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? "https://chatter-rynw.onrender.com"
        : "http://localhost:5173",
  },
});
// const io = new Server(server, {
//   cors: {
//     origin: process.env.NODE_ENV === "production"
//       ? "https://chatter-rynw.onrender.com"
//       : "http://localhost:5173",
//   },
// });


let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  // listen to a connection
  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });

    console.log("onlineUsers", onlineUsers);

    io.emit("getOnlineUsers", onlineUsers);
  });

  // add message
  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find(
      (user) => user.userId === message.recipientId
    );

    if (user) {
      io.to(user.socketId).emit("getMessage", message);
      io.to(user.socketId).emit("getNotification", {
        senderId: message.senderId,
        isRead: false,
        date: new Date(),
      });
    }
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

    io.emit("getOnlineUsers", onlineUsers);
  });
});

// io.listen(port);
io.listen(port, () => {
  console.log(`Socket.IO server running on port ${port}`);
});
