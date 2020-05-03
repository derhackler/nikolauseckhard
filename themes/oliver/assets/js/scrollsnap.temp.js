function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

window.onscroll = function() {
    
    var galleryImages = document.querySelectorAll("figure img");
    var viewportImages =[];
    for (var i = 0; i < galleryImages.length; i++) {
//        galleryImages[i].style.borderWidth = "0px";
//        galleryImages[i].classList.remove("scrollTransition");
        if(isElementInViewport(galleryImages[i])) {
            viewportImages.push(galleryImages[i]);
            galleryImages[i].style.borderWidth = "0px";
        }
        else {
            galleryImages[i].classList.remove("sticky");
//             galleryImages[i].classList.remove("relative");
        }
           
    }
    console.log(viewportImages.length);
    
    if(viewportImages.length == 1) {
        viewportImages[0].classList.add("sticky");
    } else {
    
        var lower = null;
        var maxTop = 0;

        for(var i = 0; i < viewportImages.length; i++) {
            var top = viewportImages[i].getBoundingClientRect().top;

            if(maxTop < top) {
                maxTop = top;
                lower = viewportImages[i];
            }
        }
    
//     var lower = null;
//     var minTop = 99999;
//     
//     for(var i = 0; i < viewportImages.length; i++) {
//         var top = viewportImages[i].getBoundingClientRect().top;
// 
//         if(minTop > top) {
//             minTop = top;
//             lower = viewportImages[i];
//         }
//     }

        
//         if(lower != null) {
//         lower.style.borderWidth = "5px";
//         lower.style.borderColor = "red";
//         lower.style.borderStyle = "solid";
//         }
        
        if(lower !== null && (lower.getBoundingClientRect().top < (window.innerHeight - 160))) {
                  for (var i = 0; i < viewportImages.length; i++) {
                    if(viewportImages[i].classList.contains("sticky")) {
                        viewportImages[i].classList.remove("sticky");
                        viewportImages[i].classList.add("relative");
                    }
              
                }
                lower.classList.remove("relative");
                lower.classList.add("sticky");
//                 setTimeout(2000, function() { lower.classList.remove("fixed"); lower.classList.add("sticky"); });
              
        }
    }
};
