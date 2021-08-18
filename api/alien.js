const helpers = require("../helpers");
const mssql = require("../data/mssql");

module.exports = {
    GET: {
        handler: async function(req, res, param){
            let parms = param !== ""? param.replace("/", "").split("/"): null;
            if(parms == null)
            {
                let viewresult = await mssql.selectAll();
                console.log(viewresult);
                helpers.send(req, res, viewresult)
            }
            if(parms != null) 
            {
                let viewresult = await mssql.selectById(parms);
                console.log(viewresult);
                helpers.send(req, res, viewresult)
            }
                       
        }
    },
    POST: {
        handler: function(req, res, param){
            let parms = param !== ""? param.replace("/", "").split("/"): null;
            let parm1 = parms[0];
            let parm2 = parms[1];
            mssql.insert(parm1, parm2);
            helpers.send(req, res, {id: parms});
            
        }
    },
    DELETE: {
        handler: function(req, res, param){
            let parms = param !== ""? param.replace("/", "").split("/"): null;
            mssql.deleteById(parms);
            helpers.send(req, res, {id: parms});
            
        }
    },
    PUT: {
        handler: function(req, res, param){
            let parms = param !== ""? param.replace("/", "").split("/"): null;
            let parm1 = parms[0];
            let parm2 = parms[1];
            let parm3 = parms[2];
            mssql.updateById(parm1, parm2, parm3)
            helpers.send(req, res, {id: parms});
            
        }
    }
}