const bcrypt = require('bcrypt');
const database = require('./database');
const saltRounds = 10;
function encrypt(username, password, cb) {

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            database.signUp(username, hash, function(data) {
                // cb(data);
                database.usertable(username,function (err,data) {
                    cb(err,data);
                })
            })
        });
    });
}

    // database.usertable(function (data) {
    //     cb(data);
    // })


function compare(password, hash, cb) {
    bcrypt.compare(password, hash, function(err, res) {
        cb(res);
    });

}
var i=1;
function display(connection, cb) {
    connection.query('SELECT * FROM task', function (error, results, fields) {
        if (error) throw error;
        cb(results);
    });

}

// function insert(connection, todo, cb) {
//
//     connection.query(`Insert into task (id,name) Values ('${i}','${todo}')`, function (error, results) {
//         cb(error, results);
//         i++;
//     });
//
// }

function deleteItem(connection, id, cb) {
    connection.query(`DELETE FROM task WHERE ID = ${id}`, function (error, results) {
        cb(error, results);
    });

}
// module.exports = {
//     display,
//     insert,
//     deleteItem
// }

module.exports = {
    encrypt,
    compare,
    display,
    //insert,
    deleteItem,
    //signUp
    //  usertable
};
