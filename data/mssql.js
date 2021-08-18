var dbConfig = {
    driver: 'msnodesqlv8',  
    server: "(localdb)\\mssqllocaldb",
    database: "PersonDB",
    user: "",
    password: "",
    options: {
      trustedConnection: true
  },
  debug: true,
  parseJSON: true
  };
    
var sql = require('mssql/msnodesqlv8');
// exports.insert = function() {
//     sql.connect(dbConfig, function (err) {
//         if (err) { console.log(JSON.stringify(err)+'..............') }
//         else {
//           console.log('Connected')
//           result = sql.query`INSERT INTO Aliens(firstName, lastName) VALUES(${value}, ${value})`
//         }
//     });
// }

exports.insert = async function(value1, value2) {
    try {
        let result
        await sql.connect(dbConfig);
        
        console.log('Connected')
        result = await sql.query`INSERT INTO Aliens(firstName, lastName) VALUES(${value1}, ${value2})`                 
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}
    

exports.selectAll = async function() {
    try {
        let result
        await sql.connect(dbConfig);
        
        console.log('Connected')
        result = await sql.query`SELECT * FROM Aliens`
                   
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}

exports.selectById = async function(id) {
    try {
        let result
        await sql.connect(dbConfig);
        
        console.log('Connected')
        result = await sql.query`SELECT * FROM Aliens WHERE id=${id}`
                   
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteById = async function(id) {
    try {
        let result
        await sql.connect(dbConfig);
        
        console.log('Connected')
        result = await sql.query`DELETE FROM Aliens WHERE id=${id}`
                   
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}

exports.updateById = async function(value1, value2, id) {
    try {
        let result
        await sql.connect(dbConfig);
        
        console.log('Connected')
        result = await sql.query`UPDATE Aliens SET firstName =${value1}, lastName =${value2} WHERE id=${id}`
                   
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}

// exports.selectByID = function(param) {
//     sql.connect(dbConfig, function (err) {
//         if (err) { console.log(JSON.stringify(err)+'..............') }
//         else {
//           console.log('Connected')
//           result = sql.query`SELECT * FROM Aliens WHERE id=${param}`
//         }
//     });
// }


// module.exports = sql.connect(dbConfig, function (err) {
//     if (err) { console.log(JSON.stringify(err)+'..............') }
//     else {
//       console.log('Connected')
//       result = sql.query`DELETE FROM Aliens WHERE id=${value}`
//     }
// });

// module.exports = sql.connect(dbConfig, function (err) {
//     if (err) { console.log(JSON.stringify(err)+'..............') }
//     else {
//       console.log('Connected')
//       result = sql.query`UPDATE Aliens SET firstName =${value}, lastName =${value} WHERE id=${value}`
//     }
// });





// async () => {
//     try {
//         let sqlStr = 'Server=(localdb)\\mssqllocaldb;Database=PersonDB;Trusted_Connection=True;MultipleActiveResultSets=true'
//         con = sql.connect(sqlStr);
//         await con;
//         if(con)
//         {
//             console.log("succes");
//         }
//         else {
//             console.log("fail");
//         }
        
//         const result = await sql.query`INSERT INTO Aliens(firstName, lastName) VALUES('Test', 'Testtest')`;
//         console.log(result);
//     } catch (err) {
//         console.log(err)
//     }
// }