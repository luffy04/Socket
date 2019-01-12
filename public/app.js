
var todoList=[];
var i;
var y;
var z;
var net;
var loft;
var t;
var pk;
var rap;
var no=[];
var oppo=[];
var roomie=[];
var loot;
var trainer;
var teller;
var asd;
var qwe='Global';
var vds;
var pack;
var login;
var namefriend;
var btnt=$('#btnt');
var dhoom;
var broom='trap';
var global=$('#global');
let connected=$('#connected')
let list=$('#list');
var socket =io.connect();
var name;
var userb=$('#Registery');
var revo=$('#reward');
var des;
var id;
var del;
var rebtn=$('#rupee');
var redeem=$('#redeem')
var outside=$('#outside');
var local=$('#local');
var get=$('#get');
var top=$('#top');
var roka=$('#roka')
var box=$('#box');
var day1=$('#day1');
var day2=$('#day2');
var day3=$('#day3');
var day4=$('#day4');
var day5=$('#day5');
var day6=$('#day6');
var day7=$('#day7');
var first=$('#first');
var second=$('#second');
var third=$('#third');
var fourth=$('#fourth');
var fifth=$('#fifth');
var sixth=$('#sixth');
var btlu=$('.button');
var span=$('#span');
var active=0;


left();

function left(){
    console.log('match')
    setTimeout(function(){
        $('#logged').animate({"top":"+=4em","left":"+=16.5625px"},"fast");
        $('#registered').animate({"top":"-=1.2em","left":"+=53px"},"fast");
        $('#getroom').animate({"top":"+=1.2em","left":"-=53px"},"fast");
        $('#like').animate({"top":"-=4em","left":"-=16.5625px"},"fast");
    },15000);

    setTimeout(function(){
        $('#logged').animate({"top":"-=5.2em","left":"+=36.4375px"},"fast");
        $('#registered').animate({"top":"-=2.8em","left":"-=69.5625px"},"fast");
        $('#getroom').animate({"top":"+=2.8em","left":"+=69.5625px"},"fast");
        $('#like').animate({"top":"+=5.2em","left":"-=36.4375px"},"fast");
    },30000);

    setTimeout(function(){
        $('#logged').animate({"top":"+=4em","left":"+=16.5625px"},"fast");
        $('#registered').animate({"top":"-=1.2em","left":"+=53px"},"fast");
        $('#getroom').animate({"top":"+=1.2em","left":"-=53px"},"fast");
        $('#like').animate({"top":"-=4em","left":"-=16.5625px"},"fast");
    },45000);

    setTimeout(function(){
       $('#logged').animate({"top":"-=2.8em","left":"-=69.5625px"},"fast");
        $('#registered').animate({"top":"+=5.2em","left":"-=36.4375px"},"fast");
        $('#getroom').animate({"top":"-=5.2em","left":"+=36.4375px"},"fast");
        $('#like').animate({"top":"+=2.8em","left":"+=69.5625px"},"fast");
        left();
    },60000);
}


$('#usernamebox').click(function(){
    setTimeout(function(){
         socket.emit('trep',$('usernamebox').val())
    },2000);
})
socket.emit('plot',function(data){
    console.log(data);
})
window.onbeforeunload=function(){
   
    if (window.location.pathname == "/") {
     socket.emit('dis',name);
        }
    
}
if (performance.navigation.type == 1) {
    location.href="/";
  }
 function searchFunction() {
    var input, filter, ul, li, a,p, i;
    input = $('#myinput');
    filter = input.val().toUpperCase();
    ul = $('#connected');
    li = ul.find('li');
    p=$('#try');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('span')[0];
        console.log(a);
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}
 function match(){
    if($('#passwordbox1').val() != $('#confirmpbox').val()){
        //$('#submitboxreg').hide();
        // $('#submitboxreg').attr('disabled',true);
    }
    else{
        $('#submitboxreg').removeAttr('disabled');
    }
   }

   function matchname(){
        socket.emit('match','left');
   }

   socket.on('matching',function(data){
    console.log(data);
    var po;
    for(po=0 ; po<data.length ;po++){
        if(data[po]==$('#namebox').val()){
            $('#alertuser').text('Name is already taken!!');
            // $('#namebox').css('border-color','red');
        }
        else{
            $('#alertuser').text('');
        }
    }
   })

// function hover(el){
//     $(el).css('transform','translateX(-10%)')
// }
    $('#userpic').hover(function(){
        $(this).css('transform','translateX(-10%)')
        $('#logtext').css('opacity','1');
        $('#logtext').css('transform','translateX(+8%)');
        },function(){
         $(this).css('transform','translateX(+10%)')    
         $('#logtext').css('opacity','0');
        $('#logtext').css('transform','translateX(-8%)');
        
    })

    $('#regpic').hover(function(){
        $(this).css('transform','translateX(-10%)')
        $('#regtext').css('opacity','1');
        $('#regtext').css('transform','translateX(+8%)');
        },function(){
         $(this).css('transform','translateX(+10%)')    
         $('#regtext').css('opacity','0');
        $('#regtext').css('transform','translateX(-8%)');
        
    })
var nameroom;
var dear;
var conroom=$('#conroom');
var pubg=$('#requestt')
var alldata=[];
var req=$('nameuser');
var friend=$('#fff');
let result=$('#result');
let result1=$('#result1');
let sow=$('#show');
var btn4=$('#registered');
var yess=$('#yess');
let btn=$('#btn');
let submitboxreg=$('#submitboxreg');
var dataaa;
var dori=[];
setTimeout(function(){
    if (window.location.pathname == "/") {
    $('#parentname').show();;
    
    }
    else{
        socket.emit('going',userb.text());
        console.log()
    }
},6000)
   // $(".facemocion").faceMocion();
function disableF5(e) {
console.log("tremendous")
 if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) e.preventDefault(); };
$(document).ready(function(){
    let inp=$('#inp');
    let inpu=$('#inpu')
    let profile=$('#profile');
    let room=$("#room");
    let divr=$('#list');
    var btn3=$('#close1');
    var btnc=$('#close22');
    var btnu=$('#btnu');
    //`var file=$('#file')
    var div=$('#parentlogin');
    var div1=$('#parentsocket');
    var div2=$('#parentregister')
    var btn1=$('#logged');
    
    var btn5=$('#close2')
    var count=$('#count');





    $('#okname').click(function(){
        $('#parentname').hide();
        if($('#nameebox').val() == ""){
            $('#parentname').show();
            console.log("empty")
        }
        else{
        socket.emit('namme',$('#nameebox').val());
        }
    })

    socket.on('lettry',function(name,all,idle){
        if(all.length == 0){
            $('#parentpassport').show(); 
        }
        for(pk=0;pk<all.length;pk++){
                if(name==all[pk]){
                    net=pk;
                    console.log(net);
                    $('#parentid').show();
                            break;
                    }
                   

                }
                console.log(pk);
                if(pk==all.length && all.length!=0){
                  $('#parentpassport').show(); 
                        // socket.emit('join1',name,active,del);
                    }
          
    })



    $('#okpasse').click(function(){
        $('#parentpassport').hide();
        if($('#passebox').val()==""){
            $('#parentpassport').show();
        }
         socket.emit('join1',$('#nameebox').val(),active,$('#passebox').val());
        socket.emit('neww',qwe);
    })

    $('#okide').click(function(){
        socket.emit('newtry',$('#idebox').val());
    })

    socket.on('lets',function(idle,del){
        $('#parentid').hide();
        if(idle[net]!=del){
            $('#ide').text('incorrect Id.. Try Again!!')
            $('#parentid').show();    
        }
        else{
            socket.emit('neww',qwe);
        }
    })

    $('#ok').click(function(){
        $('#alexa').hide();
        $('#alexa').animate({"top":"-=42%"},"fast")
        // pubg.animate({"left":"-=240px"},"slow");
    })
    

   
    
    btn.click(function(){
        let value=inp.val();
       
        if(value) {
            add(value);
        }
     
    });
  
    btnu.click(function(){

        let value=inpu.val();
        console.log("trust");
        if(value){
            exactly(value,asd);
        }
    })
    btn1.click(function () {
        div.show();
        div1.css('opacity','0.2');
    });
    btn3.click(function () {
        div.hide();
        div1.css('opacity','1');
    })
    btn4.click(function () {
        div2.show();
        div1.css('opacity','0.2');
    })
    btn5.click(function () {
        div2.hide();
        div1.css('opacity','1');
    })
    profile.click(function(){
         vds=userb.text();
        console.log(vds);
        socket.emit('value',vds);
         displayfriend();
         $(this).hide();
         divr.animate({"top":"+=450px"},"slow");
        $('#prop').show();
    })
    $('#prop').click(function(){
        $(this).hide();
        divr.animate({"top":"-=450px"},"slow");
        profile.show();
    })

    $('#eye').click(function(){
       if($('#passwordbox1').attr('type')==='password'){
            $('#passwordbox1').attr('type','text');
            $(this).css('color','blue');
       }
       else{
        $('#passwordbox1').attr('type','password');
        $(this).css('color','black');
       }
    })

    btnc.click(function(){
        divr.hide();
    })
    rebtn.click(function(){
        outside.fadeIn();
        
    })
    $('#image').click(function(){
        $('#true').show();
        $('#parentsocket1').css("opacity","0.7");
        $('#snow3').css('z-index','100');
    })
    $('#snow3').click(function(){
         $('#true').hide();
         $('#parentsocket1').css("opacity","1");
         $(this).css('z-index','0')
    })
    // $('#true').clickOutsideThisElement(function(){
    //     $('#true').hide();
    //     $('#parentsocket1').css("opacity","1");
    // })
    
    $('#hide').click(function(){
        $('#menu').toggle();
    })
    $('#hile').click(function(){
        $('#reward').toggle();
        $('#frndlist').toggle();
        $('#fff').toggle();
    })
    $('#shinee').click(function(){
        $('#three').toggle();
    })
    $('#hine').click(function(){
        $('#one').toggle();
    })
    $('#background').change(function () {
            var file = this.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
               $('#parentsocket1').css('background-image', 'url("' + reader.result + '")');
            }
            if (file) {
                reader.readAsDataURL(file);
            }
        });


        //     $('#myImage').change(function(e){
        //     var fileName = e.target.files[0].name;
        //     socket.emit('user image',name,fileName,username);
        // })
    submitboxreg.click(function(){
        socket.emit('tose',$('#namebox').val(),$('#passwordbox1').val())
    })
    socket.on('later',function(name,password){
        $.ajax({
            url:'/signup',
            method:'post',
            data:{username:name,password:password},
            success:function(){
                div2.hide();
                div1.css('opacity','0.2');
                $('#successbox').show();
                $('#tickie').fadeIn();
                setTimeout(function(){
                    $('#successbox').hide();
                },2000)
                socket.emit('lose',name);
            },
            error:function(){
                alert('Try Different Username')
            }
        })
    })
     // if(reg.length==0){
     //        $.ajax({
     //        url:'/signup',
     //        method:'post',
     //        data:{username:name,password:password},
     //        success:function(){
     //            div2.hide();
     //            $('#successbox').show();
     //            $('#tickie').fadeIn();
     //            socket.emit('lose',name);
     //          }
     //        })
     //    }
     //    for(loft=0;loft<reg.length;reg++){
     //        if(name==reg[loft]){

     //        }
     //    }
     //    if(loft==reg.length && reg.length!=0){
     //        $.ajax({
     //        url:'/signup',
     //        method:'post',
     //        data:{username:name,password:password},
     //        success:function(){
     //            div2.hide();
     //            $('#successbox').show();
     //            $('#tickie').fadeIn();
     //            socket.emit('lose',name);
     //          }
     //        })
     //    }   
    // rebtn.hover(function(){
    //     outside.show();
    // },function(){
    //     outside.hide()
    // })   
    // $('#confirmbox').click(function(){
    //     if($('#newbox').val()!=$('#confirmiebox').val()){
    //         $('#alertpas').text('Password Does Not Match');
    //     }
    //     else
    //         $.ajax({
    //             url:'/oldp',
    //             method:'post',
    //             data:{}
    //         })
    //     }
    // })


    redeem.click(function(){
        var mobile=prompt("Enter your Mobile Number");
        $.ajax({
            url:'/mobile',
            method:'post',
            data:{user:userb.text(),mobile:mobile},
            success:function(){
                rap=revo.text(revo.text()-100);
                retro(revo.text(),userb.text());
         
            }
        })
        
        
    })
    yess.click(function(){
        //var nameroom=prompt("Enter the Room Name");
        socket.emit('roomid',name);

        pubg.hide();
    })
    day1.click(function(){
        console.log('123');
        socket.emit('first','xc');
    })
    socket.on('day1',function(data){
        console.log("data");
        box.show();
        first.removeAttr('disabled');
        setTimeout(function(){
            first.attr('disabled',true);
            box.hide();
        },86400000)
    })

    day2.click(function(){
        socket.emit('second','xc');
    })
    socket.on('day2',function(data){
        box.show();
        second.removeAttr('disabled');
        setTimeout(function(){
            second.attr('disabled',true);
            box.hide();
        },86400000)
    })
    day3.click(function(){
        socket.emit('third','xc');
    })
    socket.on('day3',function(data){
        box.show();
        third.removeAttr('disabled');
        setTimeout(function(){
            third.attr('disabled',true);
            box.hide();
        },86400000)
    })
    day4.click(function(){
        socket.emit('fourth','xc');
    })
    socket.on('day4',function(data){
        box.show();
        fourth.removeAttr('disabled');
        setTimeout(function(){
            fourth.attr('disabled',true);
            box.hide();
        },86400000)
    })
    day5.click(function(){
        socket.emit('fifth','xc');
    })
    socket.on('day5',function(data){
        box.show();
        fifth.removeAttr('disabled');
        setTimeout(function(){
            fifth.attr('disabled',true);
            box.hide();
        },86400000)
    })
    day6.click(function(){
        socket.emit('sixth','xc');
    })
    socket.on('day6',function(data){
        box.show();
        sixth.removeAttr('disabled');
        setTimeout(function(){
            sixth.attr('disabled',true);
            box.hide();
        },86400000)
    })
    // day7.click(function(){
    //     box.show();
    //     sev.removeAttr('disabled');
    //     setTimeout(function(){
    //         first.attr('disabled',true);
    //         box.hide();
    //     })
    // })
    $('#info').click(function(){
        $('#lets').show();
    })
    $('#skip').click(function(){
        $('#lets').hide();
    })

    $('#skip1').click(function(){
        $('#lets1').hide();
        $("#rightthumb").css('display','none');
    })
    $('#skip2').click(function(){
        $('#lets2').hide();
        $('#leftthumb').css('display','none');
    })
    $('#skip3').click(function(){
        $('#lets3').hide();
    })
    $('#start').click(function(){
        $('#lets').hide();
        $('#lets1').show();
        $('#reward').show();
        $("#rightthumb").css('display','inline');
    })

     $('#next').click(function(){
        if($(window).width()<850){
            $('#reward').hide();
            console.log("hidde")
        }

        $('#lets1').hide();
        $('#lets2').show();
        $("#rightthumb").css('display','none');
        $("#leftthumb").css('display','inline');
    })

      $('#next1').click(function(){
        $('#leftthumb').css('display','none');
        $('#lets2').hide();
        $('#lets3').show();
    })

    $('#closereward').click(function(){
        $('#outside').hide();
    })

    $('#setting').click(function(){
        $('#manu').show();
    })

    function add(value){
        console.log(broom);
        socket.emit('troop',local.text());
        socket.emit('message',name,value,get.text()); //Emitter1
       // socket.emit('name',name);

    
    }
    function exactly(value,room){
        console.log(userb.text());
        //result1.append(value);
        
        socket.emit('mock',name,value,userb.text(),room);
    }
    function addr(value){
        console.log(broom);
        socket.emit('messager',name,value); //Emitter1
       // socket.emit('name',name)
    
    }

    socket.on('people',function (name,data) {
        // connected.append(`<li id="connie">${data}.<span class='${name}' id="try">${name}</span>
        //     <img class="onlineimg" src="nf/if_status_46254.png" /> </li>`)
        
        $('#count').text(`${data}`);
      
    });
    socket.on('disk',function(kill,all,status){
        console.log("beta tumse na hoga")
        
                $(`.${kill}`).next().remove();
                $(`.${kill}`).append(`<img class="onlineimg" src="nf/if_status-busy_46252.png" />`);
            
            
        })
    socket.on('monitor',function (data,user) {
        $(`.${data}`).next().remove();
        $(`.${data}`).append(`<img class="onlineimg" src="nf/if_status_46254.png" />`);
        $('#count').text(`${user}`)
        console.log("bro")
    });
    socket.on('send',function (data) {
        result.append(`<li>${data}</li>`);
        }
    );
    socket.on('barb',function(text){
        get.text(text);
    })
    socket.on('adde', function (data) {
        console.log("draama");
        if(get.text()==local.text()){
        $('#parentsocket')
                    .append(
                        $('#result').append($('<b>').text(data.id), '<img src="' + data.msg + '"/>'
                        ))
                }
    });
    socket.on('addimage', function (data) {
        
        $.ajax({
            url:'/addimage',
            method:'post',
            data:{todo:data,userr:get.text()},
            success:function () {
               //console.log(success); 
                
            }
        })

    });
    $(function () {
        $('#myImage').on('change', function (e) {
            var file = e.originalEvent.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                console.log(evt.target.result)
                socket.emit('troop',local.text());
                socket.emit('user image',name, evt.target.result,get.text());   
            };
            reader.readAsDataURL(file);
        })
    })
    socket.on('addimageut', function (data) {
        $.ajax({
            url:'/addu',
            method:'post',

            data:{todo:data},
            success:function () {
                
            
                //localStorage.setItem(`${data.user}`, JSON.stringify(user));
                $('#parentsocket1')
                    .append(
                        $('#result1').append($('<b>').text(data.user) , '<img src="' + data.msg + '"/>'
                        ))
            }
        })

    });
    socket.on('addimage1', function (data) {
        $.ajax({
            url:'/add1',
            method:'post',
            data: {pic:data,user:userb.text()},
            success:function () {
                    console.log(data);
                // user.push(data);
                // localStorage.setItem(`${data.user}`, JSON.stringify(user));
                // $('#profilepic')
                //     .prepend(
                        $('#image').html( '<img src="' + data.msg + '" id="profilee"/>')
                        $('#true').html( '<img src="' + data.msg + '"/ id="trump">')
                    
            }
        })

    });
    $(function () {
        $('#file').on('change', function (e) {
            var file = e.originalEvent.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                socket.emit('user image1',name, evt.target.result);
            };
            reader.readAsDataURL(file);
        })
    })
    $(function () {
        $('#myImageu').on('change', function (e) {
            var file = e.originalEvent.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                socket.emit('user imageut',name, evt.target.result,asd);
            };
            reader.readAsDataURL(file);
        })
    })
    socket.on('send_all',function (data) {//Listener 2
        if(get.text()==local.text()){
        if(`${data.id}`==name){
        result.append(`<li><span id="orange"><span id="${data.id}" class="propt"><strong>${data.id}</strong></span><br><span id="mesg"><br><${data.msg}</br></span>
                        </span></br></li>`);
                }
         else{
          result.append(`<li><span id="blue"><span id="${data.id}" class="proptie"><strong>${data.id}</strong></span>
                     <span id="abhi"><button onclick="request1(this)" id="requse">Request</button></span>
                     <button onclick="roomreq(this)" id="quickie">Quick Chat</button>
                     <br><span id="mesg"><br>${data.msg}</br></span></br>   
                       </span></li>`); 
            }       
        }
    });

    socket.on('send_all1',function (data) {
        var id=data.id;
        var msg=data.msg;
        var user=data.user;
        $.ajax({
            url: '/add',
            method: 'post',
            data: {todo: data,userr:get.text()},
            success: function() {
                // let val = {
                //     id: id,
                //     name: msg,
                // }
                console.log(data);
               
                    // todoList.push(data);
                    // localStorage.setItem('todoList', JSON.stringify(todoList));
                    
                    //result.append(`<li>${data.id}:${data.msg} </li>`);
                //}
            }
        })
    })
   
    socket.on('sap1',function (data) {
        result1.append(`<li>${data.user}:${data.msg}  
                       </li>`);
        var id=data.id;
        var msg=data.msg;
        var user=data.user;
        $.ajax({
            url: '/addu',
            method: 'post',
            data: {todo: data},
            success: function() {
                
                
                //if (user) {
                    
                //}
                // else {
                //     todoList.push(data);
                //     localStorage.setItem('todoList', JSON.stringify(todoList));
                //     //result.append(`<li>${data.id}:${data.msg} </li>`);
                // }
            }
        })
    })
    socket.on('send_allr',function (data) {//Listener 2
        
        dataaa=`${data.user}`;
        dataaa=new Array();
        dataaa.push(data);
        console.log(dataaa);
        result.append(`<li><span id="span">${data.id}</span><span id="mesg">:${data.msg}</span>
                        </li>`);
        localStorage.setItem(`${data.user}`,JSON.stringify(dataaa));
                       
    
    });

    socket.on('window',function(data,all,pic,v,qwe) {
        ramp(qwe);
        
        // while(all.length)
        
         //display(name1,data,all,pic);
     });

    function locall(dataa){
     // // for(i=0;i<pep.length;i++){
     // //    console.log(pep.charAt(i));
     // // } 
     // console.log(pep.length);
        dataa.forEach(function(d) {
            console.log(d.message);
        if(d.name==$('#nameebox').val()){       
            if (d.message[6]!='/' ) {
                //console.log(name1);
                result.append(`<li><span id="orange"><span id="${d.name}" class="propt"><strong>${d.name}</strong></span><br><span id="mesg"><br>${d.message}</br></span></br>
                              </span></li>`)
            }
            else {
                result.append(`<li>${d.name}:<img src="${d.message}"></li>`)
                }
            }
            else{
                if (d.message[6]!='/') {
                //console.log(name1);
                result.append(`<li><span id="blue"><span id="${d.name}" class="proptie"><strong>${d.name}</strong></span>
                    <button onclick="request1(this)" id="requse">Request</button>
                                <button onclick="roomreq(this)" id="quickie">Quick Chat</button>
                    <br><span id="mesg"><br>${d.message}</br></span></br>
                                 </span></li>`)
            }
            else {
                result.append(`<li>${d.name}:<img src="${d.message}"></li>`)
                }
            }   
            
         })
    }
    
    function ramp(qwe){
        $.ajax({
            url:'/lipo',
            method:'post',
            data:{to:qwe},
            success:function(data){
                console.log(data);
                locall(data);
            }
        })
    }
   
         socket.on('lonely',function(v) {
               // userb.text(v);
               displayCall1(v);
               displayreward(v);
               //displaypic(v);
               // displayfriend(v);

        
    });
    function render11(data) {
         data.forEach(function(d) {
        
            if (d.message.length <= 100) {
                //console.log(name1);
                result.append(`<li>${d.name}:${d.message}</li>`)
            }
            else {
                result.append(`<li>${d.name}:<img src="${d.message}"></li>`)
            }
        //}
        })

    }
    function render3(data) {
         data.forEach(function(d) {
             console.log(d);
                room.append(`<li><span id="span">${d.request}</span>
                     <button onclick="addlist(this)" id="yessie" class="fas fa-check"></button>
                     <button onclick="remove(this)" id="nooe" class="fas fa-times"></button>   
                       </li>`);
           
        })
    }
    function displayCall1(v) {
        console.log(v);
        $.ajax({
            url: '/list',
            method: 'post',
            data:{todo22:v},
            success: function(data) {
                
                
                sdde(data);
            }
        })
    }
    function displayreward(v){
        $.ajax({
            url:'/reward',
            method:'post',
            data:{rew:v},
            success:function(data){
                console.log(data);

                
                //console.log(teller.id);
                data.forEach(function(d){
                   
                    revo.text(d.message);
                    console.log(revo.text());
                    if(revo.text()>=100){
                        redeem.removeAttr('disabled');
                    }    
                })
                
            }
        })
        displaypic(v);
    }
    function sdde(data){
        data.forEach(function(d){
            console.log(d);
            friend.append(`<li id="froe">
                            <button onclick='openat(this)' id="myfriend">${d.name}</button>
                            <button hidden>${d.room}</button>
                        </li>`)
        })
    }

    function displayfriend() {
        $.ajax({
            url: '/displayf',
            method: 'post',
            data:{vet:userb.text()},
            success: function(data) {
                
                render3(data);
            }
        })

    }
    function displaypic(v) {
        $.ajax({
            url: '/display2',
            method: 'post',
            data:{too:v},
            success: function(pop) {
                console.log(pop);
                pop.forEach(function(d) {
                console.log(d);
                $('#image').html(`<img src="${d.message}" id="profilee">`)
                $('#true').html(`<img src="${d.message}" id="trump">`)
           
        })
                
        //pic2(data);
            }
        })
    }
   


 })

   

    function request1(el){
        var c=$(el).prev().prev().text();
        console.log(c);
        socket.emit('reply',c,name)
       
        
        
        }
        function roomreq(el){
            var that=el;
            var pc=$(el).prev().prev().text();
            console.log(pc);
            console.log(name);
            loot=name;
            $(el).attr('disabled',true);
            setTimeout(function(){$(el).removeAttr("disabled")},5002);
            socket.emit('quick',pc,name);
        }
        socket.on('back',function(data){

        $.ajax({
            url:"/friendss",
            method:"post",
            data:{todo2:data},
            success:function(){
                console.log("success")
                
            },
            error:function(){
                
                $.ajax({
                    url:"/deletet",
                    method:"post",
                    data:{todo3:data},
                    success:function(){
                        console.log("hogya")
                    }
                })
            $('#letter').text('User need to Login First');
            $('#alexa').show();
            $('#alexa').animate({"top":"+=42%"},"fast")
            $('#alexa').css({"animation-name": "boxanimate" });
            $('#alexa').css({"animation-duration": "1s" });
            }
            

        })
        console.log("anyone");
    })
        socket.on('jerk',function(all,status,idle,room1,usercount,name,id){
            
            // name=prompt("What is your Name?");
            // while(name=="" || name=="null"){
            //  name=prompt("What is your Name?")   
            // }
            // if(all.length==0){
            //     del=prompt("Enter a special id it will help you to login again");
            //     while(del=="" || del=="null"){
            //         del=prompt("Enter a special id it will help you to login again");
            //     }   
                // socket.emit('join1',name,active,del);
            // }
            // for(pk=0;pk<all.length;pk++){
            //     if(name==all[pk]){
            //            del=prompt("enter your key");
            //             while(idle[pk]!=del){
            //             del=prompt("incorrect key!! Try Again")
            //             }
                             $('#count').text(`${usercount}`)
            //             // $('#count').text(`${usercount}`);
            //                 break;
            //         }
                   

            //     }
                // console.log(pk);
                // if(pk==all.length && all.length!=0){
                //   del=prompt("Enter a special id it will help you to login again");
                //          while(del==""){
                //              del=prompt("Enter a special id it will help you to login again")
                //         }
                //         socket.emit('join1',name,active,del);
                //     }
          
            for(z=0;z<all.length;z++){
                if(status[z]==0){
                    connected.append( `<li id="connie">${z+1}.<span class='${name}' id="try">${all[z]}</span><img class="onlineimg" src="nf/if_status_46254.png" /></li>`)
                }
                else{
                    connected.append( `<li id="connie">${z+1}.<span class='${name}' id="try">${all[z]}</span><img class="onlineimg" src="nf/if_status-busy_46252.png" /></li>`)
                }
            }
            setInterval(function() { makeTimer(room1); }, 1000);    
                    displayroom();
                    console.log(room1);
                  
        })
    function displayroom(){
        $.ajax({
            url:'/roompet',
            method:'get',
            success:function(data){
                data.forEach(function(d){
                    if(d.user1==name || d.user2==name){
                        conroom.append(`<li id="rooney"><button onclick="text(this)" class="globally" id='${d.room}'>${d.room}</button></li>`)
                    }
                })
            }
        })
    }
    
    function addlist(el){
        var cx=$(el).prev().text();
        $(el).parent().remove();
        vds=userb.text();
        namefriend=prompt("enter a room");
        $.ajax({
            url:"/room",
            method:"post",
            data:{room:namefriend},
            success:function(){
                console.log("room created");
            },
            error:function(){
                namefriend=prompt("room is taken...Enter again");
            }
        })
        console.log(vds);
        socket.emit('value',vds);
        socket.emit('fire',cx,namefriend);
        }
        
    socket.on('ztrack',function(we,se){
        $.ajax({
            url:"/addlist",
            method:"post",
            data:{todo33:we,vet:userb.text(),todo11:se},
            success:function(){
                friend.append(`<li id="froe"><button onclick='openat(this)'>${we}</button>
                                    <button hidden>${se}</button>
                                </li>`)
            }
        })
    })
    function remove(el){
        $(el).parent().remove();
        $.ajax({
            url:"/remove",
            method:"post",
            data:{vet:userb.text()},
            success:function(){
                console.log("delhi");
            }
        })  
    }
    function openat(el){
        pack=$(el).text();
         asd=$(el).next().text();
         roka.text($(el).next().text());
        vds=userb.text();
        console.log(vds);
        result1.empty();
        sow.text(pack);
        sow.show();
        //socket.emit('create',asd,vds);
        socket.emit('alpha',asd);        
        //     }
        // })
        
         }
        socket.on('beta',function(data){
            
            $.ajax({
            url:"/sentf",
            method:"post",
            data:{sudo:data,vet:userb.text()},
            success:function (data){
                console.log(data)
                data.forEach(function(d){
                    console.log(d)
                    result1.append(`<li>${d.name}:${d.message}</li>`);
                })
            }
        })
    })
        socket.on('remorse',function(data,clients,get){
              console.log(clients);
            for(i=0;i<clients.length;i++){
                if(clients[i]==name){
                    console.log(clients)
                    $('#nameuser').text(`${get}`);
                    pubg.show();
                    pubg.animate({"left":"-=240px"},"slow");
                    setTimeout(explode,5000);
                    socket.emit('cut',data);
                }
            }
             
        })
        function explode(){
            pubg.animate({"left":"+=240px"},"slow");
            pubg.hide();
            //console.log('towards');
        }
        socket.on('actual',function(samne,apan,arraay){
             nameroom=prompt("Enter the Room name");
            if(nameroom==""){
                 nameroom=prompt("Enter the Room name");
            }
            for(i=0;i<arraay.length;i++){
               while(nameroom==arraay[i]){
                 nameroom=prompt("Room is taken!! Try another name");
               }
           } 
            socket.emit('insert',nameroom,samne,apan,del);
               
        })

        socket.on('chale',function(rona,samne,apan,all){
           //  console.log(samne);
           //  console.log(apan);
           //  roomie.push(samne);
           //  oppo.push(rona);
           // console.log(oppo);
           // console.log(roomie);
                $.ajax({
                    url:'/create',
                    method:'post',
                    data:{samne:samne,apan:apan,room:rona},
                    success:function(data){
                        console.log("read");
                    }
                })
                $.ajax({
                    url:'/table',
                    method:'post',
                    data:{room:rona},
                    success:function(){
                        console.log("putting");
                    }
                })
                if(samne==name ||apan==name){
                    console.log("createdS")
                  // var endTime = new Date();          
            
            
                // endTime.setDate(endTime.getDate()+1);
                // endTime.setSeconds(endTime.getSeconds()-1);
                // // var now = new Date();
                //  makeTimer(endTime)
                    conroom.append(`<li id="rooney"><button onclick="text(this)" class="globally" id='${rona}'>${rona}</button></li>`);           
                   
                    //$(`#${apan}`).next().next().next().hide(); 
                    del=$(`#${apan}`).next().next().next(); 
                    del.hide();      

                // setTimeout(function(){     
                //    if(samne==name){
                //     del.show();
                //    } 
                // $(`#${rona}`).parent().remove();
                //     $.ajax({
                //         url:'/deer',
                //         method:'post',
                //         data:{room:rona},
                //         success:function(){
                //                console.log("lopt"); 
                //             }
                //         })
                //     $.ajax({
                //         url:'/lump',
                //         method:'post',
                //         data:{room:rona},
                //         success:function(){
                //             console.log("better");
                //         }
                //     })
                //     },86400000);
            }
        })

        function text(el){
            qwe=$(el).text();
            socket.emit('new1',qwe);
            local.text($(el).text());
            // dori=JSON.parse(localStorage.getItem(`${qwe}`)) || []; 
            //console.log(dori);
            
            
            global.removeAttr('disabled')
            global.css('color','#D3D3D3')
            global.css('border-right-color','#D3D3D3');
            global.css('background-image','linear-gradient(to left,#161616,#161616)');
            $('.globally').each(function(){
                $(this).removeAttr('disabled');
                $(this).css('color','#D3D3D3')
                $(this).css('border-right-color','#D3D3D3')
                $(this).css('background-image','linear-gradient(to left,#161616,#161616)');
            })
            $(el).attr('disabled',true);
            $(el).css('color','yellow');
            $(el).css('border-right-color','yellow');
            $(el).css('background-color','#161616');
            $(el).css('background-image','linear-gradient(to left,#BDB76B,#161616)')
            result.empty();
            
            
            
        }
        var sdd=$('#global').next()
        console.log(sdd)
        // sole.log(sadde);
        // sadde.remove();
        // for(i=0;i<conroom.length;i++){

                
        //     }

        
        socket.on('reveal',function(tuy){
            console.log(tuy);
            $.ajax({
                url:'/gon',
                method:'post',
                data:{put:tuy},
                success:function(data){
                    console.log(data);
                }
            })
        })
        global.click(function(){
            qwe='Global';
            result.empty();
            socket.emit('new1',qwe);
            local.text('Global');
            //socket.emit('water','task')
            //socket.emit('chatt',oppo,roomie);
            
            
            global.attr('disabled',true);
            
            
            global.css('color','yellow');
            global.css('border-right-color','yellow');
            global.css('background-color','#161616');
            global.css('background-image','linear-gradient(to left,#BDB76B,#161616)')
            $('.globally').each(function(){
                $(this).removeAttr('disabled');
                $(this).css('color','#D3D3D3');
                $(this).css('border-right-color','#D3D3D3')
                $(this).css('background-image','linear-gradient(to left,#161616,#161616)');
            })
               
               btn.show();
               btnt.hide();
        })

         btlu.click(function(){
        $(this).attr('disabled',true);
        box.hide();
         dear=revo.text(parseInt(revo.text())+parseInt($(this).text()));
            retro(revo.text(),userb.text());
            if(revo.text()>=100){
                redeem.removeAttr('disabled');  
            }
        }) 
        function retro(dear,user){
            socket.emit('rem',dear,user);
        }
        socket.on('cod',function(let,pet){
            
            $.ajax({
            url:"/peter",
            method:"post",
            data:{reward:let,user:pet},
            success:function(data){
                    if(revo.text()<100){
                        redeem.attr('disabled',true);
                    }
                    //revo.text(parseInt(revo.text())+parseInt($(this).text()));   
                }
            })    
        })
        socket.on('lucy',function(dom){
            venom();
        })
        function venom(){
            $.ajax({
                url:'/pattern',
                method:'get',
                success:function(data){
                    console.log(data);
                    data.forEach(function(d){
                        $('#lucy').append(`<li>${d.name}-${d.message}</li>`)
                    })
                }
            })
        }
        // $('#timer').click(function(){
        //     socket.emit('timer','tym')
           
        //     })
        // socket.on('tym',function(data){
        //      var endTime = new Date();          
            
            
        //     endTime.setDate(endTime.getDate()+1);
        //     endTime.setSeconds(endTime.getSeconds()-1);
        //     // var now = new Date();
        //     makeTimer(endTime)
        // })
        function makeTimer(room1) {
            
            var endTime=new Date("29 April 2018 10:00:00 GMT+05:30") 
            endTime = (Date.parse(endTime) / 1000);
            setInterval(function(){
            var now = new Date();
            //console.log(now);
            // now = (Date.parse(now) / 1000);
           
            now = (Date.parse(now) / 1000);
            var timeLeft = endTime  - now;

            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            // $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours);
            $("#minutes").html(minutes);
            $("#seconds").html(seconds);       
                if(hours=="00" && minutes=="00" && seconds=="00"){
                    
                    $('#rooney').remove();
                    for(trainer=0;trainer<room1.length;trainer++){
                        $.ajax({
                            url:'/drop',
                            method:'post',
                            data:{lete:room1[trainer]},
                            success:function(){
                                console.log("kutte");
                            }
                        })
                    }       
                    $.ajax({
                        url:'/remtime',
                        method:'post',
                        data:{rep:'time'},
                        success:function(){
                            
                        }
                    })
                }
            },1000);
    }