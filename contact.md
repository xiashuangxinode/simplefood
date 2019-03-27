---
layout: conter_default
title: 联系我们
---

<div id="alert"></div>
您对我们网站上看到的内容有疑问吗？或者，您对我们的食谱有什么想法？请发送邮件给我们，我们会与您联系。


<!-- <div class="alert alert-success" role="alert">
  A simple secondary alert—check it out!
</div> -->


<div class="container-fluid pb-3">
	<div class="row">
		<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
			<form onsubmit="return addcontactmessage();">
				<div class="form-group col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
				  	<label for="contact-name">您的称呼</label>
				  	<input type="text" class="form-control" id="contact-name" aria-describedby="emailHelp" placeholder="称呼" required>
				</div>
				<div class="form-group col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
				  	<label for="contact-mail">您的邮箱地址</label>
				  	<input type="email" class="form-control" id="contact-mail" aria-describedby="emailHelp" placeholder="E邮箱地址" required>
				</div>
				<div class="form-group col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
					<label for="contact-subject">主题</label>
				  	<input type="text" class="form-control" id="contact-subject" placeholder="主题" required>
				</div>
				<div class="form-group">
				    <label for="contact-message">信息</label>
				    <textarea class="form-control" id="contact-message" rows="5" required></textarea>
				</div>
				<button type="submit" class="btn btn-bg font-weight-bold rounded-pill px-4 ">提交</button>
			</form>
		</div>
		<div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 contact-us-mail">
			<span class="font-weight-bold">我们的电子邮件地址：</span>simplefood@gmail.com
		</div>
	</div>
</div>
