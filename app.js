//initial commit
const io = require('socket.io-client');
var LedMatrix = require("node-rpi-rgb-led-matrix");

var socket = io.connect('https://constellation.herokuapp.com/');

socket.on('pi', function(data) {
  console.log(data.data);
});

socket.on('update', function(data) {
  console.log(data);
	matrix.setPixel(data.data[0],data.data[1],data.data[2],data.data[3],data.data[4]);
});


var matrix = new LedMatrix(rows=32,chainedDisplays=2);
matrix.fill(0, 0,0);
matrix.setPixel(30,30, 0, 50, 255);

matrix.setPixel(0, 0, 250, 0, 0);
matrix.setPixel(31, 0, 250, 0, 0);
matrix.setPixel(32, 32, 250, 0, 0);
matrix.setPixel(63, 0, 250, 0, 0);
matrix.setPixel(64, 310, 250, 0, 0);
