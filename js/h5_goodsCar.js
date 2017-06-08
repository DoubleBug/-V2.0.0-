$(function(){
    //添加商品价格汇总
    var opp = 10; //*********************表示最大库存
 	var price = 0;
    $(".jgr_add").each(function(){
    	 $(this).click(function(){
    	 	$(this).parents(".jg_right").siblings(".jg_left").find(".jgl_check").addClass("active")
	    	var num = $(this).siblings(".jgr_num").val();
	    	num ++;
	    	if(num >opp){
	    		num = opp;
	    		$(this).siblings(".underStock").show();
	    	}
	    	$(this).siblings(".jgr_num").val(num);
	    	allGoods();
	    	qpmallChecked();
	    	tenChecked();
	    	checkedAll();
	    })
    })
   
   //减少商品价格汇总
   $(".jgr_few").each(function(){
    	 $(this).click(function(){
    	 	$(this).parents(".jg_right").siblings(".jg_left").find(".jgl_check").addClass("active")
	    	var num = $(this).siblings(".jgr_num").val();
	    	num --;
	    	if(num < 1){
	    		num = 1;
	    	}
	    	$(this).siblings(".jgr_num").val(num);
	    	allGoods();
	    	qpmallChecked();
	    	tenChecked();
	    	checkedAll();
	    	$(this).siblings(".underStock").hide();
	    })
    })
   
   //手动输入数量价格汇总
   $(".jgr_num").each(function(){
    	 $(this).blur(function(){
    	 	$(this).parents(".jg_right").siblings(".jg_left").find(".jgl_check").addClass("active")
	    	var num = $(this).val();
	    	if(num <= 0){
	    		num = 1
	    	};
	    	if(num > opp){
	    		num = 1;
	    		$(this).siblings(".underStock").show();
	    	}else{
	    		$(this).siblings(".underStock").hide();
	    	}
	    	$(this).val(num);
	    	allGoods();
	    	qpmallChecked();
	    	tenChecked();
	    	checkedAll();
	    })
    })
   
   //点击单选商品 价格汇总
   var j_alllength = $(".jgl_check").length;
   $(".jgl_check").each(function(){
    	$(this).click(function(){
    		if($(this).hasClass("active")){
	    		$(this).removeClass("active");
	    		allGoods();
	    		checkedAll();
	    		qpmallChecked();
	    		tenChecked();
	    	}else{
	    		$(this).addClass("active");
	    		allGoods();
	    		checkedAll();
	    		qpmallChecked();
	    		tenChecked();
		    }
    	})
    })
   
   //点击千品猫自营店商品价格汇总
   $(".jsp_check").click(function(){
    	if($(this).hasClass("active")){
    		$(this).removeClass("active");
    		$(this).parents(".j_qpmallBox").find(".jgl_check").removeClass("active");
    		allGoods();
    		checkedAll();
    	}else{
    		$(this).addClass("active");
    		$(this).parents(".j_qpmallBox").find(".jgl_check").addClass("active");
    		allGoods();;
    		checkedAll();
    		
    	}
    })
   
   //点击十方自营店商品间隔汇总
   $(".js_tenCheck").click(function(){
    	if($(this).hasClass("active")){
    		$(this).removeClass("active");
    		$(this).parents(".j_tenDirection").find(".jgl_check").removeClass("active");
    		allGoods();
    		checkedAll();
    	}else{
    		$(this).addClass("active");
    		$(this).parents(".j_tenDirection").find(".jgl_check").addClass("active");
    		allGoods();
    		checkedAll();
    	}
    })
   
   //全选 价格汇总
   

   $(".ja_check").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).parents(".pc").find(".jgl_check").removeClass("active");
			$(this).parents(".pc").find(".js_check").removeClass("active");
			allGoods();
		}else{
			$(this).addClass("active");
			$(this).parents(".pc").find(".jgl_check").addClass("active");
			$(this).parents(".pc").find(".js_check").addClass("active");
			allGoods();
		}
    })
   
   //  点击删除
	$(".j_clear").click(function(){
		var leng = $(".active").length;
		if(leng == 0){
			$(".j_place").show()
		}else{
			$(".j_clearhide").show();
			$(".j_cla").html('您确定要删除选中的商品?')
		}
	})
	
	$(".j_cancel").click(function(){
		$(".j_clearhide").hide()
	})

 	$(".j_placesure").click(function(){
		$(".j_place").hide()
	})
 	
 	$('.j_clearGoods').click(function(){
 		$(".j_clearhide").show();
 		$(".j_cla").html("您确定要删除所有无效商品吗?");
 	})
   //********************添加商品后提示没有购物的信息消失**************************
 	var aqq = true;
 	if(aqq){
 		$(".j_none").hide();
 		$(".hasGoods").show();
 		$(".j_clear").show();
 	}else{
 		$(".j_none").show();
 		$(".hasGoods").hide();
 		$(".j_clear").hide();
 	}
 
   
   //价格总计
   	function allGoods(){
   		price = 0
    	var j_active = $(".jgl_check.active");
    	for(var i = 0; i < j_active.length; i ++){
    		var a = $(".jgl_check.active").parents(".jg_left").siblings(".jg_center").find(".j_price").eq(i).html();
    		var b = $(".jgl_check.active").parents(".jg_left").siblings(".jg_right").find(".jgr_num").eq(i).val();
    		price += a*b
    	}
    	$(".jam_num").html(price)
   }
   
   	//智能全选
   	function checkedAll(){
   		
   		var a = $(".jgl_check.active").length;
		if(a == j_alllength){
			$(".ja_check").addClass("active")
		}else{
			$(".ja_check").removeClass("active")
		}
   	}
   	
   	//qpmall自营店智能选择
   	var length = $(".jsp_check").parents(".j_qpmallBox").find(".jgl_check").length;
   	function qpmallChecked(){
   		
   		var a = $(".jsp_check").parents(".j_qpmallBox").find(".jgl_check.active").length;
		if(a == length){
			$(".jsp_check").addClass("active")
		}else{
			$(".jsp_check").removeClass("active")
		}
   	}
   	
   	//十方自营店智能选择
   	var ten_length = $(".js_tenCheck").parents(".j_tenDirection").find(".jgl_check").length;
   	function tenChecked(){
   		
   		var a = $(".js_tenCheck").parents(".j_tenDirection").find(".jgl_check.active").length;
		if(a == ten_length){
			$(".js_tenCheck").addClass("active")
		}else{
			$(".js_tenCheck").removeClass("active")
		}
   	}
   
}) 	