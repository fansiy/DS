$(".car").click(function(){
	location.href="car.html";
})

$(".login").click(function(){
	
	location.href="login.html";
})




//楼层

$(".floor").children("li").click(function(){
	$("html").animate({
			scrollTop:$(".goods-t").eq($(this).index()).offset().top-100
		})
})
$(".floor").children("li").hover(function(){
	$(this).css({background:"red",color:"black"});	
},function(){
	$(this).css({background:"#ededed",color:"#000"})
})

//轮播图
$(".cont1").banner({
			items:$(".imgbox").find("img"),//必传
			left:$(".cont1").find("#left"),
			right:$(".cont1").find("#right"),
			list:$(".cont1").find(".list").children("li"),
			autoPlay:true,
			delayTime:2000,
			moveTime:1000
		})


//二级菜单
$("#sy").mouseover(function(){
	$(".menu").stop().show();
})

$(".menu").hover(function(){
	$(this).show();
},function(){
	$(this).hide();
})
$("#sy").mouseleave(function(){
	$(".menu").stop().hide();
	
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




//选项卡

class Tab{
		constructor(options){
			this.a = options.a;
			this.ul = options.ul;
			this.index = 0;
			this.init();
		}
		init(){
			var that = this;
			this.a.hover(function(){
				$(this).addClass("active").siblings().removeClass("active");
				that.ul.eq($(this).index()).stop().show().siblings().stop().hide()
			})
		}
	}
	
new Tab({
	a:$(".new-title-r").children("a"),
	ul:$(".new-cont1"),
})

//户外商品渲染

$.ajax({
	url:"http://localhost/project/json/huwai1.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<img src="${data[i].img}">
			`
		}
		$(".goods-t").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/huwai2.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<li>
					<img src="${data[i].img}"/>
					<i>${data[i].tag}</i>
					<p>${data[i].title}</p>
					<p>${data[i].price}</p>
				</li>
			`
		}
		$(".goods-b").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/nanxie1.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<img src="${data[i].img}">
			`
		}
		$(".goods-nx-t").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/nanxie2.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<li>
					<img src="${data[i].img}"/>
					<i>${data[i].tag}</i>
					<p>${data[i].title}</p>
					<p>${data[i].price}</p>
				</li>
			`
		}
		$(".goods-nx-b").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/nvxie1.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<img src="${data[i].img}">
			`
		}
		$(".goods-nv-t").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/nvxie2.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<li>
					<img src="${data[i].img}"/>
					<i>${data[i].tag}</i>
					<p>${data[i].title}</p>
					<p>${data[i].price}</p>
				</li>
			`
		}
		$(".goods-nv-b").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/nanzhuang1.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<img src="${data[i].img}">
			`
		}
		$(".goods-nz-t").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/nanzhuang2.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<li>
					<img src="${data[i].img}"/>
					<i>${data[i].tag}</i>
					<p>${data[i].title}</p>
					<p>${data[i].price}</p>
				</li>
			`
		}
		$(".goods-nz-b").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/yunyu1.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<img src="${data[i].img}">
			`
		}
		$(".goods-yy-t").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/yunyu2.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<li>
					<img src="${data[i].img}"/>
					<i>${data[i].tag}</i>
					<p>${data[i].title}</p>
					<p>${data[i].price}</p>
				</li>
			`
		}
		$(".goods-yy-b").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/tongzhuang1.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<img src="${data[i].img}">
			`
		}
		$(".goods-tz-t").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/tongzhuang2.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<li>
					<img src="${data[i].img}"/>
					<i>${data[i].tag}</i>
					<p>${data[i].title}</p>
					<p>${data[i].price}</p>
				</li>
			`
		}
		$(".goods-tz-b").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/xiangbao1.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<img src="${data[i].img}">
			`
		}
		$(".goods-xb-t").html(str);
	}
})

$.ajax({
	url:"http://localhost/project/json/xiangbao2.json",
	success:function(res){
		var str="";
		var data=res;
		for(var i=0;i<data.length;i++){
			str+=`
				<li>
					<img src="${data[i].img}"/>
					<i>${data[i].tag}</i>
					<p>${data[i].title}</p>
					<p>${data[i].price}</p>
				</li>
			`
		}
		$(".goods-xb-b").html(str);
	}
})