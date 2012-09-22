(function($) {

  theme = {


    /* Initial Placement
       ----------------------------*/
    _init: function() {

      /* Navigation Items
         ----------------------------*/
      $(vars.next_slide).click(function() {
        api.nextSlide();
      });

      $(vars.prev_slide).click(function() {
        api.prevSlide();
      });

      // Full Opacity on Hover
      if (jQuery.support.opacity) {
        $(vars.prev_slide + ',' + vars.next_slide).mouseover(function() {
          $(this).stop().animate({opacity: 1},100);
        }).mouseout(function() {
          $(this).stop().animate({opacity: 0.6},100);
        });
      }

    },


    /* Before Slide Transition
       ----------------------------*/
    beforeAnimation: function(direction) {

      /* Update Fields
         ----------------------------*/
      // Update slide caption
      if ($(vars.slide_caption).length) {
        (api.getField('title')) ?
          $(vars.slide_caption).html(api.getField('title')) :
          $(vars.slide_caption).html('');
      }
      // Update slide number
      if (vars.slide_current.length) {
        $(vars.slide_current).html(vars.current_slide + 1);
      }
    }

  };


  /* Theme Specific Variables
     ----------------------------*/
  $.supersized.themeVars = {

    // Internal Variables
    progress_delay: false,    // Delay after resize before resuming slideshow
    thumb_page: false,        // Thumbnail page
    thumb_interval: false,        // Thumbnail interval
    image_path: 'img/',        // Default image path

    // General Elements
    next_slide: '#nextslide',    // Next slide button
    prev_slide: '#prevslide',    // Prev slide button

    slide_caption: '#slidecaption',  // Slide caption
    slide_current: '.slidenumber',    // Current slide number
    slide_total: '.totalslides'    // Total Slides

  };

})(jQuery);
