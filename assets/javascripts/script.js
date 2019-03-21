/*var showMore = function(container,currentCount, count){
	console.log( container, currentCount , count)

	var cc = currentCount;
	var cn = count;*/

	/*var d = await axios.get('/cookbooks.json');

	var s = cc;
	var e = s + count;
	var data = d.data;

	for( var i = s ; i < e ; i++){
		if( i < data.length -1){
			console.log(d[i].title)
		}
	}*/
/*	axios.get('/cookbooks.json')
	.then(function(response){
		//document.getElementById(container).append(response.data.length)
		var data = response.data;
		var s = parseInt(cc);
		var e = s + parseInt(count);


		for( var i = s ; i <= e ; i++){
			if( i < data.length -1){
				document.getElementById(container).append(data[i].title+',  '+s+'|'+e+'  ')
				document.getElementById('current_more_count').value = e;
			}
		}
		response.data.map(function(cookbook){
			//document.getElementById(container).append(cookbook.length)
		})
	});
}*/







!(function(window){

	window.showMore = function(showEl,count){
		var currentCount =parseInt($("#"+showEl+" li:last").attr('index'));
		
		var nextcount = currentCount + parseInt(count);

		var loading_html = '<li id="loading" class="col-12 p-2 fiex-fill db-highlight d-flex justify-content-center "><div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div></li>';
		$('#'+showEl).append(loading_html);



		axios.get('/cookbooks.json')
			.then( function(response){
				var data = response.data.slice(currentCount,nextcount);
				var index = currentCount;
				for( var i=0; i<= data.length; i++){
					var cookbook = data[i];

					if(cookbook != undefined){
						var index = index +1;
					var element_html = '<li class="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-2 fiex-fill db-highlight" index="'+ index +'"><div class="card"><a href="'+cookbook.url+'">';
					  	element_html += '<img src="/assets/images/16-9.jpg" class="card-img-top" alt="'+cookbook.title+'">';
					  	element_html += '</a><div class="card-body px-0">';
					    element_html += '<a href="'+ cookbook.url+'"><h5 class="card-title">'+cookbook.title+'</h5></a>';
					    element_html += '<p class="card-text text-dark font-weight-light">'+cookbook.excerpt+'</p>';
					    element_html += '<div class="row mx-0 font-weight-light text-secondary size-85 ">';
					    element_html += '<span class="col-6 p-0"><i class="far fa-clock mr-2"></i>'+ cookbook.minute +'分钟</span>';
					    element_html += '<span class="col-6 p-0"><i class="fab fa-cloudscale mx-2"></i>'+ cookbook.kcal +'Kcal</span>';
					    element_html += '</div></div></div></li>';

					    $('#'+showEl).append(element_html);
					}
				}

				$("#loading").remove();
				if(parseInt($("#"+showEl+" li:last").attr('index')) == $("#"+showEl).attr("count") ){
					$("#cookbooks-btn").hide();
					$("#cookbooks-finish").show();
				}
			})
	}

})(window);