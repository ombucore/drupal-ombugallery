(function ($) {
  Drupal.behaviors.ombuslide = {
    attach: function(context, settings) {
      for (var slideshow in settings.ombuslide) {
        if ($('#' + slideshow + ' ul.slides > li').length > 1) {
          var slides = $('#' + slideshow + ' ul.slides', context);
          slides.after('<a href="#" class="prev">Previous</a><ul class="pager" id="' + slideshow + '-nav">');
          $('#' + slideshow + ' ul.pager', context).after('<a href="#" class="next">Next</a>');
          slides.cycle({
            timeout: 0,
            pager: '#' + slideshow + '-nav',
            next: '#ombuslide .next',
            prev: '#ombuslide .prev',
            pagerAnchorBuilder: function(index, element) {
              return '<li class="' + index + '"><a href="#">' + (index + 1) + '</a></li>';
            }
          });
        }
      }
    }
  }
})(jQuery);
