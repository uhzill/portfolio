$(document).ready( function() {
    
    $(".ripples").ripples({
        resolution: 256, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
        perturbance: 0.5, // 잔물경 굴절 강도. 0은 굴절 없음
    });


    $(".water_drop").click( function () {
        $('').toggleClass('active');
    });

});