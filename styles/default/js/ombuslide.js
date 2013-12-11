(function ($) {
  Drupal.behaviors.ombuslide = {
    attach: function(context, settings) {

      // Process each ombuslide slideshow on page.
      for (var slideshow in settings.ombuslide) {

        // Get a handle to the slideshow.
        var $slides = $('#' + slideshow, context);

        // Only process slideshows that have one or more slides.
        if ($(' > li', $slides).length > 1) {

          // Get a handle to the slideshow container.
          var $slideshow = $slides.parent();

          var opts = Drupal.settings.ombuslide[slideshow];

          // Instantiate jQuery Cycle 2 plugin.
          $slides.cycle(opts)

          // Pause the slideshow if the user hovers clicks one of its elements.
          $slideshow.on('click', function() {
            $slides.cycle('pause');
          });
        }
      }
    }
  }
})(jQuery);
