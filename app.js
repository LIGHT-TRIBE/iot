var io = require('socket.io-client');
var LedMatrix = require("node-rpi-rgb-led-matrix");

var matrix = new LedMatrix(32,2)

var socket = io.connect('https://constellation.herokuapp.com/');

var initState=()=>{socket.on('init', function(data){
 // console.log(data)
})}


initState()

socket.on('init', function(data) {
console.log('socket init ', data)
  // for (var i = 0; i < data.data.length; i++){
  //   matrix.setPixel(data.data[i][0],data.data[i][1],data.data[i][2],data.data[i][3],data.data[i][4])
  // }
  matrix.setImage(data.data)
})
socket.on('users', function(data) {
  console.log('socket users ', data);
})
socket.on('update', function(data) {
  console.log('socket update ', data);
	matrix.setPixel(data.data[0],data.data[1],data.data[2],data.data[3],data.data[4])
})
