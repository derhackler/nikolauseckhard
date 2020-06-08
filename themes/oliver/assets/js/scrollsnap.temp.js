
var initialized  = false;
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function() { 
//     if(!initialized) {
//         $(function() {
//             $.scrollify({
//             section : "figure img",
//             updateHash: false,
//             interstitialSection: "header, p, .spacer"
//             });
//         });
//         initialized = true;
//     }
    
//     var noneVisible = true;
//     var p = $('p');
//     p.each(function( index ) {
//         if(index === p.length - 1)
//             return;
//         noneVisible = noneVisible && !$(this).isInViewport();
//     });
// 
//     if(noneVisible) {
//         if($.scrollify.isDisabled())
//             $.scrollify.enable();
//     } else {
//         if(!$.scrollify.isDisabled())
//             $.scrollify.disable();
//     }

}
