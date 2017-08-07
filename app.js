var io = require('socket.io-client');
var LedMatrix = require("node-rpi-rgb-led-matrix");

var matrix = new LedMatrix(rows=32,chainedDisplays=2)

var socket = io.connect('https://constellation.herokuapp.com/');

var initState=()=>{socket.on('init', function(data){
  console.log(data)
})}


initState()

socket.on('init', function(data) {
  for (var i = 0; i < data.length; i++){
    matrix.setPixel(data.data[0],data.data[1],data.data[2],data.data[3],data.data[4])
  }
})
socket.on('users', function(data) {
  console.log(data);
})
socket.on('update', function(data) {
  console.log(data);
	matrix.setPixel(data.data[0],data.data[1],data.data[2],data.data[3],data.data[4])
})
