var todoList=[];
var socket =io.connect();
$(document).ready(function(){
    var i;
    let inp=$('#inp');
    let btnu=$('#btnu');
    let result=$('#result');
    let list=$('#list');
    //   displayinfo();
    //display(name1,data,all,pic);
    let connected=$('#connected')
    let btn2=$('#save');
    var btn3=$('#close1')
    var file=$('#file')
    var div=$('#parentlogin');
    var div1=$('#parentsocket');
    var div2=$('#parentregister')
    var btn1=$('#login');
    var btn4=$('#Register')
    
    //var name=prompt("What is your Name?");
    // if(name){
    //     prompt.close();
    // }
    var room='ab1234';
    var alldata=[];
    alldata.push(name);
    //connected.append(`<li>${alldata}</li>`)
    //console.log(alldata)
    btnu.click(function(){
        let value=inp.val();
        if(value) {
            add(value);
        }
        // let file2=file.val();
        // file1(file2);
        // console.log(file.val());
    });
    
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
    function add(value){
        socket.emit('message',name,value); //Emitter1
        // socket.emit('name',name);

        socket.emit('room',room);
    }
    socket.emit('join',name);
    // function file1(file){
    //     socket.emit('chat',file);
    // }
    socket.on('people',function (name,data) {
        connected.append(`<li>${data}.${name}</li>`)
    });
    socket.on('tpeople',function (data) {
        console.log(data);
    });
    socket.on('send',function (data) {
            result.append(`<li>${data}</li>`);
        }
    );
    socket.on('addimage', function (data) {
        $.ajax({
            url:'/add',
            method:'post',
            data:{todo:data},
            success:function () {
                
                user.push(data);
                localStorage.setItem(`${data.user}`, JSON.stringify(user));
                $('#parentsocket')
                    .append(
                        $('#result').append($('<b>').text(data.user) , '<img src="' + data.msg + '"/>'
                        ))
            }
        })

    });
    socket.on('addimage1', function (data) {
        $.ajax({
            url:'/add1',
            method:'post',
            data: {pic:data},
            success:function () {
                    console.log(data);
                // user.push(data);
                // localStorage.setItem(`${data.user}`, JSON.stringify(user));
                $('#profilepic')
                    .append(
                        $('#image').append( '<img src="' + data.msg + '"/>'
                        ))

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
                socket.emit('user image',name, evt.target.result);
            };
            reader.readAsDataURL(file);
        })
    })
    socket.on('send_all',function (data) {//Listener 2
        result.append(`<li>${data.user}:${data.msg}  
                       </li>`);
    });
    socket.on('send_all1',function (data) {
        var id=data.id;
        var msg=data.msg;
        var user=data.user;
        $.ajax({
            url: '/addu',
            method: 'post',
            data: {todo: data},
            success: function() {
                
                
                //if (user) {
                    user = new Array();
                    user.push(data);
                    localStorage.setItem(`${data.user}`, JSON.stringify(user));
                //}
                // else {
                //     todoList.push(data);
                //     localStorage.setItem('todoList', JSON.stringify(todoList));
                //     //result.append(`<li>${data.id}:${data.msg} </li>`);
                // }
            }
        })
    })
    socket.on('new',function(name1,data,all,pic,v) {
        //if(user){
        //console.log(v);
        //console.log(user);
        // user=   JSON.parse(localStorage.getItem('user')) || [];
        //     if(user.length) {
        //         // Get data
        //         render(user);
        //     }

            //else {
                // Make a call to API
                // Set the data inside LS
                displayCall(v);
               displaypic(v);
            //}

        //}
        // else {
        //     todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        //     if (todoList.length) {
        //         // Get data
        //         render(todoList);
        //     }
        //
        //     else {
        //         // Make a call to API
        //         // Set the data inside LS
        //         displayCall();
        //     }
        // }
        //display(name1,data,all,pic);
    });
    function render(data) {
         data.forEach(function(d) {
        //     console.log(d)
        //
        //     result.append(`<li>${d.name}:${d.message}</li>`);

        //})
        //for(i=0;i<data.length;i++) {
            // console.log(data[i].length);
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
    function render2(data) {
         data.forEach(function(d) {
        
                $('#image').append(`<img src="${d.message}">`)
           
        })
    }
    function displayCall(v) {
        $.ajax({
            url: '/displayu',
            method: 'get',
            success: function(data) {
                user = data;
                
            
                localStorage.setItem(`${v}`, JSON.stringify(user));
                // console.log(data[0]);
                
                render(user);
            }
        })

    }
    function displaypic(v) {
        $.ajax({
            url: '/display2',
            method: 'get',
            success: function(data) {
                user = data;
                //console.log(v);
                // console.log(data[0]);
                
                render2(data);
            }
        })

    }
    

    // function display(name1,data,all,pic) {
    //     // $.ajax({
    //     //     url:'/display',
    //     //     method: 'post',
    //     //     data:{todo:data},
    //     //     success:function () {
    //             for(i=0;i<data.length;i++) {
    //                 // console.log(data[i].length);
    //                 if (data[i].length <= 100) {
    //                     console.log(name1);
    //                     result.append(`<li>${name1[i]}:${data[i]}</li>`)
    //                 }
    //                 else {
    //
    //                     result.append(`<li>${name1[i]}:<img src="${data[i]}"></li>`)
    //                 }
    //             }
    //             for(i=0;i<all.length;i++){
    //                 connected.append(`<li>${i+1}.${all[i]}</li>`)
    //             }
    //         }
    //})

    //}
});
function random(){
socket.on('back',function(data){
        // $.ajax({
        //     url:"/friends",
        //     method:"post",
        //     data:{todo:data},
        //     success:function(data){
        //         list.append(`<li>${data.user}
        //                     <button>Yes</button>
        //                     <button>No</button>
        //             </li>`);
        //     }
        // })
        console.log("anyone")
    })
}