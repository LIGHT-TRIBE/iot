//initial commit
const io = require('socket.io-client');

var socket = io.connect('https://constellation.herokuapp.com/');
socket.on('users', (data)=>{
  console.log(data.concurrentUsers);
});
