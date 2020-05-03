
var initialized  = false;
$.fn.isInViewport = function() {
var elementTop = $(this).offset().top;
var elementBottom = elementTop + $(this).outerHeight();
var viewportTop = $(window).scrollTop();
var viewportBottom = viewportTop + $(window).height();
return elementBottom > viewportTop && elementTop < viewportBottom;
};

window.onscroll = function() { 
    if(!initialized) {
        $(function() {
            $.scrollify({
            section : "figure img",
            updateHash: false,
            });
        });
        initialized = true;
    }
    
    var noneVisible = true;
    var p = $('p');
    p.each(function( index ) {
        if(index === p.length - 1)
            return;
        noneVisible = noneVisible && !$(this).isInViewport();
    });

    if(noneVisible) {
        if($.scrollify.isDisabled())
            $.scrollify.enable();
    } else {
        if(!$.scrollify.isDisabled())
            $.scrollify.disable();
    }

}
