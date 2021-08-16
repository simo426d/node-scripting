const helpers = require("./helpers");

module.exports = function(req, res){

    const endpoint = new URL(req.url, "http://localhost:3003").pathname;

    const regEx = /^\/((css|img|js)\/)?\w+\.(html|css|png|jpe?g|js|gif|tiff|svg|bmp)$/;
    let result = endpoint.match(regEx);

    if(result)
    {
        helpers.sendFile(req, res, "./static/" + result[0]);
        return;
    }
    console.log(result);

    // if(endpoint === "/index.html")
    // {
    //     helpers.sendFile(req, res, "./static/index.html")
    //     return;
    // }
    helpers.send(req, res, {message: " 'Resource:' " + endpoint + " Not available"}, 404);



    //helpers.send(req, res, {besked: "Her kommer JSON objekt besked"});

    // res.statusCode = 200;
    // res.setHeader("Content-type", "text/plain"); // Fortæller hvad type data der bliver sendt
    // res.end("Hello World...");
}