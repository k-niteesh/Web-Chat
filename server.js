const http = require("http");
const express = require("express");

const path = require("path");
const socketio = require("socket.io");
const formatMessage = require("./needs/message");
const {
    joinUser,
    getCurrentUser,
    leaveUser,
    getRoomUsers,
} = require("./needs/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set public folder static
app.use(express.static(__dirname + "/public"));

const bot = "chatCord Bot";

io.on('connection', socket => {
    socket.on("joinRoom", ({ username, room }) => {
        const user = joinUser(socket.id, username, room);
        socket.join(user.room);

        // Greeting the user
        socket.emit("message", formatMessage(bot, "Welcome to the Chat"));

        // Broadcasting when a user connects
        socket.broadcast
            .to(user.room)
            .emit("message", formatMessage(bot, `${user.username} has joined our chat`));

        // Sending users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room),
        });
    });

    // Listening to chat messages
    socket.on("chatMessage", (msg) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit("message", formatMessage(user.username, msg));
    });

    // Running when client disconnects
    socket.on("disconnect", () => {
        const user = leaveUser(socket.id);
        if (user) {
            io.to(user.room).emit("message", formatMessage(bot, `${user.username} has left the chat`));
        }
        io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: getRoomUsers(user.room),
        });
    });
});

const PORT = 2000 || process.env.PORT;
server.listen(PORT, () => console.log("Server running on port " + PORT)); 