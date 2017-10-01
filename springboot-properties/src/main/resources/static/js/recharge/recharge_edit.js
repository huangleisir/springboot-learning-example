jQuery(function($){
	//var checkItem = $(".check-item"),
	/*popUpBinctt = $("#popUp-binctt"),
	popUpCrdctt = $("#popUp-crdctt"),*/
	main = {
		// 初始化执行
		init: function() {
			var self = this;
			//self.initPage();
			self.bindEvent();
			//self.initBankSelect();
			self.showRechargeItemInfo();
			
			if(popUpType == "01"){
				self.getChannelList();
			}
		},
		getChannelList:function(){
			if(null != channelList && channelList != "" && channelList.length > 0){
				for(var i=0;i < channelList.length;i++){
					$('#popUp-appId').append("<option value='"+channelList[i].appId+"'>"+channelList[i].appId +" | "+channelList[i].regChannel + "</option>");
				}
			}
		},
		//初始化页面展示
		/*initPage:function(){
			if(popUpType == "01"){
				$(".hint").each(function(){
					if($(this).hasClass("req")){
						$(this).html("(必填)");
					}else if($(this).hasClass("notreq")){
						$(this).html("(非必填)");
					}
				});
			}else if(popUpType == "02"){
				$(".hint").each(function(){
					$(this).html("(可修改)");
				});
			}else{
				$(".hint").each(function(){
					$(this).html("");
				});
			}
		},*/
		 //获取充值项信息
		showRechargeItemInfo:function(){
			var self = this;
			if(popUpType == "02" || popUpType == "03"){
				$("#popUp-appId").hide();
				$("#edit_appId").show();
			}
			if(popUpType == "02" || popUpType == "03"){
				httpModule.ajaxRequest({
					name: "获取充值项信息", //接口名称
					type: "POST",
					url: httpModule.setHostUrl() + "/market-mgr/recharge/getRechargeItemList",
					data: JSON.stringify({
						pageSize: 60,
						pageNumber: 1,
						appId : oldAppId
					}),
					success: function(res) {
						if(res.code == "200") {
							var item = res.data.itemList[0];
							$("#popUp-appId").attr("readonly",true);
							$("#popUp-appId").val(item.appId);//渠道号
							if(null != channelList && channelList != "" && channelList.length > 0){
								for(var i=0;i < channelList.length;i++){
									if(channelList[i].appId == item.appId){
										$('#popUp-appId').append("<option  selected = 'selected' value='"+channelList[i].appId+"'>"+channelList[i].appId +" | "+channelList[i].regChannel + "</option>");
									}else{
										$('#popUp-appId').append("<option value='"+channelList[i].appId+"'>"+channelList[i].appId +" | "+channelList[i].regChannel + "</option>");
									}
								}
							}
							$("#edit_appId").val(item.appId);//渠道号
							$("#popUp-channelName").val(item.channelName);//渠道名称
							$("#popUp-amt1").val(item.amt1==0?"":item.amt1);//充值金额
							$("#popUp-amt2").val(item.amt2==0?"":item.amt2);//充值金额
							$("#popUp-amt3").val(item.amt3==0?"":item.amt3);//充值金额
							$("#popUp-amt4").val(item.amt4==0?"":item.amt4);//充值金额
							$("#popUp-amt5").val(item.amt5==0?"":item.amt5);//充值金额
							$("#popUp-amt6").val(item.amt6==0?"":item.amt6);//充值金额
						} else {
							bootbox.alert(res.msg);
						}
					}
				});
			}
		},//事件绑定
		bindEvent:function(data){
			var self = this;
			/*$(".checkamt").on("keyup",function(){
				$(".checkamt").each(function(){
					this.value=
				});
				
				var values="";
			    $(".checkamt").each(function(i,item){
			        var value = $(this).val();
			        values += value; //获取所有的输入金额
			    });
			    
			});*/
			/*popUpCrdctt.on("keyup",function(){//格式化主账号
				this.value=this.value.replace(/_/g,'');
		        this.value=this.value.replace(/%/g,'');
		        this.value=this.value.replace(/[^\d]/g,'');
			});
			//处理银行编码
			popUpBankCode.on("keyup",function(){
				 this.value=this.value.replace(/\s+/g,'');
				 this.value=this.value.toUpperCase();
			});*/
		}
	}
	main.init();
});
function patch(re,s){
	  re=eval("/"+re+"/ig");
	  return s.match(re).length;
	}


function validChannel(){
	var appId = $("#popUp-appId").val();
	var formData = {
            pageSize: 10,
            currentPage: 1,
            appId: appId,
     }
	url = "/market-mgr/recharge/getRechargeItemList";
	$.loading.start();
	httpModule.ajaxRequest({
		name: "校验对应渠道是否添加重复接口", //接口名称
		type: "POST",
		url: httpModule.setHostUrl() + url,
		data: JSON.stringify(formData),
		contentType: "application/json",
		success: function(data) {
			$.loading.end();
            if (data.code === "200") {
            	var itemNumCount = data.data.numCount;
            	if(null != itemNumCount && itemNumCount > 0){
            		commonAlert1("同一个渠道不允许添加重复充值项","知道了");
            		$('#channelRepeat').val(1);
            		return false;
            	}
            	$('#channelRepeat').val(0);
            	 $.loading.end();
            } else {
            	$('#channelRepeat').val(0);
            	//commonAlert1(data.msg,"知道了");
                $.loading.end();
            }
		},
		error: function(err) {
			//commonAlert1("温馨提示: 系统繁忙，请稍后再试","确定");
		}
	});
}
function checkItemValue(data){
    //校验联系信息不能一致
    /*var values="=";
    $(".checkamt").each(function(i,item){
        var value=$(this).val();
        if(null != value && value != ''){
        	value += "=";
        	values+="=" + value; //获取充值金额值
        	values.replace(/\s/g,'');
        }
    });
    var val = $(data).val(); //获得当前输入框的值
	if(null != val && val != ''){
		val = "="+$(data).val()+"=";
	}
    values = values.replace(val,'');
    var count = patch(val,values);
    if(count > 1){  //判断字符重复个数
        alert("充值项不能重复");
        $(data).focus();
        return false;
    }*/
    //alert("count=" + count);
    //var str = "abbbbbsdsdsdasdlsfj";
    //var c = "b"; // 要计算的字符
  /*  var regex = new RegExp(val, 'g'); // 使用g表示整个字符串都要匹配
    var result = values.match(regex);
    var count = !result ? 0 : result.length;
    alert("count=" + count);*/
    /*var newValue;
    if(null != values && values != ''){
    	newValue=values.replace(val+',',""); //去除当前输入框的值
    	newValue =newValue.replace(/\s/g,'');
    }
    if(newValue==""){
        return false;
    }else{
    	alert("values ="+values)
    	alert("val ="+val)
        if(val != "" && newValue.indexOf(val)>-1){  //当前值和newValue作比较
            alert("充值项不能重复");
            $(data).focus();
            return false;
        }
    }*/
}