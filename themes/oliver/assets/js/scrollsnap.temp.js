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
        galleryImages[i].style.borderWidth = "0px";
        galleryImages[i].classList.remove("scrollsnap");
        if(galleryImages[i].offsetTop > (window.pageYOffset) > 0 && isElementInViewport(galleryImages[i]))
            viewportImages.push(galleryImages[i]);
    }
    
    var minTop = 9999;
    var candidate;
    for(var i = 0; i < viewportImages.length; i++) {
        var top = viewportImages[i].offsetTop;

        if(top > 0 && minTop > top) {
                    console.log(top);
            minTop = top;
            candidate = viewportImages[i];
        }
    }
    
    candidate.style.borderColor = "red";
    candidate.style.borderWidth = "5px";
    candidate.style.borderStyle = "solid";
    if(candidate.offsetTop - window.pageYOffset < (window.innerHeight / 2)) {
        candidate.classList.add("scrollsnap");
    }
        

};
