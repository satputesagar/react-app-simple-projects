// const { response } = require("express");
const http =require("http");
const PORT =4000;
const hostname ="localhost";
const fs =require('fs');
const home =fs.readFileSync("./index.html")
// next is callback function 
const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end(home);
    }
    if(req.url ==="/contact"){
       return res.end("<h2>Contact</h2>")
    }
    else{
       return res.end("<h2>404</h2>")
    }
   return res.end("working")
});

server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`);
})