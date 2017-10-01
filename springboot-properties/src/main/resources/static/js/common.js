/**
 * 公共JS
 * created by Fizz/gangheng.huang@jieshun.cn
 */

// 模块
var stringModule = {};
var httpModule = {};
var dateModule = {};

// 判断是否为空，有值返回ture，否则返回false
stringModule.checkEmpty = function(str) {
	if(str != "" && str != null && str != undefined) {
		return true;
	} else if(str == 0 && typeof(str) == "number") {
		return true;
	} else {
		return false;
	}
}

// 判断是否为营业执照编号
stringModule.checkLicenceCode = function(busCode) { // 430100400007489
	var ret = false;
	if(busCode.length == 15) {
		var sum = 0;
		var s = [];
		var p = [];
		var a = [];
		var m = 10;
		p[0] = m;
		for(var i = 0; i < busCode.length; i++) {
			a[i] = parseInt(busCode.substring(i, i + 1), m);
			s[i] = (p[i] % (m + 1)) + a[i];
			if(0 == s[i] % m) {
				p[i + 1] = 10 * 2;
			} else {
				p[i + 1] = (s[i] % m) * 2;
			}
		}
		if(1 == (s[14] % m)) {
			ret = {
				res: true,
				msg: "ok"
			}; // 营业执照编号正确!
		} else {
			ret = {
				res: false,
				msg: "请输入正确的营业执照编号"
			};
		}
	} else if(busCode == "") {
		ret = {
			res: false,
			msg: "请输入正确的营业执照编号"
		}; // 营业执照编号不能为空
	} else {
		ret = {
			res: false,
			msg: "格式不正确，营业执照号须为15位数字组成"
		};
	}
	return ret;
}
// 判断校验组织机构代码
stringModule.checkOrgCode = function(orgCode) {
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
stringModule.identityCodeValid = function(code){
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

// 获取相应的正则表达式
stringModule.regexpRule = function(type, str , tips) {
//	str = parseInt(str);
	var checkRes = {};
	var checkTips = "ok";
	switch(type) {
		case "must":
		    checkTips = /^\S+$/.test(str) ? checkTips : tips;
			checkRes = {result: /^\S+$/.test(str), warn: checkTips};
			break;
		case "mobile":
		    checkTips = /^1[3|4|5|7|8|9]\d{9}$/.test(str) ? checkTips : tips;
			checkRes = {result: /^1[3|4|5|7|8|9]\d{9}$/.test(str), warn: checkTips};
			break;
		case "email":
		    checkTips = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(str) ? checkTips : tips;
			checkRes = {result: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(str), warn: checkTips};
			break;
		case "license":
		    var licRes = stringModule.checkLicenceCode(str);
			checkRes = {result: licRes.res, warn: licRes.msg};
			break;
	    case "orgcode":
		    var orgRes = stringModule.checkOrgCode(str);
			checkRes = {result: orgRes.res, warn: orgRes.msg};
			break;
		case "bankcode":
		    checkTips = /^[0-9]{15,30}$/.test(str) ? checkTips : tips;
			checkRes = {result: /^[0-9]{15,30}$/.test(str), warn: checkTips};
			break;
		case "ident":
		    var ideRes = stringModule.identityCodeValid(str);
			checkRes = {result: ideRes.res, warn: ideRes.msg};
			break;
		case "number":
		    checkTips = /^\d+$/.test(str) ? checkTips : tips; // /^\d+$/
			checkRes = {result: /^\d+$/.test(str), warn: checkTips};
			break;
		case "name":
		    checkTips = /^[\u4e00-\u9fa5]+$/.test(str) ? checkTips : tips;
			checkRes = {result: /^[\u4e00-\u9fa5]+$/.test(str), warn: checkTips};
			break;
		case "cycle":
		    checkTips = /0|(^[1-9]+\d*$)/.test(str) ? checkTips : tips; // /^\d+$/
			checkRes = {result: /0|(^[1-9]+\d*$)/.test(str), warn: checkTips};
			break;
	}
	return checkRes;
}

// 设置调试主机地址
httpModule.setHostUrl = function() {
	var hostIp = ""; // 调试主机IP，不填默认当前主机地址和端口 http://10.101.130.212:18086/ http://10.101.130.31:30002/
	hostIp = hostIp == "" || hostIp == null || hostIp == undefined ? "http://" + location.hostname + ":" + location.port + "/" : hostIp;

	return hostIp;
//	return "http://10.101.130.8:30002/"

}

// jQuery的ajax方法，请求方式默认POST
httpModule.ajaxRequest = function(res) {
	if(stringModule.checkEmpty(res.name)) {
		var reqName = res.name; // 接口名称描述
	} else {
		var reqName = "";
	}
	var options = $.extend({
		type: "POST",
		url: "http://" + location.hostname + "/",
		data: {},
		dataType: "json",
		contentType: "application/json",
		async: true,
		success: function() {},
		error: function(err) {
			console.log(reqName + " → " + "状态码：" + err.status + " " + "状态描述：" + err.statusText);
		},
		complete: function() {}
	}, res);
	$.ajax({
		type: options.type,
		url: options.url,
		async: options.async,
		data: options.data,
		dataType: options.dataType,
		contentType: options.contentType,
		success: options.success,
		error: options.error,
		complete: options.complete
	});

}

// 获取url参数
httpModule.getUrlString = function(name){ 
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");     
     var r = window.location.search.substr(1).match(reg);     
         if(r!=null){
                return decodeURI(r[2]);
        }else{ 
                return "";
           }
}

// 时间显示格式化
dateModule.formatDate = function(oDate,sFormation){
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
dateModule.futureDate = function(n){
    var result = new Date;
    result.setFullYear(result.getFullYear () + n);
    return result;
}

//阿拉伯数字转换中文
stringModule.convertToChinese = function(num){
	var N = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
	var str = num.toString();
	var len = num.toString().length;
	var C_Num = [];
    for(var i = 0; i < len; i++){
        C_Num.push(N[str.charAt(i)]);
    }
	return C_Num.join('');
}
/**
 * 获取当前时间的前几天（日期）
 * @param n 间隔天数
 * @returns {string}
 */
dateModule.getBeforeDate = function(n){
	var date,year,month,day;
	if(n === 0){
		date = new Date();
	}else{
		var now = new Date();
		date = new Date(now.getTime() - n * 24 * 3600 * 1000);
	}
	year = date.getFullYear();
	month = date.getMonth() + 1;
	month = month < 10 ? "0" + month : month;
	var day = date.getDate();
	day = day < 10 ? "0" + day : day;
	return year + '-' + month + '-' + day;
}

/**
 * 公共JS
 * created by Fizz/gangheng.huang@jieshun.cn
 */

// 模块
var stringModule = {};
var httpModule = {};
var dateModule = {};

// 判断是否为空，有值返回ture，否则返回false
stringModule.checkEmpty = function(str) {
	if(str != "" && str != null && str != undefined) {
		return true;
	} else if(str == 0 && typeof(str) == "number") {
		return true;
	} else {
		return false;
	}
}

// 判断是否为营业执照编号
stringModule.checkLicenceCode = function(busCode) { // 430100400007489
	var ret = false;
	if(busCode.length == 15) {
		var sum = 0;
		var s = [];
		var p = [];
		var a = [];
		var m = 10;
		p[0] = m;
		for(var i = 0; i < busCode.length; i++) {
			a[i] = parseInt(busCode.substring(i, i + 1), m);
			s[i] = (p[i] % (m + 1)) + a[i];
			if(0 == s[i] % m) {
				p[i + 1] = 10 * 2;
			} else {
				p[i + 1] = (s[i] % m) * 2;
			}
		}
		if(1 == (s[14] % m)) {
			ret = {
				res: true,
				msg: "ok"
			}; // 营业执照编号正确!
		} else {
			ret = {
				res: false,
				msg: "请输入正确的营业执照编号"
			};
		}
	} else if(busCode == "") {
		ret = {
			res: false,
			msg: "请输入正确的营业执照编号"
		}; // 营业执照编号不能为空
	} else {
		ret = {
			res: false,
			msg: "格式不正确，营业执照号须为15位数字组成"
		};
	}
	return ret;
}
// 判断校验组织机构代码
stringModule.checkOrgCode = function(orgCode) {
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
stringModule.identityCodeValid = function(code){
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

// 获取相应的正则表达式
stringModule.regexpRule = function(type, str , tips) {
//	str = parseInt(str);
	var checkRes = {};
	var checkTips = "ok";
	switch(type) {
		case "must":
		    checkTips = /^\S+$/.test(str) ? checkTips : tips;
			checkRes = {result: /^\S+$/.test(str), warn: checkTips};
			break;
		case "mobile":
		    checkTips = /^1[3|4|5|7|8|9]\d{9}$/.test(str) ? checkTips : tips;
			checkRes = {result: /^1[3|4|5|7|8|9]\d{9}$/.test(str), warn: checkTips};
			break;
		case "email":
		    checkTips = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(str) ? checkTips : tips;
			checkRes = {result: /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(str), warn: checkTips};
			break;
		case "license":
		    var licRes = stringModule.checkLicenceCode(str);
			checkRes = {result: licRes.res, warn: licRes.msg};
			break;
	    case "orgcode":
		    var orgRes = stringModule.checkOrgCode(str);
			checkRes = {result: orgRes.res, warn: orgRes.msg};
			break;
		case "bankcode":
		    checkTips = /^[0-9]{15,30}$/.test(str) ? checkTips : tips;
			checkRes = {result: /^[0-9]{15,30}$/.test(str), warn: checkTips};
			break;
		case "ident":
		    var ideRes = stringModule.identityCodeValid(str);
			checkRes = {result: ideRes.res, warn: ideRes.msg};
			break;
		case "number":
		    checkTips = /^\d+$/.test(str) ? checkTips : tips; // /^\d+$/
			checkRes = {result: /^\d+$/.test(str), warn: checkTips};
			break;
		case "name":
		    checkTips = /^[\u4e00-\u9fa5]+$/.test(str) ? checkTips : tips;
			checkRes = {result: /^[\u4e00-\u9fa5]+$/.test(str), warn: checkTips};
			break;
		case "cycle":
		    checkTips = /0|(^[1-9]+\d*$)/.test(str) ? checkTips : tips; // /^\d+$/
			checkRes = {result: /0|(^[1-9]+\d*$)/.test(str), warn: checkTips};
			break;
	}
	return checkRes;
}

// 设置调试主机地址
httpModule.setHostUrl = function() {
	var hostIp = ""; // 调试主机IP，不填默认当前主机地址和端口 http://10.101.130.212:18086/ http://10.101.130.31:30002/
	hostIp = hostIp == "" || hostIp == null || hostIp == undefined ? "http://" + location.hostname + ":" + location.port + "/" : hostIp;

	return hostIp;
//	return "http://10.101.130.8:30002/"

}

// jQuery的ajax方法，请求方式默认POST
httpModule.ajaxRequest = function(res) {
	if(stringModule.checkEmpty(res.name)) {
		var reqName = res.name; // 接口名称描述
	} else {
		var reqName = "";
	}
	var options = $.extend({
		type: "POST",
		url: "http://" + location.hostname + "/",
		data: {},
		dataType: "json",
		contentType: "application/json",
		async: true,
		success: function() {},
		error: function(err) {
			console.log(reqName + " → " + "状态码：" + err.status + " " + "状态描述：" + err.statusText);
		},
		complete: function() {}
	}, res);
	$.ajax({
		type: options.type,
		url: options.url,
		async: options.async,
		data: options.data,
		dataType: options.dataType,
		contentType: options.contentType,
		success: options.success,
		error: options.error,
		complete: options.complete
	});

}

// 获取url参数
httpModule.getUrlString = function(name){ 
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");     
     var r = window.location.search.substr(1).match(reg);     
         if(r!=null){
                return decodeURI(r[2]);
        }else{ 
                return "";
           }
}

// 时间显示格式化
dateModule.formatDate = function(oDate,sFormation){
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
dateModule.futureDate = function(n){
    var result = new Date;
    result.setFullYear(result.getFullYear () + n);
    return result;
}

//阿拉伯数字转换中文
stringModule.convertToChinese = function(num){
	var N = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
	var str = num.toString();
	var len = num.toString().length;
	var C_Num = [];
    for(var i = 0; i < len; i++){
        C_Num.push(N[str.charAt(i)]);
    }
	return C_Num.join('');
}
/**
 * 获取当前时间的前几天（日期）
 * @param n 间隔天数
 * @returns {string}
 */
dateModule.getBeforeDate = function(n){
	var date,year,month,day;
	if(n === 0){
		date = new Date();
	}else{
		var now = new Date();
		date = new Date(now.getTime() - n * 24 * 3600 * 1000);
	}
	year = date.getFullYear();
	month = date.getMonth() + 1;
	month = month < 10 ? "0" + month : month;
	var day = date.getDate();
	day = day < 10 ? "0" + day : day;
	return year + '-' + month + '-' + day;
}

function commonAlert1(content,btnText){
	layer.open({
	  type: 1
	  ,area: 'auto' 
	  //,offset: '100px' //具体配置参考：offset参数项
	  ,content: '<div style="padding: 20px 80px;">'+content+'</div>'
	  ,btn: btnText
	  ,btnAlign: 'c' //按钮居中
	  ,shade: 0 //不显示遮罩
	  ,yes: function(){
	    layer.closeAll();
	  }
	});
}
function commonAlert2(content){
	layer.open({
		area: 'auto',
		content: '<div style="padding: 20px 80px;">'+content+'</div>',
		  yes: function(index, layero){
			  layer.closeAll(); 
			  $("#query").click();
		  }
	});
}

