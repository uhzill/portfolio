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



    // ABOUT ME
    var Panels = (function() {

        var panelLeft = document.querySelector('.panels_side--left');
        var panelRight = document.querySelector('.panels_side--right');
        
        var openLeft = function() {
                panelLeft.classList.toggle('panels_side--left-active');
            panelRight.classList.toggle('panels_side--right-hidden');
        };
        
        var openRight = function() {
            panelRight.classList.toggle('panels_side--right-active');
            panelLeft.classList.toggle('panels_side--left-hidden');
        };
        
        var bindActions = function() {
            panelLeft.addEventListener('click', openLeft, false);
            panelRight.addEventListener('click', openRight, false);
        };
        
        var init = function() {
            bindActions();
        };
        
        return {
            init: init
        };
        
        }());
        
        Panels.init();

});