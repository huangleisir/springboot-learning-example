var operFlag;
//Firefox, Google Chrome, Opera, Safari, Internet Explorer from version 9
function OnInput (event) {
    $("#marketBudget").val((parseFloat($("#single_amt").val()*$("#coupon_total").val())).toFixed(2));
}
// Internet Explorer
function OnPropChanged (event) {
    if (event.propertyName.toLowerCase () == "value") {
    	 $("#marketBudget").val((parseFloat($("#single_amt").val()*$("#coupon_total").val())).toFixed(2));
    }
}
		var ruleId;
		 $(function(){
			 $("#downLoad").mzDialog();
			 initMktChannel();
			 if(GetQueryString('actId')){
				 initData();
				 operFlag = 'edit';
			 }
			 initDate();
			 
		 }); 
		 
		 $('input[name="mkt_tool"]').click(function(){ 
			  	if($(this).val() == '2'){ //选择优惠券 隐藏优惠形式	
			  		$("input[type='radio'][name='distriType'][value='2']")[0].checked=true;
			  		$('#distriTypeLi').removeClass('disp_none');
			  		$('#distriType_1').addClass('disp_none');
			  		$('#distriType_3').removeClass('disp_none');
			  		$('#distriType_2').removeClass('disp_none');
			  		$('#distriType_4').removeClass('disp_none');
			  		$('#distriType_5').removeClass('disp_none');
			  		initMktChannel();
			  		$('#refund_li').removeClass('disp_none');
			  		$('#favourFormli').addClass('disp_none');
			  		$('#ladli').addClass('disp_none');
			  		$('#ladder_reduct_li').addClass('disp_none');
			  		$('#fixed_reduct_li').addClass('disp_none');
			  		$('#single_amt_li').removeClass('disp_none');
			  		$('#coupon_total_li').removeClass('disp_none');
			  		$('#coupon_name_li').removeClass('disp_none');
			  		$('#amt_limit_li').removeClass('disp_none');
			  		$('#coupon_time_li').removeClass('disp_none');
			  		$('#pay_channel_li').removeClass('disp_none');
			  		$('#goods_li').removeClass('disp_none');
			  		$('#user_max_join_li').removeClass('disp_none');
			  		$('#user_day_max_join_li').removeClass('disp_none');
			  		$('input[name="goods"]').click(function(){
			  			if($(this).val() == '1'){
			  				$('#single_goods_li').removeClass('disp_none');
			  				}else {
			  					$('#single_goods_li').addClass('disp_none');
			  					}
					  	  	});
			  	    $('input[name="distriType"]').click(function(){
			  	  	if($(this).val() == '2'){
			  	  	$('#user_max_join_li').removeClass('disp_none');
					$('#userMaxJoinTime').attr('disabled',false);
					$('#userMaxJoinTime').val('');
			  		$('#user_day_max_join_li').removeClass('disp_none');
					$('#userDayMaxJoinTime').attr('disabled',false);
					$('#userDayMaxJoinTime').val('');
			  	  	}else{
			  	  	$('#user_max_join_li').removeClass('disp_none');
			  	    $('#userMaxJoinTime').val('1');
					$('#userMaxJoinTime').attr('disabled',true);
			  		$('#user_day_max_join_li').removeClass('disp_none');
			  		$('#userDayMaxJoinTime').val('1');
					$('#userDayMaxJoinTime').attr('disabled',true);
			  	  	}
			     });
			  	  $('input[name="refund"]').click(function(){
				  	  	if($(this).val() == '3'){
				  	  	$('#refund_lii').removeClass('disp_none');
				  	  	}else{
				  	  	$('#refund_lii').addClass('disp_none');
				  	  	}
				     });
//			  		$('#coupon_time_li').after('<br/>');
			  		//折扣优惠隐藏掉
			  		$('#zk_span').addClass('disp_none');
			  		$('#marketBudget').attr('disabled',true);
			  		$("input[type='radio'][name='calculateMode'][value='1']")[0].checked=true;
			  		
			  	}else if($(this).val() == '1'){	
			  		$('#refund_li').addClass('disp_none');
			  		$("input[type='radio'][name='distriType'][value='1']")[0].checked=true;
			  		$('#distriTypeLi').addClass('disp_none');
			  		initMktChannel();
			  		$('#favourFormli').removeClass('disp_none');
			  		$('#ladli').removeClass('disp_none');
			  		$('#fixed_reduct_li').removeClass('disp_none');
			  		$('#single_amt_li').addClass('disp_none');
			  		//$('#"distriTypeLi"').addClass('disp_none');
			  		$('#coupon_total_li').addClass('disp_none');
			  		$('#coupon_name_li').addClass('disp_none');
			  		$('#amt_limit_li').addClass('disp_none');
			  		$('#pay_channel_li').removeClass('disp_none');
			  		$('#goods_li').addClass('disp_none');
			  		$('#single_goods_li').addClass('disp_none');
			  		$('#coupon_time_li').addClass('disp_none');
//			  		$('#coupon_time_li').next().remove();
			  		$('#user_max_join_li').addClass('disp_none');
			  		$('#user_day_max_join_li').addClass('disp_none');
			  		$('#zk_span').removeClass('disp_none');
			  		$('#marketBudget').attr('disabled',false);
			  		$("#float_bar").removeClass('disp_none');
			  	}else if($(this).val() == '3'){//选择红包活动	
			  		$('#refund_li').addClass('disp_none');
			  		$("input[type='radio'][name='distriType'][value='3']")[0].checked=true;
			  		$('#distriTypeLi').removeClass('disp_none');
			  		$('#distriType_1').addClass('disp_none');
			  		$('#distriType_2').addClass('disp_none');
			  		$('#distriType_4').removeClass('disp_none');
			  		$('#distriType_5').addClass('disp_none');
			  		$('#distriType_3').removeClass('disp_none');
			  		initMktChannel('JTC');
			  		$('#favourFormli').addClass('disp_none');
			  		$('#ladli').addClass('disp_none');
			  		$('#favourFormli').addClass('disp_none');
			  		$('#ladli').addClass('disp_none');
			  		$('#ladder_reduct_li').addClass('disp_none');
			  		$('#fixed_reduct_li').addClass('disp_none');
			  		$('#single_amt_li').removeClass('disp_none');
			  		$('#coupon_total_li').removeClass('disp_none');
			  		$('#coupon_name_li').addClass('disp_none');
			  		$('#amt_limit_li').addClass('disp_none');
			  		$('#coupon_time_li').addClass('disp_none');
			  		$('#pay_channel_li').addClass('disp_none');
			  		$('#goods_li').addClass('disp_none');
			  		$('#single_goods_li').addClass('disp_none');
			  		$('#user_max_join_li').addClass('disp_none');
			  		$('#user_day_max_join_li').addClass('disp_none');
//			  		$('#coupon_time_li').after('<br/>');
			  		//折扣优惠隐藏掉
			  		$('#zk_span').addClass('disp_none');
			  		$('#float_bar_text_li').addClass('disp_none');
			  		$('#float_bar_link_li').addClass('disp_none');
			  		$('#marketBudget').attr('disabled',true);
			  		$("#float_bar").addClass('disp_none');
			  		$("input[type='radio'][name='calculateMode'][value='1']")[0].checked=true;
			  	}
			  	
		});
		 $('input[name="distriType"]').click(function(){ 
			 if($(this).val() == '2'){ //注册送不需要配置浮条
				 $("#floatBarSwitchLi").addClass("disp_none");
			 }else{
				 $("#floatBarSwitchLi").removeClass("disp_none");
			 }
		 });
		  $('input[name="calculateMode"]').click(function(){
			  $('#amt_or_scale').val('');
			  $('input[name="scale"]').each(function(index,data){ 
				  $(data).val(''); 
			  });
					
		  	if($(this).val() == '1'){
		  		$('input[name="amt_or_scale"]').attr('placeholder','设置赠送金额');
		  		$("span[name='per_scale']").each(function(index,data){ 
				$(data).html('元');
		  	});
		  		$("input[name='scale']").each(function(index,data){ 
					$(data).attr('placeholder','设置赠送金额');
			  	});
		  		
		  	}else if($(this).val() == '2'){
		  		$('input[name="amt_or_scale"]').attr('placeholder','设置赠送比例');
		  		$("span[name='per_scale']").each(function(index,data){ 
				$(data).html('%');
		  	});
		  		$("input[name='scale']").each(function(index,data){ 
					$(data).attr('placeholder','设置赠送比例');
			  	});
		  	}
  });
		  
  
		  
  $('input[name="floatBarSwitch"]').click(function(){
		  	if($(this).val() == '1'){
		  		$('#float_bar_text_li').removeClass('disp_none');
			  	$('#float_bar_link_li').removeClass('disp_none');
		  	}else if($(this).val() == '0'){
		  		$('#float_bar_text_li').addClass('disp_none');
		  		$('#float_bar_link_li').addClass('disp_none');
		  	}
	});
  
  $('input[name="distriType"]').click(function(){debugger
	  	if($(this).val() == '3'){
	  		if($('input[name="mkt_tool"]:checked').val()==3){
	  			initMktChannel('JTC');
	  		}else{
	  			initMktChannel('distriType_3');
	  		}	
	  	}else if($(this).val() == '4'){
	  		initMktChannel('distriType_4');
	  	}else{
	  		initMktChannel();
	  	}
});

	$('input[name="isOpenRank"]').click(function(){
		  	if($(this).val() == '1'){
			  	$('#ladder_reduct_li').removeClass('disp_none');
			  	$('#fixed_reduct_li').addClass('disp_none');
			  
			  		$("span[name='per_scale']").each(function(index,data){ 
			  			if($('input[name="calculateMode"]:checked').val() == 1){
			  				$(data).html('元');
			  			}else if($('input[name="calculateMode"]:checked').val() == 2){
			  				$(data).html('%');
			  			}
				  	});
			  	
			  	
		  	}else if($(this).val() == '0'){
		  		$('#fixed_reduct_li').removeClass('disp_none');
		  		$('#ladder_reduct_li').addClass('disp_none');
		  	}
	});
	
	$('a[name="addLadder"]').click(function(){
		$(this).parent().next().removeClass("disp_none");
		$(this).addClass("disp_none");
		$(this).next().addClass("disp_none");
	});
	
	$('a[name="delLadder"]').click(function(){
		$(this).parent().addClass("disp_none");
		$(this).parent().prev().find("a").removeClass("disp_none");
	});
	//初始化日期时间控件
	 function initDate(){
		$("#startTime").datetimepicker({format: 'yyyy-mm-dd hh:ii',language:'zh-CN'});
		$("#coupon_startTime").datetimepicker({format: 'yyyy-mm-dd',language:'zh-CN',minView: "month"});
		$("#creat_startTime").datetimepicker({format: 'yyyy-mm-dd',language:'zh-CN',minView: "month"});
		$("#endTime").datetimepicker({format: 'yyyy-mm-dd hh:ii',language:'zh-CN'});
		$("#coupon_endTime").datetimepicker({format: 'yyyy-mm-dd',language:'zh-CN',minView: "month"});
		$("#creat_endTime").datetimepicker({format: 'yyyy-mm-dd',language:'zh-CN',minView: "month"});
		$("#btn_creat_startTime").click(function(){
			$("#creat_startTime").datetimepicker("show");
		});
		$("#btn_creat_endTime").click(function(){
			$("#creat_endTime").datetimepicker("show");
		});
		if(operFlag != 'edit'){
			$("#btn_startTime").click(function(){
				$("#startTime").datetimepicker("show");
			});
			$("#btn_coupon_startTime").click(function(){
				$("#coupon_startTime").datetimepicker("show");
			});
			$("#btn_endTime").click(function(){
				$("#endTime").datetimepicker("show");
			});
			$("#btn_coupon_endTime").click(function(){
				$("#coupon_endTime").datetimepicker("show");
			});
		}
	var actName = document.getElementById('act_name');
	var startTime = document.getElementById('startTime');
	var endTime = document.getElementById('endTime');
	var couponStartTime = document.getElementById('coupon_startTime');
	var couponEndTime = document.getElementById('coupon_endTime');
	document.body.onclick = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		
		if (target != actName) {
			if (!$.trim($('#act_name').val())) {
				$('#actName_lable').removeClass('disp_none');
				$('#actNameLength_lable').addClass('disp_none');
			} else {
				$('#actName_lable').addClass('disp_none');

			}
			if ($.trim($('#act_name').val()).length > 18) {
				$('#actNameLength_lable').removeClass('disp_none');

			} else {
				$('#actNameLength_lable').addClass('disp_none');

			}
		}
		if (target != startTime && target != endTime
				&& target != couponStartTime && target != couponEndTime) {
			// 校验日期
			if (!$('#startTime').val() || !$('#endTime').val()) {
				$('#actStaEnd_lable').removeClass('disp_none');
				$('#actStaNow_lable').addClass('disp_none');
				$('#actStaEndCp_lable').addClass('disp_none');
			} else {
				$('#actStaEnd_lable').addClass('disp_none');

			}
			var nowDate = new Date();
			var beginDate = $("#startTime").val();
			var endDate = $("#endTime").val();
			var d1 = new Date(beginDate.replace(/\-/g, "\/"));
			var d2 = new Date(endDate.replace(/\-/g, "\/"));
			var dd = d1.getTime();
			var ndate = nowDate.getTime();
			if (dd < ndate && operFlag != 'edit') {
				$('#actStaEnd_lable').addClass('disp_none');
				$('#actStaNow_lable').removeClass('disp_none');
				$('#actStaEndCp_lable').addClass('disp_none');
			} else {
				$('#actStaNow_lable').addClass('disp_none');
			}
			if (beginDate != "" && endDate != "" && d1 >= d2
					&& operFlag != 'edit') {
				$('#actStaEndCp_lable').removeClass('disp_none');
				$('#actStaEnd_lable').addClass('disp_none');
				$('#actStaNow_lable').addClass('disp_none');
			} else {
				$('#actStaEndCp_lable').addClass('disp_none');
			}

			var abeginDate = $.trim($("#coupon_startTime").val() + " 00:00:00");
			var aendDate = $.trim($("#coupon_endTime").val() + " 23:59:59");
			var ad1 = new Date(abeginDate.replace(/\-/g, "\/"));
			var ad2 = new Date(aendDate.replace(/\-/g, "\/"));

			if (ad1 >= ad2 && operFlag != 'edit') {
				$('#coupStaEnd_lable').removeClass('disp_none');
				$('#coupStaActEnd_lable').addClass('disp_none');

			} else {
				$('#coupStaEnd_lable').addClass('disp_none');

			}
			var coupEndTime = ad2.getTime();// 券结束时间
			var actEndTime = d2.getTime() + 7200000;// 活动结束时间加2小时
			if (coupEndTime < actEndTime && operFlag != 'edit') {
				$('#coupStaActEnd_lable').removeClass('disp_none');
				$('#coupStaEnd_lable').addClass('disp_none');
			} else {
				$('#coupStaActEnd_lable').addClass('disp_none');
			}
			if(!$('#coupon_startTime').val() || !$('#coupon_endTime').val()){
				$('#coupStaEnd_lable0').removeClass('disp_none');
				$('#coupStaActEnd_lable').addClass('disp_none');
				$('#coupStaEnd_lable').addClass('disp_none');
			}else{
				$('#coupStaEnd_lable0').addClass('disp_none');
			}
		}
		if(!$('#merchantNo').val()){
			$('#merchantNo_lable').removeClass('disp_none');
		} else {
			$('#merchantNo_lable').addClass('disp_none');
		}
		if(!$('#marketBudget').val()){
			$('#marketBudget_lable0').removeClass('disp_none');
			$('#marketBudget_lable1').addClass('disp_none');
			$('#marketBudget_lable2').addClass('disp_none');
		} else{
			$('#marketBudget_lable0').addClass('disp_none');
		}
		if($('#marketBudget').val()!=""&&!checkAmount($('#marketBudget').val())){
			$('#marketBudget_lable2').removeClass('disp_none');
			$('#marketBudget_lable1').addClass('disp_none');
			$('#marketBudget_lable0').addClass('disp_none');
		} else{
			$('#marketBudget_lable2').addClass('disp_none');
		}
		if($('#marketBudget').val()!=""&&$('#marketBudget').val()<=0){
			$('#marketBudget_lable1').removeClass('disp_none');
			$('#marketBudget_lable0').addClass('disp_none');
			$('#marketBudget_lable2').addClass('disp_none');
		} else{
			$('#marketBudget_lable1').addClass('disp_none');
		}
		
		 
		if(!$('#threshold').val()){
			$('#threshold_lable0').removeClass('disp_none');
			$('#threshold_lable1').addClass('disp_none');
			$('#threshold_lable2').addClass('disp_none');
			$('#threshold_lable3').addClass('disp_none');
		} else{
			$('#threshold_lable0').addClass('disp_none');
		}
		if($('#threshold').val()!=""&&$('#marketBudget').val()!=""&&parseFloat($('#threshold').val())>=parseFloat($('#marketBudget').val())){
			$('#threshold_lable2').removeClass('disp_none');
			$('#threshold_lable1').addClass('disp_none');
			$('#threshold_lable0').addClass('disp_none');
			$('#threshold_lable3').addClass('disp_none');
		} else{
			$('#threshold_lable2').addClass('disp_none');
		}
		
		if($('#threshold').val()!=""&&!checkAmount($('#threshold').val())){
			$('#threshold_lable1').removeClass('disp_none');
			$('#threshold_lable2').addClass('disp_none');
			$('#threshold_lable0').addClass('disp_none');
			$('#threshold_lable3').addClass('disp_none');
		}else{
			$('#threshold_lable1').addClass('disp_none');
		}
		if($('#threshold').val()!=""&&$('#threshold').val()<0){
			$('#threshold_lable3').removeClass('disp_none');
			$('#threshold_lable1').addClass('disp_none');
			$('#threshold_lable2').addClass('disp_none');
			$('#threshold_lable0').addClass('disp_none');
		} else{
			$('#threshold_lable3').addClass('disp_none');
		}
		
		if(!$('#contact_no').val()){
			$('#contact_no_lable0').removeClass('disp_none');
		} else {
			$('#contact_no_lable0').addClass('disp_none');
		}
		if($('#contact_no').val()!=""&&!checkMobile($('#contact_no').val())){
			$('#contact_no_lable1').removeClass('disp_none');
		} else {
			$('#contact_no_lable1').addClass('disp_none');
		}
		if($('input[name="floatBarSwitch"]:checked').val()=='1'){
			if(!$("#floatBarText").val()){
				$('#floatBarText_lable0').removeClass('disp_none');
			} else {
				$('#floatBarText_lable0').addClass('disp_none');
			}

			if(!$("#floatUrl").val()){
				$('#floatUrl_lable0').removeClass('disp_none');
			} else {
				$('#floatUrl_lable0').addClass('disp_none');
			}debugger
			if($("#floatUrl").val()!=""&&!CheckUrl($('#floatUrl').val())){
				$('#floatUrl_lable1').removeClass('disp_none');
			} else {
				$('#floatUrl_lable1').addClass('disp_none');
			}
		}else if($('input[name="floatBarSwitch"]:checked').val()=='0'){
			$("#floatBarText").val('');
			$("#floatUrl").val('');
		}
		
		if($('input[name="mkt_tool"]:checked').val()==1){ //充值优惠才会校验以下输入项
			
			if($('input[name="isOpenRank"]:checked').val() == 0 && $('input[name="mkt_tool"]:checked').val() == 1){ //固定优惠校验
				
				if($('input[name="calculateMode"]:checked').val() == 1 ){
						fixedFavourAmt = $('#amt_or_scale').val();
						if(!$.trim(fixedFavourAmt)){
							$('#minAmount1_lable').addClass('disp_none');
							$('#minAmount2_lable').addClass('disp_none');
							$('#minAmount_lable').addClass('disp_none');
							for(var i=0;i<8;i++){
								var name ='#amt_or_scale'+i;
								$(name).addClass('disp_none');
							}
							$('#amt_or_scale0').removeClass('disp_none');
						}else{
							$('#amt_or_scale0').addClass('disp_none');
						}
						if(fixedFavourAmt!="" &&　parseFloat(fixedFavourAmt)>parseFloat($('#minAmount').val())){
							$('#minAmount1_lable').addClass('disp_none');
							$('#minAmount2_lable').addClass('disp_none');
							$('#minAmount_lable').addClass('disp_none');
							for(var i=0;i<8;i++){
								var name ='#amt_or_scale'+i;
								$(name).addClass('disp_none');
							}
							$('#amt_or_scale1').removeClass('disp_none');
						}else{
							$('#amt_or_scale1').addClass('disp_none');
						}
						if(fixedFavourAmt!="" &&　parseFloat(fixedFavourAmt)<=0){
							$('#minAmount1_lable').addClass('disp_none');
							$('#minAmount2_lable').addClass('disp_none');
							$('#minAmount_lable').addClass('disp_none');
							for(var i=0;i<8;i++){
								var name ='#amt_or_scale'+i;
								$(name).addClass('disp_none');
							}
							$('#amt_or_scale2').removeClass('disp_none');
						}else{
							$('#amt_or_scale2').addClass('disp_none');
						}
						if(fixedFavourAmt!="" &&　!checkAmount(parseFloat(fixedFavourAmt))){
							$('#minAmount1_lable').addClass('disp_none');
							$('#minAmount2_lable').addClass('disp_none');
							$('#minAmount_lable').addClass('disp_none');
							for(var i=0;i<8;i++){
								var name ='#amt_or_scale'+i;
								$(name).addClass('disp_none');
							}
							$('#amt_or_scale3').removeClass('disp_none');
						}else{
							$('#amt_or_scale3').addClass('disp_none');
						}
						
					}else if($('input[name="calculateMode"]:checked').val() == 2 ){
						fixedFavourRate = $('#amt_or_scale').val();
						if(!$.trim(fixedFavourRate)){
							$('#minAmount1_lable').addClass('disp_none');
							$('#minAmount2_lable').addClass('disp_none');
							$('#minAmount_lable').addClass('disp_none');
							for(var i=0;i<8;i++){
								var name ='#amt_or_scale'+i;
								$(name).addClass('disp_none');
							}
							$('#amt_or_scale4').removeClass('disp_none');
						}else{
							$('#amt_or_scale4').addClass('disp_none');
						}
						if(fixedFavourRate!="" && fixedFavourRate > 100){
							$('#minAmount1_lable').addClass('disp_none');
							$('#minAmount2_lable').addClass('disp_none');
							$('#minAmount_lable').addClass('disp_none');
							for(var i=0;i<8;i++){
								var name ='#amt_or_scale'+i;
								$(name).addClass('disp_none');
							}
							$('#amt_or_scale5').removeClass('disp_none');
						}else{
							$('#amt_or_scale5').addClass('disp_none');
						}
						if(fixedFavourRate!="" && fixedFavourRate <= 0){
							$('#minAmount1_lable').addClass('disp_none');
							$('#minAmount2_lable').addClass('disp_none');
							$('#minAmount_lable').addClass('disp_none');
							for(var i=0;i<8;i++){
								var name ='#amt_or_scale'+i;
								$(name).addClass('disp_none');
							}
							$('#amt_or_scale6').removeClass('disp_none');
						}else{
							$('#amt_or_scale6').addClass('disp_none');
						}
						if(fixedFavourRate!="" && !checkAmount(fixedFavourRate)){
							$('#minAmount1_lable').addClass('disp_none');
							$('#minAmount2_lable').addClass('disp_none');
							$('#minAmount_lable').addClass('disp_none');
							for(var i=0;i<8;i++){
								var name ='#amt_or_scale'+i;
								$(name).addClass('disp_none');
							}
							$('#amt_or_scale7').removeClass('disp_none');
						}else{
							$('#amt_or_scale7').addClass('disp_none');
						}
						fixedFavourRate = parseFloat(fixedFavourRate)/100;
					}
				if(!$.trim($('#minAmount').val())){
					$('#minAmount2_lable').removeClass('disp_none');
					$('#minAmount_lable').addClass('disp_none');
					$('#minAmount1_lable').addClass('disp_none');
					for(var i=0;i<8;i++){
						var name ='#amt_or_scale'+i;
						$(name).addClass('disp_none');
					}
				}else{
					$('#minAmount2_lable').addClass('disp_none');
				}
				if($('#minAmount').val()!="" && $('#minAmount').val()<=0){
					$('#minAmount_lable').removeClass('disp_none');
					$('#minAmount2_lable').addClass('disp_none');
					$('#minAmount1_lable').addClass('disp_none');
					for(var i=0;i<8;i++){
						var name ='#amt_or_scale'+i;
						$(name).addClass('disp_none');
					}
				}else{
					$('#minAmount_lable').addClass('disp_none');
				}
				if($('#minAmount').val()!="" && !checkAmount($('#minAmount').val())){
					$('#minAmount1_lable').removeClass('disp_none');
					$('#minAmount2_lable').addClass('disp_none');
					$('#minAmount_lable').addClass('disp_none');
					for(var i=0;i<8;i++){
						var name ='#amt_or_scale'+i;
						$(name).addClass('disp_none');
					}
				}else{
					$('#minAmount1_lable').addClass('disp_none');
				}
					
					
			}else if($('input[name="isOpenRank"]:checked').val() == 1){ //梯度优惠校验
				
				//校验#amt_rate
				if($('input[name="calculateMode"]:checked').val() == 1){
					if(!$.trim($('#amt_scale1').val())){
						for(var i=0;i<12;i++){
							var name ='#lad_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad_lable4').removeClass('disp_none');
					}else{
						$('#lad_lable4').addClass('disp_none');
					}
					if($('#amt_scale1').val()!="" && parseFloat($('#amt_scale1').val())<=0){
						for(var i=0;i<12;i++){
							var name ='#lad_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad_lable5').removeClass('disp_none');
					}else{
						$('#lad_lable5').addClass('disp_none');
					}
					if($('#amt_scale1').val()!="" && !checkAmount($('#amt_scale1').val())){
						for(var i=0;i<12;i++){
							var name ='#lad_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad_lable6').removeClass('disp_none');
					}else{
						$('#lad_lable6').addClass('disp_none');
					}
					if($('#amt_scale1').val()!="" && parseFloat($('#amt_scale1').val())>parseFloat($('#lad1_end').val())){
						for(var i=0;i<12;i++){
							var name ='#lad_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad_lable7').removeClass('disp_none');
					}else{
						$('#lad_lable7').addClass('disp_none');
					}
					
					
				}
				if($('input[name="calculateMode"]:checked').val() == 2){
					if(!$.trim($('#amt_scale1').val())){
						for(var i=0;i<12;i++){
							var name ='#lad_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad_lable8').removeClass('disp_none');
					}else{
						$('#lad_lable8').addClass('disp_none');
					}
					if($('#amt_scale1').val()!="" && $('#amt_scale1').val()>100){
						for(var i=0;i<12;i++){
							var name ='#lad_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad_lable9').removeClass('disp_none');
					}else{
						$('#lad_lable9').addClass('disp_none');
					}
					if($('#amt_scale1').val()!="" &&$('#amt_scale1').val()<=0){
						for(var i=0;i<12;i++){
							var name ='#lad_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad_lable10').removeClass('disp_none');
					}else{
						$('#lad_lable10').addClass('disp_none');
					}
					if($('#amt_scale1').val()!="" && !checkAmount($('#amt_scale1').val())){
						for(var i=0;i<12;i++){
							var name ='#lad_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad_lable11').removeClass('disp_none');
					}else{
						$('#lad_lable11').addClass('disp_none');
					}
				}
				if(!$('#lad1_start').val() || !$('#lad1_end').val() ){
					for(var i=0;i<12;i++){
						var name ='#lad_lable'+i;
						$(name).addClass('disp_none');
					}
					$('#lad_lable0').removeClass('disp_none');
				}else{
					$('#lad_lable0').addClass('disp_none');
				}
				if($('#lad1_start').val()!="" && $('#lad1_end').val()!="" && !checkAmount($('#lad1_start').val())){
					for(var i=0;i<12;i++){
						var name ='#lad_lable'+i;
						$(name).addClass('disp_none');
					}
					$('#lad_lable1').removeClass('disp_none');
				}else{
					$('#lad_lable1').addClass('disp_none');
				}
				if($('#lad1_start').val()!="" && $('#lad1_end').val()!="" &&  !checkAmount($('#lad1_end').val())){
					for(var i=0;i<12;i++){
						var name ='#lad_lable'+i;
						$(name).addClass('disp_none');
					}
					$('#lad_lable2').removeClass('disp_none');
				}else{
					$('#lad_lable2').addClass('disp_none');
				}
				if($('#lad1_start').val()!="" && $('#lad1_end').val()!="" &&  parseFloat($('#lad1_start').val())>=parseFloat($('#lad1_end').val()) ){
					for(var i=0;i<12;i++){
						var name ='#lad_lable'+i;
						$(name).addClass('disp_none');
					}
					$('#lad_lable3').removeClass('disp_none');
				}else{
					$('#lad_lable3').addClass('disp_none');
				}
				
				
				var display =$('#lad1').css('display'); //阶梯2
				if(display != 'none'){ //校验第2行
					
					//校验#amt_rate
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale2').val())){
							for(var i=0;i<13;i++){
								var name ='#lad2_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad2_lable4').removeClass('disp_none');
						}else{
							$('#lad2_lable4').addClass('disp_none');
						}
						if($('#amt_scale2').val()!="" && parseFloat($('#amt_scale2').val())<=0){
							for(var i=0;i<13;i++){
								var name ='#lad2_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad2_lable5').removeClass('disp_none');
						}else{
							$('#lad2_lable5').addClass('disp_none');
						}
						if($('#amt_scale2').val()!="" &&!checkAmount($('#amt_scale2').val())){
							for(var i=0;i<13;i++){
								var name ='#lad2_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad2_lable6').removeClass('disp_none');
						}else{
							$('#lad2_lable6').addClass('disp_none');
						}
						if($('#amt_scale2').val()!="" &&parseFloat($('#amt_scale2').val())>parseFloat($('#lad2_end').val())){
							for(var i=0;i<13;i++){
								var name ='#lad2_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad2_lable7').removeClass('disp_none');
						}else{
							$('#lad2_lable7').addClass('disp_none');
						}
						
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale2').val())){
							for(var i=0;i<13;i++){
								var name ='#lad2_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad2_lable8').removeClass('disp_none');
						}else{
							$('#lad2_lable8').addClass('disp_none');
						}
						if($('#amt_scale2').val()!="" &&$('#amt_scale2').val()>100){
							for(var i=0;i<13;i++){
								var name ='#lad2_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad2_lable9').removeClass('disp_none');
						}else{
							$('#lad2_lable9').addClass('disp_none');
						}
						if($('#amt_scale2').val()!="" &&$('#amt_scale2').val()<0){
							for(var i=0;i<13;i++){
								var name ='#lad2_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad2_lable10').removeClass('disp_none');
						}else{
							$('#lad2_lable10').addClass('disp_none');
						}
						if($('#amt_scale2').val()!="" &&!checkAmount($('#amt_scale2').val())){
							for(var i=0;i<13;i++){
								var name ='#lad2_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad2_lable11').removeClass('disp_none');
						}else{
							$('#lad2_lable11').addClass('disp_none');
						}
					}
					if( !$('#lad2_start').val() || !$('#lad2_end').val()){
						for(var i=0;i<13;i++){
							var name ='#lad2_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad2_lable0').removeClass('disp_none');
					}else{
						$('#lad2_lable0').addClass('disp_none');
					}
					if($('#lad2_start').val()!="" && $('#lad2_end').val()!=""&& !checkAmount($('#lad2_start').val())){
						for(var i=0;i<13;i++){
							var name ='#lad2_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad2_lable1').removeClass('disp_none');
					}else{
						$('#lad2_lable1').addClass('disp_none');
					}
					if($('#lad2_start').val()!="" && $('#lad2_end').val()!=""&&  !checkAmount($('#lad2_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad2_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad2_lable2').removeClass('disp_none');
					}else{
						$('#lad2_lable2').addClass('disp_none');
					}
					if($('#lad2_start').val()!="" && $('#lad2_end').val()!=""&&  parseFloat($('#lad2_start').val())>=parseFloat($('#lad2_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad2_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad2_lable3').removeClass('disp_none');
					}else{
						$('#lad2_lable3').addClass('disp_none');
					}
					if($('#lad2_start').val()!="" && $('#lad1_end').val()!=""&&  parseFloat($('#lad2_start').val())!=parseFloat($('#lad1_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad2_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad2_lable12').removeClass('disp_none');
					}else{
						$('#lad2_lable12').addClass('disp_none');
					}
				}
				
				
				var display =$('#lad2').css('display'); //阶梯3
				if(display != 'none'){ //校验第2行
					
					//校验#amt_rate
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale3').val())){
							for(var i=0;i<13;i++){
								var name ='#lad3_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad3_lable4').removeClass('disp_none');
						}else{
							$('#lad3_lable4').addClass('disp_none');
						}
						if($('#amt_scale3').val()!="" && parseFloat($('#amt_scale3').val())<=0){
							for(var i=0;i<13;i++){
								var name ='#lad3_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad3_lable5').removeClass('disp_none');
						}else{
							$('#lad3_lable5').addClass('disp_none');
						}
					
						if($('#amt_scale3').val()!="" && !checkAmount($('#amt_scale3').val())){
							for(var i=0;i<13;i++){
								var name ='#lad3_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad3_lable6').removeClass('disp_none');
						}else{
							$('#lad3_lable6').addClass('disp_none');
						}
						if($('#amt_scale3').val()!="" && parseFloat($('#amt_scale3').val())>parseFloat($('#lad3_end').val())){
							for(var i=0;i<13;i++){
								var name ='#lad3_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad3_lable7').removeClass('disp_none');
						}else{
							$('#lad3_lable7').addClass('disp_none');
						}
						
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale3').val())){
							for(var i=0;i<13;i++){
								var name ='#lad3_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad3_lable8').removeClass('disp_none');
						}else{
							$('#lad3_lable8').addClass('disp_none');
						}
						if($('#amt_scale3').val()!="" && $('#amt_scale3').val()>100){
							for(var i=0;i<13;i++){
								var name ='#lad3_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad3_lable9').removeClass('disp_none');
						}else{
							$('#lad3_lable9').addClass('disp_none');
						}
						if($('#amt_scale3').val()!="" && $('#amt_scale3').val()<0){
							for(var i=0;i<13;i++){
								var name ='#lad3_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad3_lable10').removeClass('disp_none');
						}else{
							$('#lad3_lable10').addClass('disp_none');
						}
						if($('#amt_scale3').val()!="" && !checkAmount($('#amt_scale3').val())){
							for(var i=0;i<13;i++){
								var name ='#lad3_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad3_lable11').removeClass('disp_none');
						}else{
							$('#lad3_lable11').addClass('disp_none');
						}
					}
					if( !$('#lad3_start').val() || !$('#lad3_end').val()){
						for(var i=0;i<13;i++){
							var name ='#lad3_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad3_lable0').removeClass('disp_none');
					}else{
						$('#lad3_lable0').addClass('disp_none');
					}
					if($('#lad3_start').val()!="" && $('#lad3_end').val()!=""&& !checkAmount($('#lad3_start').val())){
						for(var i=0;i<13;i++){
							var name ='#lad3_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad3_lable1').removeClass('disp_none');
					}else{
						$('#lad3_lable1').addClass('disp_none');
					}
					if($('#lad3_start').val()!="" &&$('#lad3_end').val()!=""&& !checkAmount($('#lad3_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad3_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad3_lable2').removeClass('disp_none');
					}else{
						$('#lad3_lable2').addClass('disp_none');
					}
					if($('#lad3_start').val()!="" &&$('#lad3_end').val()!=""&& parseFloat($('#lad3_start').val())>=parseFloat($('#lad3_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad3_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad3_lable3').removeClass('disp_none');
					}else{
						$('#lad3_lable3').addClass('disp_none');
					}
					if($('#lad3_start').val()!="" &&$('#lad2_end').val()!=""&& parseFloat($('#lad3_start').val())!=parseFloat($('#lad2_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad3_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad3_lable12').removeClass('disp_none');
					}else{
						$('#lad3_lable12').addClass('disp_none');
					}
				}
				var display =$('#lad3').css('display'); //阶梯4
				if(display != 'none'){ //校验第2行
					
					//校验#amt_rate
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale4').val())){
							for(var i=0;i<13;i++){
								var name ='#lad4_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad4_lable4').removeClass('disp_none');
						}else{
							$('#lad4_lable4').addClass('disp_none');
						}
						if($('#amt_scale4').val()!="" && parseFloat($('#amt_scale4').val())<=0){
							for(var i=0;i<13;i++){
								var name ='#lad4_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad4_lable5').removeClass('disp_none');
						}else{
							$('#lad4_lable5').addClass('disp_none');
						}
						if($('#amt_scale4').val()!="" && !checkAmount($('#amt_scale4').val())){
							for(var i=0;i<13;i++){
								var name ='#lad4_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad4_lable6').removeClass('disp_none');
						}else{
							$('#lad4_lable6').addClass('disp_none');
						}
						if($('#amt_scale4').val()!="" && parseFloat($('#amt_scale4').val())>parseFloat($('#lad4_end').val())){
							for(var i=0;i<13;i++){
								var name ='#lad4_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad4_lable7').removeClass('disp_none');
						}else{
							$('#lad4_lable7').addClass('disp_none');
						}
						
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale4').val())){
							for(var i=0;i<13;i++){
								var name ='#lad4_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad4_lable8').removeClass('disp_none');
						}else{
							$('#lad4_lable8').addClass('disp_none');
						}
						if($('#amt_scale4').val()!="" && $('#amt_scale4').val()>100){
							for(var i=0;i<13;i++){
								var name ='#lad4_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad4_lable9').removeClass('disp_none');
						}else{
							$('#lad4_lable9').addClass('disp_none');
						}
						if($('#amt_scale4').val()!="" && $('#amt_scale4').val()<0){
							for(var i=0;i<13;i++){
								var name ='#lad4_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad4_lable10').removeClass('disp_none');
						}else{
							$('#lad4_lable10').addClass('disp_none');
						}
						if($('#amt_scale4').val()!="" && !checkAmount($('#amt_scale4').val())){
							for(var i=0;i<13;i++){
								var name ='#lad4_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad4_lable11').removeClass('disp_none');
						}else{
							$('#lad4_lable11').addClass('disp_none');
						}
					}
					if( !$('#lad4_start').val() || !$('#lad4_end').val()){
						for(var i=0;i<13;i++){
							var name ='#lad4_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad4_lable0').removeClass('disp_none');
					}else{
						$('#lad4_lable0').addClass('disp_none');
					}
					if($('#lad4_start').val()!="" &&$('#lad4_end').val()!=""&&  !checkAmount($('#lad4_start').val())){
						for(var i=0;i<13;i++){
							var name ='#lad4_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad4_lable1').removeClass('disp_none');
					}else{
						$('#lad4_lable1').addClass('disp_none');
					}
					if($('#lad4_start').val()!="" &&$('#lad4_end').val()!=""&&   !checkAmount($('#lad4_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad4_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad4_lable2').removeClass('disp_none');
					}else{
						$('#lad4_lable2').addClass('disp_none');
					}
					if($('#lad4_start').val()!="" &&$('#lad4_end').val()!=""&&   parseFloat($('#lad4_start').val())>=parseFloat($('#lad4_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad4_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad4_lable3').removeClass('disp_none');
					}else{
						$('#lad4_lable3').addClass('disp_none');
					}
					if($('#lad4_start').val()!="" &&$('#lad3_end').val()!=""&&   parseFloat($('#lad4_start').val())!=parseFloat($('#lad3_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad4_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad4_lable12').removeClass('disp_none');
					}else{
						$('#lad4_lable12').addClass('disp_none');
					}
				}
				var display =$('#lad4').css('display'); //阶梯5
				if(display != 'none'){ //校验第2行
					
					//校验#amt_scale
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale5').val())){
							for(var i=0;i<13;i++){
								var name ='#lad5_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad5_lable4').removeClass('disp_none');
						}else{
							$('#lad5_lable4').addClass('disp_none');
						}
						if($('#amt_scale5').val()!="" && parseFloat($('#amt_scale5').val())<=0){
							for(var i=0;i<13;i++){
								var name ='#lad5_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad5_lable5').removeClass('disp_none');
						}else{
							$('#lad5_lable5').addClass('disp_none');
						}
						if($('#amt_scale5').val()!="" && !checkAmount($('#amt_scale5').val())){
							for(var i=0;i<13;i++){
								var name ='#lad5_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad5_lable6').removeClass('disp_none');
						}else{
							$('#lad5_lable6').addClass('disp_none');
						}
						if($('#amt_scale5').val()!="" && parseFloat($('#amt_scale5').val())>parseFloat($('#lad5_end').val())){
							for(var i=0;i<13;i++){
								var name ='#lad5_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad5_lable7').removeClass('disp_none');
						}else{
							$('#lad5_lable7').addClass('disp_none');
						}
						
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale5').val())){
							for(var i=0;i<13;i++){
								var name ='#lad5_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad5_lable8').removeClass('disp_none');
						}else{
							$('#lad5_lable8').addClass('disp_none');
						}
						if($('#amt_scale5').val()!="" && $('#amt_scale5').val()>100){
							for(var i=0;i<13;i++){
								var name ='#lad5_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad5_lable9').removeClass('disp_none');
						}else{
							$('#lad5_lable9').addClass('disp_none');
						}
						if($('#amt_scale5').val()!="" && $('#amt_scale5').val()<0){
							for(var i=0;i<13;i++){
								var name ='#lad5_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad5_lable10').removeClass('disp_none');
						}else{
							$('#lad5_lable10').addClass('disp_none');
						}
						if($('#amt_scale5').val()!="" && !checkAmount($('#amt_scale5').val())){
							for(var i=0;i<13;i++){
								var name ='#lad5_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad5_lable11').removeClass('disp_none');
						}else{
							$('#lad5_lable11').addClass('disp_none');
						}
					}
					if( !$('#lad5_start').val() || !$('#lad5_end').val()){
						for(var i=0;i<13;i++){
							var name ='#lad5_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad5_lable0').removeClass('disp_none');
					}else{
						$('#lad5_lable0').addClass('disp_none');
					}
					if($('#lad5_start').val()!="" &&$('#lad5_end').val()!=""&&   !checkAmount($('#lad5_start').val())){
						for(var i=0;i<13;i++){
							var name ='#lad5_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad5_lable1').removeClass('disp_none');
					}else{
						$('#lad5_lable1').addClass('disp_none');
					}
					if($('#lad5_start').val()!="" &&$('#lad5_end').val()!=""&&  !checkAmount($('#lad5_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad5_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad5_lable2').removeClass('disp_none');
					}else{
						$('#lad5_lable2').addClass('disp_none');
					}
					if($('#lad5_start').val()!="" &&$('#lad5_end').val()!=""&&  parseFloat($('#lad5_start').val())>=parseFloat($('#lad5_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad5_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad5_lable3').removeClass('disp_none');
					}else{
						$('#lad5_lable3').addClass('disp_none');
					}
					if($('#lad5_start').val()!="" &&$('#lad4_end').val()!=""&&  parseFloat($('#lad5_start').val())!=parseFloat($('#lad4_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad5_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad5_lable12').removeClass('disp_none');
					}else{
						$('#lad5_lable12').addClass('disp_none');
					}
				}
				var display =$('#lad5').css('display'); //阶梯6
				if(display != 'none'){ //校验第2行
					
					//校验#amt_scale
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale6').val())){
							for(var i=0;i<13;i++){
								var name ='#lad6_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad6_lable4').removeClass('disp_none');
						}else{
							$('#lad6_lable4').addClass('disp_none');
						}
						if($('#amt_scale6').val()!="" && parseFloat($('#amt_scale6').val())<=0){
							for(var i=0;i<13;i++){
								var name ='#lad6_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad6_lable5').removeClass('disp_none');
						}else{
							$('#lad6_lable5').addClass('disp_none');
						}
						if($('#amt_scale6').val()!="" && parseFloat($('#amt_scale6').val())>parseFloat($('#lad6_end').val())){
							for(var i=0;i<13;i++){
								var name ='#lad6_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad6_lable7').removeClass('disp_none');
						}else{
							$('#lad6_lable7').addClass('disp_none');
						}
						if($('#amt_scale6').val()!="" && !checkAmount($('#amt_scale6').val())){
							for(var i=0;i<13;i++){
								var name ='#lad6_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad6_lable6').removeClass('disp_none');
						}else{
							$('#lad6_lable6').addClass('disp_none');
						}
					
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale6').val())){
							for(var i=0;i<13;i++){
								var name ='#lad6_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad6_lable8').removeClass('disp_none');
						}else{
							$('#lad6_lable8').addClass('disp_none');
						}
						if($('#amt_scale6').val()!="" && $('#amt_scale6').val()>100){
							for(var i=0;i<13;i++){
								var name ='#lad6_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad6_lable9').removeClass('disp_none');
						}else{
							$('#lad6_lable9').addClass('disp_none');
						}
						if($('#amt_scale6').val()!="" && $('#amt_scale6').val()<0){
							for(var i=0;i<13;i++){
								var name ='#lad6_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad6_lable10').removeClass('disp_none');
						}else{
							$('#lad6_lable10').addClass('disp_none');
						}
						if($('#amt_scale6').val()!="" && !checkAmount($('#amt_scale6').val())){
							for(var i=0;i<13;i++){
								var name ='#lad6_lable'+i;
								$(name).addClass('disp_none');
							}
							$('#lad6_lable11').removeClass('disp_none');
						}else{
							$('#lad6_lable11').addClass('disp_none');
						}
					}
					if( !$('#lad6_start').val() || !$('#lad6_end').val()){
						for(var i=0;i<13;i++){
							var name ='#lad6_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad6_lable0').removeClass('disp_none');
					}else{
						$('#lad6_lable0').addClass('disp_none');
					}
					if($('#lad6_start').val()!="" &&$('#lad6_end').val()!=""&&  !checkAmount($('#lad6_start').val())){
						for(var i=0;i<13;i++){
							var name ='#lad6_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad6_lable1').removeClass('disp_none');
					}else{
						$('#lad6_lable1').addClass('disp_none');
					}
					if($('#lad6_start').val()!="" && $('#lad6_end').val()!=""&& !checkAmount($('#lad6_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad6_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad6_lable2').removeClass('disp_none');
					}else{
						$('#lad6_lable2').addClass('disp_none');
					}
					if($('#lad6_start').val()!="" && $('#lad6_end').val()!=""&& parseFloat($('#lad6_start').val())>=parseFloat($('#lad6_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad6_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad6_lable3').removeClass('disp_none');
					}else{
						$('#lad6_lable3').addClass('disp_none');
					}
					if($('#lad6_start').val()!="" && $('#lad5_end').val()!=""&& parseFloat($('#lad6_start').val())!=parseFloat($('#lad5_end').val())){
						for(var i=0;i<13;i++){
							var name ='#lad6_lable'+i;
							$(name).addClass('disp_none');
						}
						$('#lad6_lable12').removeClass('disp_none');
					}else{
						$('#lad6_lable12').addClass('disp_none');
					}
				}
				
			}
		}else if($('input[name="mkt_tool"]:checked').val()==3){  //红包数据提交检验
			distriType = $('input[name="distriType"]:checked').val();
			fixedFavourAmt = $('#single_amt').val();
				if(!$('#single_amt').val()){
					$('#single_amt_lable0').removeClass('disp_none');
					$('#single_amt_lable3').addClass('disp_none');
				}else{
					$('#single_amt_lable0').addClass('disp_none');
					$('#single_amt_lable3').addClass('disp_none');
				}
			    if($('#single_amt').val()!=""&&!checkAmount($('#single_amt').val())){
			    	$('#single_amt_lable1').removeClass('disp_none');
			    	$('#single_amt_lable4').addClass('disp_none');
				}else{
					$('#single_amt_lable1').addClass('disp_none');
					$('#single_amt_lable4').addClass('disp_none');
		    	}
			    if($('#single_amt').val()!=""&&parseFloat($('#single_amt').val())<=0){
			    	$('#single_amt_lable2').removeClass('disp_none');
			    	$('#single_amt_lable5').addClass('disp_none');
			    	$('#single_amt_lable0').addClass('disp_none');
			    	$('#single_amt_lable1').addClass('disp_none');
				}else{
					$('#single_amt_lable2').addClass('disp_none');
					$('#single_amt_lable5').addClass('disp_none');
				}
			    if(!$('#coupon_total').val()){
			    	$('#coupon_total_lable0').removeClass('disp_none');
			    	$('#coupon_total_lable2').addClass('disp_none');
				}else{
					$('#coupon_total_lable0').addClass('disp_none');
					$('#coupon_total_lable2').addClass('disp_none');
				}
			 	if($('#coupon_total').val()!=""&&!checkNumber($('#coupon_total').val())){
			 		$('#coupon_total_lable1').removeClass('disp_none');
			 		$('#coupon_total_lable3').addClass('disp_none');
				}else{
					$('#coupon_total_lable1').addClass('disp_none');
					$('#coupon_total_lable3').addClass('disp_none');
				}
			 	 if($('#coupon_total').val()!=""&&parseFloat($('#coupon_total').val())<=0){
				    	$('#coupon_total_lable4').removeClass('disp_none');
				    	$('#coupon_total_lable5').addClass('disp_none');
				    	$('#coupon_total_lable1').addClass('disp_none');
				    	$('#coupon_total_lable3').addClass('disp_none');
					}else{
						$('#coupon_total_lable4').addClass('disp_none');
						$('#coupon_total_lable5').addClass('disp_none');
					}
			 	fixedFavourRate = 0;	
			 	
			 	   
			 
			
		}else if($('input[name="mkt_tool"]:checked').val()==2){//优惠券数据提交校验
			
			refund = $('input[name="refund"]:checked').val();
			/*if(refund == '3'){
				refund = $('input[name="refund1"]:checked').val();
				}else{
				refund = $('input[name="refund"]:checked').val();
				}*/
		distriType = $('input[name="distriType"]:checked').val();
	  	if(distriType == '2'){
	  		if(!$.trim($('#single_goods').val())){
	  			$('#single_goods_lable0').removeClass('disp_none');
	  		}else{
	  			$('#single_goods_lable0').addClass('disp_none');
	  		}
  	  	var userMaxJoinTime =$.trim($('#userMaxJoinTime').val());							
		var userDayMaxJoinTime =$.trim($('#userDayMaxJoinTime').val());
		if(!$.trim($('#userMaxJoinTime').val())){
			$('#userMaxJoinTime_lable0').removeClass('disp_none');
			$('#userMaxJoinTime_lable1').addClass('disp_none');
			$('#userMaxJoinTime_lable2').addClass('disp_none');
		}else{
			$('#userMaxJoinTime_lable0').addClass('disp_none');
		}
	 	if($('#userMaxJoinTime').val()!=""&&!checkNumber($('#userMaxJoinTime').val())){
	 		$('#userMaxJoinTime_lable1').removeClass('disp_none');
	 		$('#userMaxJoinTime_lable0').addClass('disp_none');
	 		$('#userMaxJoinTime_lable2').addClass('disp_none');
		}else{
			$('#userMaxJoinTime_lable1').addClass('disp_none');
		}
	 	if($('#userMaxJoinTime').val()!=""&&parseFloat($('#userMaxJoinTime').val())<=0){
	 		$('#userMaxJoinTime_lable2').removeClass('disp_none');
	 		$('#userMaxJoinTime_lable0').addClass('disp_none');
	 		$('#userMaxJoinTime_lable1').addClass('disp_none');
		}else{
			$('#userMaxJoinTime_lable2').addClass('disp_none');
	 	}
	 	if(!$.trim($('#userDayMaxJoinTime').val())){
	 		$('#userDayMaxJoinTime_lable0').removeClass('disp_none');
	 		$('#userDayMaxJoinTime_lable1').addClass('disp_none');
	 		$('#userDayMaxJoinTime_lable2').addClass('disp_none');
	 		$('#userDayMaxJoinTime_lable3').addClass('disp_none');
		}else{
			$('#userDayMaxJoinTime_lable0').addClass('disp_none');
		}
	 	if($('#userDayMaxJoinTime').val()!=""&&!checkNumber($('#userDayMaxJoinTime').val())){
	 		$('#userDayMaxJoinTime_lable1').removeClass('disp_none');
	 		$('#userDayMaxJoinTime_lable0').addClass('disp_none');
	 		$('#userDayMaxJoinTime_lable2').addClass('disp_none');
	 		$('#userDayMaxJoinTime_lable3').addClass('disp_none');
		}else{
			$('#userDayMaxJoinTime_lable1').addClass('disp_none');
		}
	 	if($('#userDayMaxJoinTime').val()!=""&&parseFloat($.trim($('#userMaxJoinTime').val()))<parseFloat($.trim($('#userDayMaxJoinTime').val()))){
	 		$('#userDayMaxJoinTime_lable2').removeClass('disp_none');
	 		$('#userDayMaxJoinTime_lable1').addClass('disp_none');
	 		$('#userDayMaxJoinTime_lable0').addClass('disp_none');
	 		$('#userDayMaxJoinTime_lable3').addClass('disp_none');
		}else{
			$('#userDayMaxJoinTime_lable2').addClass('disp_none');
	    }
	 	if($('#userDayMaxJoinTime').val()!=""&&parseFloat($('#userDayMaxJoinTime').val())<=0){
	 		$('#userDayMaxJoinTime_lable3').removeClass('disp_none');
	 		$('#userDayMaxJoinTime_lable1').addClass('disp_none');
	 		$('#userDayMaxJoinTime_lable0').addClass('disp_none');
	 		$('#userDayMaxJoinTime_lable2').addClass('disp_none');
		}else{
			$('#userDayMaxJoinTime_lable3').addClass('disp_none');
	 	}
  	  	}else{
  	  	var userMaxJoinTime = 1;							
		var userDayMaxJoinTime = 1;
		$('#userMaxJoinTime_lable0').addClass('disp_none');
	  	$('#userDayMaxJoinTime_lable0').addClass('disp_none');
		
  	  	}
			
			if(!$.trim($('#coupon_name').val())){
				$('#coupon_name_lable0').removeClass('disp_none');
			}else{
				$('#coupon_name_lable0').addClass('disp_none');
			}
			if($('#coupon_name').val()!=""&&$.trim($('#coupon_name').val()).length>18){
				$('#coupon_name_lable1').removeClass('disp_none');
			}else{
				$('#coupon_name_lable1').addClass('disp_none');
			}
			if(!$('#single_amt').val()){
				$('#single_amt_lable0').addClass('disp_none');
				$('#single_amt_lable3').removeClass('disp_none');
				$('#single_amt_lable1').addClass('disp_none');
				$('#single_amt_lable2').addClass('disp_none');
				$('#single_amt_lable4').addClass('disp_none');
				$('#single_amt_lable5').addClass('disp_none');
			}else{
				$('#single_amt_lable0').addClass('disp_none');
				$('#single_amt_lable3').addClass('disp_none');
			}
		    if($('#single_amt').val()!=""&&!checkAmount($('#single_amt').val())){
		    	$('#single_amt_lable1').addClass('disp_none');
		    	$('#single_amt_lable4').removeClass('disp_none');
		    	$('#single_amt_lable0').addClass('disp_none');
				$('#single_amt_lable2').addClass('disp_none');
				$('#single_amt_lable3').addClass('disp_none');
				$('#single_amt_lable5').addClass('disp_none');
			}else{
				$('#single_amt_lable1').addClass('disp_none');
				$('#single_amt_lable4').addClass('disp_none');
	    	}
		    if($('#single_amt').val()!=""&&parseFloat($('#single_amt').val())<=0){
		    	$('#single_amt_lable2').addClass('disp_none');
		    	$('#single_amt_lable5').removeClass('disp_none');
		    	$('#single_amt_lable0').addClass('disp_none');
				$('#single_amt_lable1').addClass('disp_none');
				$('#single_amt_lable4').addClass('disp_none');
				$('#single_amt_lable3').addClass('disp_none');
			}else{
				$('#single_amt_lable2').addClass('disp_none');
				$('#single_amt_lable5').addClass('disp_none');
			}
		    if(!$('#coupon_total').val()){
		    	$('#coupon_total_lable0').addClass('disp_none');
	    	    $('#coupon_total_lable2').removeClass('disp_none');
	    	    $('#coupon_total_lable1').addClass('disp_none');
	    	    $('#coupon_total_lable5').addClass('disp_none');
	    	    $('#coupon_total_lable3').addClass('disp_none');
	    	    $('#coupon_total_lable4').addClass('disp_none');
		}else{
			$('#coupon_total_lable0').addClass('disp_none');
			$('#coupon_total_lable2').addClass('disp_none');
		}
		    if($('#coupon_total').val()!="" && !checkNumber($('#coupon_total').val())){
		 		$('#coupon_total_lable1').addClass('disp_none');
	    	    $('#coupon_total_lable3').removeClass('disp_none');
	    	    $('#coupon_total_lable2').addClass('disp_none');
	    	    $('#coupon_total_lable5').addClass('disp_none');
	    	    $('#coupon_total_lable0').addClass('disp_none');
	    	    $('#coupon_total_lable4').addClass('disp_none');
		}else{
			$('#coupon_total_lable1').addClass('disp_none');
			$('#coupon_total_lable3').addClass('disp_none');
		 	}
		    if($('#coupon_total').val()!=""&&parseFloat($('#coupon_total').val())<=0){
		    	$('#coupon_total_lable0').addClass('disp_none');
		    	$('#coupon_total_lable5').removeClass('disp_none');
		    	$('#coupon_total_lable1').addClass('disp_none');
				$('#coupon_total_lable2').addClass('disp_none');
				$('#coupon_total_lable3').addClass('disp_none');
				$('#coupon_total_lable4').addClass('disp_none');
			}else{
				$('#coupon_total_lable4').addClass('disp_none');
				$('#coupon_total_lable5').addClass('disp_none');
			}
		    if(!$('#cill_amt').val()){
				$('#cill_amt_lable0').removeClass('disp_none');
				$('#cill_amt_lable1').addClass('disp_none');
				$('#cill_amt_lable2').addClass('disp_none');
				$('#cill_amt_lable3').addClass('disp_none');
			}else{
				$('#cill_amt_lable0').addClass('disp_none');
			}
		    if($('#cill_amt').val()!=""&&!checkAmount($('#cill_amt').val())){
		    	$('#cill_amt_lable1').removeClass('disp_none');
		    	$('#cill_amt_lable0').addClass('disp_none');
				$('#cill_amt_lable2').addClass('disp_none');
				$('#cill_amt_lable3').addClass('disp_none');
			}else{
				$('#cill_amt_lable1').addClass('disp_none');
	    	}
		    if($('#cill_amt').val()!=""&&parseFloat($('#cill_amt').val())<=0){
		    	$('#cill_amt_lable2').removeClass('disp_none');
		    	$('#cill_amt_lable1').addClass('disp_none');
				$('#cill_amt_lable0').addClass('disp_none');
				$('#cill_amt_lable3').addClass('disp_none');
			}else{
				$('#cill_amt_lable2').addClass('disp_none');
			}
		    if($('#cill_amt').val()!=""&&parseFloat($('#cill_amt').val())<=parseFloat($('#single_amt').val())){
		    	$('#cill_amt_lable3').removeClass('disp_none');
		    	$('#cill_amt_lable1').addClass('disp_none');
				$('#cill_amt_lable2').addClass('disp_none');
				$('#cill_amt_lable0').addClass('disp_none');
			}else{
				$('#cill_amt_lable3').addClass('disp_none');
		    }
		}
	}
}

	 function marketChannelChange(){
		 obj = document.getElementsByName("marketChannel");
		 if($('input[name="marketChannel"]:checked').length == obj.length){
			 $('input[name="marketChannelAll"]').each(function(index,data){
					data.checked = 'checked';
 		  	});
		 }else if($('input[name="marketChannel"]:checked').length < obj.length){
			 $('input[name="marketChannelAll"]').each(function(index,data){
					data.checked = false;
    		  	});
		 }
	 }
	 $("#marketChannelAll").click(function(){
			if($("#marketChannelAll")[0].checked){
				$('input[name="marketChannel"]').each(function(index,data){ 
       				data.checked = 'checked';
       		  	});
			}else {
				$('input[name="marketChannel"]').each(function(index,data){
					data.checked = false;
       		  	});
			}
		});
	 
	function initMktChannel(param){
		$.ajax({
			type:"POST",
			async: false,
			contentType: "application/json",
			data:JSON.stringify({
			}),
			url:'/market-mgr/market/queryChannel',
			datatype:"JSON",
			success:function (result){
				$('#marketChannel').children().remove();
				for(var i=0;i<result.data.length;i++){
					if(param == "JTC" ){
						if(result.data[i].regChannel == 'JTC' || result.data[i].regChannel=="JTCP"){
							$('#marketChannel').append('<input type="checkbox" channelName="'+result.data[i].channelName+'" name="marketChannel" onclick="marketChannelChange()" value="'+result.data[i].appId+'"/>'+
									'<span class="mr10">'+result.data[i].channelName+'</span>');	
						}
						continue;
					}else if(param == 'distriType_3' && $.trim(result.data[i].channelName)!=null && $.trim(result.data[i].channelName)!="" ){ //注册送 只显示APP
						if(result.data[i].appPattern=="1"){
						$('#marketChannel').append('<input type="checkbox" channelName="'+result.data[i].channelName+'" name="marketChannel" onclick="marketChannelChange()" value="'+result.data[i].appId+'"/>'+
									'<span class="mr10">'+result.data[i].channelName+'</span>');
						}
						continue;
					}else if(param == 'distriType_4'){ //关注公众号送 只显示微信公众号
						if(result.data[i].appPattern=="2"){
							$('#marketChannel').append('<input type="checkbox" channelName="'+result.data[i].channelName+'" name="marketChannel" onclick="marketChannelChange()" value="'+result.data[i].appId+'"/>'+
									'<span class="mr10">'+result.data[i].channelName+'</span>');
						}
						continue;
					}else {
						if($.trim(result.data[i].channelName)!=null && $.trim(result.data[i].channelName)!=""){
						$('#marketChannel').append('<input type="checkbox" channelName="'+result.data[i].channelName+'" name="marketChannel" onclick="marketChannelChange()" value="'+result.data[i].appId+'"/>'+
								'<span class="mr10">'+result.data[i].channelName+'</span>');
						}
					}
				}
			}
		});
	}
	function initData(){
		var actId = GetQueryString('actId');
		var businessType = GetQueryString('businessType');
		$.ajax({
			type:"POST",
			contentType: "application/json",
			data:JSON.stringify({
				'id':actId,
				'businessType':businessType
			}),
			url:'/market-mgr/market/getRuleInfo',
			datatype:"JSON",
			success:function (result){
				ruleId = result.data.ruleId;
				$('#act_name').val(result.data.activityName);
				$('#act_name').attr('disabled',true);
				$('#submit').addClass('disp_none');
				$('#confirm').removeClass('disp_none');
				
				if(result.data.businessType == '1'){
					$('#activity_name').val(result.data.activityName);
					$('#activity_name').attr('readonly',true);
					$('#marketBudget1').text(amountFen2Yuan((result.data.marketBudget),2));
					$('#nwMarketBudget').text(amountFen2Yuan((result.data.marketBudget-result.data.totalUseAmt),2))
				    $('#rechargeTable_li').addClass('disp_none');
				    $('#txt_li').addClass('disp_none');
				    $('#download_li').addClass('disp_none');
				    $('#minAmount2_lable').addClass('disp_none');
					
				}
				if(result.data.businessType == '3'){
					$('#redpacketTable_li').addClass('disp_none');
				    $('#activity_name').val(result.data.activityName);
				    $('#activity_name').attr('readonly',true);
					$('#txt_li').addClass('disp_none');
					$('#download_li').addClass('disp_none');
					$('#redpacketTotals').text(result.data.makeNum);
					$('#nowMarketBudget').text(amountFen2Yuan((result.data.marketBudget-result.data.totalUseAmt),2));
					$('#notReceiveRedpacketNum').text((result.data.makeNum-result.data.receiveRedPacketNum));
					$('#receiveRedpacketNum').text(result.data.receiveRedPacketNum);
					$("input[type='radio'][name='mkt_tool'][value='3']").click();
					$('#fixed_reduct_li').addClass('disp_none');
					$('#single_amt').attr('readonly',true);
					$('#coupon_total').val(result.data.makeNum);
					$('#coupon_total').attr('readonly',true);
					$("#single_amt").val(amountFen2Yuan(result.data.fixedFavourAmt,2));
				}
				if(result.data.businessType == '2'){
					$('#activity_name').attr('readonly',true);
					$('#txt_li').removeClass('disp_none');
					$('#coupleTable_li').removeClass('disp_none');
					$('#activity_name_li').removeClass('disp_none');
					$('#activity_name').val(result.data.activityName);
					$('#activity_name').attr('readonly',true);
					$('#creat_time_li').removeClass('disp_none');
					$('#download_li').removeClass('disp_none');
					$('#couponTotals').text(result.data.couponNum);
					$('#notReceiveNum').text(result.data.couponNum-result.data.receiveNum);
					$('#receiveNum').text(result.data.receiveNum);
					$("input[type='radio'][name='mkt_tool'][value='2']").click();
					$('#fixed_reduct_li').addClass('disp_none');
					$('#coupon_name').val(result.data.couponName);
					$('#coupon_name').attr('readonly',true);
					$('#single_amt').attr('readonly',true);
					$('#coupon_total').val(result.data.couponNum);
					$('#coupon_total').attr('readonly',true);
					$("#single_amt").val(amountFen2Yuan(result.data.singleAtm,2));
					$('#cill_amt').val(amountFen2Yuan(result.data.amtLimit,2));
					$('#cill_amt').attr('readonly',true);
					$('#coupon_startTime').val(result.data.sTime.substring(0,result.data.startTimes.length-3));
					$('#coupon_startTime').attr('disabled',true);
					$('#coupon_endTime').val(result.data.eTime.substring(0,result.data.startTimes.length-3));
					$('#coupon_endTime').attr('disabled',true);
					$('#userDayMaxJoinTime').val(result.data.userDayMaxJoinTime);
					$('#userDayMaxJoinTime').attr('readonly',true);
					$('#userMaxJoinTime').val(result.data.userMaxJoinTime);
					$('#userMaxJoinTime').attr('readonly',true);
					//init 区分单品全品优惠
					
					var goodsMark = document.getElementsByName("goods");
					for(var i = 0;i < goodsMark.length;i++){ 
	                    if(goodsMark[i].value == result.data.goodsMark){  
	                    	goodsMark[i].checked =  'checked';  
	                    }
	                    $(goodsMark[i]).attr('disabled',true);
	                } 
					if(result.data.goodsMark==1){
						$('#single_goods_li').removeClass('disp_none');
						$('#single_goods').val(result.data.couponNum);
						$('#single_goods').attr('readonly',true);
					}
					//init 退款类型
					var refunds = document.getElementsByName("refund");
					var refund1 = document.getElementsByName("refund1"); 
					if(result.data.refundType>3){
	                    	refunds[2].checked =  'checked';
	                    	$('#refund_lii').removeClass('disp_none');
	    	                for(var i = 0;i < refund1.length;i++){ 
	    	                    if(refund1[i].value == result.data.refundType){  
	    	                    	refund1[i].checked =  'checked';  
	    	                    }
	    	                    $(refund1[i]).attr('disabled',true);
	    	                } 
	    	                for(var i = 0;i < refunds.length;i++){ 
	    	                	$(refunds[i]).attr('disabled',true);
	    	                }
	                    }else{
	                    	for(var i = 0;i < refunds.length;i++){
	    	                	if(refunds[i].value == result.data.refundType){ 
	    	                		refunds[i].checked =  'checked'; 
	    	                	}
	    	                	$(refunds[i]).attr('disabled',true);
	    	                }		
	                    }
				}
				$('#actName_lable').addClass('disp_none');
				$('#actStaEnd_lable').addClass('disp_none');
				$('#coupon_name_lable0').addClass('disp_none');
				$('#coupStaEnd_lable0').addClass('disp_none');
				$('#single_amt_lable0').addClass('disp_none');
				$('#single_amt_lable3').addClass('disp_none');
				$('#coupon_total_lable0').addClass('disp_none');
				$('#coupon_total_lable2').addClass('disp_none');
				$('#cill_amt_lable0').addClass('disp_none');
				$('#userMaxJoinTime_lable0').addClass('disp_none');
				$('#userDayMaxJoinTime_lable0').addClass('disp_none');
				$('#merchantNo_lable').addClass('disp_none');
				$('#marketBudget_lable0').addClass('disp_none');
				$('#threshold_lable0').addClass('disp_none');
				$('#contact_no_lable0').addClass('disp_none');
				$('#floatBarText_lable0').addClass('disp_none');
				$('#floatUrl_lable0').addClass('disp_none');
				$('#amt_or_scale0').addClass('disp_none');
				$('#amt_or_scale4').addClass('disp_none');
				$('#lad_lable0').addClass('disp_none');
				$('#lad_lable4').addClass('disp_none');
				$('#lad_lable8').addClass('disp_none');
				$('#lad2_lable0').addClass('disp_none');
				$('#lad2_lable4').addClass('disp_none');
				$('#lad2_lable8').addClass('disp_none');
				$('#lad3_lable0').addClass('disp_none');
				$('#lad3_lable4').addClass('disp_none');
				$('#lad3_lable8').addClass('disp_none');
				$('#lad4_lable0').addClass('disp_none');
				$('#lad4_lable4').addClass('disp_none');
				$('#lad4_lable8').addClass('disp_none');
				$('#lad5_lable0').addClass('disp_none');
				$('#lad5_lable4').addClass('disp_none');
				$('#lad5_lable8').addClass('disp_none');
				$('#lad6_lable0').addClass('disp_none');
				$('#lad6_lable4').addClass('disp_none');
				$('#lad6_lable8').addClass('disp_none');
				$('#single_goods_lable0').addClass('disp_none');
				
				//init 营销活动类型
				var businessTypes = document.getElementsByName("mkt_tool");  
                for(var i = 0;i < businessTypes.length;i++){ 
                    if(businessTypes[i].value == result.data.businessType){  
                    	businessTypes[i].checked =  'checked';  
                    }
                    $(businessTypes[i]).attr('disabled',true);
                } 
                //init 发放类型
                var distriTypes = document.getElementsByName("distriType");  
                for(var i = 0;i < distriTypes.length;i++){ 
                    if(distriTypes[i].value == result.data.distriType){  
                    	distriTypes[i].checked =  'checked';  
                    }
                    $(distriTypes[i]).attr('disabled',true);
                } 
             
				//init 优惠计算方式 赠送固定金额 or 比例
				var calculateModes = document.getElementsByName("calculateMode");  
                for(var i = 0;i < calculateModes.length;i++){ 
                    if(calculateModes[i].value == result.data.calculateMode){  
                    	calculateModes[i].checked =  'checked';  
                    }
                    $(calculateModes[i]).attr('disabled',true);
                } 
                $('#minAmount').val(amountFen2Yuan(result.data.minAmount,2));
               if(result.data.calculateMode=='1'){
            	   $("span[name='per_scale']").each(function(index,data){ 
       				$(data).html('元');
       		  	});
            	   $('#amt_or_scale').val(amountFen2Yuan(result.data.fixedFavourAmt,2));
               } else if(result.data.calculateMode=='2'){
                	$("span[name='per_scale']").each(function(index,data){ 
        				$(data).html('%');
        		  	});
                	$('input[name="amt_or_scale"]').attr('placeholder','设置赠送比例');
                	$('#amt_or_scale').val(result.data.fixedFavourRate*100);
                }
               $('#minAmount').attr('readonly',true);
               $('#amt_or_scale').attr('disabled',true);
                var favourForms = document.getElementsByName("favourForm");  
                for(var i = 0;i < favourForms.length;i++){  
                    if(favourForms[i].value == result.data.favourForm){  
                    	favourForms[i].checked =  'checked';  
                    }  
                    $(favourForms[i]).attr('disabled',true);
                } 
            	
                
				//init梯度
                var isOpenRanks = document.getElementsByName("isOpenRank");  
                for(var i = 0;i < isOpenRanks.length;i++){  
                    if(isOpenRanks[i].value == result.data.isOpenRank){  
                    	isOpenRanks[i].checked =  'checked';  
                    }
                    $(isOpenRanks[i]).attr('disabled',true);
                } 
                
				if(result.data.isOpenRank == 0 && result.data.businessType == 2){
					$('#ladder_reduct_li').addClass('disp_none');
				  	$('#fixed_reduct_li').removeClass('disp_none');
				  	$('#minAmount').val(amountFen2Yuan(result.data.minAmount,2));
				}else if(result.data.isOpenRank == 1){
					$('#ladder_reduct_li').removeClass('disp_none');
				  	$('#fixed_reduct_li').addClass('disp_none');
				  	
				  	//
				  	for(var i = 0 ; i < result.data.deployList.length; i++){
						if(result.data.deployList[i]){
							$('#lad'+i).removeClass('disp_none');
							$('#lad'+(i+1)+'_start').val(amountFen2Yuan(result.data.deployList[i].beginAmount,2));
							$('#lad'+(i+1)+'_start').attr('disabled',true);
							$('#lad'+(i+1)+'_end').val(amountFen2Yuan(result.data.deployList[i].endAmount,2));
							$('#lad'+(i+1)+'_end').attr('disabled',true);
							$('#amt_scale'+(i)).next().next().addClass("disp_none");
							$('#amt_scale'+(i)).next().next().next().addClass("disp_none");
							$('#amt_scale'+(i+1)).next().next().addClass("disp_none"); //回显不支持修改阶梯
							$('#amt_scale'+(i+1)).next().next().next().addClass("disp_none");
							if(result.data.calculateMode == 1){
								$('#amt_scale'+(i+1)).val(amountFen2Yuan(result.data.deployList[i].favourAmount,2));
								$('#amt_scale'+(i+1)).attr('disabled',true);
							}else if(result.data.calculateMode == 2){
								$('#amt_scale'+(i+1)).val(result.data.deployList[i].favourRate*100);
								$('#amt_scale'+(i+1)).attr('disabled',true);
							}
						}
					}
				}
				$('#merchantNo').val(result.data.merchantNo);
				$('#merchantNo').attr('disabled',true);
				$('#marketBudget').val(amountFen2Yuan(result.data.marketBudget,2));
				$('#marketBudget').attr('disabled',true);
				$('#threshold').val(amountFen2Yuan(result.data.threshold,2));
				$('#threshold').attr('disabled',true);
				$('#contact_no').val(result.data.contact);
				$('#contact_no').attr('disabled',true);
				$('#updateRevise').removeClass('disp_none');
				
				// init创建时间
				$('#startTime').val(result.data.startTimes.substring(0,result.data.startTimes.length-3));
				$('#endTime').val(result.data.endTimes.substring(0,result.data.endTimes.length-3));
				$('#startTime').attr('disabled',true);
				$('#endTime').attr('disabled',true);
	
				// init支付渠道
				 payChannelArray = result.data.payChannelList;
					for(var i=0;i<payChannelArray.length;i++){
						$('input[value="'+payChannelArray[i].payChannelNo+'"]').attr('checked','checked');
					}
					var payChannels = document.getElementsByName("payChannel");
					for(var i = 0;i < payChannels.length;i++){ 
	                    $(payChannels[i]).attr('disabled',true);
	                } 
					
					// init投放渠道
					 channelsNameArray = result.data.channelList;
						for(var i=0;i<channelsNameArray.length;i++){
							$('input[value="'+channelsNameArray[i].channelNo+'"]').attr('checked','checked');
						}
						/*	var marketChannel = document.getElementsByName("marketChannel");
							for(var i = 0;i < marketChannel.length;i++){ 
			                    $(marketChannel[i]).attr('disabled',true);
			                } */
						$("[name='marketChannel']").each(function(i){
							$(this).attr("disabled","disabled");
						});
							/*if($('input[name="marketChannel"]:checked').length == obj.length){
								 $('input[name="marketChannelAll"]').each(function(index,data){
										data.checked = 'checked';
					 		  	});
							 }*/
				//init 浮条 
				var floatBarSwitchs = document.getElementsByName("floatBarSwitch");  
                for(var i = 0;i < floatBarSwitchs.length;i++){  
                    if(floatBarSwitchs[i].value == result.data.floatBarSwitch){  
                    	floatBarSwitchs[i].checked =  'checked'; 
                    }  
                    $(floatBarSwitchs[i]).attr('disabled',true);
                }
				if(result.data.floatBarSwitch == 1){
					$('#float_bar_text_li').removeClass('disp_none');
				  	$('#float_bar_link_li').removeClass('disp_none');
				  	$('#floatBarText').val(result.data.floatBarText);
				  	$('#floatBarText').attr('readonly',true);
				  	$('#floatUrl').val(result.data.floatUrl);
				  	$('#floatUrl').attr('readonly',true);
				}
				//init投放渠道号
				/*channelsNameArray = result.data.channelList;
				for(var i=0;i<channelsNameArray.length;i++){
					$('input[value="'+channelsNameArray[i].channelNo+'"]').attr('checked','checked');
				}
                for(var i = 0;i < $('input[name="marketChannel"]').length;i++){ 
					
					$($('input[name="marketChannel"]')[i])[0].setAttribute('disabled','disabled');
                }*/
			}
		});
	}
	function updateRevise(){
		var con;
		con=confirm("你确认要修改此活动吗?");
		if(con==true){
		$('#submit').removeClass('disp_none');
		$('#confirm').addClass('disp_none');
		var actId = GetQueryString('actId');
		var businessType = GetQueryString('businessType');
		$.ajax({
			type:"POST",
			contentType: "application/json",
			data:JSON.stringify({
				'id':actId,
				'businessType':businessType
			}),
			url:'/market-mgr/market/getRuleInfo',
			datatype:"JSON",
			success:function (result){			
				$('#contact_no').val(result.data.contact);
				$('#contact_no').attr('disabled',false);
				$('#updateRevise').removeClass('disp_none');
				$('#updateRevise').addClass('disp_none');
			},
			error:function(data){
				alert('修改失败');
			}
		});
		}
	}
	//刷新
	function update(){
		var actId = GetQueryString('actId');
		var businessType = GetQueryString('businessType');
		var param = "?actId="+actId+"&businessType="+businessType;
		location.href ="create_activity.html"+param;
	}
		//导出
	function download(){
		  var    startCreatDateTime=$.trim($("#creat_startTime").val());  
		  var    endCreatDateTime=$.trim($("#creat_endTime").val());  
		  var    ad1 = new Date(startCreatDateTime.replace(/\-/g, "\/"));  
		  var    ad2 = new Date(endCreatDateTime.replace(/\-/g, "\/"));  
		    if(ad1 > ad2){  
			  alert("领用时间段开始时间不能小于结束时间！");  
			  return;  
			 }
		    var con;
			con=confirm("你确认要下载该活动信息吗?");
			if(con==true){
           var param = "?startCreatDateTime="+startCreatDateTime+"&endCreatDateTime="+endCreatDateTime;
           var param1 ="&id="+GetQueryString('actId')+"&businessType="+GetQueryString('businessType');
            window.location.href = "/market-mgr/market/download"+param+param1; 
	}
	}
	
	 function GetQueryString(name)
	 {
	      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	      var r = window.location.search.substr(1).match(reg);
	      if(r!=null)return  unescape(r[2]); return null;
	 }
	
	function submit(){
		
		if(!$.trim($('#act_name').val())){
			alert('请输入活动名称');
			return;
		}
		if($.trim($('#act_name').val()).length>18){
			alert('活动名称最多18字');
			return;
		}
		if(!$('input[name="favourForm"]').val()){
			alert('请选择充值优惠形式');
			return;
		}
		
		//判断固定优惠方式： 1指定优惠金额 2指定优惠比例
		var fixedFavourAmt=null;   
		var fixedFavourRate = null;
		var userMaxJoinTime =999999;							
		var userDayMaxJoinTime =999999;
		var distriType = 1;
		var refund = 0;
		if($('input[name="mkt_tool"]:checked').val()==1){ //充值优惠才会校验以下输入项
			if($('input[name="isOpenRank"]:checked').val() == 0 && $('input[name="mkt_tool"]:checked').val() == 1){ //固定优惠校验
				if(!$('#minAmount').val()){
					alert('最低充值金额不能为空');
					return ;
				}
				if($('#minAmount').val()<0){
					alert('最低充值金额不能小于0');
					return ;
				}
				if(!checkAmount($('#minAmount').val())){
					alert('最低充值金额格式不正确');
					return ;
				}
				if($('#minAmount').val()==0){
					alert('最低充值金额不能为0');
					return ;
				}
				
				
				if($('input[name="calculateMode"]:checked').val() == 1 ){
					fixedFavourAmt = $('#amt_or_scale').val();
					if(!$.trim(fixedFavourAmt)){
						alert('请输入优惠金额');
						return ;
					}
					if(parseFloat(fixedFavourAmt)>parseFloat($('#minAmount').val())){
						alert('优惠金额不能大于最低充值金额');
						return ;
					}
					if(parseFloat(fixedFavourAmt)==0){
						alert('优惠金额不能等于0');
						return ;
					}
					if(parseFloat(fixedFavourAmt)<0){
						alert('优惠金额不能小于0');
						return ;
					}
					if(!checkAmount(parseFloat(fixedFavourAmt))){
						alert('最低充值金额格式不正确');
						return ;
					}
				}else if($('input[name="calculateMode"]:checked').val() == 2 ){
					fixedFavourRate = $('#amt_or_scale').val();
					if(!$.trim(fixedFavourRate)){
						alert('请输入优惠比例');
						return ;
					}
					if(fixedFavourRate == 0){
						alert('优惠比例不能等于0%');
						return ;
					}
					if(fixedFavourRate > 100){
						alert('优惠比例不能大于100%');
						return ;
					}
					if(fixedFavourRate < 0){
						alert('优惠比例不能小于0%');
						return ;
					}
					if(!checkAmount(fixedFavourRate)){
						alert('优惠比例格式不正确');
						return ;
					}
					fixedFavourRate = parseFloat(fixedFavourRate)/100;
					
					
				}
				
				
				
			}else if($('input[name="isOpenRank"]:checked').val() == 1){ //梯度优惠校验
				if(!$('#lad1_start').val() || !$('#lad1_end').val() ){
					alert('阶梯1起止金额均不能为空');
					return ;
				}
				if(!checkAmount($('#lad1_start').val())){
					alert('阶梯1起始金额格式不正确');
					return ;
				}
				if(!checkAmount($('#lad1_end').val())){
					alert('阶梯1终止金额格式不正确');
					return ;
				}
				if(parseFloat($('#lad1_start').val())>=parseFloat($('#lad1_end').val()) ){
					alert('阶梯1终止金额必须大于起始金额');
					return;
				}
				//校验#amt_rate
				if($('input[name="calculateMode"]:checked').val() == 1){
					if(!$.trim($('#amt_scale1').val())){
						alert('阶梯1优惠金额不可为空');
						return ;
					}
					if(parseFloat($('#amt_scale1').val())<0){
						alert('阶梯1优惠金额不可小于0');
						return;
					}
					if(parseFloat($('#amt_scale1').val())==0){
						alert('阶梯1优惠金额不可等于0');
						return;
					}
					if(!checkAmount($('#amt_scale1').val())){
						alert('阶梯1优惠金额格式不正确');
						return ;
					}
					if(parseFloat($('#amt_scale1').val())>parseFloat($('#lad1_end').val())){
						alert('阶梯1优惠金额不可大于优惠范围最大值');
						return;
					}
					
					
				}
				if($('input[name="calculateMode"]:checked').val() == 2){
					if(!$.trim($('#amt_scale1').val())){
						alert('阶梯1优惠比例不可为空');
						return ;
					}
					if($('#amt_scale1').val()>100){
						alert('阶梯1优惠比例不可大于100%');
						return ;
					}
					if($('#amt_scale1').val()<0){
						alert('阶梯1优惠比例不可小于0%');
						return ;
					}
					if(!checkAmount($('#amt_scale1').val())){
						alert('阶梯1优惠比例格式不正确');
						return ;
					}
				}
				
				var display =$('#lad1').css('display'); //阶梯2
				if(display != 'none'){ //校验第2行
					if( !$('#lad2_start').val() || !$('#lad2_end').val()){
						alert('阶梯起止金额均不能为空');
						return;
					}
					if(!checkAmount($('#lad2_start').val())){
						alert('阶梯2起始金额格式不正确');
						return ;
					}
					if(!checkAmount($('#lad2_end').val())){
						alert('阶梯2终止金额格式不正确');
						return ;
					}
					if(parseFloat($('#lad2_start').val())>=parseFloat($('#lad2_end').val())){
						alert('阶梯2终止金额必须大于起始金额');
						return;
					}
					if(parseFloat($('#lad2_start').val())!=parseFloat($('#lad1_end').val())){
						alert('阶梯2起始金额必须等于阶梯1终止金额');
						return;
					}
					//校验#amt_rate
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale2').val())){
							alert('阶梯2优惠金额不可为空');
							return ;
						}
						if(parseFloat($('#amt_scale2').val())<0){
							alert('阶梯2优惠金额不可小于0');
							return;
						}
						if(parseFloat($('#amt_scale2').val())==0){
							alert('阶梯2优惠金额不可等于0');
							return;
						}
						if(!checkAmount($('#amt_scale2').val())){
							alert('阶梯2优惠金额格式不正确');
							return ;
						}
						if(parseFloat($('#amt_scale2').val())>parseFloat($('#lad2_end').val())){
							alert('阶梯2优惠金额不可大于优惠范围最大值');
							return;
						}
						
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale2').val())){
							alert('阶梯2优惠比例不可为空');
							return ;
						}
						if($('#amt_scale2').val()>100){
							alert('阶梯2优惠比例不可大于100%');
							return ;
						}
						if($('#amt_scale2').val()<0){
							alert('阶梯2优惠比例不可小于0%');
							return ;
						}
						if(!checkAmount($('#amt_scale2').val())){
							alert('阶梯2优惠比例格式不正确');
							return ;
						}
					}
				}
				
				var display =$('#lad2').css('display'); //阶梯3
				if(display != 'none'){ //校验第2行
					if( !$('#lad3_start').val() || !$('#lad3_end').val()){
						alert('阶梯3起止金额均不能为空');
						return;
					}
					if(!checkAmount($('#lad3_start').val())){
						alert('阶梯3起始金额格式不正确');
						return ;
					}
					if(!checkAmount($('#lad3_end').val())){
						alert('阶梯3终止金额格式不正确');
						return ;
					}
					if(parseFloat($('#lad3_start').val())>=parseFloat($('#lad3_end').val())){
						alert('阶梯3终止金额必须大于起始金额');
						return;
					}
					if(parseFloat($('#lad3_start').val())!=parseFloat($('#lad2_end').val())){
						alert('阶梯3起始金额必须等于阶梯2终止金额');
						return;
					}
					//校验#amt_rate
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale3').val())){
							alert('阶梯3优惠金额不可为空');
							return ;
						}
						if(parseFloat($('#amt_scale3').val())<0){
							alert('阶梯3优惠金额不可小于0');
							return;
						}
						if(parseFloat($('#amt_scale3').val())==0){
							alert('阶梯3优惠金额不可等于0');
							return;
						}
						if(!checkAmount($('#amt_scale3').val())){
							alert('阶梯3优惠金额格式不正确');
							return ;
						}
						if(parseFloat($('#amt_scale3').val())>parseFloat($('#lad3_end').val())){
							alert('阶梯3优惠金额不可大于优惠范围最大值');
							return;
						}
						
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale3').val())){
							alert('阶梯3优惠比例不可为空');
							return ;
						}
						if($('#amt_scale3').val()>100){
							alert('阶梯3优惠比例不可大于100%');
							return ;
						}
						if($('#amt_scale3').val()<0){
							alert('阶梯3优惠比例不可小于0%');
							return ;
						}
						if(!checkAmount($('#amt_scale3').val())){
							alert('阶梯3优惠比例格式不正确');
							return ;
						}
					}
				}
				var display =$('#lad3').css('display'); //阶梯4
				if(display != 'none'){ //校验第2行
					if( !$('#lad4_start').val() || !$('#lad4_end').val()){
						alert('阶梯4起止金额均不能为空');
						return;
					}
					if(!checkAmount($('#lad4_start').val())){
						alert('阶梯4起始金额格式不正确');
						return ;
					}
					if(!checkAmount($('#lad4_end').val())){
						alert('阶梯4终止金额格式不正确');
						return ;
					}
					if(parseFloat($('#lad4_start').val())>=parseFloat($('#lad4_end').val())){
						alert('阶梯4终止金额必须大于起始金额');
						return;
					}
					if(parseFloat($('#lad4_start').val())!=parseFloat($('#lad3_end').val())){
						alert('阶梯4起始金额必须等于阶梯3终止金额');
						return;
					}
					//校验#amt_rate
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale4').val())){
							alert('阶梯4优惠金额不可为空');
							return ;
						}
						if(parseFloat($('#amt_scale4').val())<0){
							alert('阶梯4优惠金额不可小于0');
							return;
						}
						if(parseFloat($('#amt_scale4').val())==0){
							alert('阶梯4优惠金额不可等于0');
							return;
						}
						if(!checkAmount($('#amt_scale4').val())){
							alert('阶梯4优惠金额格式不正确');
							return ;
						}
						if(parseFloat($('#amt_scale4').val())>parseFloat($('#lad4_end').val())){
							alert('阶梯4优惠金额不可大于优惠范围最大值');
							return;
						}
						
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale4').val())){
							alert('阶梯4优惠比例不可为空');
							return ;
						}
						if($('#amt_scale4').val()>100){
							alert('阶梯4优惠比例不可大于100%');
							return ;
						}
						if($('#amt_scale4').val()<0){
							alert('阶梯4优惠比例不可小于0%');
							return ;
						}
						if(!checkAmount($('#amt_scale4').val())){
							alert('阶梯4优惠比例格式不正确');
							return ;
						}
					}
				}
				var display =$('#lad4').css('display'); //阶梯5
				if(display != 'none'){ //校验第2行
					if( !$('#lad5_start').val() || !$('#lad5_end').val()){
						alert('阶梯5起止金额均不能为空');
						return;
					}
					if(!checkAmount($('#lad5_start').val())){
						alert('阶梯5起始金额格式不正确');
						return ;
					}
					if(!checkAmount($('#lad5_end').val())){
						alert('阶梯5终止金额格式不正确');
						return ;
					}
					if(parseFloat($('#lad5_start').val())>=parseFloat($('#lad5_end').val())){
						alert('阶梯5终止金额必须大于起始金额');
						return;
					}
					if(parseFloat($('#lad5_start').val())!=parseFloat($('#lad4_end').val())){
						alert('阶梯5起始金额必须等于阶梯4终止金额');
						return;
					}
					//校验#amt_scale
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale5').val())){
							alert('阶梯5优惠金额不可为空');
							return ;
						}
						if(parseFloat($('#amt_scale5').val())<0){
							alert('阶梯5优惠金额不可小于0');
							return;
						}
						if(parseFloat($('#amt_scale5').val())==0){
							alert('阶梯5优惠金额不可等于0');
							return;
						}
						if(!checkAmount($('#amt_scale5').val())){
							alert('阶梯5优惠金额格式不正确');
							return ;
						}
						if(parseFloat($('#amt_scale5').val())>parseFloat($('#lad5_end').val())){
							alert('阶梯5优惠金额不可大于优惠范围最大值');
							return;
						}
						
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale5').val())){
							alert('阶梯5优惠比例不可为空');
							return ;
						}
						if($('#amt_scale5').val()>100){
							alert('阶梯5优惠比例不可大于100%');
							return ;
						}
						if($('#amt_scale5').val()<0){
							alert('阶梯5优惠比例不可小于0%');
							return ;
						}
						if(!checkAmount($('#amt_scale5').val())){
							alert('阶梯5优惠比例格式不正确');
							return ;
						}
					}
				}
				var display =$('#lad5').css('display'); //阶梯6
				if(display != 'none'){ //校验第2行
					if( !$('#lad6_start').val() || !$('#lad6_end').val()){
						alert('阶梯6起止金额均不能为空');
						return;
					}
					if(!checkAmount($('#lad6_sntart').val())){
						alert('阶梯6起始金额格式不正确');
						return ;
					}
					if(!checkAmount($('#lad6_end').val())){
						alert('阶梯6终止金额格式不正确');
						return ;
					}
					if(parseFloat($('#lad6_start').val())>=parseFloat($('#lad6_end').val())){
						alert('阶梯6终止金额必须大于起始金额');
						return;
					}
					if(parseFloat($('#lad6_start').val())!=parseFloat($('#lad5_end').val())){
						alert('阶梯6起始金额必须等于阶梯5终止金额');
						return;
					}
					//校验#amt_scale
					if($('input[name="calculateMode"]:checked').val() == 1){
						if(!$.trim($('#amt_scale6').val())){
							alert('阶梯6优惠金额不可为空');
							return ;
						}
						if(parseFloat($('#amt_scale6').val())<0){
							alert('阶梯6优惠金额不可小于0');
							return;
						}
						if(parseFloat($('#amt_scale6').val())==0){
							alert('阶梯6优惠金额不可等于0');
							return;
						}
						if(parseFloat($('#amt_scale6').val())>parseFloat($('#lad6_end').val())){
							alert('阶梯6优惠金额不可大于优惠范围最大值');
							return;
						}
						if(!checkAmount($('#amt_scale6').val())){
							alert('阶梯6优惠金额格式不正确');
							return ;
						}
					
					}
					if($('input[name="calculateMode"]:checked').val() == 2){
						if(!$.trim($('#amt_scale6').val())){
							alert('阶梯6优惠比例不可为空');
							return ;
						}
						if($('#amt_scale6').val()>100){
							alert('阶梯6优惠比例不可大于100%');
							return ;
						}
						if($('#amt_scale6').val()<0){
							alert('阶梯6优惠比例不可小于0%');
							return ;
						}
						if(!checkAmount($('#amt_scale6').val())){
							alert('阶梯6优惠比例格式不正确');
							return ;
						}
					}
				}
				
				
				
			}
		}else if($('input[name="mkt_tool"]:checked').val()==3){  //红包数据提交检验
			distriType = $('input[name="distriType"]:checked').val();
			fixedFavourAmt = $('#single_amt').val();
				if(!$('#single_amt').val()){
					alert('请输入红包金额');
					return ;
				}
			    if(!checkAmount($('#single_amt').val())){
			     	alert('输入红包金额格式不对');
				   return ;
		    	}
			    if(parseFloat($('#single_amt').val())<=0){
					alert('红包金额应大于0');
					return;
				}
			    if(!$('#coupon_total').val()){
					alert('请输入红包个数');
					return ;
				}
			 	if(!checkNumber($('#coupon_total').val())){
					alert('红包个数格式错误');
					return ;
				}
			 	fixedFavourRate = 0;	
			 	
			 	   
			 
			
		}else if($('input[name="mkt_tool"]:checked').val()==2){//优惠券数据提交校验
			refund = $('input[name="refund"]:checked').val();
			/*if(refund == '3'){
				refund = $('input[name="refund1"]:checked').val();
				}else{
				refund = $('input[name="refund"]:checked').val();
				}
*/		distriType = $('input[name="distriType"]:checked').val();
	  	if(distriType == '2'){
	  		debugger
	  		if($('input[name="goods"]:checked').val() == 1){
	  			if(!$.trim($('#single_goods').val())){
		  			alert('请输入单品标识!');
					return ;
		  		}
			  	  	}
  	  	var userMaxJoinTime =$.trim($('#userMaxJoinTime').val());							
		var userDayMaxJoinTime =$.trim($('#userDayMaxJoinTime').val());
		if(!$.trim($('#userMaxJoinTime').val())){
			alert('请输入用户总领取限制个数');
			return ;
		}
	 	if(!$.trim(checkNumber($('#userMaxJoinTime').val()))){
			alert('用户总取领限制个数格式错误');
			return ;
		}
	 	if(!$.trim($('#userDayMaxJoinTime').val())){
			alert('请输入用户每日领取限制个数');
			return ;
		}
	 	if(!$.trim(checkNumber($('#userDayMaxJoinTime').val()))){
			alert('用户每日领取限制个数格式错误');
			return ;
		}
	 	if(parseFloat($.trim($('#userMaxJoinTime').val()))<parseFloat($.trim($('#userDayMaxJoinTime').val()))){
	    	alert('用户每日领取限制应小于用户总领取限制');
	    	return ;
	    }
  	  	}else{
  	  	var userMaxJoinTime = 1;							
		var userDayMaxJoinTime = 1;
  	  	}
			if(!$('#coupon_startTime').val() || !$('#coupon_endTime').val()){
				alert('券开始或结束时间不可为空');
				return ;
			}
			
			if(!$.trim($('#coupon_name').val())){
				alert('请输入优惠券名称');
				return;
			}
			if($.trim($('#coupon_name').val()).length>18){
				alert('优惠券名称最多18字');
				return;
			}
			if(!$('#single_amt').val()){
				alert('请输入优惠券金额');
				return ;
			}
		    if(!checkAmount($('#single_amt').val())){
		     	alert('输入优惠券金额格式不对');
			   return ;
	    	}
		    if(parseFloat($('#single_amt').val())<=0){
				alert('优惠券金额应大于0');
				return;
			}
		    if(!$('#coupon_total').val()){
				alert('请输入优惠券个数');
				return ;
			}
		 	if(!checkNumber($('#coupon_total').val())){
				alert('优惠券个数格式错误');
				return ;
		 	}
			if(!$('#cill_amt').val()){
				alert('请输入订单门槛金额');
				return ;
			}
		    if(!checkAmount($('#cill_amt').val())){
		     	alert('订单门槛金额格式不对');
			   return ;
	    	}
		    if(parseFloat($('#cill_amt').val())<=0){
				alert('订单门槛金额应大于0');
				return;
			}
		    if(parseFloat($('#cill_amt').val())<=parseFloat($('#single_amt').val())){
		    	alert('订单门槛应该大于优惠券金额');
		    	return ;
		    }
		 	
			}
		
		
		
		
		obj = document.getElementsByName("marketChannel");
	    check_val_channel = [];
	    for(k in obj){
	    	var channelObj = {};
	        if(obj[k].checked){
	        	channelObj.activityId='';
	        	channelObj.channelNo=obj[k].value;
	        	channelObj.channelName=$(obj[k]).attr("channelName");
	        	check_val_channel.push(channelObj);
	        }
	        	
	    }
	    if(check_val_channel.length == 0){
			alert('请选择投放渠道');
			return;
		}
	    obj = document.getElementsByName("payChannel");
	    check_pay_channel = [];
	    for(k in obj){
	        if(obj[k].checked)
	        	check_pay_channel.push(obj[k].value);
	    }
	    if($('input[name="mkt_tool"]:checked').val()!='3'){
	    	if(check_pay_channel.length == 0){
				alert('请选择支付渠道');
				return;
			}
	    }
		
		if(!$('#merchantNo').val()){
			alert('请输入成本承担方商户号');
			return ;
		}
		if(!$('#marketBudget').val()){
			alert('请输入活动预算');
			return ;
		}
		if($('#marketBudget').val()<0){
			alert('请输入大于零的活动预算');
			return ;
		}
		if(!checkAmount($('#marketBudget').val())){
			alert('活动预算格式不正确');
			return ;
		}
		 
		if(!$('#threshold').val()){
			alert('请输入活动预算阈值');
			return ;
		}
		
		if(!checkAmount($('#threshold').val())){
			alert('活动预算阈值格式不正确');
			return ;
		}
		if(parseFloat($('#threshold').val())>=parseFloat($('#marketBudget').val())){
			alert('活动预算阈值应小于活动预算');
			return ;
		}
		if(!$('#contact_no').val()){
			alert('请输入阈值告警联系人电话');
			return ;
		}
		if(!checkMobile($('#contact_no').val())){
			alert('请输入正确的阈值告警联系人电话');
			return;
		}
		if($('input[name="floatBarSwitch"]:checked').val()=='1'){
			if(!$("#floatBarText")){
				alert('请输入浮条文案');
				return ;
			}

			if(!$("#floatUrl")){
				alert('请输入浮条链接');
				return ;
			}
			if(!CheckUrl($('#floatUrl').val())){
				alert('浮条链接格式不正确');
				return;
			}

		}else if($('input[name="floatBarSwitch"]:checked').val()=='0'){
			$("#floatBarText").val('');
			$("#floatUrl").val('');
		}
		//封装阶梯优惠
		var ladderFavourArray = [];
		if($('input[name="isOpenRank"]:checked').val() == 1){
			if(!$('#lad1_start').val()  ){
				alert('请输入梯度起始金额');
				return;
			}
			if(!$('#lad1_end').val()){
				alert('请输入梯度终止金额');
				return;
			}
			ladderFavour1 = {};
			ladderFavour1.beginAmount = amountYuan2Fen($('#lad1_start').val());
			ladderFavour1.endAmount = amountYuan2Fen($('#lad1_end').val());
			if($('input[name="calculateMode"]:checked').val() == 1){
				ladderFavour1.favourAmount = amountYuan2Fen($('#amt_scale1').val());
			}else if($('input[name="calculateMode"]:checked').val() == 2){
				ladderFavour1.favourRate = parseFloat($('#amt_scale1').val())/100;
			}
			ladderFavourArray[0]=ladderFavour1;
			
			if($('#lad2_start').val() && $('#lad2_end').val()){
				ladderFavour2 = {};
				ladderFavour2.beginAmount = amountYuan2Fen($('#lad2_start').val());
				ladderFavour2.endAmount = amountYuan2Fen($('#lad2_end').val());
				if($('input[name="calculateMode"]:checked').val() == 1){
					ladderFavour2.favourAmount = amountYuan2Fen($('#amt_scale2').val());
				}else if($('input[name="calculateMode"]:checked').val() == 2){
					ladderFavour2.favourRate = parseFloat($('#amt_scale2').val())/100;
				}
				ladderFavourArray[1]=ladderFavour2;
			}
			
			if($('#lad3_start').val() && $('#lad3_end').val()){
				ladderFavour3 = {};
				ladderFavour3.beginAmount = amountYuan2Fen($('#lad3_start').val());
				ladderFavour3.endAmount = amountYuan2Fen($('#lad3_end').val());
				if($('input[name="calculateMode"]:checked').val() == 1){
					ladderFavour3.favourAmount = amountYuan2Fen($('#amt_scale3').val());
				}else if($('input[name="calculateMode"]:checked').val() == 2){
					ladderFavour3.favourRate = parseFloat($('#amt_scale3').val())/100;
				}
				ladderFavourArray[2]=ladderFavour3;
			}
			
			if($('#lad4_start').val() && $('#lad4_end').val()){
				ladderFavour4 = {};
				ladderFavour4.beginAmount = amountYuan2Fen($('#lad4_start').val());
				ladderFavour4.endAmount = amountYuan2Fen($('#lad4_end').val());
				if($('input[name="calculateMode"]:checked').val() == 1){
					ladderFavour4.favourAmount = amountYuan2Fen($('#amt_scale4').val());
				}else if($('input[name="calculateMode"]:checked').val() == 2){
					ladderFavour4.favourRate = parseFloat($('#amt_scale4').val())/100;
				}
				ladderFavourArray[3]=ladderFavour4;
			}
			
			if($('#lad5_start').val() && $('#lad5_end').val()){
				ladderFavour5 = {};
				ladderFavour5.beginAmount = amountYuan2Fen($('#lad5_start').val());
				ladderFavour5.endAmount = amountYuan2Fen($('#lad5_end').val());
				if($('input[name="calculateMode"]:checked').val() == 1){
					ladderFavour5.favourAmount = amountYuan2Fen($('#amt_scale5').val());
				}else if($('input[name="calculateMode"]:checked').val() == 2){
					ladderFavour5.favourRate = parseFloat($('#amt_scale5').val())/100;
				}
				ladderFavourArray[4]=ladderFavour5;
			}
			
			if($('#lad6_start').val() && $('#lad6_end').val()){
				ladderFavour6 = {};
				ladderFavour6.beginAmount = amountYuan2Fen($('#lad6_start').val());
				ladderFavour6.endAmount = amountYuan2Fen($('#lad6_end').val());
				if($('input[name="calculateMode"]:checked').val() == 1){
					ladderFavour6.favourAmount = amountYuan2Fen($('#amt_scale6').val());
				}else if($('input[name="calculateMode"]:checked').val() == 2){
					ladderFavour6.favourRate = parseFloat($('#amt_scale6').val())/100;
				}
				ladderFavourArray[5]=ladderFavour6;
			}
			
			
		}else if($('input[name="isOpenRank"]:checked').val() == 0){
			ladderFavourArray = [];
		}
		
		//校验日期
		if(!$('#startTime').val() || !$('#endTime').val()){
			alert('活动开始或结束时间不可为空');
			return ;
		}
		
		if(!checkDateTime($.trim($('#startTime').val())+":00")){
			alert('活动开始时间格式为yyyy:MM:dd hh:mm');
			return ;
		}
		if(!checkDateTime($.trim($('#endTime').val())+":00")){
			alert('活动结束时间格式为yyyy:MM:dd hh:mm');
			return ;
		}
		/*if($('input[name="mkt_tool"]:checked').val() == '2'){
			if(!checkDate($.trim($('#coupon_startTime').val()))){
				alert('券开始时间格式为yyyy:MM:dd');
				return ;
			}
			if(!checkDate($.trim($('#coupon_endTime').val()))){
				alert('券结束时间格式为yyyy:MM:dd');
				return ;
			}
		}*/
		 var nowDate = new Date();  
		 var beginDate=$("#startTime").val();  
		 var endDate=$("#endTime").val();  
		 var d1 = new Date(beginDate.replace(/\-/g, "\/"));  
		 var d2 = new Date(endDate.replace(/\-/g, "\/"));  
		 var dd = d1.getTime();
		 var ndate =nowDate.getTime();
		 if( dd<ndate&&operFlag != 'edit'){
			 alert("活动开始时间不能早于当前时间！");
			 return;
		 }
		  if(beginDate!=""&&endDate!=""&&d1 >=d2&&operFlag != 'edit'){  
		  alert("活动开始时间不能大于结束时间！");  
		  return;  
		 }
		  
		  var    abeginDate=$.trim($("#coupon_startTime").val()+" 00:00:00");  
		  var    aendDate=$.trim($("#coupon_endTime").val()+" 23:59:59") ; 
		  var    ad1 = new Date(abeginDate.replace(/\-/g, "\/"));  
		  var    ad2 = new Date(aendDate.replace(/\-/g, "\/"));  

		   if(ad1 >=ad2&&operFlag != 'edit'){  
			  alert("券开始时间不能大于结束时间！");  
			  return;  
			 }   
			  /*if(d1>=ad1&&operFlag != 'edit'){
				  alert("券开始时间不能小于活动开始时间！");  
				  return; 
			  }*/
			  var coupEndTime = ad2.getTime();//券结束时间
			  var actEndTime = d2.getTime()+7200000;//活动结束时间加2小时
			  if(coupEndTime<actEndTime&&operFlag != 'edit'){
				  alert("券结束时间不能小于活动结束时间后2小时！券结束时间：23:59:59");  
				  return; 
			  }
				$("#submit").attr({"disabled":"disabled"});
		if(operFlag != 'edit'){ //创建活动
		
			$.ajax({
				type:"POST",
				contentType: "application/json",
				data:JSON.stringify({
					'activityName':$('#act_name').val(),
				      'startTimes':$('#startTime').val()+":00",
				      'endTimes':$('#endTime').val()+":00",
				      'businessType':$('input[name="mkt_tool"]:checked').val(), 
				      'userMaxJoinTime':userMaxJoinTime,//$.trim($('#userMaxJoinTime').val()),//'999999',
				      'userDayMaxJoinTime':userDayMaxJoinTime,//$.trim($('#userDayMaxJoinTime').val()),//'999999',
				      'floatBarSwitch':$('input[name="floatBarSwitch"]:checked').val(),
				      'floatBarText':$('#floatBarText').val(),
				      'floatUrl':$('#floatUrl').val(),
				     'merchantNo':$('#merchantNo').val(),
				     'marketBudget':amountYuan2Fen($('#marketBudget').val()),
				     'threshold':amountYuan2Fen($('#threshold').val()),
				     'payChannelList':check_pay_channel,
				     'toolType':$('input[name="mkt_tool"]:checked').val(),     
				     'contact':$('#contact_no').val(),
				     'favourForm':$('input[name="favourForm"]:checked').val(),
				     'calculateMode':$('input[name="calculateMode"]:checked').val(),
				     'isOpenRank':$('input[name="isOpenRank"]:checked').val(),
				     'minAmount':amountYuan2Fen($('#minAmount').val()),
				     'fixedFavourAmt': amountYuan2Fen(fixedFavourAmt),
				     'fixedFavourRate':fixedFavourRate,//parseFloat(fixedFavourRate)/100
				     'channelList':check_val_channel,
				     'deployList':ladderFavourArray,
				     'couponName':$.trim($('#coupon_name').val()),
				     'couponType':'1',//1代金券 2折扣券
				     //'couponRate':,//这期没有优惠比例  
				     'amtLimit':amountYuan2Fen($.trim($('#cill_amt').val())),
				     'singleAtm':amountYuan2Fen($.trim($('#single_amt').val())),
				     'sTime':$.trim($('#coupon_startTime').val())+" 00:00:00",
				     'eTime':$.trim($('#coupon_endTime').val())+" 23:59:59",
				     'makeNum':$.trim($('#coupon_total').val()),
				     'distriType':$('input[name="distriType"]:checked').val(),
				     'refundType':refund,
				     'goodsMark':$('input[name="goods"]:checked').val(),
				     'singleMarkId':$.trim($('#single_goods').val())
				}),
				url:'/market-mgr/market/createActivity',
				datatype:"JSON",
				success:function (data){
					if(data.code=='200'){
						location.href = 'mkt_mng.html';
                        alert('活动创建成功');
					}else if(data.code=='170108'){
						$('#submit').removeAttr("disabled");
						alert(data.msg);
					}else if(data.code=='170109'){
						$('#submit').removeAttr("disabled");
						alert(data.msg);
					}else{
						$('#submit').removeAttr("disabled");
						alert('系统异常，请稍后再试');
					}
				
				},
				error:function(data){
					$('#submit').removeAttr("disabled");
				//	location.href = 'mkt_mng.html';
					alert('系统异常，请稍后再试');
					return;
				}
				});
			
		}else { //修改活动
			$.ajax({
				type:"POST",
				contentType: "application/json",
				data:JSON.stringify({
					'id':GetQueryString('actId'),
					'ruleId':ruleId,
					'activityName':$('#act_name').val(),
				      'startTimes':$('#startTime').val()+":00",
				      'endTimes':$('#endTime').val()+":00",
				      'businessType':$('input[name="mkt_tool"]:checked').val(), 
				      'userMaxJoinTime':userMaxJoinTime,//$.trim($('#userMaxJoinTime').val()),//'999999',
				      'userDayMaxJoinTime':userDayMaxJoinTime,//$.trim($('#userDayMaxJoinTime').val()),//'999999',
				      'floatBarSwitch':$('input[name="floatBarSwitch"]:checked').val(),
				      'floatBarText':$('#floatBarText').val(),
				      'floatUrl':$('#floatUrl').val(),
				     'merchantNo':$('#merchantNo').val(),
				     'marketBudget':amountYuan2Fen($('#marketBudget').val()),
				     'threshold':amountYuan2Fen($('#threshold').val()),
				     'payChannelList':check_pay_channel,
				     'toolType':$('input[name="mkt_tool"]:checked').val(),
				     'contact':$('#contact_no').val(),
				     'favourForm':$('input[name="favourForm"]:checked').val(),
				     'calculateMode':$('input[name="calculateMode"]:checked').val(),
				     'isOpenRank':$('input[name="isOpenRank"]:checked').val(),
				     'minAmount':amountYuan2Fen($('#minAmount').val()),
				     'fixedFavourAmt': amountYuan2Fen(fixedFavourAmt),
				     'fixedFavourRate':fixedFavourRate,//parseFloat(fixedFavourRate)/100,
				     'channelList':check_val_channel,
				     'deployList':ladderFavourArray,
				     'couponName':$.trim($('#coupon_name').val()),
				     'couponType':'1',//1代金券 2折扣券
				     //'couponRate':,//这期没有
				     'amtLimit':amountYuan2Fen($.trim($('#cill_amt').val())),
				     'singleAtm':amountYuan2Fen($.trim($('#single_amt').val())),
				     'sTime':$.trim($('#coupon_startTime').val())+":00",
				     'eTime':$.trim($('#coupon_endTime').val())+":59",
				     'makeNum':$.trim($('#coupon_total').val()),
				     'distriType':distriType,
				     'refund':refund,
				     'goodsMark':$('input[name="goods"]:checked').val(),
				     'singleMarkId':$.trim($('#single_goods').val())
				}),
				url:'/market-mgr/market/updateActivity',
				datatype:"JSON",
				success:function (data){
					if(data.code=='200'){
						location.href = 'mkt_mng.html';
						alert('活动修改成功');
					}else if(data.code=='170108'){
						$('#submit').removeAttr("disabled");
						alert(data.msg);
					}else{
						$('#submit').removeAttr("disabled");
						alert('系统异常，请稍后再试');
					}
				},
				error:function(data){
					$('#submit').removeAttr("disabled");
					alert('系统异常，请稍后再试');
					return;
				}
				});
		}	
	}
	
	
	
	