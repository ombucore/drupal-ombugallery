(function ($) {
  Drupal.behaviors.ombuslide = {
    attach: function(context, settings) {

      console.log('Responsive ombuslide in the house.')

      // On click handler for slide anchor links
      $('.ombuslide-responsive .slides-nav a').on('click', function(e) {

        // Get the container of this particular slideshow
        var container = $(this).closest('.ombuslide-responsive');

        // Get the index of the clicked slide in relation to its siblings
        var index = container.find('.slides-nav li').index($(this).parent());

        // Set the left position of the corresponding slide; transition rules
        // in the CSS file will handle the animation
        container.find('.slides').css('left', (index * -100) + '%');

        // Set this nav link to the active state and all others to inactive
        container.find('.slides-nav li').removeClass('active');
        $(this).parent().addClass('active');

	      e.preventDefault();
	      e.stopPropagation();
	      return false;
      });

      // Set the first slide link to active for each ombuslide
      $('.ombuslide-responsive .slides-nav li:first-child').addClass('active');

      // Swap in high-res images if screen size allows
      if (window.screen.width > 640) {

        $('.ombuslide-responsive .slide-image-inner').each(function () {

          // Get the URL of the high-res version
          var $img = $(this).find('img');
          var src_highres = $img.attr('data-highres');

          // If a high-res version has been provided...
          if (src_highres) {

            // ...load it into the image element (which is purposefully invisible in ombuslide-responsive)
            $img.attr('src', src_highres).bind('onreadystatechange load', function() {

              // When the image content has completed loading, swap it into the background to make it visible
              $(this).closest('.slide-image-inner').css('background-image','url(' + src_highres + ')');
            });
          }
        });
      }
    }
  }
})(jQuery);
