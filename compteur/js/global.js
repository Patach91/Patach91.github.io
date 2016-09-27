/*
Author: WebThemez
Author URL: http://webthemez.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
*/
$(function(){$.backstretch("images/road2.jpg");var n="December  01, 2017 00:00:00";$(".countdown.simple").countdown({date:n}),$(".countdown.styled").countdown({date:n,render:function(n){$(this.el).html("<div>"+this.leadingZeros(n.days,3)+" <span>days</span></div><div>"+this.leadingZeros(n.hours,2)+" <span>hrs</span></div><div>"+this.leadingZeros(n.min,2)+" <span>min</span></div><div>"+this.leadingZeros(n.sec,2)+" <span>sec</span></div>")}}),$(".countdown.callback").countdown({date:+new Date+1e4,render:function(n){$(this.el).text(this.leadingZeros(n.sec,2)+" sec")},onEnd:function(){$(this.el).addClass("ended")}}).on("click",function(){$(this).removeClass("ended").data("countdown").update(+new Date+1e4).start()})});