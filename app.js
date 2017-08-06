//initial commit
const io = require('socket.io-client');

var socket = io.connect('https://constellation.herokuapp.com/');

const initState=()=>{socket.on('init', function(data){
  console.log(data)
})}

initState()

socket.on('pi', function(data) {
  console.log(data);
});

socket.on('update', function(data) {
  console.log(data);
});

socket.on('users', function(data) {
  console.log(data);
});
