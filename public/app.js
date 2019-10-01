var todoList=[];
var i;
var y;
var z;
var net;
var loft;
var t;
var pk;
var rap;
var nec;
var no=[];
var oppo=[];
var roomie=[];
var loot;
var specs;
var trainer;
var teller;
var xw;
var po;
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
let mone=$("#room");
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
   
    if (window.location.pathname == "/"){
     socket.emit('dis',$('#nameebox').val());
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
 // function match(){
 //    if($('#passwordbox1').val() != $('#confirmpbox').val()){
 //        //$('#submitboxreg').hide();
 //        // $('#submitboxreg').attr('disabled',true);
 //    }
 //    else{
 //        $('#submitboxreg').removeAttr('disabled');
 //    }
 //   }
 $('#changee').click(function(){
    $('#parentpassword').show();
 })

    $('#confirmbox').click(function(){
        if(!$('#oldbox').val() || !$('#newbox').val() || !$('#confirmiebox').val()){
            $('#letter').text('Fields Should Not Be Empty');
                    $('#alexa').show();
                    $('#alexa').animate({"top":"+=42%"},"fast")
                    $('#alexa').css({"animation-name": "boxanimate" });
                    $('#alexa').css({"animation-duration": "1s" });   
        }
        else if($('#newbox').val() != $('#confirmiebox').val()){
            $('#letter').text('Confirm Password Does Not Match!!');
                    $('#alexa').show();
                    $('#alexa').animate({"top":"+=42%"},"fast")
                    $('#alexa').css({"animation-name": "boxanimate" });
                    $('#alexa').css({"animation-duration": "1s" });
        }
        else{
            $('#parentpassword').hide();
            $.ajax({
                url:'/chaneg',
                method:'post',
                data:{first:$('#oldbox').val(),second:$('#newbox').val(),usere:userb.text()},
                success:function(data){
                    console.log('succe')
                },
                error:function(){
                    $('#letter').text('Old Password is different');
                    $('#alexa').show();
                    $('#alexa').animate({"top":"+=42%"},"fast")
                    $('#alexa').css({"animation-name": "boxanimate" });
                    $('#alexa').css({"animation-duration": "1s" });   
                }
            })
        }

    })
   function matchname(){
        socket.emit('match','left');
   }

   socket.on('matching',function(data){
    console.log(data);
    
    for(po=0;po<data.length;po++){
        
        if(data[po]==$('#namebox').val()){
            console.log(po);
            $('#alertuser').text('Name is already taken!!');
            // $('#namebox').css('border-color','red');
            submitboxreg.attr('disabled',true);
            break;
        }
        else{
            $('#alertuser').text('');
            submitboxreg.removeAttr('disabled');
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
        // console.log()
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
        else{
         socket.emit('join1',$('#nameebox').val(),active,$('#passebox').val());
        socket.emit('neww',qwe);
        }
    })

    $('#okide').click(function(){
        socket.emit('newtry',$('#idebox').val());
    })

    socket.on('lets',function(idle,del){
        $('#parentid').hide();
        if(idle[net]!=del){
            $('#ide').text('Incorrect Id.. Try Again!!')
            $('#parentid').show();    
        }
        else{
            socket.emit('con',$('#nameebox').val());
            socket.emit('neww',qwe);
        }
    })

    $('#ok').click(function(){
        $('#alexa').hide();
        $('#alexa').animate({"top":"-=42%"},"fast")
        // pubg.animate({"left":"-=240px"},"slow");
    })
    

   
    
    btn.click(function(){
        let value=inp.html();
        console.log(inp.html());
        // console.log(inp.val());
        if(value) {
            add(value);
        }
     
    });
  
    btnu.click(function(){

        let value=inpu.html();
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
    $('#profileru').click(function(){
         vds=userb.text();
        console.log(vds);
        // socket.emit('value',vds);
         venom();
         $(this).hide();
         divr.animate({"top":"+=450px"},"slow");
        $('#propru').show();
    })
    $('#propru').click(function(){
        $(this).hide();
        divr.animate({"top":"-=450px"},"slow");
        $('#profileru').show();
    })
    profile.click(function(){
         vds=userb.text();
        console.log(vds);
        socket.emit('value',vds);
         displayfriend(userb.text());
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
    //  okrrom})
    
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
    $('#demo').click(function(){
        $('.preloader').show();
        // $('.preloader').fadeOut(5000);
        $('body').css('opacity','0.5');
        setTimeout(function(){
            $('.preloader').hide();
            $('body').css('opacity','1');
        },3000)
    })

        
    submitboxreg.click(function(){
        if(!$('#namebox').val() || !$('#passwordbox1').val() || !$('#confirmpbox').val()){
            $('#letter').text('Fields Should Not Be Empty');
                    $('#alexa').show();
                    $('#alexa').animate({"top":"+=42%"},"fast")
                    $('#alexa').css({"animation-name": "boxanimate" });
                    $('#alexa').css({"animation-duration": "1s" });
        }
        else if($('#passwordbox1').val() != $('#confirmpbox').val()){
            $('#letter').text('Confirm Password Does Not Match!!');
                    $('#alexa').show();
                    $('#alexa').animate({"top":"+=42%"},"fast")
                    $('#alexa').css({"animation-name": "boxanimate" });
                    $('#alexa').css({"animation-duration": "1s" });
        }
        else{
            div2.hide();
            $('preloader').show();
            // $('.preloader').fadeOut(3000);
            $('body').css('opacity','0.5');
            socket.emit('tose',$('#namebox').val(),$('#passwordbox1').val())
        }
    })
    socket.on('later',function(name,password){
        $.ajax({
            url:'/signup',
            method:'post',
            data:{username:name,password:password},
            success:function(){
                $('.preloader').show();
                $('body').css('opacity','1');
                div1.css('opacity','1');
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
    


    redeem.click(function(){
        $('#parentmobile').show();
    })
    $('#okmoble').click(function(){
        $('#parentmobile').hide();
        $.ajax({
            url:'/mobile',
            method:'post',
            data:{user:userb.text(),mobile:$('#moblebox').val()},
            success:function(){
                rap=revo.text(revo.text()-100);
                retro(revo.text(),userb.text());
         
            }
        })
    })
    yess.click(function(){
        //var nameroom=prompt("Enter the Room Name");
        $('#parentroom').show();

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
        },86400000);
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
    day7.click(function(){
        socket.emit('seventh','xc');  
    })
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
    $('#skip4').click(function(){
        $('#lets4').hide();
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
      $('#next2').click(function(){
        $('#lets3').hide();
        $('#lets4').show();  
      })
    $('#closereward').click(function(){
        $('#outside').hide();
    })

    $('#setting').click(function(){
        $('#manu').toggle();
    })
    $('#liki').click(function(){
        $(this).css('color','blue');
        $(this).attr('disabled',true);
        socket.emit('liki','peo');
    })
    function add(value){
        socket.emit('troop',local.text());
        socket.emit('message',$('#nameebox').val(),value,get.text()); //Emitter1
       // socket.emit('name',name);

    
    }
    function exactly(value,room111){
        if(value){
            //  if(value=="lund" || value=="chutiya" || value=="chutiye" || value=="fuck" || value=="fuck off" || value=="madarchod" || value=="motherfucker"){
            //     value="****";
            // }
            socket.emit('qop',$('#dawn').text());
            socket.emit('mock',$('#nameebox').val(),value,userb.text(),room111);
        }
    }
    function addr(value){
        console.log(broom);
        socket.emit('messager',$('#nameebox').val(),value); //Emitter1
       // socket.emit('name',name)
    
    }

    socket.on('people',function (name,data) {
        // connected.append(`<li id="connie">${data}.<span class='${name}' id="try">${name}</span>
        //     <button class="fas fa-circle" id="online" style="color:green;"></button>
           //  </li>`)
        
        $('#count').text(`${data}`);
      
    });
    socket.on('disk',function(kill,all,status){
        console.log("beta tumse na hoga")
                // console.log($(`.${kill}`).val());
                $(`.${kill}`).next().remove();
                $(`.${kill}`).append(`<button class="fas fa-circle" id="online" style="color:red;"></button>`);
                // $(`.${kill}`).append(`<img class="onlineimg" src="nf/if_status-busy_46252.png" />`);
        })
    socket.on('monitor',function (data,user) {
        $(`.${data}`).next().remove();
        $(`.${data}`).append(`<img class="onlineimg" src="nf/if_status_46254.png" />`);
        // $('#count').text(`${user}`)
        console.log("bro")
    });
    socket.on('send',function (data) {
        result.append(`<li>${data}</li>`);
        }
    );
    socket.on('barb',function(text){
        get.text(text);
    })
    socket.on('king',function(kutr){
        $('#rise').text(kutr);
    })
    socket.on('adde', function (data) {
        console.log("draama");
        if(get.text()==local.text()){
            if(`${data.id}`==$('#nameebox').val()){
                result.append(`<li><span id="orange"><span id="${data.id}" class="propt"><strong>${data.id}</strong></span><br><span id="mesg"><br><img src="${data.msg}" style="border-radius: 0.25em"></imgEXTERNAL_FRAGMENT></br></span></br>
                              </span></li>`);
            }
            else{
                result.append(`<li><span id="blue"><span id="${data.id}" class="proptie"><strong>${data.id}</strong></span>
                     <br><span id="mesg"><br><img src="${data.msg}" style="border-radius: 0.25em"></br></span></br>   
                       </span></li>`);
            }



        }
    });
    

      $('#emoj').click(function(){
        console.log(this.src);
        var pe=$(this).clone();
            inp.append(pe);
            inpu.append(pe);
            // console.log(xw);
        // inp.append('<img src="../lib/img/blank.gif"/>')
      })
      $('#selece').click(function(){
        $('.emoji-menwd').toggle();
        $('#emoji-arrow').toggle();
      })
      $('.img').click(function(){
        console.log(this.src);
        var pe=$(this).clone();
            inp.append(pe);
            inpu.append(pe);
            // console.log(xw);
        // inp.append('<img src="../lib/img/blank.gif"/>')
      })
    socket.on('addimage', function(data){
        
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
                socket.emit('user image',$('#nameebox').val(), evt.target.result,get.text());   
            };
            reader.readAsDataURL(file);
        })
    })
    socket.on('addimageut', function (data) {
        console.log(data);
        if($('#dawn').text() == $('#rise').text()){
            if(`${data.user}`== userb.text()){
            result1.append(`<li><span id="orange"><span id="${data.user}" class="propt"><strong>${data.user}</strong></span><br><span id="mesg"><br><img src="${data.msg}" style="border-radius: 0.25em"></br></span></br>
                                  </span></li>`);
                    }
             else{
              result1.append(`<li><span id="blue"><span id="${data.user}" class="proptie"><strong>${data.user}</strong></span>
                         <br><span id="mesg"><br><img src="${data.msg}" style="border-radius: 0.25em"></br></span></br>   
                           </span></li>`); 
                }
            }
        
    });
    socket.on('addimageuting', function (data) {
        $.ajax({
            url:'/addprofile',
            method:'post',
            data:{todoing:data},
            success:function () {
                
                
            }
        })
    })
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
                socket.emit('user image1',$('#nameebox').val(), evt.target.result);
            };
            reader.readAsDataURL(file);
        })
    })
    $(function () {
        $('#myImageu').on('change', function (e) {
            var file = e.originalEvent.target.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
                socket.emit('qop',$('#dawn').text());
                socket.emit('user imageut',userb.text(), evt.target.result,asd);
            };
            reader.readAsDataURL(file);
        })
    })
    socket.on('send_all',function (data) {//Listener 2
        console.log(data.msg);
        if(get.text()==local.text()){
        if(`${data.id}`==$('#nameebox').val()){
        result.append(`<li><span id="orange"><span id="${data.id}" class="propt"><strong>${data.id}</strong></span><br><span id="mesg"><br>${data.msg}</br></span></br>
                              </span></li>`);
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
        if($('#dawn').text() == $('#rise').text()){
            if(`${data.user}`== userb.text()){
            result1.append(`<li><span id="orange"><span id="${data.user}" class="propt"><strong>${data.user}</strong></span><br><span id="mesg"><br>${data.msg}</br></span></br>
                                  </span></li>`);
                    }
             else{
              result1.append(`<li><span id="blue"><span id="${data.user}" class="proptie"><strong>${data.user}</strong></span>
                         <br><span id="mesg"><br>${data.msg}</br></span></br>   
                           </span></li>`); 
                }       
            }


        // result1.append(`<li>${data.user}:${data.msg}</li>`);
       
        })
    })

    socket.on('saping',function (data) {
        
         var id=data.id;
        var msg=data.msg;
        var user=data.user;
        $.ajax({
            url: '/addu',
            method: 'post',
            data: {todo: data},
            success: function() {
                
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
        $('#inp').css('display','inline-block');
        $('#selece').css('display','block');
        $('#attach').css('display','block');
        $('#btn').css('display','block');
        $('#myImage').css('display','block');
        ramp(qwe);
        
        // while(all.length)
        
         //display(name1,data,all,pic);
     });

    function locall(dataa){
     // // for(i=0;i<pep.length;i++){
     // //    console.log(pep.charAt(i));<button class="fas fa-circle" id="online" style="color:red;"></button>
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
                result.append(`<li><span id="orange"><span id="${d.name}" class="propt"><strong>${d.name}</strong></span><br><span id="mesg"><br><img src="${d.message}" style="border-radius: 0.25em"></br></span></br>
                              </span></li>`)
                }
            }
            else{
                if (d.message[6]!='/') {
                result.append(`<li><span id="blue"><span id="${d.name}" class="proptie"><strong>${d.name}</strong></span>
                    <button onclick="request1(this)" id="requse">Request</button>
                                <button onclick="roomreq(this)" id="quickie">Quick Chat</button>
                    <br><span id="mesg"><br>${d.message}</br></span></br>
                                 </span></li>`)
            }
            else {
                result.append(`<li><span id="blue"><span id="${d.name}" class="proptie"><strong>${d.name}</strong></span><br><span id="mesg"><br><img src="${d.message}" style="border-radius: 0.25em"></br></span></br>
                              </span></li>`)
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
            if(d.request == userb.text()){
             
                mone.append(`<li><span id="span">${d.name}</span>
                     <button onclick="addlist(this)" id="yessie" class="fas fa-check"></button>
                     <button onclick="remove(this)" id="nooe" class="fas fa-times"></button>   
                       </li>`);
            }
           
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
        // $('.preloader1').show();
        // $('body').css('opacity','0.5');
        // setTimeout(function(){
        //     $('.preloader1').hide();
        //     $('body').css('opacity','1');
        // },5000);
        data.forEach(function(d){
            console.log(d);
            friend.append(`<li id="froe">
                            <button onclick='openat(this)' id="Adminq">${d.name}</button>
                            <button hidden>${d.room}</button>
                        </li>`)
        })
    }

    function displayfriend(fro) {
        mone.empty();
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
   


 

   

    function request1(el){
        var c=$(el).prev().text();
        console.log(c);
        socket.emit('reply',c,$('#nameebox').val())
       
        
        
        }
        function roomreq(el){
            var that=el;
            var pc=$(el).prev().prev().text();
            console.log(pc);
            console.log($('#nameebox').val());
            loot=name;
            $(el).attr('disabled',true);
            setTimeout(function(){$(el).removeAttr("disabled")},5002);
            socket.emit('quick',pc,$('#nameebox').val());
        }
        socket.on('back',function(data,dep,rew){


            if(rew.length==0){
                $('#letter').text('User need to Register First');
                    $('#alexa').show();
                    $('#alexa').animate({"top":"+=42%"},"fast")
                    $('#alexa').css({"animation-name": "boxanimate" });
                    $('#alexa').css({"animation-duration": "1s" });
            }
            for(nec=0;nec<rew.length;nec++){ 
                console.log(dep);
               if(rew[nec] == dep && rew[nec] == data){
                console.log("eres") 
                $.ajax({
                        url:"/friendss",
                        method:"post",
                        data:{todo2:data,tomo:dep},
                        success:function(){
                            console.log("success");
                        }
                    })
                break;
                }
            }
            if(nec==rew.length && rew.length!=0){
                    $('#letter').text('User need to Register First');
                    $('#alexa').show();
                    $('#alexa').animate({"top":"+=42%"},"fast")
                    $('#alexa').css({"animation-name": "boxanimate" });
                    $('#alexa').css({"animation-duration": "1s" });
            }
       
            

       
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
            connected.empty();
            for(z=0;z<all.length;z++){
                if(status[z]==0){
                    connected.append( `<li id="connie">${z+1}.<span class='${all[z]}' id="try">${all[z]}</span><button class="fas fa-circle" id="online" style="color:green;"></button></li>`)
                }
                else{
                    connected.append( `<li id="connie">${z+1}.<span class='${all[z]}' id="try">${all[z]}</span><button class="fas fa-circle" id="online" style="color:red;"></button></li>`)
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
                    if(d.user1==$('#nameebox').val() || d.user2==$('#nameebox').val()){
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
        IDGenerator();
        console.log(specs);  
        $.ajax({
            url:"/room",
            method:"post",
            data:{room:specs},
            success:function(){
                console.log("room created");
            }
        })
        $.ajax({
            url:"/remove",
            method:"post",
            data:{vet:userb.text()},
            success:function(){
                console.log("delhi");
            }
        })
        socket.emit('value',vds);
        socket.emit('fire',cx,specs);
        }
        
        function IDGenerator() {
          this.length = 8;
         this.timestamp = +new Date;
         trap();    

         function _getRandomInt( min, max ) {
            return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
         }
         
            function trap() {
             var ts = this.timestamp.toString();
             var parts = ts.split( "" ).reverse();
             var id = "a";
             
             for( var i = 0; i < this.length; ++i ) {
                var index = _getRandomInt( 0, parts.length - 1 );
                id += parts[index];  
             }
             specs=id;
             return id;
         }

         
     }

    socket.on('ztrack',function(we,se){
        $.ajax({
            url:"/addlist",
            method:"post",
            data:{todo33:we,vet:userb.text(),todo11:se},
            success:function(){
                friend.append(`<li id="froe"><button onclick='openat(this)' id="Adminq">${we}</button>
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
        $('#inpu').show();
        $('myImageu').show();
        $('#btnu').show();
        $('#attachement').show();
        $('#chatidin').show();
        $('#cas1').show();
        $('#cap12').show();
        $('#cap11').show();
        $('#casing1').show();
        $('#caping12').show();
        $('#caping11').show();
        $('#selece').css('display','block');
        $('#chatidin').text($(el).text())
        result1.scrollTop = result1.scrollHeight ;
        pack=$(el).text();
         asd=$(el).next().text();
         $('#dawn').text($(el).next().text());
        vds=userb.text();
        console.log(vds);
        result1.empty();
        sow.text(pack);
        sow.show();
        socket.emit('create',asd);
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
                    console.log(d);
                    if(d.name==userb.text()){       
                        if (d.message[2]!='/' && d.message[8]!='/') {
                            //console.log(name1);
                            result1.append(`<li><span id="orange"><span id="${d.name}" class="propt"><strong>${d.name}</strong></span><br><span id="mesg"><br>${d.message}</br></span></br>
                                          </span></li>`)
                        }
                        else {
                            result1.append(`<li><span id="orange"><span id="${d.name}" class="propt"><strong>${d.name}</strong></span><br><span id="mesg"><br><img src="${d.message}" style="border-radius: 0.25em"></br></span></br>
                                          </span></li>`)
                            }
                        }
                        else{
                            if (d.message[2]!='/' && d.message[8]!='/') {
                            result1.append(`<li><span id="blue"><span id="${d.name}" class="proptie"><strong>${d.name}</strong></span>
                                            <br><span id="mesg"><br>${d.message}</br></span></br>
                                             </span></li>`)
                        }
                        else {
                            result1.append(`<li><span id="blue"><span id="${d.name}" class="proptie"><strong>${d.name}</strong></span><br><span id="mesg"><br><img src="${d.message}" style="border-radius: 0.25em"></br></span></br>
                                          </span></li>`)
                            }
                        }
                    // if(d.name==userb.text()){
                    //     result1.append(`<li><span id="orange"><span id="${d.name}" class="propt"><strong>${d.name}</strong></span><br><span id="mesg"><br>${d.message}</br></span></br>
                    //           </span></li>`);
                    // }
                    // else{
                    //     result1.append(`<li><span id="blue"><span id="${d.name}" class="proptie"><strong>${d.name}</strong></span><br><span id="mesg"><br>${d.message}</br></span></br>
                    //           </span></li>`);
                    // }
                    
                })
            }
        })
    })
        socket.on('remorse',function(data,clients,get){
              console.log(clients);
            for(i=0;i<clients.length;i++){
                if(clients[i]==$('#nameebox').val()){
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

        $('#okrrom').click(function(){
        socket.emit('roomid',$('#rrombox').val());
    })

        socket.on('actual',function(samne,entwe,arraay){
            $('#parentroom').hide();
            if(entwe==""){
                 $('#parentroom').show();
            }
            if(arraay.length==0){
                socket.emit('insert',$('#rrombox').val(),samne,$('#nameebox').val());
            }
            for(i=0;i<arraay.length;i++){
               if(entwe==arraay[i]){
                $('#rrom').text('Room is Taken...Enter Again!!')
                 $('#parentroom').show();
                 break;
               }
           }
           if(i==arraay.length && arraay.length!=0){ 
            socket.emit('insert',$('#rrombox').val(),samne,$('#nameebox').val());
            }
               
        })

        socket.on('chale',function(rona,samne,apan,all){
           
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
                if(samne==$('#nameebox').val() ||apan==$('#nameebox').val()){
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
            $('#chatid').text($(el).text());
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
        console.log($(this).text());
        console.log($(this).val());
        

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
        
            
        function venom(){
            $('#lucy').empty();
            $.ajax({
                url:'/pattern',
                method:'get',
                success:function(data){
                    console.log(data);
                    data.forEach(function(d){
                        // $('#lucy').empty() room;
                        $('#lucy').append(`<li><span>${d.name}</span>:<span>${d.message}</span><button onclick="repel(this)">remove</button></li>`)
                    })
                }
            })
        }
        
        function repel(el){
            console.log($(el).prev().prev().text());
            
            $.ajax({
                url:'/remob',
                method:'post',
                data:{mo:$(el).prev().prev().text()},
                success:function(data){
                    $(el).parent().remove();
                }
            })
        }

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
