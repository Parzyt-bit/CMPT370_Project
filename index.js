const express = require("express"); // use npm install express
const app = express(); // creating the express app
const path = require("path"); // to serve the static content

const http = require("http"); // creating the http server...
const server = http.createServer(app); // ...using the app
/* Creating the socket for the server side */
const { Server } = require("socket.io");
const io = new Server(server); // on this io, we can 'listen'

// telling that the 'path' is to serve the static content
app.use(express.static(path.join(__dirname, "client")));

// creating a test endpoint
app.get("/justCheck", (req, res) => {
  res.send("RPS App running...");
});

//

app.get("/", (req, res) => {
  // Whenever you find a request on 'root'
  res.sendFile(__dirname + "/client/index.html");
});

// on connection, we can log/print, that the "a user is connected"
let num_user = 0;
io.on("connection", (socket) => {
  num_user = num_user + 1;
  console.log(`${num_user} users connected`);
  socket.on("disconnect", () => {
     num_user = num_user - 1;
    console.log("a user disconnected");
     console.log(`${num_user} users connected`);
  });
});

// running the server on 3000 (port number)
server.listen(3000, () => {
  console.log("listening on *:3000");
});
