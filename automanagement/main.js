$(document).ready(function() {
    //setMonthAndDay(4, 1);
    /*
    var sMonth = -1;
    var sDay = -1;
    alert('Bclick');
    $("input").click(function()
    {
        var monthElement = document.getElementById("month");
        var month = monthElement.value;
        var dayElement = document.getElementById("day");
        var day = dayElement.value;
        sMonth = parseInt(month);
        sDay = parseInt(day);
        setMonthAndDay(sMonth, sDay);
        alert('click');
    });
    alert('Aclick');
    */
    //alert(sMonth);
    
    
    $("#courseTable").append("<tr><th>活動編號</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;
     //alert(typeof(topic));
    
    for(var x=0; x<topicCount; x++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        $("#courseTable").append("<td>"+
                (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
        if(topic[x]=="公休")
        {
            $("#courseTable").append("<td><font color=\"gray\">"+topic[x]+"</td>");
        }
        else
        {
            $("#courseTable").append("<td><font color=\"#5B33FF\">"+topic[x]+"</td>");       
        }
        $("#courseTable").append("<tr>");
    }
    

});