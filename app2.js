const express = require('express');
const  { sseMiddleware } = require('express-sse-middleware');
const app = express()
app.use(sseMiddleware);
app.get('/sse', (req, res) => {
  const sse = res.sse(); // `adding Response.sse()` funciton
  let count = 0;
  setInterval(() => {
    sse.send(String(count++));
  }, 1000);
});
 

app.get('/ssev2', (req, res) => {
  res.writeHead(200,{
    'Content-Type':'text/event-stream'
  });
  setInterval(() => {
    res.write(`event:dalongappdemov2\ndata:${new Date().toLocaleTimeString()}\n\n`)
  }, 1000);
});

 
app.listen(3000);