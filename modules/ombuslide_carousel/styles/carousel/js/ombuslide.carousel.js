(function ($) {

  Drupal.behaviors.OmbuslideCarousel = {
    attach: function(context, settings) {
      generateHorizontalScrollAnchorLinks(context)
    }
  };

  function generateHorizontalScrollAnchorLinks(context) {
    $(context).find('.horizontal-scroll .anchor-links a').on('click', function(event) {

      // Prevent native behaviors
      event.preventDefault();
      event.stopPropagation();

      // Identify target
      container = $(this).closest('.horizontal-scroll').find('.horizontal-scroll-inner');
      target_id = $(this).attr('href');

      // Determine target scroll position
      position = container.scrollLeft() + parseInt($(target_id).closest('li').position().left);

      // Scroll window to target position
      container.animate({
        scrollLeft: position + 'px',
      });

      // Set active class on the link that got us here
      $(this).closest('.anchor-links-list').find('li').removeClass('active');
      $(this).parent().addClass('active');

    });
  }

})(jQuery);
