$(document).ready( function() {

    // 프로젝트 소개 팝업창
    for(let i=1; i < 4; i++){
        $("#project_list" + i).click( function () {
            $('#popup_' + i).css('transform','scale(1)');
            $("body").css('overflow','hidden');
        });

        $("#pop_btn_" + i).click( function () {
            $('#popup_' + i).css('transform','scale(0)');
            $("body").css('overflow','auto');
        });
    }


    // 텍스트 오버 모션
    const container = document.querySelector(".container");

    document.body.addEventListener("mousemove", e => {
        const y = e.clientY;
        const top = $(".right_section").position().top;

        const lineText = y - top - 50 ;

        gsap.to(container, {
            y: lineText
        });
        gsap.to(".mask", {
            y: -lineText
        });
    });

});
