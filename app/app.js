// const express = require('express');
// const app = express();
// let port = process.env.PORT || 3000;

// app.listen(port);

// console.log("hello");
// app.get('/', function(req,res){
// res.send('we are hello');
// });
// // var a = 12; 
// // var b = 2; 
// var add = function(a,b){
//   console.log(a+b); 
// };
// add(3,4);

const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Hello world!')
})
server.listen(port, () => console.log(`server started on
port ${port}; ` +
  'press Ctrl-C to terminate....'))