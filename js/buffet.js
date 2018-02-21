var today = new Date();

var month = today.getMonth()+1;
var day = today.getDate();
var year = today.getFullYear();

var fullDate = month+"/"+day+"/"+year;

var header = "Buffet Menu - " + fullDate;

document.getElementById("buffetHeader").innerHTML = header

