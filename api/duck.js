const helpers = require("../helpers");

module.exports = {
    GET: {
        handler: function(req, res, param){
            let parms = param !== ""? param.replace("/", "").split("/"): null;
            let parm1 = parms[0];
            let parm2 = parms[1];
            console.log(parm2);
            helpers.send(req, res, {says: "Quack", method: req.method, id: parms});
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