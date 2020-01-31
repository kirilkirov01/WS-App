$(document).ready(function(){
	var old;
	var old_data
	$(".dropbtn").hover(function(){
	  old_data = $(this).attr("data-color")

	  old = $(this).css("background-color")
	  switch (old_data) {
	  	case "blue":
	  		$(this).css("background-color",'#336699')
	  		break;
	  	case "green":
	  		$(this).css("background-color",'#009999')
	  		break;
	  	default:
	  		$(this).css("background-color",'#990073')
	  		break;
	  }

	  $(this).removeAttr("data-color")
	},function(){
	  $(this).css("background-color",old)
	  $(this).attr("data-color", old_data)
	})
	if (!(checkCookie("timeSpan"))) {
		setCookie("timeSpan", "6.hours.ago",1)
	}

})