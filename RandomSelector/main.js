var pic = [
    "https://i.imgur.com/EwE2wtK.jpg",
    "https://i.imgur.com/bnrpe6K.jpg",
    "https://i.imgur.com/OZX23Qy.jpg",
    "https://i.imgur.com/2kOl7lI.jpg",
    "https://i.imgur.com/BPGKVCo.jpg"
]

var lastNum = -1;
$(document).ready(function() {
    $("input").click(function()
    {
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while(randomChildNumber == lastNum)
        {
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        lastNum = randomChildNumber;
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src", pic[randomChildNumber]);
        $("img").attr("width", 300);
    });
});