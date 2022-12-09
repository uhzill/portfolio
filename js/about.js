$(document).ready( function() {

    // ABOUT ME 듀얼 슬라이드
    var Panels = (function() {

        var panelLeft = document.querySelector('.--left');
        var panelRight = document.querySelector('.--right');
        
        var openLeft = function() {
            panelLeft.classList.toggle('--left-active');
            panelRight.classList.toggle('--right-hidden');
        };
        
        var openRight = function() {
            panelRight.classList.toggle('--right-active');
            panelLeft.classList.toggle('--left-hidden');
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
