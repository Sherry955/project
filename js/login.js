function login(){
    var name = $("#name").val();
    var password = $("#password").val();
    var error = "";
    if("" == name && "" == password){
        error = "Pls enter username and password !!</br>"   
    }else if("admin" == name && "123456" == password){
        window.location="./main.html";
    }else{
        error = "UserName or Password is incorrect !!</br>"      
    }
    $("#msg").html(error);
}

function getUserInfo(){
    var userInfo = "account: admin<br>password: 123456";
    $("#accountInfo").html(userInfo);
    setTimeout(function(){
        clearIno();
    },3000);
}

function clearIno(){
    $("#accountInfo").html("");
}