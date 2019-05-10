function getData(){
    var url = 'https://api.kcg.gov.tw/api/service/get/4eba94e0-323c-4530-95a6-dd276bd8765d';
    $.get(url,'', function(data){
        var strHtml ='';
        $.each(data, function(index, element) {
            if(index == 'data'){
                var data = element[index];               
                for(var key in data){
                    strHtml +='車站代碼 :'+data[key]['車站代碼']+" , 車站中文站名 : "+data[key]['車站中文站名'];
                    strHtml +=' , 站位地點 :'+data[key]['站位地點']+ "\r\n";
                }
            }     
        });
        $('#content').html(strHtml);
    });
}

function clearData(){
    $('#content').html('');
    $('#content').css("color", "");
}

function changeColor(){
    var hasData = $('#content').val().length >=1;
    if(hasData){
        $('#content').css("color", "red");
    }
   
}

