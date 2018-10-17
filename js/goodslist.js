var id=location.search.slice(4,location.search.length);
$(".car").click(function(){
	location.href="car.html";
});
$(".login").click(function(){location.href="login.html"});


//分页
//		$(".pagination").pagination(20,{
//			items_per_page:5,
//			num_display_entries:3,
//			current_page:1,
//			num_edge_entries:5,
////			link_to:"http://www.baidu.com",
//			prev_text:"上一页",
//			next_text:"下一页",
//			ellipse_text:"---",
//			prev_show_always:true,
//			next_show_always:false,
//			callback:function(index){
//				console.log(index)
//			}
//		})

class Goodslist{
		constructor(options){
			this.url = options.url;
			this.pageCont = options.pageCont;
			this.list = options.list;
			
			this.load()
		}
		load(){
			var that = this
			$.ajax({
				url:this.url,
				success:function(res){
					that.res = res;
					that.display();
				},
				dataType:"json"
			})
		}
		display(){
			var str = ""
			
//			for(var i=40*this.index;i<40*this.index + 40;i++){
//				console.log(i);
//console.log(this.res[i])
				for(var i=0;i<this.res.length;i++){
					str += `
					<dl data-id="${this.res[i].goodsId}">
						<dt >
							<div class="${this.res[i].class}"></div>
							<img src="${this.res[i].img}" />
						</dt>
						<dd>
							<p>
								<span>${this.res[i].price}</span>
								<span>${this.res[i].price1}</span>
								<span>${this.res[i].price2}</span>
							</p>
							<p>${this.res[i].detail}</p>							
						</dd>
					</dl>`;
				}
//			}
			this.list.html(str);
			this.init();
		}
		init(){
			var that = this;
				this.list.on("click","dl",function(event){
//					console.log($(this).attr("data-id"));
					that.id = $(this).attr("data-id");
					event.stopPropagation();
					that.setCookie();
					console.log(that.id);
					location.href="detail.html?id="+that.id;
				})
		}
		setCookie(){
//			购物车只能使用一条cookie
				this.goods = JSON.parse($.cookie("goods"));
//				点击
				if(this.goods == null){
//					第一次存:直接存
					this.goods = [{
						id:this.id,
						num:1
					}]
				}else{
//					不是第一次:要判断之前的商品是否跟这次点的一致
					var onOff = true;
//					遍历之前所有商品,跟这次的商品比较,如果相同,那么就增加数量
					for(var i=0;i<this.goods.length;i++){
						if(this.goods[i].id == this.id){
//							之前存了A,这次又点了A
							this.goods[i].num++;
//							改变开关状态
							onOff = false
						}
					}
//					如果遍历完所有对象,开关没有被改变,说明没有找到重复商品,那么就需要添加新商品
					if(onOff == true){
//						之前存了B,这次点了A
						this.goods.push({
							id:this.id,
							num:1
						})
					}
				}
				$.cookie("goods",JSON.stringify(this.goods))
			}
		
}
	
	new Goodslist({
		url:"http://localhost/project/json/goodslist1.json",
		pageCont:$(".pagination"),
		list:$("#goods"),
		
	})
	

class Page{
		constructor(options){
			this.url = options.url;
			this.pageCont = options.pageCont;
			this.list = options.list;
			this.num = options.num;
			this.index = 0;
			
			this.load()
		}
		load(){
			var that = this
			$.ajax({
				url:this.url,
				success:function(res){
					that.res = res;
					that.display()
					that.createPage()
				},
				dataType:"json"
			})
		}
		display(){
			var str = ""
			
//			this.num*this.index ~ this.num*this.index + this.num
//			4 ~ 8
//			8 ~ 12
			
			for(var i=40*this.index;i<40*this.index + 40;i++){
				if(i<this.res.length){
					str += `<dl data-id="${this.res[i].goodsId}">
						<dt >
							<div class="${this.res[i].class}"></div>
							<img src="${this.res[i].img}" />
						</dt>
						<dd>
							<p>
								<span>${this.res[i].price}</span>
								<span>${this.res[i].price1}</span>
								<span>${this.res[i].price2}</span>
							</p>
							<p>${this.res[i].detail}</p>							
						</dd>
					</dl>`;
				}
			}
			this.list.html(str);
		}
		createPage(){
			var that = this;
			this.pageCont.pagination(this.res.length,{
				items_per_page:40,
				current_page:this.index,
				prev_text:"上一页",
				next_text:"下一页",
				callback:function(index){
					that.index = index;
					that.display();
				}
			})
		}
	}
	
	new Page({
		url:"http://localhost/project/json/goodslist1.json",
		pageCont:$(".pagination"),
		list:$("#goods"),
		num:40
	})