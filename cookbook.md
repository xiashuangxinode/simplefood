---
layout: simple_default
title: 食谱
---

<div class="container-fluid">
	<ul class="row">
		{% for t in site.data.cookbooktype %}
		{% assign cookbook = site.categories.[t.name] %}
		{% if cookbook != nil %}
		<li class="col-12 px-0">
			<div class="border-bottom py-2  d-flex justify-content-between">
				<h3 class="my-1">{{ t.name }}</h3>
				<a class="font-weight-light my-1" href="{{ t.url }}">更多</a>
			</div>
			<div class="my-3 px-2">
				<ul class="row d-flex bd-highlight">
					{% for cb in cookbook limit : "4" %}
					<li class="col-sm-6 col-md-6 col-lg-3 col-xl-3 p-2 flex-fill bd-highlight" >
						{% include cookbook_card.html cookbook = cb %}
					</li>
					{% endfor %}
				</ul>
			</div>
		</li>
		{% endif %}
		{% endfor %}
	</ul>
</div>
