var topic = [
    "手沖課程",
    "烘豆教學",
    "公休",
    "電影日",
    "桌遊日"
];

var startDate = new Date();
var secondUnit = 1000;
var minuteUnit = secondUnit * 60;
var hourUnit = minuteUnit * 60;
var dayUnit = hourUnit * 24;

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    //alert('k');
}
var x = topic.length;

function newEvent()
{
    //var objtr=document.createElement('tr');
    var tb = document.getElementById("courseTable");
    var row = tb.insertRow(tb.rows.length);
    for(var i = 0; i < 3; i++)
    {
        var cell = row.insertCell();
        
        if(i == 0)
        {
            cell.innerHTML = "<td>"+(x+1)+"</td>";
        }
        else if(i == 1)
        {
            //var nameElement = document.getElementById("Ename");
            //var name = nameElement.value;
            cell.innerHTML = "<td>"+(new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>";
            //cell.innerHTML = '<td><font color="red">'+name+'</td>'; 
        }
        
        else if(i == 2)
        {
            var nameElement = document.getElementById("Ename");
            var name = nameElement.value;
            if(name=="公休")
            {
                //cell.innerHTML = "<td><font color=\\\"gray\\\">"+name+"</td>";
                cell.innerHTML = '<td><font color="gray">'+name+'</td>';            
            }
            else
            {
                cell.innerHTML = '<td><font color="#5B33FF">'+name+'</td>';       
            }
        }
        
    }
    x++;
    /*
    var nameElement = document.getElementById("name");
    var name = nameElement.value;
    alert('A');
    $("#courseTable").append("<tr>");
    $("#courseTable").append("<td>"+(x+1)+"</td>");
    $("#courseTable").append("<td>"+
            (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
        if(name=="國定假日")
        {
            $("#courseTable").append("<td><font color=\"gray\">"+name+"</td>");
        }
        else
        {
            $("#courseTable").append("<td><font color=\"red\">"+name+"</td>");       
        }
        $("#courseTable").append("<tr>");
    */
    //stopic.push(name);
}
/*
function setStart()
{
    var monthElement = document.getElementById("month");
    var month = monthElement.value;
    var dayElement = document.getElementById("day");
    var day = dayElement.value;
    sMonth = parseInt(month);
    sDay = parseInt(day);
    setMonthAndDay(sMonth, sDay);
    //alert(typeof(sMonth));
}
*/
//setMonthAndDay(4, 1);


var M = 5;
var D = 2;

sMonth = parseInt(M);
sDay = parseInt(D);
setMonthAndDay(sMonth, sDay);
/*
function init()
{
    //alert('A');
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
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
        if(topic[x]=="國定假日")
        {
            $("#courseTable").append("<td><font color=\"gray\">"+topic[x]+"</td>");
        }
        else
        {
            $("#courseTable").append("<td><font color=\"red\">"+topic[x]+"</td>");       
        }
        $("#courseTable").append("<tr>");
    }
}
init();
*/
/*


function setStart()
{
    var monthElement = document.getElementById("month");
    var month = monthElement.value;
    var dayElement = document.getElementById("day");
    var day = dayElement.value;
    sMonth = parseInt(month);
    sDay = parseInt(day);
    alert(typeof(sMonth));
}
*/
