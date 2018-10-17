$(".car").click(function(){location.href="car.html"})
$(".login").click(function(){location.href="login.html"})

//console.log(location.search.slice(4));


//	$.ajax({
//		url:"http://localhost/project/json/details.json",
//		success:function(res){
//			var str="";
//			var id=location.search.slice(4);
//			str=`
//				<li><img src="${res[id-1].img1}"/></li>
//				<li><img src="${res[id-1].img2}"/></li>
//				<li><img src="${res[id-1].img3}"/></li>
//				<li><img src="${res[id-1].img4}"/></li>
//				<li><img src="${res[id-1].img5}"/></li>`;
//				$(".details-l-t").html(str);
//				$(".details-l-b").html(str);
//				$(".norms1").html(str);
//			str1=`
//				<li>${res[id-1].size1}</li>
//				<li>${res[id-1].size2}</li>
//				<li>${res[id-1].size3}</li>
//				<li>${res[id-1].size4}</li>
//				<li>${res[id-1].size5}</li>`;
//				$(".norms2").html(str1);
//			str2=`<span>${res[id-1].name}</span>`;
//			$(".details-h").html(str2);
//			str3=`	<li>
//						<img src="${res[id-1].img6}"/>
//						<p>${res[id-1].price1}</p>
//					</li>
//					<li>
//						<img src="${res[id-1].img7}"/>
//						<p>${res[id-1].price2}</p>
//					</li>
//					<li>
//						<img src="${res[id-1].img8}"/>
//						<p>${res[id-1].price3}</p>
//					</li>
//					<li>
//						<img src="${res[id-1].img9}"/>
//						<p>${res[id-1].price4}</p>
//					</li>`;
//			$(".recommend").html(str3);
//		}
//	})
//
//
//
//console.log($(".details-l-b"))
$(".details-l-b").on("mouseover","li",function(){
//	console.log($(".details-l-t").children("li").eq($(this).index()));
	$(this).css({border:"1px #BD4147 solid"}).siblings().css({border:"none"});
	$(".details-l-t").children("li").eq($(this).index()).css({display:"block"}).siblings().css({display:"none"});
})
$(".details-l-b").on("mouseout","li",function(){
	$(this).css({border:"none"});
})
//
////console.log($.cookie("goods"));
////console.log(this.goods);
//
//var goods=JSON.parse($.cookie("goods"));
////console.log(goods);
//var id=location.search.slice(4);
////console.log(id);
//$(".bjt").on("input",function(){
////	console.log($(this).val())
//	for(var i=0;i<goods.length;i++){
////		console.log(goods[i].id);
//		if(id===goods[i].id){
//			goods[i].num=$(this).val();
//		}
//	}
//	$.cookie("goods",JSON.stringify(goods));
////	console.log(goods[id]);
//})

class Detail{
	constructor(options){
		this.url=options.url;
		this.box1=options.box1;
		this.box2=options.box2;
		this.box3=options.box3;
		this.box4=options.box4;
		this.box5=options.box5;
		this.box6=options.box6;
		this.id=options.id;
		this.goods=options.goods;
		this.bjt=options.bjt;
		
		this.load();
	}
	load(){
		var that=this;
		$.ajax({
			url:this.url,
			success:function(res){
				that.res=res;
//				console.log(that.res);
				that.display();
			}
		})
	}
	display(){
		var str="";
		var str1="";
		var str2="";
		var str3="";
//		console.log(this.id);
			str=`
				<li><img src="${this.res[this.id-1].img1}"/></li>
				<li><img src="${this.res[this.id-1].img2}"/></li>
				<li><img src="${this.res[this.id-1].img3}"/></li>
				<li><img src="${this.res[this.id-1].img4}"/></li>
				<li><img src="${this.res[this.id-1].img5}"/></li>`;
				this.box1.html(str);
				this.box2.html(str);
				this.box3.html(str);
			str1=`
				<li>${this.res[this.id-1].size1}</li>
				<li>${this.res[this.id-1].size2}</li>
				<li>${this.res[this.id-1].size3}</li>
				<li>${this.res[this.id-1].size4}</li>
				<li>${this.res[this.id-1].size5}</li>`;
				this.box5.html(str1);
				str2=`<span>${this.res[this.id-1].name}</span>`;
				this.box6.html(str2);
				str3=`	<li>
						<img src="${this.res[this.id-1].img6}"/>
						<p>${this.res[this.id-1].price1}</p>
					</li>
					<li>
						<img src="${this.res[this.id-1].img7}"/>
						<p>${this.res[this.id-1].price2}</p>
					</li>
					<li>
						<img src="${this.res[this.id-1].img8}"/>
						<p>${this.res[this.id-1].price3}</p>
					</li>
					<li>
						<img src="${this.res[this.id-1].img9}"/>
						<p>${this.res[this.id-1].price4}</p>
					</li>`;
			this.box4.html(str3);
			this.init(this.goods);
//			console.log(this.goods);
	}
	init(goods){
		var that=this;
		$(".bjt").on("input",function(){
////	console.log($(this).val())
//console.log(id);
		for(var i=0;i<goods.length;i++){
//		console.log(goods[i].id);
			if(that.id===that.goods[i].id){
			goods[i].num=$(this).val();
			}
		}
			$.cookie("goods",JSON.stringify(goods));
		})
	}
	
}
new Detail({
	url:"http://localhost/project/json/details.json",
	box1:$(".details-l-t"),
	box2:$(".details-l-b"),
	box3:$(".norms1"),
	box4:$(".recommend"),
	box5:$(".norms2"),
	box6:$(".details-h"),
	id:location.search.slice(4),
	goods:JSON.parse($.cookie("goods")),
	bjt:$(".bjt")
})



$(".scan").hover(function(){
	$(".ma").show();
},function(){
	$(".ma").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
})
