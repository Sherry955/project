var apiData = '';
function getData(){
    var hasData = $('#record tr').length >=1;
    if(hasData){
        return;
    }
    var url = 'https://api.kcg.gov.tw/api/service/get/4eba94e0-323c-4530-95a6-dd276bd8765d';
    $.get(url,'', function(data){
        apiData = data;
        var strHtml ='';
        $.each(data, function(index, element) {
            if(index == 'data'){
                var data = element[index];  
                strHtml +='<table>'  
                strHtml +='<tr>'  
                strHtml +='<th>車站代碼</th>' 
                strHtml +='<th>車站中文站名</th>' 
                strHtml +='<th>站位地點</th>' 
                strHtml +='</tr>'            
                for(var key in data){
                    strHtml += '<tr id='+key+'>'
                    strHtml += '<td>'+data[key]['車站代碼']+'</td>'
                    strHtml += '<td>'+data[key]['車站中文站名']+'</td>'
                    strHtml += '<td>'+data[key]['站位地點']+'</td>'
                    strHtml += '</tr>'
                }
                strHtml +='</table>'
            }     
        });
        $('#record').append(strHtml);
    });
}

function clearData(){
    $('#record').html('');
    $('#record').css("color", "");
    $("#textColor").val('');
}

function changeColor(){
    var hasData = $('#record tr').length >=1;
    if(hasData){
        var colorId = $("#textColor").val();
        $('#record').css("color", colorId);        
    }else{
        alert("請先取得資料!");
        $("#textColor").val('');
    }   
}

function saveSessionStorage(){
    sessionStorage.setItem('data', JSON.stringify(apiData));
}

function deleteSessionStorage(){
    sessionStorage.removeItem('data');
}
