function defaultBlackout() {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = '#000000';
  body.style.color = '#3A3A3A';
  body.style.fontFamily = 'Helvetica';
  body.style.fontSize = '2.2em';
  body.style.verticalAlign = 'middle';
  body.style.textAlign = 'center';
  body.innerHTML = '<div style="width:960px;margin:0 auto;">' + document.location.hostname + ' is...<br /><br /><div style="text-decoration:underline;">BLACKED OUT!</div><br />...in protest of <a href="http://en.wikipedia.org/wiki/Stop_Online_Piracy_Act" style="color:#FF0000">pending legislation</a> which threatens the freedoms of websites like this one and the freedoms of the people who use them.<br /><br />Please <a href="http://americancensorship.org" style="color:#FF0000">help protect our free speech</a> against the corporate and political interests which seek to take them away!<br /><br />(And don\'t worry, we\'ll be back in business tomorrow!)</div>';
}
function init() {
  if (arguments.callee.done) return;
  arguments.callee.done = true;
  if (_timer) clearInterval(_timer);
  
  if(typeof blackout === 'undefined') return defaultBlackout();
  blackout();
};
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}
/*@cc_on @*/
/*@if (@_win32)
  document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
  var script = document.getElementById("__ie_onload");
  script.onreadystatechange = function() {
    if (this.readyState == "complete") {
      init(); // call the onload handler
    }
  };
/*@end @*/
if (/WebKit/i.test(navigator.userAgent)) { // sniff
  var _timer = setInterval(function() {
    if (/loaded|complete/.test(document.readyState)) {
      init(); // call the onload handler
    }
  }, 10);
}
window.onload = init;
