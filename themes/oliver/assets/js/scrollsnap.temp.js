function isElementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

window.onscroll = function() {
    var galleryImages = document.querySelectorAll("figure img");
    var viewportImages =[];
    for (var i = 0; i < galleryImages.length; i++) {
//        galleryImages[i].style.borderWidth = "0px";
//        galleryImages[i].classList.remove("scrollTransition");
        if(isElementInViewport(galleryImages[i]))
            viewportImages.push(galleryImages[i]);
        else {
                galleryImages[i].style.position = "relative";
                galleryImages[i].style.top = "0px";
        }
           
    }
    
    var maxTop = 0;
    var candidate = null;
    for(var i = 0; i < viewportImages.length; i++) {
        var top = viewportImages[i].offsetTop;

        if((top - window.pageYOffset) > 0 && maxTop < top) {
            maxTop = top;
            candidate = viewportImages[i];
        }
    }
    
    
    if(candidate !== null && candidate.style.position !== "sticky" && (candidate.offsetTop - window.pageYOffset) < (window.innerHeight / 2)) {
        var snappingImages = document.querySelectorAll("figure img");    
         for (var i = 0; i < snappingImages.length; i++) {
             if(snappingImages[i].style.position === "sticky") {
//                snappingImages[i].style.position = "relative";
                snappingImages[i].style.top = "-100vh";
             } 
         }


//         candidate.style.borderColor = "red";
//         candidate.style.borderWidth = "5px";
//         candidate.style.borderStyle = "solid";
         candidate.style.position = "sticky";
         candidate.style.top = "80px";
        
    }
};
