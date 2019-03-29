<!DOCTYPE html>
<html data-ng-app='simpleFood' data-ng-controller='Application as app'>
<head>
	{% include {{ site.simple_food.theme}}/component/header.html %}
</head>
<body>
	{% raw %}
	{{"hello" | translate }}
	{{"world" | translate }} 

	 [ {{ app.name }} ]
	{% endraw %}
{% include {{ site.simple_food.theme}}/component/scripts.html %}

</body>
</html>

<script type="text/javascript">
	var app = angular.module('simpleFood', ['pascalprecht.translate']);


	app.config(['$translateProvider', function($translateProvider){
		$translateProvider.useStaticFilesLoader({
			prefix: '/i18n/',
			suffix: '.json'
		});
		$translateProvider.preferredLanguage('en-us');
	}]);

	app.controller('Application', function(){
		this.name = "ssssssssss";
	});
</script>




				<!-- <select class="language-select px-2">
					<option>简体中文</option>
					<option>繁體中文(香港)</option>
					<option>繁體中文(澳門)</option>
					<option>繁體中文(台灣)</option>
					<option>English</option>
				</select> -->


				
	<!-- SimpleFood Copyright © 2019. All Rights Reserved. -->


	<!-- 
	<div>
		{% include {{ site.simple_food.theme}}/component/navbar.html %}
		{% include {{ site.simple_food.theme}}/component/banner.html %}
		<div class="main-px">{{ content }}</div>
		{% include {{ site.simple_food.theme}}/component/footer.html %}
	</div>
{% include {{ site.simple_food.theme}}/component/scripts.html %} -->

{% rdaw %}{{ navbar.navbar_hide }}{% endraw %}
data-ng-app='simpleFood' data-ng-controller='Application as app'

<li class="col-xm-12 col-md-6 col-lg-3 col-xl-3">{% include {{ site.simple_food.theme}}/component/cookbookcard.html %}</li>
				<li class="col-xm-12 col-md-6 col-lg-3 col-xl-3">{% include {{ site.simple_food.theme}}/component/cookbookcard.html %}</li>
				<li class="col-xm-12 col-md-6 col-lg-3 col-xl-3">{% include {{ site.simple_food.theme}}/component/cookbookcard.html %}</li>
				<li class="col-xm-12 col-md-6 col-lg-3 col-xl-3">{% include {{ site.simple_food.theme}}/component/cookbookcard.html %}</li>

本网站使用cookie，用于在您的电脑中储存信息。这些cookie可以使网站正常运行，以及帮助我们改进用户体验。使用本网站，即表示您接受放置这些cookie。