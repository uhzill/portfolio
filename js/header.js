$(document).ready( function() {
        
    var toggle = true;

    // 햄버거 메뉴
    $("#menu").on("click", function () {
        if(toggle){
            toggle = false;
            $("header").css('top', '40vh');
            $("#wave").css('bottom', '64vh');
            $("header").css('boxShadow', '0px 0px 500px #0014cd');
        } else {
            toggle = true;
            $("header").css('top', '164vh');
        }
        $(this).toggleClass("active");

    });

});
