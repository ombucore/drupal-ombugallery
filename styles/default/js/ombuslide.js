(function ($) {
  Drupal.behaviors.ombuslide = {
    attach: function(context, settings) {

      // Process each ombuslide slideshow on page.
      for (var slideshow in settings.ombuslide) {

        // Only process slideshows that have one or more slides.
        if ($('#' + slideshow + ' > li').length > 1) {
          var slides = $('#' + slideshow, context);
          var opts = Drupal.settings.ombuslide[slideshow];

          // Instantiate jQuery Cycle 2 plugin.
          slides.cycle(opts)
        }
      }
    }
  }
})(jQuery);
