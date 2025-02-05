/*!
 * (c) @ajlkn
 *
 * main.js is used on all .html pages of the TIO website.
 * Used for breakpoints, page load animations, and mobile navigation panel.
 *
 * VSCode Dev Note:
 * Shift+Option+F (Mac) or Shift+Alt+F (Windows) to format code for readability.
 * When done editing, please minify code again to reduce file size!
 */
(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    wide: ["1281px", "1680px"],
    normal: ["961px", "1280px"],
    narrow: ["841px", "960px"],
    narrower: ["737px", "840px"],
    mobile: [null, "736px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Dropdowns.
  $("#nav > ul").dropotron({
    mode: "fade",
    speed: 350,
    noOpenerFade: true,
    alignment: "center",
  });

  // Button.
  $(
    '<div id="navButton">' +
      '<a href="#navPanel" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Panel.
  $('<div id="navPanel">' + "<nav>" + $("#nav").navList() + "</nav>" + "</div>")
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      target: $body,
      visibleClass: "navPanel-visible",
    });

  // Theme switcher display.
  $(window).on("load resize", function () {
    // Code to execute when the window is resized
    var t = $("#theme-switch-wrapper");
    var np = $("#navPanel");
    if ($(window).width() <= 736) {
      if (t.closest(np).length === 0) {
        np.append(t);
        t.css({ display: "block" });
      }
    } else {
      var pw = $("#page-wrapper");
      if (t.closest(pw).length === 0) {
        pw.append(t);
      }
    }
  });
})(jQuery);
