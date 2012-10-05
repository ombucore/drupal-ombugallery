(function ($) {
  Drupal.behaviors.ombuslide = {
    attach: function(context, settings) {
      for (var slideshow in settings.ombuslide) {
        if ($('#' + slideshow + ' ul.slides > li').length > 1) {
          var slides = $('#' + slideshow + ' ul.slides', context);
          slides.after('<div class="pager-wrapper"><div class="controls"><a href="#" class="prev">Previous</a><ul class="ombuslide-pager" id="' + slideshow + '-nav">');
          $('#' + slideshow + ' ul.ombuslide-pager', context).after('<a href="#" class="next">Next</a></div></div>');
          x = slides.cycle({
            timeout: 0,
            pager: '#' + slideshow + '-nav',
            next: '#ombuslide .next',
            prev: '#ombuslide .prev',
            width: 'auto',
            height: '430px',
            speed: '300',
            pagerAnchorBuilder: function(index, element) {
              return '<li class="' + index + '"><a href="#">' + (index + 1) + '</a></li>';
            }
          });
        }
      }
    }
  }
})(jQuery);
