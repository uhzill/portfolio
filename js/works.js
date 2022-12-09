$(document).ready( function() {

    // 프로젝트 소개
    $(".project_list").on("click", function () {

        $(this).find('.popup_box').addClass('active');
        $(this).find('.popup_box_wrap').css('zIndex','0');

    });

    $(".popup_button").on("click", function () {

        console.log("클릭");
        $(this).has('.popup_box').removeClass('active');
        $(this).has('.popup_box_wrap').css('zIndex','-1');

    });
   
});
