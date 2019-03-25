!(function(window) {

	window.toggleNavBar = function(target){
		console.log($(target).css("display"))

		var display = $(target).css("display");
		if(display == "none"){
			$(target).css("display","block");
		}else{
			$(target).removeAttr("style");
		}
	}
})(window);