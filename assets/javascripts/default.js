!((window) => {
	var languageKEY = 'SIMPLEFOOD-LANGUAGE-KEY';

	var app = angular.module('simpleFood', ['pascalprecht.translate', 'ngSanitize']);

	app.config(['$translateProvider', function($translateProvider){
		$translateProvider.useStaticFilesLoader({
			prefix: '/i18n/',
			suffix: '.json'
		});

		var defaultLanguage = window.sessionStorage.getItem(languageKEY) || 'zh-CN';
		window.sessionStorage.setItem(languageKEY,defaultLanguage);
		$translateProvider.preferredLanguage(defaultLanguage);
	}]);
	app.controller('Application', function(){

	});
	app.controller('Footer', function(){

	});

	app.controller('Navbar', function(){
		this.navbar_hide = "d-none";
		this.show = false;
		this.toggleNavbar = function(){
			console.log(this.show)
			if(this.show){
				this.navbar_hide="d-none";
				this.show=false;
			}else{
				this.navbar_hide="";
				this.show=true;
			}
		}

		this.searchHide = false;
		this.searchContainer = function(){
			this.searchHide = !this.searchHide;
			console.log(this.searchHide)
		}
	});


	app.controller('SelectLanguage', ['$translate',function($translate){
		var defaultLanguage = window.sessionStorage.getItem(languageKEY) || 'zh-CN';
		this.language = defaultLanguage;
		this.languages = [
			{ code:'zh-CN', label: "简体中文"},
			{ code:'zh-HK', label:  "繁體中文(香港)"},
			{ code:'zh-MO', label:  "繁體中文(澳門)"},
			{ code:'zh-TW', label:  "繁體中文(台灣)"},
			{ code:'en-US', label:  "English"}
		]
		
		this.selectLanguage = function(v){
			if(v !== undefined){
				window.sessionStorage.setItem(languageKEY,v);
			}
			defaultLanguage = window.sessionStorage.getItem(languageKEY) || 'zh-cn';
			$translate.preferredLanguage(defaultLanguage);
			location.reload();
		}
	}]);




	/*Interceptor*/
	// app.factory('i18nInterceptor', ['$q', function($q){
	// 	var i18nInterceptor = {
	// 		'request' : function(config) {        //请求拦截
	// 		        //这里可以对所有的请求进行处理
	// 		        console.log('request')
	// 		        return config; 
	// 		      }, 
	// 	}
	// }])
	// app.config([ '$httpProvider', function($httpProvider) { 
	//   $httpProvider.interceptors.push('i18nInterceptor'); //添加拦截器
	// } ]);
	/*end Interceptor*/
})(window);


/*var app = angular.module('simpleFood', ['pascalprecht.translate', 'ngSanitize']);


app.config(['$translateProvider', function($translateProvider){
	$translateProvider.useStaticFilesLoader({
		prefix: '/i18n/',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('zh-cn');
}]);

app.controller('Application', function(){

});

app.controller('Navbar', function(){
	this.navbar_hide = "d-none";
	this.show = false;
	this.toggleNavbar = function(){
		console.log(this.show)
		if(this.show){
			this.navbar_hide="d-none";
			this.show=false;
		}else{
			this.navbar_hide="";
			this.show=true;
		}
	}
	
});



!((window)=>{

	var getCountry = function(){
		var net_api = "http://pv.sohu.com/cityjson";

		console.log('getCountry')
		axios.get(net_api,{withCredentials:true}).then((response) => {
			console.log(response)
		});

		/*var head = document.getElementsByTagName('HEAD').item(0); 
	    var script= document.createElement("script"); 
	    script.type = "text/javascript"; 
	    script.src=net_api; 
	    head.appendChild( script); 

	    if(returnCitySN){
	   		return returnCitySN.cname;
	    }*/
/*	}

	console.log(getCountry())

})(window);*/