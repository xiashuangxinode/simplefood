!(function(window) {
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
		var self = this;
		this.method = 'GET';
		this.url = '/data/cookbooks.json';

		this.fetch = function(t){

			$http({method: this.method, url: this.url}).then(function(response){
				var data = response.data || "Not Data";

				var result = new Array();

				for(var i = 0; i < data.length; i++){
					var nd = data[i];
					if(nd.category.toLowerCase().indexOf(t.toLowerCase()) >= 0 
						|| nd.title.toLowerCase().indexOf(t.toLowerCase()) >= 0){
						result[result.length] = nd;
					}
				}

				self.cookbooks_list = result;
			});
		}
		var param_v = $.url(window.location.href).param('t');
		if(  param_v !== undefined && param_v.trim().length > 0) {
			this.fetch(param_v);
		}
		
		

	}]);
	/*end search*/



	window.print_cookbook = function(){

		var image_base64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAH0AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKXBoASilqa0tLm8nENnBLPM3SOJCzH8BQBBRTijDOQcg4IpKAEopaSgAooooAKKKKACiinbTQA2inFSKVonUZZGA9SKAGUUuKesMrfdjc/RTQBHRUzW06Ll4ZFHqVIqLBz/9egBKK0tJ0LVtZkaPR9Mvb+RRlltYGlI/BQalXw1rrXjWi6LqbXSnDQi1cuD7rjNAGRRXe6R8IPiBq2PsnhPVFB6G5j+zj85Ctcpe6Hqllqc+n3VhcpewyGKSHyyWDA4I46/hQBm0VpXmhavYqrXul39urcgy27oD+YrPZWX7wIPuKAG0U5UZvugn6ChlK9RigBtFOCMRkKSPXFJjFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRTkUuwVQSxOAAM5r1Twf8AAXxz4n0176CwisIMAxf2g5iab/dUAn8WAFAHlNOxxnn8q+jvB37LOuXF2knizU7OxswfmitGMsre2SAo+vNe8eBfgz4L8IRhrbSob67Dl1ur5FlkX025GFwPSgD4g8PfD7xb4ijWTRvD+o3ULfdlEJWM/R2wD+ddRb/Ab4izXEMR8PvEJGwZHmj2p7nDV+gQAAwowPQUYH/66APkux/ZLvZLeNr3xbbwzkfOkVgZFU+gYyLn8hW1p37JmmIR/aXiq9nHcW9osP8ANmr6aAA6UtAHhdl+zB4DtwPOk1m6PrLcqP8A0FRXp3gvwL4d8GWYt/D2mQWvGGlxulf/AHnPJrpqKAPI/FH7PvgfxFrl1qtxb3ltPctvkjtZgkZbuduDgn2rz/xN+yjp00iv4b8RXFohPzRXsQm/Jl2/qDX05QRmgD4t1z9lrxXZQtJpmp6XqGBxHlonb6ZBH61414m8I6/4XnEWv6TeWBLbVaaIhHP+y3Q/ga/TcDHSquo6dZ6n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Z8sBp3wd8MxbNhe285h7uxY/zr88VODX2Z+xdql3eeBdYs7qWaWGzvQIN5yqKyAlV/EE49/egD6Gr58/bM16bT/AWn6VbylBqV1iZR/EiDdj6btv5CvoOvjn9tfVxceNND0pDkWdkZmGejSOf6IPzoA+caKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAWjJpKKAJ7a8ubV99tcSwt6xuVP6V3nhv4yeOPDuiz6Zputy+RK24NOBK8Z77WbOM155RQB694V/aE8e6Cpjm1FNViJ3Yv08xh9GGDitjU/2nfHF0yfZY9MswpydkBfP/fRrwmloA98tv2o/GkSKJbPSJSOpMLLn8mq7H+1Z4qX7+i6M/wCEg/8AZq+daWgD6ZtP2sdWH/H14asH/wCuc7r/ADzWmf2tF+ytjwkwuO2b75fr9zNfKVLQB794q/ad8VatpzW2k2lnpErMD9phzI4HoN3A+uK4n/heHxHEZQeKbrBHP7qLP57M15vRQBveJfGPiPxOyHxBrV/qAj5RZ5iVX6L0H5VivPK4AeR2A6ZYmoqKAFyaXcT3ptFAC5opKKACiiigAooooAKKKKAFFfoD+zX4estB+E+kSWcbLNqSC9uGY8s7AD8sAV8ARgGRQTgE4J9K+/PCXxT+HmmaFpOkw+KNPDQW8cAzuUZCgdSMDmgD1QnBr87vj5rn/CQfFzxJdq++KO5+zREHjbGAgx7Hbn8a+6/HPii08N+BtT8QPPG8FvbNJE6sCruRhACOuSQBX5r3U73NzLPKcySuXY+pJyaAIqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKUflSUUAaMmsajJpKaXJf3LadG/mJamVjEreoXOAazqKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//ZoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//R+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//S+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//T+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//U+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//V+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//W+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//X+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Q+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//R+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//S+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//T+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//U+baKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//Z";

		var ni = "Calories: 158.25 kcal carotene: 1171.6 micrograms potassium: 521.42 mg vitamin A: 324.83 micrograms cholesterol: 321.75 mg phosphorus: 134.79 mg sodium: 84.85 mg calcium: 59.61 mg vitamin C: 44.48 mg magnesium: 35.23 mg carbohydrate: 12.13 g folic acid : 11.2 μg protein: 9.79 g Selenium: 8.59 μg Fat: 8.36 g Iodine: 5.02 μg iron: 2.41 mg Vitamin E: 2.34 mg Dietary fiber: 1.91 g Zinc: 1.85 mg Niacin: 1.63 mg Copper: 0.25 mg Vitamin B2: 0.24 Mg of manganese: 0.18 mg of vitamin B1: 0.14 mg of vitamin B6: 0.12 mg";

		//'a4': [595.28, 841.89],
		var doc = new jsPDF('','pt','a4');
		/*doc.setFont('Symbol')*/

		var lp = 30, tp = 35, lw = 2, mw = 595.28 - 30;

		doc.setLineWidth(lw);
		doc.line(lp, tp, mw, tp);

		doc.addImage(image_base64, 'JPEG', (585.28 / 2 -30), 85, 60, 60)

		doc.setFontSize(10)
		doc.text(lp, 195, '3 SERVINGS厅	3 SERVINGS	3 SERVINGS');

		doc.setLineWidth(0.2);
		doc.line(lp, 200, mw, 200);

		doc.setFontSize(14)
		doc.text(lp, 225, 'NUTRITION INFORMATION');	

		li = doc.setFontSize(12).splitTextToSize( ni, mw);
		doc.text(lp, 250, li)

		doc.setLineWidth(0.2);
		doc.line(lp, 355, mw, 355);




// 	var doc = new jsPDF(),
//   sizes = [12, 16, 20],
//   fonts = [['Times', 'Roman'], ['Helvetica', ''], ['Times', 'Italic']],
//   font, size, lines,
//   margin = 0.5, // inches on a 8.5 x 11 inch sheet.
//   verticalOffset = margin,
//   loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor. Sed at sapien urna. Fusce augue ipsum, molestie et adipiscing at, varius quis enim. Morbi sed magna est, vel vestibulum urna. Sed tempor ipsum vel mi pretium at elementum urna tempor. Nulla faucibus consectetur felis, elementum venenatis mi mollis gravida. Aliquam mi ante, accumsan eu tempus vitae, viverra quis justo.\n\nProin feugiat augue in augue rhoncus eu cursus tellus laoreet. Pellentesque eu sapien at diam porttitor venenatis nec vitae velit. Donec ultrices volutpat lectus eget vehicula. Nam eu erat mi, in pulvinar eros. Mauris viverra porta orci, et vehicula lectus sagittis id. Nullam at magna vitae nunc fringilla posuere. Duis volutpat malesuada ornare. Nulla in eros metus. Vivamus a posuere libero.'

// // Margins:
// doc.setDrawColor(0, 255, 0)
// 	.setLineWidth(1 / 72)
// 	.line(margin, margin, margin, 11 - margin)
// 	.line(8.5 - margin, margin, 8.5 - margin, 11 - margin)

// // the 3 blocks of text
// 		for (var i in fonts) {
// 		  if (fonts.hasOwnProperty(i)) {
// 		    font = fonts[i]
// 		    size = sizes[i]

// 		    lines = doc.setFont(font[0], font[1])
// 							.setFontSize(size)
// 							.splitTextToSize(loremipsum, 7.5)
// 				// Don't want to preset font, size to calculate the lines?
// 				// .splitTextToSize(text, maxsize, options)
// 				// allows you to pass an object with any of the following:
// 				// {
// 				// 	'fontSize': 12
// 				// 	, 'fontStyle': 'Italic'
// 				// 	, 'fontName': 'Times'
// 				// }
// 				// Without these, .splitTextToSize will use current / default
// 				// font Family, Style, Size.
// 		    doc.text(0.5, verticalOffset + size / 72, lines)

// 		    verticalOffset += (lines.length + 0.5) * size / 72
// 			}
// 		}
  

		var string = doc.output("datauri");
		
		var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
		var x = window.open();
		x.document.write(iframe);
		x.document.close();
	}


})(window);

