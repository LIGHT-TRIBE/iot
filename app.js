//initial commit
const io = require('socket.io-client');

var socket = io.connect('https://constellation.herokuapp.com/');

socket.on('users', function(data) {
  console.log(data.concurrentUsers);
});

socket.on('action', function(data) {
  console.log(data.data);
});
