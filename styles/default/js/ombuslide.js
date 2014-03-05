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

          // Pause the slideshow if the user clicks or hovers anywhere inside
          // its container element.
          $slideshow.on('click mouseover', function() {
            $slides.cycle('pause');
          });

          // Resize the iframe on load and when the browse window is resized.
          $(window).on('resize', function() {
            resizeVideo($slideshow, $slideshow.find('.file-video iframe'))
          });

          resizeVideo($slideshow, $slideshow.find('.file-video iframe'))
        }
      }
    }
  }

  function resizeVideo($container, $video) {
    var aspectRatio = $video.attr('height') / $video.attr('width');
    var newWidth = $container.width();
    var newHeight = newWidth * aspectRatio;
    $video.attr('width', newWidth);
    $video.attr('height', newHeight);
  }
})(jQuery);
