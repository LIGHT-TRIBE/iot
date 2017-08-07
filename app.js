const io = require('socket.io-client');
const LedMatrix = require("node-rpi-rgb-led-matrix");

const socket = io.connect('https://constellation.herokuapp.com/');

const initState=()=>{socket.on('init', function(data){
  console.log(data)
})}


initState()

socket.on('init', function(data) {
  for (let i of data){
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





const matrix = new LedMatrix(rows=32,chainedDisplays=2);
matrix.fill(0, 0,0);
matrix.setPixel(30,30, 0, 50, 255);

matrix.setPixel(0, 0, 250, 0, 0);
matrix.setPixel(31, 0, 250, 0, 0);
matrix.setPixel(32, 32, 250, 0, 0);
matrix.setPixel(63, 0, 250, 0, 0);
matrix.setPixel(64, 310, 250, 0, 0);
