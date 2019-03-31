!((window) => {
	var languageKEY = 'SIMPLEFOOD-LANGUAGE-KEY';

	var app = angular.module('simpleFood', ['pascalprecht.translate', 'ngSanitize']);

	app.config(['$translateProvider','$locationProvider', function($translateProvider,$locationProvider){
		$translateProvider.useStaticFilesLoader({
			prefix: '/i18n/',
			suffix: '.json'
		});

		var defaultLanguage = window.sessionStorage.getItem(languageKEY) || 'zh-CN';
		window.sessionStorage.setItem(languageKEY,defaultLanguage);
		$translateProvider.preferredLanguage(defaultLanguage);

		//$locationProvider.html5Mode(true);
	}]);
	app.controller('Application', function(){
		this.searchHide = true;
		this.searchContainer = function(){
			this.searchHide = !this.searchHide;

			if(!this.searchHide){
				this.searchContainerCls = "sf-search-container__show";
			}else{
				this.searchContainerCls = null;
			}
		}

		this.searchContainerGo = function(e){
			var keycode = window.event?e.keyCode:e.which;
            if(keycode==13){
            	location.href='/search.html?t='+((this.searchText == "" || this.searchText === undefined) ? "" : this.searchText);
            }
		}

		this._search_cookbook = function(){

		}
	});
	app.controller('Footer', function(){

	});

	app.controller('Navbar', function(){
		this.navbar_hide = "d-none";
		this.show = false;
		this.toggleNavbar = function(){
			if(this.show){
				this.navbar_hide="d-none";
				this.show=false;
			}else{
				this.navbar_hide="sf-nav-conter-show";
				this.show=true;
			}
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






	/*search*/
	app.controller('SearchPage',['$location','$http',  function($location,$http){
		let self = this;
		this.method = 'GET';
		this.url = '/data/cookbooks.json';

		this.fetch = function(t){

			$http({method: this.method, url: this.url}).then(function(response){
				let data = response.data || "Not Data";

				let result = new Array();

				for(var i = 0; i < data.length; i++){
					let nd = data[i];
					if(nd.category.toLowerCase().indexOf(t.toLowerCase()) >= 0 
						|| nd.title.toLowerCase().indexOf(t.toLowerCase()) >= 0){
						result[result.length] = nd;
					}
				}

				self.cookbooks_list = result;
			});
		}
		let param_v = $.url(window.location.href).param('t');
		if( param_v.trim().lnegth > 0 && param_v !== undefined){
			this.fetch(param_v);
		}
		
		

	}]);
	/*end search*/



})(window);

