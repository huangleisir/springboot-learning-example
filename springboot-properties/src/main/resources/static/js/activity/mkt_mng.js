jQuery(function($) {
	var id = "";
	var businessType = "";
	/*弹框*/
	$("#change").mzDialog();
	$("#okBtn").css('display','none');
	//数据表格
	$('#querylist').bootstrapTable({
		height:400,
		columns: [{
		    field: '',
		    title: '编号',
		    width:'1%',
		    formatter: function (value, row, index) {
		    	/*var cPage = row.currentPage;
		    	var size = row.pageSize;*/
		        return index+1;//+(cPage-1)*size
		    }
		},{
			field: 'activityName',
			title: '活动名称',
			width:'4%'
		},{
			field: 'businessType',
			title: '营销工具',
			width:'4%',
			formatter:function(value,row,index){
				var s = row.businessType;
				var text = '';
				if(s == 1){
					text = '充值优惠';
				}else if(s == 2){
					text = '优惠券';
				}else if(s == 3){
					text = '红包';
				}
				return text;
			}	
		},{
			field: 'businessType',
			title: '投放方式',
			width:'6%',
			formatter:function(value,row,index){
				var s = row.distriType;
				var text = '';
				if(s == 1){
					text = '直接投放';
				}else if(s == 2){
					text = '领用';
				}else if(s == 3){
					text = '注册送';
				}
				else if(s == 4){
					text = '关注微信公众号送';
				}else if(s == 5){
					text = '首次开通免密支付送';
				}
				return text;
			}	
		},{
			field: 'marketActivityStatus',
			title: '活动状态',
			width:'4%',
			formatter:function(value,row,index){
				var s = row.marketActivityStatus;
				/*var is =row.isDeleted;*/
				var text = '';
				if(s == 7){
					text = '已结束';
					return text;
				}else{
					if(s == 1){
						text = '未生效';
					}else if(s == 2){
						text = '未生效';
					}else if(s == 3){
						text = '已过期';
					}else if(s == 4){
						text = '未生效';
					}else if(s == 5){
						text = '生效中';
					}else if(s == 6){
						text = '已过期';
					}
					return text;
				}
				
			}
			
		},/*{
			field: 'activityRule',
			title: '优惠规则',
			width:'4%',
			formatter:function(value,row,index){
				var s;
				s = '<a name="see" href="javascript:void(0)" data-title="查看优惠规则" data-width="800" data-remote="actDetail.html" data-okEvent="changeLoansCard()">查看</a>';
				s = '<a class="query" name="see" href="javascript:void(0)">查看</a>';
				return s;
			},
			events: 'operateEvents'
		},*//*{
			field: 'channelNo',
			title: '投放渠道号',
			width:'4%'
		},
		{
			field: 'merchantNo',
			title: '成本承担方',
			width:'4%'
		},
		{
			field: 'marketBudget',
			title: '活动预算(元)',
			width:'4%',
			formatter:function(value){
				return amountFen2Yuan(value,2);
			}
		},*/
		{
			field: 'createDate',
			width:'6%',
			title: '创建时间'
		}
		,{
			field: 'createdBy',
			width:'5%',
			title: '创建人'
		}
		,{
			field: 'startTimes',
			width:'6%',
			title: '开始时间'
		}
		,{
			field: 'endTimes',
			width:'6%',
			title: '结束时间'
		}
		,{
			field: 'operation',
			title: '操作',
			width:'7%',
			formatter:function(value,row,index){
				var s = row.marketActivityStatus,a;
				/*var is =row.isDeleted;*/
				var text = '';
				if(s == 7){
					a = "<span >启用</span>"+" "+"<span>暂停</span>"+" "+"<span>结束</span>"+" "+"<span><a  href='create_activity.html?actId="+row.id+"&businessType="+row.businessType+"'>查看</span>";
				}else{
					if(s == 1){
						text = '未生效';
						a = "<a onclick=acti('"+row.id+"') >启用</a>"+" "+"<span>暂停</span>"+" "+"<a onclick=stop('"+row.id+"',0)  >结束</a>"+" "+"<span><a  href='create_activity.html?actId="+row.id+"&businessType="+row.businessType+"'>查看</a></span>";
					}else if(s == 2){
						text = '暂停';
						a = "<a onclick=acti('"+row.id+"')  >启用</a>"+" "+"<span>暂停</span>"+" "+"<a onclick=stop('"+row.id+"',0)  >结束</a>"+" "+"<span><a href='create_activity.html?actId="+row.id+"&businessType="+row.businessType+"'>查看</a></span>";
					}else if(s == 3){
						text = '已过期';
						a = "<span >启用</span>"+" "+"<span>暂停</span>"+" "+"<span>结束</span>"+" "+"<span><a  href='create_activity.html?actId="+row.id+"&businessType="+row.businessType+"'>查看</span>";
					}else if(s == 4){
						text = '未生效';
						a = "<span>启用</span>"+" "+"<span>暂停</span>"+" "+"<a onclick=stop('"+row.id+"',0)  >结束</a>"+" "+"<span><a href='create_activity.html?actId="+row.id+"&businessType="+row.businessType+"'>查看</a></span>";
					}else if(s == 5){
						text = '生效中';
						a = "<span>启用</span>"+" "+"<a onclick=stop('"+row.id+"',1)  >暂停</a>"+" "+"<a onclick=stop('"+row.id+"',0)  >结束</a>"+" "+"<span><a  href='create_activity.html?actId="+row.id+"&businessType="+row.businessType+"'>查看</span>";
					}else if(s == 6){
						text = '已过期';
						a = "<span>启用</span>"+" "+"<span>暂停</span>"+" "+"<span>结束</span>"+" "+"<span><a  href='create_activity.html?actId="+row.id+"&businessType="+row.businessType+"'>查看</span>";
					}
				}
				
				return a;
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
		search: false, //不显示 搜索框
		showColumns: false, //不显示下拉框（选择显示的列）
		escape:true,        //字符转义
		sidePagination: "server", //服务端请求
		queryParams: queryParams,
		responseHandler: responseHandler,
		url:"/market-mgr/market/queryActivity",
		//数据显示完毕后事件
		onLoadSuccess:function(data){
			//隐藏加载框
			$.loading.end();
			//初始化窗口函数
			$(".save").mzDialog();
			$(".refuse").mzDialog();
		},
		onLoadError:function(){
			$.loading.end();
		}
	});
	function queryParams(params) {
		var startTimes = '';
		if($("#startTime").val()){
			startTimes = $("#startTime").val()+" 00:00:00";
		}
		var endTimes = '';
		if($("#endTime").val()){
			endTimes = $("#endTime").val()+" 23:59:59";
		}
		var obj = {
			pageSize: params.limit,
			currentPage: params.offset / params.limit + 1 ,
			id: $.trim($("#activId").val()),
			marketActivityStatus:$.trim($("#status").val()),
			startTimes:startTimes,
			endTimes:endTimes,
			merchantNo:$('#merchantNo').val(),
			businessType:$.trim($("#billState").val()),
			activityName:$.trim($("#activityName").val()),
			distriType:$("#distriType").val()
		
		}
		//显示加载框
		$.loading.start();
		return obj;
	};

	function responseHandler(res) {
		if (res.code === "200") {
			return {
				"rows": res.data.list,
				"total": res.data.total
			};

		} else {
			return {
				"rows": [],
				"total": 0
			};
		}

	}

	$("#query").on("click",function(){
		var startTimes = $("#startTime").val()+" 00:00:00";
		var endTimes = $("#endTime").val()+" 23:59:59";
		var    st1 = new Date(startTimes.replace(/\-/g, "\/"));  
		  var    st2 = new Date(endTimes.replace(/\-/g, "\/"));
		if(st2<st1){
			alert("有效时间开始不能大于结束！");  
			  return;  
		}
		$('#querylist').bootstrapTable('refreshOptions',{pageNumber:1,pageSize:10});
	});
	  //重置
	$("#resets").on("click",function(){
		$("#mkt_mngForm")[0].reset();
		$("#query").click();
	});
	$("#startTime").datetimepicker({format: 'yyyy-mm-dd',language:'zh-CN',minView: "month"});
	$("#endTime").datetimepicker({format: 'yyyy-mm-dd',language:'zh-CN',minView: "month"});
	$("#btn_startTime").click(function(){
		$("#startTime").datetimepicker("show");
	});
	$("#btn_endTime").click(function(){
		$("#endTime").datetimepicker("show");
	});
});
 function acti(id){
	$.ajax({
			type:"POST",
			contentType: "application/json",
			data:JSON.stringify({
				'id':id
			}),
			url:'/market-mgr/market/activiteActivity',
			datatype:"JSON",
			success:function (data){
				if(data.code == 200){
					location.reload();
					alert('操作成功');
				}else{
					alert(data.msg);
				}
				
			},
			error:function(data){
				alert('操作失败');
			}
	});
}

function stop(id,stopOrDelete){
	var marketActivityStatus ,isDeleted;
	if(stopOrDelete==1){ //暂停
		marketActivityStatus = 1;	
	}else if(stopOrDelete==0){ //结束
		isDeleted = 1;
		
	}
	var con;
	if(stopOrDelete==0){
	con=confirm("活动结束后不可再次启动，确定结束本次活动吗？"); //在页面上弹出对话框
	}
	if(stopOrDelete==1){
		con=confirm("你确认要暂停此活动吗?"); //在页面上弹出对话框
		}
	if(con==true){
		$.ajax({
			type:"POST",
			contentType: "application/json",
			data:JSON.stringify({
				'id':id,
				'marketActivityStatus':marketActivityStatus,
				'isDeleted':isDeleted
			}),
			url:'/market-mgr/market/stopActivity',
			datatype:"JSON",
			success:function (data){
				location.reload();
				alert('操作成功');
			},
			error:function(data){
				alert('操作失败');
			}
		});		
	}

}
var data,type;

//回调函数
window.msgSubmit = function(){
	return true;
}
//窗口打开回调
window.openPanel = function(dat){
	if(data !== undefined){
		if(type === "1"){
			/*$("#receiveCode").val(data.receiveCardNo);
			$("#receiveBank").val(data.bankName);
			$("#merchantCode").val(data.merchantId);
			$("#amount").val(amountFen2Yuan(data.amount,2));*/
		}
	}
}

	//注册事件
	window.operateEvents = {
		'click .save': function (e, value, row, index) {
			//给数据赋值
			data = row;
			type = "1";
		}, 'click .refuse': function (e, value, row, index) {
			data = row;
			type = "2";
		}, 'click .query' :function(e, value, row, index){
			id = row.id;
			businessType = row.businessType;
			$("#change").click();
		}
	}

