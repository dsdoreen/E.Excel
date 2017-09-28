$(function()
{
	//保养品及营养品页面
	//点击愿望清单按钮出现div
	$("#Wishlist").bind("click",function(){
		$(".wishinfo").show();
	})
	$("#shopcar").bind("click",function(){
		$(".wishinfo").show();
	})
	$(".cl_wish").bind("click",function()
	{
		$(".wishinfo").hide();
	})
	
	//营养食品页面
	//点击加入愿望清单出现加入购物车模块
	$(".p_joincar").bind("click",function()
	{
		$(".div_addcar").remove();
		var html='<div class="div_addcar"><div><p class="title">新西兰Zespri阳光金奇异果元准过</p><p class="num uk-text-left">￥169</p><p>库存100件<input type="number"/></p><p><button class="uk-button">加入购物车</button></p></div></div>';
		$(this).parent().parent().parent().parent().append(html);
	})
	
	//产品详情页
	//点击大图替换	
	$(".small_ul img").bind("click", function() {
		$(this).parent().siblings().removeClass("active");
		$(this).parent().addClass("active");
		$(".big_img img").attr("src", $(this).attr("src"));
	})
	
	
	//dm详情页
	//点击大图替换	
	$(".dminfo_ul img").bind("click", function() {
		$(".dminfo_bigimg").attr("src", $(this).attr("src"));
	})
	
	//产品详情 展开关闭
	$(".open_btn").bind("click", function() {
			if($(this).attr("isopen")=="true")
			{
				$(this).attr("src","img/close-ic.png");
				$(this).attr("isopen","false");
				$(this).prev().removeClass("maxhei");
			}
			else
			{
				$(this).attr("src","img/open-ic.png");
				$(this).attr("isopen","true");
				$(this).prev().addClass("maxhei");
				
				
			}
	})
	
	
	//全选全不选
	$("#all").click(function() {
		if(this.checked) {
			$(".shopcar_tb :checkbox").prop("checked", true);
		} else {
			$(".shopcar_tb :checkbox").prop("checked", false);
		}
	});

})
