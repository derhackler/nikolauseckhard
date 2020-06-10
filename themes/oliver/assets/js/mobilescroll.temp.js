// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  let projects = [];
  {{ range where site.RegularPages "Type" "in" site.Params.mainSections }}
      {{ $imgpath := path.Join .File.Dir .Params.image }}
      {{ $contentid := .File.UniqueID }}
      projects.push('{{$contentid}}');
  {{ end }}

  let elements = projects.length;
  let totalHeight = document.querySelector("body").scrollHeight;
  let windowHeight = window.screen.height;
  let maxScrollDistance = totalHeight - windowHeight;
  let changeInIntervalsOf = maxScrollDistance / elements;
  let showProjectPos = Math.floor(scroll_pos / changeInIntervalsOf);
  
  console.log(scroll_pos);
  console.log(changeInIntervalsOf);
  console.log("show position: ", showProjectPos);
  if(showProjectPos !== 0){
    console.log("show image", projects[showProjectPos - 1] );
    // hide the existing background content
    let bgcontent = document.querySelector(`.show-as-background`);
    if(bgcontent){
      bgcontent.classList.remove("show-as-background");
    }

    // show the new one
    let newbgcontent = document.querySelector(`#background-for-${projects[showProjectPos - 1]}`);
    if(newbgcontent){
      newbgcontent.classList.add("show-as-background");
    }

  }
  
}


if (("ontouchstart" in document.documentElement)) {
    console.log("touch device");
    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;
      
        if (!ticking) {
          window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
          });
      
          ticking = true;
        }
      });
}
