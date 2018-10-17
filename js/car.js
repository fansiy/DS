class Cart{
			constructor(options){
				this.url = options.url;
				this.body = options.tbody;
				
				this.load()
			}
			load(){
				var that = this;
				$.ajax({
					url:this.url,
					success:function(res){
						that.res = res
						that.getCookie()
					}
				})
			}
			getCookie(){
				this.goods = JSON.parse($.cookie("goods"));
//				console.log($.cookie("goods"));
				this.display();
			}
			display(){
				var str = "";
				var sums=0;
//				console.log(this.goods);
				for(var i=0;i<this.res.length;i++){
//					console.log(this.goods);
					for(var j=0;j<this.goods.length;j++){
						if(this.res[i].goodsId === this.goods[j].id){
//							console.log(this.res[i]);
							var s=this.res[this.goods[j].id-1].price1.slice(1)*this.goods[j].num;
							sums+=parseInt(s);
							
							str += `<tr>
										<td>
											<img src="${this.res[i].img}"/>
											<i>${this.res[i].detail}</i>
											<i>规格：黑灰 30</i>
										</td>
										<td>${this.res[i].price1}</td>
										<td>${this.res[i].price1}</td>
										<td><input type="number" value="${this.goods[j].num}"></td>
										<td class="sum">${s}元</td>
										<td><a data-index="${this.res[i].goodsId}">删除</a><p>收藏</p></td>
				</tr>`
						}
					}
					$(".allprice").text("总价："+sums+"元");
					$(".allprice1").text(sums+"元");
				}
				this.body.html(str)
				this.init(s)
			}
			init(s){
				var that = this;
				var c=0;
////				console.log($(".sum"))
				for(var i=0;i<this.goods.length;i++){
//					console.log($(".count"))

					c+=parseInt(this.goods[i].num); 
//					console.log(c);
				}
				$(".count").text("总数量："+c);
				
				//清空事件
//				console.log(this.goods);
				$(".clearall").click(function(){
					for(var i=0;i<that.goods.length;i++){
						var id=that.goods[i].id;
						
						that.changeCookie(id,function(){
							that.goods.splice(0,that.goods.length);							
						});
					}
					location.reload();
				})
				
//				删除事件
				this.body.on("click","a",function(){
					var id = $(this).attr("data-index")
					$(this).parent().parent().remove()
					that.changeCookie(id,function(i){
						that.goods.splice(i,1)
						location.reload();
					})
				});
				this.body.on("input","input",function(){
					var num = $(this).val();
					console.log($(this).val());
					var id = $(this).parent().next("td").next("td").children("a").attr("data-index");
					that.changeCookie(id,function(i){
						that.goods[i].num = num;
					})
					location.reload();
				})
			}
			changeCookie(id,callback){
				for(var i=0;i<this.goods.length;i++){
					if(this.goods[i].id == id){
						callback(i)
					}
				}
				$.cookie("goods",JSON.stringify(this.goods))
			}
//			removeCookie(id){
//				for(var i=0;i<this.goods.length;i++){
//					if(this.goods[i].id == id){
////						注意:此处删除的数组,是获取出来的cookie的值,并没有真正操作到cookie
//						this.goods.splice(i,1)
//					}
//				}
////				此处重新设置cookie,相当于用操作之后的数组,覆盖原cookie,这才是删除cookie
//				$.cookie("goods",JSON.stringify(this.goods))
//			}
		}
		
		
		new Cart({
			url:"http://localhost/project/json/goodslist1.json",
			tbody:$("tbody")
		})