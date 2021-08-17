const helpers = require("../helpers");

module.exports = {
    GET: {
        handler: function(req, res, param){
            helpers.send(req, res, {says: "Quack", method: req.method, id: param});
        }
    },
    // GET: {
    //     handler: function(req, res, param){
    //         helpers.send(req, res, {says: "Quack with " + param, method: req.method, id: param});
    //     }
    // },
    POST: {
        handler: function(req, res){
            helpers.send(req, res, {says: "Quack", method: req.method});
        }
    }
}