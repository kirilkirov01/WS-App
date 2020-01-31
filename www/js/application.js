// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require perfect-scrollbar
//= require plugins/perfect-scrollbar.jquery.min
//= require core/jquery.min
//= require core/popper.min
//= require core/bootstrap.min
//= require plugins/bootstrap-notify
//= require plugins/chartjs.min
//= require black-dashboard
//= require black-dashboard.min
//= require home
//= require input
//= require plugins/strftime
//= require dashboard
//= require underscore
//= require demo
//= require_tree 
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None; Secure";
}
function checkCookie(cname) {
  if (getCookie(cname) != "") {
   	return 1;
  } else {
	return 0;
  }
}
var wsGlobal = checkCookie("weatherStation") ? getCookie("weatherStation") : 1;
var timGlobal = checkCookie("timeSpan") ? getCookie("timeSpan") : "6.hours.ago";
