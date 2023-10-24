/*
    Socket io for the Client side's 
*/

console.log("client.js executing");

// 1) Since both client and server are running on the SAME port, we can simply initialize
// socket io with only this line.
// 2) No need to give the server path because its the same path
var socket = io();
// IMPORTANT: This line will do nothing and will give an error, if..
//            the socket.io is not stated in index.html, because..
// 3) When using socket.io, it has to be imported on client end also
