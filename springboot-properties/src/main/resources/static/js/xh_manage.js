
// 登陆验证
if(CheckEmpty(sessionStorage.Menu) == false){
       alert("请先登陆！");
       window.location.href = "login.html";
       //window.close();
       //window.open("login.html");
  }

$(function(){
	    // 左侧菜单导航
		$(".lnav-ti").live("click",function(){
			$(this).next("div").slideToggle("fast");
			var saveMenuOrder = $(".lnav-ti").index($(this));
			if(CheckEmpty(sessionStorage.MenuPick)){
				if(sessionStorage.MenuPick.indexOf(saveMenuOrder) == -1){
					sessionStorage.MenuPick = sessionStorage.MenuPick.toString() + saveMenuOrder.toString();
				}else{
					  sessionStorage.MenuPick = sessionStorage.MenuPick.replace(saveMenuOrder.toString(),"");
				  }
			}else{
				sessionStorage.MenuPick = saveMenuOrder.toString();
			 }			 
		});
		// 生成菜单标签
        var NavTag = GetUrlString("route");
            if(CheckEmpty(NavTag)){
        				$(".xh-conbox div."+NavTag).removeClass("n_one");
        				if(CheckEmpty(sessionStorage.RouteTag) == false){
        					   var FistRou = new Array();
        					       FistRou[0] = NavTag;
        					       OutTagHtml(FistRou,NavTag);
        					       sessionStorage.RouteTag = NavTag;
        		           }else{ 
        		           	       if(sessionStorage.RouteTag.indexOf(NavTag) == -1){
        		           	       	     sessionStorage.RouteTag = sessionStorage.RouteTag + "&" + NavTag;
        		           	       	     OutTagHtml(sessionStorage.RouteTag.split("&"),NavTag);
        		           	         }else{
        		                                 OutTagHtml(sessionStorage.RouteTag.split("&"),NavTag);
        		           	                   } 
        		           	      }
           }
        //关闭菜单标签
        $(".xh-navtag li span").click(function(){
        	   var Prou = $(this).parent().prev();
        	   var Nrou = $(this).parent().next();
        	   var ele = $(this).attr("title");
                   $(this).parent().addClass("n_one");
                   if(ele == NavTag){
            	       if(Prou.html() != undefined){
            	       	       sessionStorage.RouteTag = sessionStorage.RouteTag.replace("&"+ele,"");
            	       	       var Nurl = Prou.find("a").attr("href");
            	       	           window.location.href = Nurl;
                          }else if(Nrou.html() != undefined){
            	       	  	   sessionStorage.RouteTag = sessionStorage.RouteTag.replace(ele+"&","");
            	       	       var Nurl = Nrou.find("a").attr("href");
            	       	           window.location.href = Nurl;
            	       	    }else{    
            	       	    	      sessionStorage.RouteTag = "";
            	       	    	      window.location.href = "../index2.html";
                                  //window.location.href = "user_list.html?route=user-tab-0";
            	       	       }
                     }else{
                             if(Prou.html() != undefined){
                                  sessionStorage.RouteTag = sessionStorage.RouteTag.replace("&"+ele,"");
                               }else{
                                      sessionStorage.RouteTag = sessionStorage.RouteTag.replace(ele+"&","");
                                 }
                       }
        });
    // 退出登录
		$(".xh-outbtn").click(function(){
			var res = confirm("提示：确定要退出吗？");
			     if(res){
				      sessionStorage.Menu = "";
              window.location.href = "login.html";
				    }	
	    });
    
		
 });

// 初始化多选框
function IntCinput(){
    $("input").iCheck({
        checkboxClass: 'icheckbox_square-orange',
        radioClass: 'iradio_square-orange',
        increaseArea: '20%' // optional
     });
}

// layui时间选择模块初始化
function IntClayuidate(sev,eev){
    layui.use('laydate', function(){
              var laydate = layui.laydate;
              var start = {
                          min: '1987-01-01 00:00:00',
                          max: '2067-01-01 00:00:00',
                      istoday: false,
                       choose: function(datas){
                                  end.min = datas; //开始日选好后，重置结束日的最小日期
                                  end.start = datas; //将结束日的初始值设定为开始日
                              }
                         };
              var end = {
                        min: '1987-01-01 00:00:00',
                        max: '2067-01-01 00:00:00',
                    istoday: false,
                     choose: function(datas){
                                start.max = datas; //结束日选好后，重置开始日的最大日期
                             }
                      };
          $("#"+sev).click(function(){ 
               start.elem = this;
               laydate(start);
          });
          $("#"+eev).click(function(){
               end.elem = this
               laydate(end);
          });
  
       });
}