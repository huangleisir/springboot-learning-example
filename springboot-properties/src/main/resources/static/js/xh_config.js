
// 基础配置
var MenuObj = JSON.parse(sessionStorage.Menu);   // 菜单列表
//  sessionStorage.RouteTag                      // 菜单标签缓存 


// 输出标签名
function OutTagName(tag){
	 switch(tag){
				case "user-tab-0":
				  return "会员列表";
				  break;
				case "user-tab-1":
				  return "子菜单2";
				  break;
				case "user-tab-2":
				  return "子菜单3";
				  break;
				case "admin-tab-0":
				  return "管理员列表";
				  break;
				case "admin-tab-1":
				  return "管理员设定";
				  break;
				case "admin-tab-2":
				  return "管理员角色";
				  break;
				case "acc-tab-0":
				  return "账户列表";
				  break;
				case "acc-tab-1":
				  return "冻结列表";
				  break;
                case "acc-tab-2":
				  return "交易明细";
				  break;
				case "acc-tab-3":
				  return "提现订单";
				  break;
				case "acc-tab-4":
				  return "充值订单";
				  break;
				case "shop-tab-0":
				  return "商户列表";
				  break;
				case "rove-tab-0":
				  return "商户审核";
				  break;
		 		case "bill-tab-0":
					 return "打款清单";
					 break;
				case "cash-tab-0":
				  return "会计科目";
				  break;
				case "cash-tab-1":
				  return "分录流水";
				  break;
				case "cash-tab-2":
				  return "分录事件";
				  break;
		   }
}


// 输出标签模板
function OutTagHtml(tagArr,cur){
	   	     var _tag = "";
	   	         for(var k=0;k<tagArr.length;k++){
	   	         	if(tagArr[k] == cur){
	   	         		Aclass = "nt_on";
	   	         	  }else{
                             Aclass = "";
	   	         	    }
	   	         	  _tag += "<li><a class='"+Aclass+"' href='"+tagArr[k].split("-")[0]+"_list.html?route="+tagArr[k]+"'>"+OutTagName(tagArr[k])+"</a><span class='"+tagArr[k]+"' title='"+tagArr[k]+"'>X</span></li>";

	           }
	         $(".xh-navtag").html(_tag);
}

