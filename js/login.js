$("form").validate();
		$("#btn").click(function(){
			$.ajax({
				type:"get",
				url:"http://www.liyangyf.com/ctrl/login.php",
				async:true,
//				beforeSend:function(){
//					$(".result").html("<img src='img/loading.gif'>");
//				},
				data:{
					user:$("#email").val(),
					pass:$("#pass").val(),
				},
				success:function(res){
					switch(res){
						case "0":$(".result").text("用户名密码不符");break;
						case "1":$(".result").text("用户名密码为空");
						setTimeout(function(){
							location.href='index.html';							
						},3000)
						break;
						default:$(".result").text("登录成功，跳转会员中心");break;
					}
				}
			});
		})