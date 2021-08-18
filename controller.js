const helpers = require("./helpers");
const logger = require("./logger");
const api = {};

api["/api/duck"] = require("./api/duck");
api["/api/cat"] = require("./api/cat");
api["/api/alien"] = require("./api/alien");

module.exports = function(req, res){
    logger(req, res);
    const endpoint = new URL(req.url, "http://localhost:3003").pathname;

    const regEx = /^\/((css|img|js)\/)?\w+\.(html|css|png|jpe?g|js|gif|tiff|svg|bmp)$/i;
    let result = endpoint.match(regEx);

    if(result)
    {
        //helpers.sendFile(req, res, "./static/" + result[0]);
        helpers.streamFile(req, res, "./static/" + result[0]);
        return;
    }

    // - /^(?<route>\/api\/\w+)(?<params>(\/\w+)*)$/
    const apiParamRX = /^(?<route>\/api\/\w+)(?<id>(\/\w+)*)$/;
    result = endpoint.match(apiParamRX);
    console.log(result);
    if(result){
        // api/duck/id
        if(api[result.groups.route] && result.groups.id == null)
        {
            if(api[result.groups.route][req.method]){
                api[result.groups.route][req.method].handler(req, res, result.groups.id); 
                return;
            }
            helpers.send(req, res, {msg: "Metode ikke tilladt her"}, 405);
            return;
        }
        if(api[result.groups.route] && result.groups.id != null)
        {
            if(api[result.groups.route][req.method]){
                api[result.groups.route][req.method].handler(req, res, result.groups.id); 
                return;
            }
            helpers.send(req, res, {msg: "Metode ikke tilladt her"}, 405);
            return;
        }           
    }

    helpers.send(req, res, {message: " 'Resource:' " + endpoint + " Not available"}, 404);


    ////////////////////////////////////// CODE THAT HAVE BEEN USED ///////////////////////////////////

    // const apiRX = /^\/api\/\w+$/;
    // result = endpoint.match(apiRX);
    // // console.log(result);
    // if(result){
    //     if(api[result[0]])
    //     {
    //         if(api[result[0]][req.method]){
    //             api[result[0]][req.method].handler(req, res); 
    //             return;
    //         }
    //         helpers.send(req, res, {msg: "Metode ikke tilladt her"}, 405);
    //         return;
    //     }       
    // }

    // API REGIX IMPROVED for ID and groups. /^(\/api\/\w+)(\/\w+)?/

    // if(endpoint === "/index.html")
    // {
    //     helpers.sendFile(req, res, "./static/index.html")
    //     return;
    // }
    



    //helpers.send(req, res, {besked: "Her kommer JSON objekt besked"});

    // res.statusCode = 200;
    // res.setHeader("Content-type", "text/plain"); // Fortæller hvad type data der bliver sendt
    // res.end("Hello World...");
}