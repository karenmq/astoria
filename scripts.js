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
