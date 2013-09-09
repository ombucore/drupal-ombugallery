(function ($) {
//   Drupal.behaviors.ombuslide = {
//     attach: function(context, settings) {

    $(document).on('ready', function() {

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
    });
  // }
})(jQuery);
