function setRem(){
        var clientWidth=$(window).width();
        var nowRem=(clientWidth/540*100);
        $("html").css("font-size",nowRem+"px");

    }
    setRem();
    $(function(){
        var timer;
        $(window).bind("resize",function(){
            clearTimeout(timer);
            timer=setTimeout(function(){
                setRem();
            }, 300)
        })
    });