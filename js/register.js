//$("form").validate();

$("#btn").click(function(){
//	$("form").validate();
			$.ajax({
				type:"get",
				url:"http://www.liyangyf.com/ctrl/register.php",
				async:true,
//				beforeSend:function(){
//					$("#result").html("<img src='img/loading.gif'>");
//				},
				data:{
					pass:$("#pass").val(),
					repass:$("#repass").val(),					
					tel:$("#email").val(),
				},
				success:function(res){
					switch(res){
						case "0":$(".result").text("你的用户名太抢手了，换一个吧");break;
						case "2":$(".result").text("请至少输入用户名和密码");break;
						case "1":
							$(".result").text("注册成功，3秒后跳转登录页面");
							setTimeout(function(){
								location.href = "login.html";
							},1000)
							break;
					}
				}
			});
		})



