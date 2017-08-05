//initial commit
const io = require('socket.io-client');

var socket = io.connect('https://constellation.herokuapp.com/');

socket.on('pi', function(data) {
  console.log(data.data);
});

socket.on('update', function(data) {
  console.log(data);
});
