const http = require('http');
const express = require('express');
const app = express();


//adding middleware

app.use((req , res , next)=>{
    console.log('In the middleware-1');
    next();
})
app.use((req , res , next)=>{
    console.log('In the middleware-2');
    next();
})
app.use((req , res , next)=>{
    res.send('<h1>Hello from Express.JS</h1>');
})
const server = http.createServer(app);
app.listen(3000);