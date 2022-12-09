$(document).ready( function() {

    // 프로젝트 소개
    $(".project_text").on("click", function () {

        console.log("클릭");
        $('.popup_box').addClass('active');
        $('.popup_box_wrap').css('zIndex','0');

    });
   
});
