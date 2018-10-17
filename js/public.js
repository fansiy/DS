



//下拉菜单
$("#sy").mouseover(function(){
			$(".menu").stop().show();
		})
		$("#sy").mouseleave(function(){
			$(".menu").stop().hide();		
		})
		$(".menu").hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})
		



//回到顶部

$(".codebox").hover(function(){
			$(".code").append("<img src='img/xcx_qrcode.jpg'>").css({position:"absolute",right:80,top:120});
		},function(){
			$(".code").children().remove();
		})
		
		$(".look").hover(function(){
			$(".lookcode").append("<img src='http://topic.camel.com.cn/20171220sd/pop1.png'>").css({position:"absolute",right:70,top:170});
		},function(){
			$(".lookcode").children().remove();
		})
		
		setInterval(()=>{			
			if($(document).scrollTop()>1000){
				$(".dingbu").children("img").css({display:"block"});
			}else{
				$(".dingbu").children("img").css({display:"none"});
			}
		},100)
		
		$(".dingbu").click(function(){
			$("html").animate({
				scrollTop:0
			})
		})
//		console.log($(document).scrollTop());


