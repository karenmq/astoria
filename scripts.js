// FADE IN CONTENT
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var fades = $(".fade");

  for (var i = 0; i < fades.length; i++) {
    var fade = fades[i];
    if ($(fade).position().top < pageBottom) {
      $(fade).addClass("visible");
    } else {
      $(fade).removeClass("visible");
    }
  }
});














// COLLAPSIBLE
// var collapse = document.getElementsByClassName("collapsible");

// var n;

// for (n = 0; n < collapse.length; n++) {
//   collapse[n].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight) {
//         content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

