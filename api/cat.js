const helpers = require("../helpers");

module.exports = {
    GET: {
        handler: function(req, res){
            helpers.send(req, res, {says: "Miauw", method: req.method});
        }
    },
    POST: {
        handler: function(req, res){
            helpers.send(req, res, {says: "Miauw", method: req.method});
        }
    }
}