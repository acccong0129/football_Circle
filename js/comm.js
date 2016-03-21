

window.onload = function(){

    // var myscroll = new iScroll("wrapper");
    

    //首页热点 关注切换
    $('.index a').on('click',function(){
    	if($(this).hasClass('indexHeaderAct')){
    		return;
    	}

    	switch($(this).index()){
    		case 0 :
    			window.location.href = "index_hot.html"
                break;
            case 1 :
				window.location.href = "index_att.html"
	            break;
    	}

    });


	//底部导航切换
    $('.menu a').tap(function(){
    	if($(this).hasClass('menuActive')){
    		return;
    	}

    	switch($(this).index()){
    		case 0 :
    			window.location.href = "index_hot.html"
                break;
            case 1 :
				window.location.href = "find.html"
	            break;
	        case 3 :
    			window.location.href = "user.html"
                break;
            case 4 :
				window.location.href = "login.html"
	            break;
    	}

    });

    //find页面搜索框聚焦键盘调出处理事件
    var hei = $(window).height();
    window.onresize = function(){
    	if($(window).height() < hei-20){
			$('footer').css('display','none')
    	}else if($(window).height() >= hei-10){
    		$('footer').css('display','block')
    	}
    };













}