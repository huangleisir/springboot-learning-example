(function ($) {
    $.fn.mzDialog = function () {
        var defaults={
            id:"modal",//弹窗id
            title:"dialog",//弹窗标题
            width:"600",//弹窗宽度，暂时不支持%
            //height:"250",//弹窗高度,不支持%
            backdrop:false,//是否显示遮障，和原生bootstrap 模态框一样
            keyboard:true,//是否开启esc键退出，和原生bootstrap 模态框一样
            remote:"",//加载远程url，和原生bootstrap 模态框一样
            message:"正在加载...", //显示内容
            openEvent:null,//弹窗打开后回调函数
            closeEvent:null,//弹窗关闭后回调函数
            okEvent:null//单击确定按钮回调函数
        };

        //动态创建窗口
        var creatDialog={
            init:function(opts){
                var _self=this;
                //动态插入窗口
                var d=_self.dHtml(opts);
                /*if($("#"+opts.id).html() === undefined){
                   // $("body").append(d);
                }*/
                $("body").append(d);
                var modal=$("#"+opts.id);

                //初始化窗口
                modal.modal(opts);
                //窗口大小位置
                //var h=modal.height()-modal.find(".modal-header").outerHeight()-modal.find(".modal-footer").outerHeight()-5;
                var marLeft = 0;
                if(opts.width > 600){
                    marLeft = opts.width/2 *- 1.0;
                }else{
                    marLeft = opts.width/2 *- 0.9;
                }
                modal.css({'margin-left':marLeft,'margin-top':opts.height/2*-1})/*.find(".modal-body").innerHeight(h)*/;
                modal.modal('show') //显示窗口
                     //隐藏窗口后删除窗口html
                    .on('hidden', function () {
                        modal.remove();
                        $(".modal-backdrop").remove();
                        if(opts.closeEvent){
                            eval(opts.closeEvent);
                        }
                    })
                    //窗口显示后
                    .on('shown', function () {
                        eval(opts.openEvent);
                        //绑定按钮事件
                        $(this).find("#okBtn").click(function(){
                            if(opts.okEvent){
                                var ret=eval(opts.okEvent);
                                if(ret){
                                    modal.modal('hide');
                                }
                            }
                        });
                    });
            },
            dHtml:function(o){
                var str = '<div id="'+o.id+'" class="modal hide fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false" style="width:'+o.width+'px;">';
                str += '<div class="modal-dialog"><div class="modal-content">';
                str += '<div class="modal-header">';
                str +='<button type="button" class="close" data-dismiss="modal"aria-hidden="true">&times</button>';
                str +='<h3 id="myModalLabel">'+o.title+'</h3></div>';
                str +='<div class="modal-body"><p>'+o.message +'</p></div>';
                str +='<div class="modal-footer">';
                str +='<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>';
                str +='<button class="btn btn-success" id="okBtn">确定</button></div></div>';
                str += '</div></div>';
                return str;
            }
        };

        return this.each(function () {
            $(this).click(function(){
                var opts = $.extend({},defaults,{
                    id:$(this).attr("data-id"),
                    title:$(this).attr("data-title"),
                    width:$(this).attr("data-width"),
                    height:$(this).attr("data-height"),
                    backdrop:$(this).attr("data-backdrop"),
                    keyboard:$(this).attr("data-keyboard"),
                    remote:$(this).attr("data-remote"),
                    message:$(this).attr("data-message"),
                    openEvent:$(this).attr("data-openEvent"),
                    closeEvent:$(this).attr("data-closeEvent"),
                    okEvent:$(this).attr("data-okEvent")
                });
                creatDialog.init(opts);
            });
        });
    };
})(jQuery);