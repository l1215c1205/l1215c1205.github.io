var Today = new Date();
var startday = new Date("Dece 23, 2016 19:20:00")

timediff = (Today.getTime()-startday.getTime())/3600000
people = 5800 + Math.floor(timediff/7)
document.write ("台灣區會員數 : " + people)
