var popUp;
var oldAppId;//存储binctt，用于查看修改时所用
var popUpType;//01新增  02修改   03查看
var channelList; //渠道列表 用于填写渠道号时进行校验填写值是否有效
jQuery(function($) {
	$(".chosen-select").chosen(); 
	$('#chosen-multiple-style').on('click', function(e){
		var target = $(e.target).find('input[type=radio]');
		var which = parseInt(target.val());
		if(which == 2) $('#form-field-select-3').addClass('tag-input-style');
		 else $('#form-field-select-3').removeClass('tag-input-style');
	});
	$('#modal-form').on('shown.bs.modal', function () {
		$(this).find('.chosen-container').each(function(){
			$(this).find('a:first-child').css('width' , '210px');
			$(this).find('.chosen-drop').css('width' , '210px');
			$(this).find('.chosen-search input').css('width' , '200px');
		});
	})
	$("#popUp").mzDialog();
	popUp = $("#popUp");
	
	$("#query").on("click",function(){
        $('#queryRechargeList').bootstrapTable('refreshOptions',{pageNumber:1,pageSize:10});
    });
	initMktChannel();
    $("#add").on("click",function(){
    	popUpType = "01";
    	popUp.attr("data-title","请填写充值项信息");
    	$("#popUp-appId").show();
    	$("#edit_appId").hide();
		popUp.click();
    });
    /*$('#modal-form').on('shown.bs.modal', function () {
		$(this).find('.chosen-container').each(function(){
			$(this).find('a:first-child').css('width' , '210px');
			$(this).find('.chosen-drop').css('width' , '210px');
			$(this).find('.chosen-search input').css('width' , '200px');
		});
	});*/
    function queryParams(params) {
        var obj = {
            pageSize: params.limit,
            currentPage: params.offset / params.limit + 1,
            appId: $("#form-field-select-3").val(),
        }
        //显示加载框
        $.loading.start();
        return obj;
    };
    function responseHandler(res) {
        if (res.code == "200") {
			if (res.data.itemList == null){
				return {
					"rows": [],
					"total": 0
				};				
			};	
			return {
				"rows": res.data.itemList,
				"total": res.data.numCount
			};
		} else {
			return {
				"rows": [],
				"total": 0
			};
		}
    }
    //数据表格
    $('#queryRechargeList').bootstrapTable({
    	height:400,
        columns: [{
            field: 'appId',
            title: '渠道号',
            align: 'center'
        },{
            field: 'channelName',
            title: '渠道名称',
            align: 'center',
            formatter:function(value,row,index){ 
            	if(null != channelList && channelList != "" && channelList.length > 0){
            		for(var i=0;i < channelList.length;i++){
            			if(channelList[i].appId == row.appId){
            				return channelList[i].regChannel;
            			}
            		}
            	}
            	return "-";
           }	
        }, {
            field: 'amt1',
            title: '充值项1(元)',
            align: 'center'
        }, {
        	field: 'amt2',
        	title: '充值项2(元)',
        	align: 'center'
        }, {
        	field: 'amt3',
        	title: '充值项3(元)',
        	align: 'center'
        }, {
        	field: 'amt4',
        	title: '充值项4(元)',
        	align: 'center'
        }, {
        	field: 'amt5',
        	title: '充值项5(元)',
        	align: 'center'
        }, {
        	field: 'amt6',
        	title: '充值项6(元)',
        	align: 'center'
        },{
        	field: 'operation',
        	title: '操作',
        	align: 'center',
        	formatter:function(value,row,index){
        		var b,c;
        		b = '<a href="#" class = "update" >修改</a>';
        		c = '<a href="#" class = "delete" >删除</a>';
        		return b+c;
        	},
        	events: 'operateEvents'
        }],
        method: 'post',
        striped: true,
        dataType: "json",
        pagination: true,
        queryParamsType: "limit",
        singleSelect: false,
        contentType: "application/json",
        pageSize: 10,
        pageNumber:1,
        pageList: [10, 20, 30],
        search: false, 
        showColumns: false,
        escape:true,        //字符转义
        sidePagination: "server", 
        queryParams: queryParams,
        responseHandler: responseHandler,
        url:"/market-mgr/recharge/getRechargeItemList",
        //数据显示完毕后事件
        onLoadSuccess:function(data){
            //隐藏加载框
            $.loading.end()
        },
        onLoadError:function(){
            $.loading.end()
        }
    });
})

//验证字段是否合法
	function validateValue(){
		var fromData = $(".check-item");  //获取到所有表单对象
		var notWrite = true;  //默认都填写了
		var dataInfo;
		$(".check-item").each(function(){
			dataInfo = $(this).attr("required-info");
			if($(this).hasClass("required")){//校验必填项是否合法
				var str = $(this).val().trim();    
			   /* if(str.length != 0){ //有一项已填写后直接返回并允许保存
			    	notWrite = false;
			    	return false;  //false 为已填写其中一项及以上
			    }   */
				if(str.length == 0){
					notWrite = false;
			    	return false;
			    }  
				if(str == 0){
					notWrite = false;
					dataInfo = "充值项金额必须大于0";
					return false;
				}  
			}
		}); 
		if(!notWrite){
			commonAlert1("温馨提示: "+dataInfo,"知道了");
			//bootbox.alert("温馨提示: "+dataInfo);
			//$("#error").html("温馨提示: "+dataInfo).show();
		}
		return notWrite;
	}
	
	function validChannel(){
		var channelVal = $("#popUp-appId").val();
		var flag = false;
		for(var i=0;i < channelList.length;i++){
			if(channelList[i].appId == channelVal){
				flag = true;
				return flag;
			}
		}
		return flag;
	}
	 
	//弹出框确认,回调函数处理
	function collBack(){
		var flag = true;
		if(popUpType == "01" || popUpType == "02"){//如果是新增、修改、需要交易数据是否合法
			var checkChannel = $("#popUp-appId").val();
			if(null == checkChannel || checkChannel ==''){
				commonAlert1("温馨提示: 请选择渠道","知道了");
				return false;
			}
			
			flag = validateValue();
			if(!flag){
				return false;
			}
			/*flag = validChannel();
			if(!flag){
				//$("#error").html("温馨提示: 此渠道号无效").show();
				commonAlert1("温馨提示: 此渠道号无效","知道了");
				return flag;
			}*/
			
			flag = ValidAmtValue(); 
			if(!flag){
				 commonAlert1("温馨提示: 充值项不能重复","知道了");
				//$("#error").html("温馨提示: 充值项不能重复").show();
				return flag;
			}
		 
			var ishave = $('#channelRepeat').val();
			if(ishave ==1){
				commonAlert1("温馨提示: 同一个渠道不允许添加重复充值项","知道了");
				return false;
			}
			if(flag == true){//新增
				addOrUpdateCardBinInfo();//调用新增修改公用方法
			}
		}
		return flag;
	}
	
	
	function ValidAmtValue(){
		var amtValues="";
	    $(".checkamt").each(function(i,item){
	        var value = $(this).val();
	        if(null != value && value != ''){
	        	amtValues += value + ","; //获取充值金额值
	        }
	    });
	    var amtArray = new Array();
	    if(null != amtValues && amtValues != ''){
	    	amtValues = amtValues.substring(0,amtValues.length -1);
	    }
	    if(null != amtValues && amtValues != "" && amtValues.length > 0){
	    	amtArray = amtValues.split(",");// 在每个逗号(,)处进行分解。
	    }
	    if(null != amtArray && amtArray.length > 0){
	    	var j = 1; 
	    	var k = 0;
	    	for(var i=0;i<amtArray.length;i++){
	    		for(j;j<amtArray.length;j++){
	    			if(Number(amtArray[i]) == Number(amtArray[j])){
	    				return false;
	    			}
	    		}
	    		k = i;
	    		j= ++k + 1;
	    		/*if(j == amtArray.length){
	    			j =j-1;
	    		}*/
	    	}
	    }
	    return true;
	}
	function getItemInfo(optType){
		var obj =
		{"itemList":
		  [
		    {"appId":$("#popUp-appId").val(),"channelName":$("#popUp-channelName").val(),amt: $("#popUp-amt1").val()==''?'0':$("#popUp-amt1").val()},
		    {"appId":$("#popUp-appId").val(),"channelName":$("#popUp-channelName").val(),amt: $("#popUp-amt2").val()==''?'0':$("#popUp-amt2").val()},
		    {"appId":$("#popUp-appId").val(),"channelName":$("#popUp-channelName").val(),amt: $("#popUp-amt3").val()==''?'0':$("#popUp-amt3").val()},
		    {"appId":$("#popUp-appId").val(),"channelName":$("#popUp-channelName").val(),amt: $("#popUp-amt4").val()==''?'0':$("#popUp-amt4").val()},
		    {"appId":$("#popUp-appId").val(),"channelName":$("#popUp-channelName").val(),amt: $("#popUp-amt5").val()==''?'0':$("#popUp-amt5").val()},
		    {"appId":$("#popUp-appId").val(),"channelName":$("#popUp-channelName").val(),amt: $("#popUp-amt6").val()==''?'0':$("#popUp-amt6").val()}
		  ],
		  "optType":optType
		};
		return obj;
	}

	//新增修改充值项信息
	function addOrUpdateCardBinInfo(){
		var url = "";
		var formData = getItemInfo(popUpType);
		//if(popUpType == "01"){
		url = "market-mgr/recharge/add";
		/*}else{
			url = "market-mgr/recharge/update";
			formData.oldAppId = oldAppId;
		}*/
		
		$.loading.start();
		httpModule.ajaxRequest({
			name: "新增修改接口", //接口名称
			type: "POST",
			url: httpModule.setHostUrl() + url,
			data: JSON.stringify(formData),
			contentType: "application/json",
			success: function(data) {
				$.loading.end();
	            if (data.code === "200") {
	            	commonAlert2("操作成功");
	            	/*bootbox.alert("操作成功",function(){
	                	$("#query").click();
	                });*/
	            } else {
	            	commonAlert1(data.msg,"知道了");
	                //bootbox.alert(data.msg);
	                $.loading.end();
	            }
			},
			error: function(err) {
				commonAlert1("温馨提示: 系统繁忙，请稍后再试","确定");
				//bootbox.alert("系统繁忙，请稍后再试");
			}
		});
	}
	
	function initMktChannel(){
		$.ajax({
			type:"POST",
			contentType: "application/json",
			data:JSON.stringify({
			}),
			url:'/market-mgr/market/queryChannel',
			datatype:"JSON",
			success:function (result){
				for(var i=0;i<result.data.length;i++){
					//$("#form-field-select-3").append("<option value='Value'>Text</option>");
					$('#form-field-select-3').append("<option value='"+result.data[i].appId+"'>"+result.data[i].appId +" | "+result.data[i].regChannel + "</option>");
				}
				if(null != result.data && result.data.length > 0){
					channelList = result.data;
				}
			}
		});
	}
	

	function validChannelRepeat(){
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
	            	}else{
	            		$('#channelRepeat').val(0);
	            	}
	            	 $.loading.end();
	            } else {
	            	$('#channelRepeat').val(0);
	            	//commonAlert1(data.msg,"知道了");
	                $.loading.end();
	            }
			},
			error: function(err) {
				$('#channelRepeat').val(0);
				//commonAlert1("温馨提示: 系统繁忙，请稍后再试","确定");
			}
		});
	}
	//删除充值项信息
	function deleteRechargeItem(appId){
		$.loading.start();
		httpModule.ajaxRequest({
			name: "钱包充值项删除接口", //接口名称
			type: "POST",
			url: httpModule.setHostUrl() + "market-mgr/recharge/del",
			data: JSON.stringify({
				'appId':appId
	        }),
			dataType: "json",
			contentType: "application/json",
			success: function(data) {
				$.loading.end();
	            if (data.code === "200") {
	            	commonAlert2("操作成功");
	                /*bootbox.alert("操作成功",function(){
	                	$("#query").click();
	                });*/
	            } else {
	            	commonAlert1(data.msg,"知道了");
	                //bootbox.alert(data.msg);
	                $.loading.end();
	            }
			},
			error: function(err) {
				commonAlert1("系统繁忙，请稍后再试","确定");
				//bootbox.alert("系统繁忙，请稍后再试");
			}
		});
	}

	//注册事件
	window.operateEvents = {
		'click .query': function (e, value, row, index) {
			oldAppId = row.appId;
			popUpType = "03";
			popUp.attr("data-title","请查充值项信息");
			popUp.click();
	    },'click .update': function(e, value, row, index){
	    	oldAppId = row.appId;
	    	popUpType = "02";
	    	popUp.attr("data-title","请修改充值项信息");
	    	$("#popUp-appId").hide();
	    	$("#edit_appId").show();
			popUp.click();
	    },'click .delete': function(e, value, row, index){
	    	layer.confirm('请确认是否删除?', {icon: 3, title:'提示'}, function(index,result){
	    		if(result){
		        	deleteRechargeItem(row.appId);
		        }  
	    		layer.close(index);
	    	});  
	    	/*bootbox.confirm("请确认是否删除!", function (result) {
		        if(result){
		        	deleteRechargeItem(row.appId);
		        }
		    });*/
	    }
	}