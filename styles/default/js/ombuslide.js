(function ($) {
  Drupal.behaviors.ombuslide = {
    attach: function(context, settings) {
      for (var slideshow in settings.ombuslide) {
        if ($('#' + slideshow + ' > li').length > 1) {
          // var $slideshow = $('#' + slideshow);
          var slides = $('#' + slideshow, context);

          console.log(slides);


          // slides.after('<div class="pager-wrapper"><div class="controls"><a href="#" class="prev">Previous</a><ul class="ombuslide-pager" id="' + slideshow + '-nav">');
          // $('#' + slideshow + ' ul.ombuslide-pager', context).after('<a href="#" class="next">Next</a></div></div>');
          var opts = Drupal.settings.ombuslide[slideshow];
          // opts.pager = '#' + slideshow + '-nav';
          // opts.pagerAnchorBuilder = function(index, element) {
          //     return '<li class="' + index + '"><a href="#">' + (index + 1) +
          //     '</a></li>';
          // }


          console.log(opts);

          slides.cycle(opts)
        }
      }
    }
  }
})(jQuery);
