var print_cookbook = function(cookbook){
	var doc = new jsPDF("p", "pt", "a4");
	
	//Logo

	getBase64Images('/assets/favicon/favicon-black.jpg')

}

var getBase64Images = function(img){
	/*var canvas = document.createElement("canvas");

	canvas.height = img.height;
	canvas.width = img.width;

	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, img.width, img.height);*/

	var canvas = document.createElement("canvas");  
     canvas.width = img.width;  
     canvas.height = img.height;  
     var ctx = canvas.getContext("2d");  
     ctx.drawImage(img, 0, 0, img.width, img.height);

	console.log(canvas.toDataURL("image/png"));
}