---
layout: default
---

<div class="container-fluid body-lr-p my-5">
	<ul class="row mx-0">
		{% for t in site.data.cookbooktype %}
		<li class="col-12 my-3">
			<div class="border-bottom py-4  d-flex justify-content-between">
				<h3 class="my-1">{{ t.name }}</h3>
				<a class="font-weight-light my-1" href="">更多</a>
			</div>
			<div class="my-3 px-2">
				<ul class="row d-flex bd-highlight">
					{% for cookbook in site.posts limit : "4" %}
					<li class="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-2 flex-fill bd-highlight" >
						{% include cookbook_card.html cookbook = cookbook %}
					</li>
					{% endfor %}
				</ul>
			</div>
		</li>
		{% endfor %}
	</ul>
</div>
