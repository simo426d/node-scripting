const http = require("http");
const controller = require("./controller");

// Fortæller serveren hvad for port den skal lytte på
http.createServer(controller).listen(3003, function(){
    console.log("Server startet, gå til http://localhost:3003");
});





// const server = http.createServer(function(req, res){
//     res.statusCode = 200;
//     res.setHeader("Content-type", "text/plain"); // Fortæller hvad type data der bliver sendt
//     res.write("Hello World...");
//     res.end(); // Afslut
//     // example på forenkling res.end("Hello World...");
// });

// // Fortæller serveren hvad for port den skal lytte på
// server.listen(3003);