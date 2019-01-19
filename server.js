const express=require('express');
const app=express();
const ejs=require('ejs');
const http=require('http');
const path=require('path');
const server=http.Server(app);
var engines = require('consolidate');
const bodyParser = require('body-parser');
const passport = require('passport'),
FacebookStrategy = require('passport-facebook').Strategy;
const passportLocal = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
//const db = require('./db.json');
const database = require('./database');
const operations = require('./operation');
const socket=require('socket.io');
const multer=require('multer');
const fs=require('fs');

const io=socket(server);
var v;
let tv;
var x;
var vet;
var sd;
var tr;
var des;
var like=0;
var messages=[];
var usercount=0;
//var $=jQuery.again();
var index=0;
var pic=[];
var lo;
var users=[];
var all=[];
var clients=[];
var frnds=[];
var rooms;
var room1=[];
var room2=[];
var uer=[];
var dhoom;
var status=[];
var wer;
var globa;
var idle=[];
var roomie=[];
var reg=['Admin','sanji','zoro'];
var iduser=[];
const storage=multer.diskStorage({
    destination: 'public/',
    filename:function (req, file, cb) {
        cb(null,file.fieldname+'-'+Date.now()+
            path.extname(file.originalname));
    }
})
const uploading=multer({
    storage:storage,
    fileFilter:function (req, file, cb) {
        checkFileType(file,cb)
    }
}).single('myImage');
function checkFileType(file,cb){
    const filetypes=/mp4|jpg|jpeg|png/;
    const extname=filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype=filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null,true);
    }else{
        cb('Error: Videos only');
    }
}
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({secret: 'I have a dog'}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',express.static('public'));
app.set('view engine','ejs');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.post('/login', passport.authenticate('local',
    {
        successRedirect: `/success`,
        failureRedirect: '/failure'
    }
));

passport.use(new passportLocal(
    function(username, password, done) {
        database.getUser(username, function(err,data) {

            if(err) {
                console.log('first');
                return done(null,false,{message:'username is incorrect'})
            }
            else{
                console.log('second');


            operations.compare(password, data[0].password, function(show){
                if(!show) {
                    return done(null, false, {message: 'password is incorrect'});
                }

                
                return done(null, data[0].username);


                });
            }
        })

    })
);

passport.serializeUser(function(id, done) {
    return done(null, id);
});

passport.deserializeUser(function(id, done) {
    return done(null, id)

});
var FACEBOOK_APP_ID="936039526595879";
var FACEBOOK_APP_SECRET='01040f2e7ab7017c4f14691d6cdaccb4';
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL:"http://localhost:8000/auth/facebook/callback",
    profileFields:['id','displayName','picture']
    }, function(accessToken, refreshToken, profile, done) {
            profile.displayName=profile.displayName.replace(" ","");
            for(lo=0;lo<reg.length;lo++){
                console.log(lo);
                if(profile.displayName==reg[lo] || reg.length===0) {
                database.st('luffy',function(err,data){
                    done(err,profile.displayName);
                        console.log("pattern")
                    })
                }
            }
            if(lo>reg.length && reg.length!=0){
          operations.encrypt(profile.displayName, accessToken, function (err,data) {
                reg.push(profile.displayName);
                console.log(reg);
                  // fs.mkdirSync(`Users/${profile.displayName}`);
                            // console.log('created')
                
            lo=0;
        
          database.insertx(profile.photos[0].value, profile.displayName, function (err, data) {
                            index++;
                            //res.send(index.toString());
                            done(err,profile.displayName);

                        });
      })
    }
  }
));
app.get('/auth/facebook', passport.authenticate('facebook', {scope:"email"}));
app.get('/auth/facebook/callback', passport.authenticate('facebook',
    {successRedirect:'/sui',
    failureRedirect:'/failure' }
    ))


app.get(`/success`, function(req,res) {
    
    v=req.user;
    if(req.user=='Admin'){
        res.render('quickchat.ejs',{
            name:'Admin'
        });
    }
    else{
        res.render('indo.ejs',{
            name:req.user
        })
    }
});


app.get('/sui',function(req,res){
    v=req.user;
    res.render('indo.ejs',{
        name:req.user

    })
})



app.get('/failure', function(req,res) {
    req.logout();
    res.redirect('/');

});

app.get('/data', function(req, res) {
    if(req.user) {
        res.send("Validated");
    }
    else {
        res.redirect('/');
    }

});

app.post('/signup', function(req, res,next) {
    iduser.push(req.body.username);
        fs.mkdirSync(`public/Users/${req.body.username}`);
                console.log('created')
    operations.encrypt(req.body.username, req.body.password, function (err,data) {
        if(err) next(err)
         else {
             
               res.send(data);
                
        }
    })

})
app.post('/quickchat',function(req,res){
    res.render('quickchat.ejs');
})
app.post('/add', function(req,res) {
    // if(typeof (req.body.todo) != "string" ) {
    //     res.sendStatus(500);
    // }
        database.insert(req.body.todo.id,req.body.todo.msg, req.body.userr, function (err, data) {
            if (err) {
                throw err;
            }
            else {
                // Maintaining Index on Server
                index++;
                res.send(index.toString());
                //res.send(data);
                
            }

        });
});
  var tik=1;
app.post('/addimage', function(req,res) {
    
          
         var data = req.body.todo.msg.replace(/^data:image\/\w+;base64,/, "");

         var buf = new Buffer(data, 'base64');
         
         fs.writeFile(`public/images/image${tik}.png`, buf);
         
         //console.log(tik);
       database.addimage(req.body.todo.id,`image${tik}.png`,req.body.userr, function (err, data) {
            if (err) {
                throw err;
            }
            else {
                // Maintaining Index on Server
                index++;
                res.send(index.toString());
                //res.send(data);
                
            }
            tik++;
        })
   })
   var set=1;
app.post('/addprofile',function(req,res){
        var data = req.body.todoing.msg.replace(/^data:image\/\w+;base64,/, "");

         var buf = new Buffer(data, 'base64');
         fs.writeFile(`public/Users/${req.body.todoing.user}/image${set}.png`, buf);

         database.insertimage(req.body.todoing.id,`image${set}.png`,req.body.todoing.samne,req.body.todoing.user,function(err,data){
            res.send(data);
         })
         set++;
}) 
app.post('/add1', function(req,res) {
    var data = req.body.pic.msg.replace(/^data:image\/\w+;base64,/, "");

         var buf = new Buffer(data, 'base64');
         fs.writeFile(`public/Users/${req.body.user}/profile.png`, buf);
        database.insert1('profile.png', req.body.user, function (err, data) {
                         
                        //else {
                           // Maintaining Index on Server
                         //   index++;
                            //res.send(index.toString());
                            res.send(data);
                            console.log(data);
                            // console.log(data);
                        

                        });
});  
app.post('/addu', function(req,res) {
    // if(typeof (req.body.todo) != "string" ) {
    //     res.sendStatus(500);
    // }
        database.insertu(req.body.todo.id,req.body.todo.msg,req.body.todo.samne,req.body.todo.user ,function (err, data) {
            // if (err) {
            //     throw err;
            // }
            // else {
                // Maintaining Index on Server
                index++;
                res.send(index.toString());
                //res.send(data);
                
            //}

        });
});
app.post('/lipo', function(req,res) {

    database.displaying(req.body.to,function(data) {
        //if(err) throw err;
        
        res.send(data);

    })
});
app.get('/roompet',function(req,res){
    database.getroom(vet,function(data){
        res.send(data);
    })
})
app.post('/reward',function(req,res){
    database.getreward(req.body.rew,function(data){
        res.send(data);
    })
})
app.get('/displayu', function(req,res) {

    database.getDatau(vet,function(data) {
        res.send(data);
        

    })
});
app.post('/display2', function(req,res) {

    database.getpic(req.body.too,function(data) {
        res.send(data);
        

    })
});
app.post('/chaneg',function(req,res,next){
    database.getUser(req.body.usere, function(data) {

            console.log(data[0].username);
            // console.log(data[0].password);
            operations.compared(req.body.first, data[0].password , function(err,data){
                if(!data){ next(err);}
                    
                else{
                    operations.trwe(req.body.usere,req.body.second,function(err,data){
                         res.send(data);
                     })
                }

            });

        })
})

app.post('/remob',function(req,res){
    database.info(req.body.mo,function(data){
        res.send(data);
    })
})

app.post('/friendss',function(req,res,next){

                
        //     console.log("error");
         
           
              database.insert22(req.body.todo2,req.body.tomo,function(err,data){
    //     // if(err){
    //     //     next(err);
    //     // }
            res.send(data);
    // //})        
          //}
        
    })
          
})
app.post("/addlist",function(req,res){
    database.insert77(req.body.todo33,req.body.vet,req.body.todo11,function(err,data){
        res.send(data);
    })
})
app.post('/deletet',function(req,res){
    database.deletet(req.body.todo3.send,req.body.todo3.rec,function(err,data){
        res.send(data);
    })
})
  
app.post('/displayf',function(req,res){
    console.log(req.body.vet)
    database.getfriend(req.body.vet,function(data){
        res.send(data);
    })
})
app.post('/list',function(req,res){
    database.list(req.body.todo22,function(data){
        res.send(data);
    })
})
app.post('/sentf',function(req,res){
    database.modsg(req.body.sudo,req.body.vet,function(data){
        res.send(data);
    })
})
app.post("/remove",function(req,res){
    database.remove(req.body.vet,function(data){
        res.send(data);
    })
})
app.get('/logout', function(req,res) {
    req.logout();
    res.redirect('/');
});
app.post("/room",function(req,res,next){
    console.log(req.body.room);
    database.room(req.body.room,function(err,data){
        console.log("hero");
         res.send(data);
    })
})
app.get('/pattern',function(req,res,next){
    database.luffy(function(data){
        res.send(data);
    })
})
app.post('/gon',function(req,res,next){
    database.poop(req.body.put,function(err,data){
        console.log(req.body.put);
        res.send(data);
    })
})
app.post("/peter",function(req,res,next){
    database.upload(req.body.reward,req.body.user,function(err,data){
        res.send(data);
        console.log(req.body.reward);
    })
})
app.post('/create',function(req,res,next){
    database.retro(req.body.samne,req.body.apan,req.body.room,function(err,data){
            res.send(data);
    })
})
app.post('/table',function(req,res,next){
    database.local(req.body.room,function(err,data){
        res.send(data);
    })
})

app.post('/deer',function(req,res,next){
    database.gaya(req.body.room,function(err,data){
        res.send(data);
    })
})
app.post('/lump',function(req,res,next){
    database.crate(req.body.room,function(err,data){
        res.send(data);
    })
})
app.post('/mobile',function(req,res,next){
    database.mobile(req.body.user,req.body.mobile,function(err,data){
        res.send(data);
    })
})
app.get('/refresh',function(req,res){
    res.render('../public/index.html');
})
app.post('/remtime',function(req,res){
    database.rule(function(data){
        res.send(data);
    })
})
app.post('/drop',function(req,res){
    database.prop(req.body.lete,function(data){
        res.send(data);
    })
})
io.on('connection',function (sk) {
        // dhoom='task';
        // sk.join(dhoom);
        
        sk.emit('rewardie','try');
        
        sk.on('going',function(data){
        // if(data=='luffy'){
        //     sk.emit('lucy',data);
        // }
       // else{  
         sk.emit('lonely',data);    
            // }
        })
    // }
    // sk.on('chatt',function(data){
        
    // })
    sk.on('neww',function(data,data1,data2){
    sk.emit('window',messages,all,pic,v,data);
    sk.emit('jerk',all,status,idle,room1,usercount,data1,data2);
    //sk.emit('never',all);
    })

    sk.on('match',function(data){
        sk.emit('matching',reg);
    })

    sk.on('liki',function(data){
        like++;
        console.log(like);
    })

    sk.on('join1',function (connected,active,id) {
        usercount++;
        
         
            console.log(usercount);
            all.push(connected);
         idle.push(id);
        io.emit('people',connected,usercount);
        console.log( connected+" is connected");
        status.push(active);
        console.log(idle);
        console.log(all);
        console.log(status);
        })


    sk.on('namme',function(data){
      sk.emit('lettry',data,all,idle);  
    })
    sk.on('newtry',function(data){
        sk.emit('lets',idle,data);
    })
    sk.on('new1',function(data){
       // sk.join(globa);
    sk.emit('window',messages,all,pic,v,data);
    
    })
        
    sk.on('troop',function(text){
        io.emit('barb',text);
    })
    sk.on('qop',function(teppe){
        io.emit('king',teppe);
    })
    sk.on('arch',function(text1){
        io.emit('bishop',text1);
    })
    sk.on('message',function (name,data1,groom) {//Listener1
        console.log(groom);
        messages.push(data1);
        

            
        
            io.emit('send_all',{id:name,msg:data1,user:v});
            console.log(20);
      //  }
        sk.emit('send_all1',{id:name,msg:data1,user:v});
        });

    sk.on('mock',function (name,data1,user,tot) {//Listener1
           // io.emit('sap',{id:name,msg:data1,user:user,samne:tot});    
            // console.log(tot);
        // sk.join(tot);
        io.emit('sap1',{id:name,msg:data1,user:user,samne:tot});
        sk.emit('saping',{id:name,msg:data1,user:user,samne:tot});
    });
   

    sk.on('user image',function (name,image,room) {
        io.emit('adde',{id:name ,user:vet,msg:image});
        sk.emit('addimage',{id:name ,user:vet,msg:image});
    
    })
    sk.on('user imageut',function (name,image,room) {
        // sk.join(room);
        io.emit('addimageut',{id:name,user:name,msg:image,samne:room});
        sk.emit('addimageuting',{id:name,user:name,msg:image,samne:room});
    })
    sk.on('user image1',function (name,image) {
        sk.emit('addimage1',{id:name ,user:vet,msg:image});
        
    })
    sk.on('reply',function(c,d){
        console.log(d);
        sk.emit('back',c,d,reg);
    })
    sk.on('fire',function(cx,dx){
        sk.emit('ztrack',cx,dx);
    })
    sk.on('alpha',function(ed){
        tr=ed;
        sk.join(ed);
        sk.emit('beta',ed);
    })
    
    sk.on('value',function(normal){
    vet=normal;
    })
    sk.on('quick',function(req,id){
        clients.push(req);
        wer=id;
    io.emit('remorse',req,clients,id);
    })
    sk.on('cut',function(name){
        clients.splice(`${name}`,1);
    })
    sk.on('roomid',function(enter){
        // room1.push(nameroom);
        console.log(wer);
        sk.emit('actual',wer,enter,room1);
    })
    sk.on('insert',function(again,samne,apan){
         room1.push(again);
        // room1.push(again)
        // uer.push(samne);
        // uer.push(apan);
        console.log(room1);
        io.emit('chale',again,samne,apan,all);
    })
    sk.on('show',function(tryo){
        console.log(tryo)
        sk.emit('reveal',tryo);
    })
    sk.on('dis',function(naam){
     for(i=0;i<all.length;i++){
        if(naam==all[i]){
            status[i]=1;
        }
     }
        console.log(status);
        io.emit('disk',naam,all,status);    
    })
    sk.on('con',function(pop){
        for(i=0;i<all.length;i++){
        if(pop==all[i]){
            status[i]=0;
        }
     }  
        console.log(status+"true");
        io.emit('monitor',pop,usercount);
        // io.emit('people',connected,usercount);
     })
    sk.on('rem',function(pep,tap){
        sk.emit('cod',pep,tap);
    })
    sk.on('first',function(data){
        io.emit('day1',data);
    })
    sk.on('second',function(data){
        io.emit('day2',data);
    })
    sk.on('third',function(data){
        io.emit('day3',data);
    })
    sk.on('fourth',function(data){
        io.emit('day4',data);
    })
    sk.on('fifth',function(data){
        io.emit('day5',data);
    })
    sk.on('sixth',function(data){
        io.emit('day6',data);
    })        
    // sk.on('timer',function(data){
    //     io.emit('tym','asd');
    // })
    sk.on('create',function(datw){
        // sk.join(datw);
    })
    sk.on('tose',function(name,password){
        sk.emit('later',name,password,reg);
    })
    sk.on('lose',function(data){
        reg.push(data);
        console.log(reg);
    })
    sk.on('trep',function(data){
        sk.emit('plot',data);
    })
})



server.listen(8000,function () {
    console.log("Working");
    // io.emit('rewardie','try');
});