// JavaScript Document


// 验证码倒计时
function TimeDown(o,t) {
        if (t == 0) {  
            o.removeAttribute("disabled");            
            o.value="获取验证码";  
            t = 60;  
         } else {  
            o.setAttribute("disabled", true);  
            o.value="(" + t + "秒)重新获取";  
            t--;  
            setTimeout(function(){TimeDown(o,t);},1000);  
        }  
 } 


// 验证必要条件执行事件
function CheckTogether(a,b){
           var resCount = 0;
               for(var t=0;t<a.length;t++){
                     if(a[t]){
                           resCount += 1;
                       }  
               }
         if(resCount == a.length){
             switch(b.ev){
                   case "disabled":
                      document.getElementById(b.id).removeAttribute("disabled");
                      break;
               }  
           }
 }
 
 // 输入事件
 function Oninputing(eid,func){
       document.getElementById(eid).oninput = func;
}

// 获取url参数
function GetUrlString(name){ 
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");     
     var r = window.location.search.substr(1).match(reg);     
         if(r!=null){
                return decodeURI(r[2]);
        }else{ 
                return "";
           }
    }

// 检测值是否为空
function CheckEmpty(val){
  if(val == "" || val == null || val == undefined){
      return false;
    }else{
          return true;
      }
}

// 赋值为空字符串
function AssignEmptyVal(str){
  if(str == "" || str == null || str == undefined){
      return "";
    }else{
        return str;
     }
}

// 检验数据格式
function CustomCheckData(eid,etype,btn,successfunc,errfunc){
    var regs = {   
                     "must": /^\S+$/,                             // 必输(不允许空格)
                   "mobile": /^1[3|4|5|7|8|9]\d{9}$/,             // 手机号码
                    "email": /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,   // 邮箱
                 "bankcode": /^[0-9]{15,19}$/,                    // 银行卡号码
                     "name": /^[\u4e00-\u9fa5]+$/,                // 姓名
                 };
    var errs = {
                   "mobile": "<span class='fc-red'>请输入正确的手机号码</span>",              // 手机号码
                    "email": "<span class='fc-red'>请输入正确的邮箱账号</span>",              // 邮箱
                     "name": "<span class='fc-red'>请输入正确的姓名</span>",                  // 用户姓名
              "free_mobile": "<span class='fc-gray'>请输入正确的手机号码</span>",             // 手机号码
               "free_email": "<span class='fc-gray'>请输入正确的邮箱账号</span>",             // 邮箱
                "free_name": "<span class='fc-gray'>请输入正确的姓名</span>",                 // 用户姓名
                 "bankcode": "<span class='fc-red'>请输入正确的银行卡号</span>",              // 银行卡号码
                       "ok": "<span class='fc-green'>ok</span>",                              // 成功提示
                 };
    var counts = 0;  
    if(etype == "xh-blur"){
        $("#"+eid+" .xh-forminp").live("blur",function(){
           var DataType = $(this).attr("datatype");
           var DataVal = $(this).val();
           var ret = false;
               switch(DataType){
                  case "must":
                     if(regs.must.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                        $(this).removeClass("bor_red");
                        $(this).attr("datares","pass");
                      }else{
                            $(this).parent().next().html("<span class='fc-red'>"+$(this).attr("errinfo")+"</span>");
                            $(this).addClass("bor_red");
                            $(this).attr("datares","lock");
                       }
                     break;
                  case "free":
                     if(regs.must.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                      }else{
                          $(this).parent().next().html("<span class='fc-gray'>"+$(this).attr("misinfo")+"</span>");
                      }
                     break;
                  case "free_name":
                     if(regs.name.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                      }else{
                            $(this).parent().next().html(errs.free_name);
                       }
                     break;
                  case "free_mobile":
                     if(regs.mobile.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                      }else{
                            $(this).parent().next().html(errs.free_mobile);
                       }
                     break;
                  case "free_email":
                     if(regs.email.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                      }else{
                            $(this).parent().next().html(errs.free_email);
                       }
                     break;
                  case "mobile":
                     if(regs.mobile.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                        $(this).removeClass("bor_red");
                        $(this).attr("datares","pass");
                      }else{
                            $(this).parent().next().html(errs.mobile);
                            $(this).addClass("bor_red");
                            $(this).attr("datares","lock");
                       }
                     break;
                  case "email":
                     if(regs.email.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                        $(this).removeClass("bor_red");
                        $(this).attr("datares","pass");
                      }else{
                            $(this).parent().next().html(errs.email);
                            $(this).addClass("bor_red");
                            $(this).attr("datares","lock");
                       }
                     break;
                  case "licence":
                         ret = CheckLicenceCode(DataVal);
                         if(ret.res){
                            $(this).parent().next().html(errs.ok);
                            $(this).removeClass("bor_red");
                            $(this).attr("datares","pass");
                          }else{
                                $(this).parent().next().html("<span class='fc-red'>"+ret.msg+"</span>");
                                $(this).addClass("bor_red");
                                $(this).attr("datares","lock");
                           }
                     break;
                  case "timearea":
                     var timeareares = false;
                     var otherInp = $(this).siblings(".xh-forminp");
                     if(regs.must.test(DataVal)){
                        $(this).removeClass("bor_red");
                        $(this).attr("datares","pass");
                        timeareares = true;
                      }else{
                            $(this).parent().next().html("<span class='fc-red'>"+$(this).attr("errinfo")+"</span>");
                            $(this).addClass("bor_red");
                            $(this).attr("datares","lock");
                            timeareares = false;
                       }
                       for(var t=0;t<otherInp.length;t++){
                            if(regs.must.test(otherInp.eq(t).val())){
                              otherInp.eq(t).removeClass("bor_red");
                              otherInp.eq(t).attr("datares","pass");
                            }else{
                                  $(this).parent().next().html("<span class='fc-red'>"+$(this).attr("errinfo")+"</span>");
                                  otherInp.eq(t).addClass("bor_red");
                                  otherInp.eq(t).attr("datares","lock");
                                  timeareares = false;
                             }
                      }
                      if(timeareares){$(this).parent().next().html(errs.ok);}
                     break;
                  case "orgcode":
                         ret = CheckOrgCode(DataVal);
                         if(ret.res){
                            $(this).parent().next().html(errs.ok);
                            $(this).removeClass("bor_red");
                            $(this).attr("datares","pass");
                          }else{
                                $(this).parent().next().html("<span class='fc-red'>"+ret.msg+"</span>");
                                $(this).addClass("bor_red");
                                $(this).attr("datares","lock");
                           }
                     break;
                  case "bankcode":
                     if(regs.bankcode.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                        $(this).removeClass("bor_red");
                        $(this).attr("datares","pass");
                      }else{
                            $(this).parent().next().html(errs.bankcode);
                            $(this).addClass("bor_red");
                            $(this).attr("datares","lock");
                       }
                     break;
                  case "name":
                     if(regs.name.test(DataVal)){
                        $(this).parent().next().html(errs.ok);
                        $(this).removeClass("bor_red");
                        $(this).attr("datares","pass");
                      }else{
                            $(this).parent().next().html(errs.name);
                            $(this).addClass("bor_red");
                            $(this).attr("datares","lock");
                       }
                     break;
                  case "ident":
                         ret = IdentityCodeValid(DataVal);
                         if(ret.res){
                            $(this).parent().next().html(errs.ok);
                            $(this).removeClass("bor_red");
                            $(this).attr("datares","pass");
                          }else{
                                $(this).parent().next().html("<span class='fc-red'>"+ret.msg+"</span>");
                                $(this).addClass("bor_red");
                                $(this).attr("datares","lock");
                           }
                     break;
                  case "free":
                    break;
                      default:
               }
         });
        $("#"+btn).live("click",function(){
            var resArr = $("#"+eid+" .xh-forminp");
            var resTag = true;
                for(var t=0;t<resArr.length;t++){
					console.log(resArr.eq(t).attr("datares"));
                    if(resArr.eq(t).attr("datares") == "lock"){
                        resArr.eq(t).addClass("bor_red");
                        resArr.eq(t).parent().next().find("span").attr("class","fc-red");
                        $("html,body").animate({scrollTop:resArr.eq(t).parents(".xh-ulbox").offset().top},500,function(){resArr.eq(t).focus()});
                        resTag = false;
                        break;
                     }
                }
                if(resTag){//resTag
                  successfunc(resTag);
                }else{
                    errfunc(resTag);
                }
        }); 
    }
}

// 校验企业营业执照号
function CheckLicenceCode(busCode){    // 430100400007489
        var ret=false;
        if(busCode.length==15){
            var sum=0;
            var s=[];
            var p=[];
            var a=[];
            var m=10;
            p[0]=m;
            for(var i=0;i<busCode.length;i++){
               a[i]=parseInt(busCode.substring(i,i+1),m);
               s[i]=(p[i]%(m+1))+a[i];
               if(0==s[i]%m){
                 p[i+1]=10*2;
               }else{
                 p[i+1]=(s[i]%m)*2;
                }    
            }                                       
            if(1==(s[14]%m)){
               ret = {res:true,msg:"ok"};  //营业执照编号正确!
            }else{
                ret = {res:false,msg:"请输入正确的营业执照编号"};
             }
        }else if(busCode == ""){
            ret = {res:false,msg:"请输入正确的营业执照编号"};// 营业执照编号不能为空
          }else{
            ret = {res:false,msg:"格式不正确，营业执照号须为15位数字组成"};
          }
        return ret;
}

// 校验组织机构代码
function CheckOrgCode(orgCode){
    // 05230317-7 X3203231-4
   var ret=false;
   var codeVal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   var intVal =    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
   var crcs =[3,7,9,10,5,8,4,2];
   if(!(""==orgCode) && orgCode.length==10){
      var sum=0;
      for(var i=0;i<8;i++){
         var codeI=orgCode.substring(i,i+1);
         var valI=-1;
         for(var j=0;j<codeVal.length;j++){
             if(codeI==codeVal[j]){
                valI=intVal[j];
                break;
             }
         }
         sum+=valI*crcs[i];
      }
      var crc=11- (sum%11);
               
      switch (crc){
                   case 10:{
                       crc="X";
                       break;
                   }
                   default:{
                       break;
                   }
               }
      if(crc==orgCode.substring(9)){
                   ret={res:true,msg:"ok"};
      }else{
                    ret={res:false,msg:"请输入正确的组织机构代码"};
               }
   }else if(orgCode == ""){
       ret={res:false,msg:"请输入正确的组织机构代码"};
   }else{
                ret={res:false,msg:"格式不正确，必须为8位数字或大写字母+“-”+1位校验码"};//格式不正确，组织机构代码为8位数字或者拉丁字母+“-”+1位校验码，并且字母必须大写
        }
   return ret;
}

// 身份证号码验证
function IdentityCodeValid(code){ 
  var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
  var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]; //加权因子
  var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];  //校验位
  var pass= {res:true,msg:"ok"};
  if(code.length == 15){
     code = code.substring(0,6) + "19" + code.substring(6,15);
     var ocode = code.split('');
     var osum = 0;
     for (var i = 0; i < 17; i++){
        osum += ocode[i] * factor[i];
      }
     code = code + (parity[osum % 11]).toString();
  }
  if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
    pass = {res:false,msg:"请输入正确的身份证号码"}; // 身份证号格式错误
   }else if(!city[code.substr(0,2)]){
      pass = {res:false,msg:"请输入正确的身份证号码"}; // 地址编码错误
     }else{
    //18位身份证需要验证最后一位校验位
    if(code.length == 18){
      code = code.split('');
      var sum = 0;
      for (var i = 0; i < 17; i++){
        sum += code[i] * factor[i];
      }
      if(parity[sum % 11] != code[17]){
        pass = {res:false,msg:"请输入正确的身份证号码"}; // 校验位错误
      }
    }
  }
  return pass;
}

// 时间显示格式化
function CustomFormatDate(oDate,sFormation){
    var obj = {
        yyyy:oDate.getFullYear(),
        yy:(""+ oDate.getFullYear()).slice(-2),
        M:oDate.getMonth()+1,
        MM:("0"+ (oDate.getMonth()+1)).slice(-2),
        d:oDate.getDate(),
        dd:("0" + oDate.getDate()).slice(-2),
        H:oDate.getHours(),
        HH:("0" + oDate.getHours()).slice(-2),
        h:oDate.getHours() % 12,
        hh:("0"+oDate.getHours() % 12).slice(-2),
        m:oDate.getMinutes(),
        mm:("0" + oDate.getMinutes()).slice(-2),
        s:oDate.getSeconds(),
        ss:("0" + oDate.getSeconds()).slice(-2),
        w:['日', '一', '二', '三', '四', '五', '六'][oDate.getDay()]
    };
    return sFormation.replace(/([a-z]+)/ig,function($1){return obj[$1]});
}

// 计算未来N年的时间
function FutureDate(n){
    var now = new Date;
    now.setFullYear(now.getFullYear () + n);
    return now;
}