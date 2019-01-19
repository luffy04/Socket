var mysql      = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'luffy04',
    password : 'Luffy04@',
    database : 'todolist'
});
function connectDB(){
    connection.connect();
}

function st(tab,cb){
    connection.query('show tables',function(err,results,fields){
        cb(err,results);
    })
}
function renew(username,hash,cb){
    console.log(hash);
    console.log(username);
    connection.query(`update login set password='${hash}' where username='${username}' `,function(err,results){
        cb(results);
        console.log('done');
    })
}
var trp=1;
function signUp(username, hash, cb) {
    connection.query(`Insert into login (username,password) values ('${username}','${hash}')`, function(err, results) {
        //if(err) throw err;
        connection.query(`Insert into profile (username,message) values ('${username}','nf/profile.png')`,function(err,results){
            cb(results);
            trp++;
        })
    })


}
    function usertable(username,cb) {
        console.log(username);
        var sql = `CREATE TABLE ${username} (name varchar(255),message varchar(50000))`;
         
        connection.query(sql,function (err, results) {
            connection.query(`insert into ${username} (name,message) Values ('${username}','30')`,function(err,results){
                var sql12=`CREATE TABLE ${username}friend (name varchar(255),room varchar(255))`;
                 connection.query(sql12,function (err, results) {
                    connection.query(`insert into request (name,request) Values ('Admin','${username}')`,function(err,results){
                        cb(err,results);
                    })
                })  
            })    
        })
    }
     function getUser(username, cb) {
        connection.query(`Select * from login where username='${username}'`, function(err, results) {
                if(err){
                    console.log(err);
                }
                else{
                cb(results); 
            }
         })
    }
function displaying(username,cb){
    connection.query(`select * from ${username}`,function(error,results,fields){
        cb(results);
    })
}
function getDatau(username,cb){
    var sql8=`SELECT * FROM ${username}`;
         //var sql9=`SELECT * FROM profile where username=${username}`;
        connection.query(sql8, function (error, results, fields) {
            //if (error) throw error;
            cb(results);
            //console.log(`${username}`);
        });
}
function getpic(username,cb) {
    // operations.display(connection, function(data){
    //     mb(data);

    //})
    
        
         var sql9=`SELECT * FROM profile where username='${username}'`;
        connection.query(sql9, function (error,results,fields) {
            
            cb(results);
            //console.log(`${username}`);
        });
    
    
}
var i=1;
function insert(name,todo,username, cb) {
    
            connection.query(`Insert into ${username} (name,message) Values ('${name}','${todo}')`, function (error, results) {
                cb(error, results);
                i++;
            });
      
}
function addimage(name,todo,username, cb) {
    
            connection.query(`Insert into ${username} (name,message) Values ('${name}','images/${todo}')`, function (error, results) {
                cb(error, results);
                i++;
            });
      
}
var jn=1;
function insertu(id,msg,to,user,cb){
    connection.query(`insert into ${to} (name,message) values('${user}','${msg}')`,function(error,results,fields){
        cb(results);
        jn++;
    })
}
function insertimage(id,msg,to,user,cb){
    connection.query(`insert into ${to} (name,message) values('${user}','../Users/${user}/${msg}')`,function(error,results,fields){
        cb(results);
    })
}
var j=1;
function insert1(msg,username,cb){
   
        connection.query(`update profile set message='../Users/${username}/${msg}' where username='${username}'`,function(err,results){
            cb(err,results);
        })
           
   // }
}
function insertx(msg,username,cb){
   
        connection.query(`insert into profile (username,message) Values ('${username}','${msg}')`,function(err,results){
            cb(err,results);
            trp++;
        })
           
   // }
}
var k=1;
function insert22(send,rec,cb){
    console.log("last");
    var sql55=`insert into request (name,request) Values ('${rec}','${send}')`;
    connection.query(sql55,function(err,results){
        // if (err){
        //     next(err);
        // }

        //else{
        cb(results);
        k++;//}
    })
    // connection.query(`SELECT * FROM ${send}`,function(err,results){
    //     cb(err,results);
    // })
}
function check(send,rec,cb){
    
    // var sql99=`SELECT * FROM ${send}`;
    connection.query(`SELECT * FROM ${send}`,function (err, results) {
            if(err) {cb(err);}
            })
            
                 connection.query(`SELECT * FROM ${rec}`,function (err, results) {
             if(err) {cb(err);}
             
             })
           }

function getfriend(username,cb){
    var sql88=`SELECT * FROM request where request='${username}'`;
         //var sql9=`SELECT * FROM profile where username=${username}`;
        connection.query(sql88, function (error, results, fields) {
            //if (error) throw error;
            cb(results);
            //console.log(`${username}`);
        });
}
function deletet(send,rec,cb){
    connection.query(`delete from request where name="${rec}"`,function(error,results,fields){
        cb(results);
    })
    

}
var zx=1;
var xz=1;

function insert77(send,v,room,cb){
    connection.query(`insert into ${send}friend (name,room) values('${v}','${room}')`,function(error,results,fields){
        
        zx++;
    
    connection.query(`insert into ${v}friend (name,room) values('${send}','${room}')`,function(error,results,fields){
        cb(results);
        xz++;
        })
    })
    // connection.query(`create table ${send}${v} (id int auto_increment,name varchar(255),sent varchar(255),message varchar(50000),primary key(id))`,function(error,results,fields){
    //     cb(results);
    // })
    connection.query(`delete from request where name='${v}'`,function(error,results,fields){
        cb(results);
    })   
}
function remove(v,cb){
    connection.query(`delete from request where request='${v}'`,function(error,results,fields){
        cb(results);
    })
}
function list(v,cb){
    connection.query(`select * from ${v}friend`,function(error,results,fields){
        cb(results);
    })
}
function modsg(name,v,cb){
    console.log(name)
    connection.query(`select * from ${name}`,function(error,results,fields){
        cb(results);
    })
}
function getreward(v,cb){
    connection.query(`select * from ${v}`,function(error,results,fields){
        cb(results);
    })
}
function room(roomie,cb){
    console.log("left");
    connection.query(`CREATE TABLE ${roomie} (name varchar(255),message varchar(50000))`,function(error,results,fields){
        // if(error) cb(error);
         cb(results);
    })
}
function upload(data,user,cb){
    connection.query(`update ${user} set message=${data} `,function(error,results,fields){
        //if(error) throw error;
        cb(results);
    })
}
var peek=1;
function retro(user1,user2,room,cb){
    var kite=`insert into room (user1,user2,room) values('${user1}','${user2}','${room}')`;
    //var left=`create table ${room} (id int auto_increment,user varchar(255),message varchar(50000),primary key(id))`;
    connection.query(kite,function(error,results,fields){
        cb(results);
        peek++;
    })
}
function local(room,cb){
    connection.query(`create table ${room} (name varchar(255),message varchar(50000))`,function(error,results,fields){
        // if(error) throw error;
        cb(results);
    })
}
function gaya(room,cb){
    connection.query(`delete from room where room='${room}'`,function(error,results,fields){
        cb(results);
    })
}
function crate(room,cb){
    connection.query(`drop table ${room}`,function(error,results,fields){
        cb(results);
    })
}
function getroom(user,cb){
    connection.query('select * from room',function(error,results,fields){
        cb(results);
    })
}
function poop(pattern,cb){
    connection.query(`select * from csa`,function(error,results,fields){
        cb(results);
    })
}
var kp=2;
function mobile(user,no,cb){
    connection.query(`insert into Admin (name,message) values ('${user}','${no}')`,function(error,results,fields){
        cb(results);
    kp++;
    })
}
function luffy(cb){
    connection.query(`SELECT * FROM Admin`,function(error,results,fields){
        console.log(results);
        cb(results);
    })
}
function rule(cb){
    connection.query(`Drop table room`,function(error,results,fields){
        connection.query(`create table room (user1 varchar(255),user2 varchar(255),room varchar(255)) `,function(error,results,fields){
            cb(results);
        })
    })
}
function prop(to,cb){
    connection.query(`drop table ${to}`,function(error,results,fields){
        cb(results);
    })
}
function info(qw,cb){
    connection.query(`delete from Admin where name='${qw}'`,function(error,results,fields){
        cb(results);
    })
}

module.exports = {
    connectDB,
    st,
    renew,
    signUp,
    getUser,
    usertable,  
    displaying,
    getpic,
    insert,
    addimage,
    insert1,
    insertimage,
    insertx,
    insertu,
    insert22,
    getDatau,
    getfriend,
    check,
    deletet,
    insert77,
    remove,
    list,
    modsg,
    getreward,
    room,
    upload,
    retro,
    local,
    gaya,
    crate,
    getroom,
    poop,
    luffy,
    mobile,
    rule,
    prop,
    info
};
