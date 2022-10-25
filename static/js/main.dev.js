"use strict";

(function ($) {
  $(document).ready(function () {
    var frontend = $('body.frontend');

    if (frontend.length > 0) {
      var header = $('header');
      var main = $('main');
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
          header.addClass('fixed');
          main.css('margin-top', parseInt(header.css('height')));
        } else {
          header.removeClass('fixed');
          main.css('margin-top', 0);
        }
      });
    }
  });
})(jQuery);