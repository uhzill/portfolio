$(document).ready( function() {
    
    var toggle = true;

    // 햄버거 메뉴
    $("#menu").on("click", function () {
        if(toggle){
            toggle = false;
            $("#wave_blue").css('top', '-20vh');
            $("nav").css('bottom', '-10vh');
            $(".hamburgerBtn span").css('backgroundColor','var(--color)');
        } else {
            toggle = true;
            $("#wave_blue").css('top', '100vh');
            $("nav").css('bottom', '-100vh');
            if($('body').css('backgroundColor') == 'rgb(49, 68, 243)'){
                $('hamburgerBtn span').css('backgroundColor','rgb(255, 255, 255)');
            } else {
                $(".hamburgerBtn span").css('backgroundColor','rgb(49, 68, 243)');
            }
        }
        $(this).toggleClass("active");

    });

});
