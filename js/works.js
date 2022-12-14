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

});
