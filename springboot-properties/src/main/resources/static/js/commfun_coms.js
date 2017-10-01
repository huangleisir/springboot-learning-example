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
   return amount;
}

/**
 * 获取URL参数
 * @param name
 * @returns {null}
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null){
        return unescape(r[2]);
    }
    return null; //返回参数值
}

