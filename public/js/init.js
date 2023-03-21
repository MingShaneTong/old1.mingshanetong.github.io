jQuery(document).ready(function($) {
  var time = 300;
  setTimeout(function() {
    $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });

    $(".smoothscroll").on("click", function(e) {
      var target = $(this).data('anchor'),
        $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top
          },
          800,
          "swing"
        );
    });

    $(window).on("scroll", function() {
      var h = $("header#home").height();
      var y = $(window).scrollTop();
      var nav = $("#nav-wrap");
      var upButton = $("#scrollup-button");

      if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut("fast");
        upButton.fadeOut("fast");
      } else {
        if (y < h * 0.2) {
          nav.removeClass("opaque").fadeIn("fast");
        } else {
          nav.addClass("opaque").fadeIn("fast");
          upButton.fadeIn("fast");
        }
      }
    });
  }, time);
});
