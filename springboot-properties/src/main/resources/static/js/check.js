function checkMobile(mobile) 
   { 
       if(mobile.length==0) 
       { 
          alert('请输入手机号码！'); 
          return false; 
       }     
       if(mobile.length!=11) 
       { 
            
           return false; 
       } 
        
       var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
       if(!myreg.test(mobile)) 
       { 
           
           return false; 
       } 
       
       return true;
   }

function CheckUrl(str) { 
	var RegUrl = new RegExp(); 
	RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
	if (!RegUrl.test(str)) { 
		
	return false; 
	} 
	return true; 
}

function checkAmount(amt){
	var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
	return reg.test(amt);
	
}
function checkNumber(num){
	var r =/^[0-9]*[1-9][0-9]*$/;
	return r.test(num);
	
	
	

	
}
//判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型
function checkDateTime(str){
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
	return reg.test(str);
}
//判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型
function checkDate(str){
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
	return reg.test(str);
}
//金额格式化
function amountFen2Yuan(amount,_pow_){
	amount = amount/100;
	var amount_bak=amount;  
     var base=10;  
     if(isNaN(amount)){  
        //alert(amount+'必须为数字');  
        return 0.00;  
     }  
     if(isNaN(_pow_)){  
        //alert(_pow_+'必须为数字');  
        return;  
     }  
   amount = Math.round( ( amount - Math.floor(amount) ) *Math.pow(base,_pow_));  
   amount = amount<10 ? '.0' + amount : '.' + amount
   amount = Math.floor(amount_bak)+amount;
   return amount+"元";
}
//元转分  
function amountYuan2Fen(val){  
    return parseInt(100 * (val * 1000) / 1000);  
}