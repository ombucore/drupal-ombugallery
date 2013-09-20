(function($) {

  theme = {


    /* Initial Placement
       ----------------------------*/
    _init: function() {

      $(document.body).addClass('supersized');

      var slideshow = $('#supersized');
      slideshow.hover(
        function(ev) {
            $(document.body).addClass('supersized-hover');
        },
        function(ev) {
          var falseExit = $(ev.relatedTarget).parents().is("#block-bean-homepage-slideshow");
          if(!falseExit) {
            $(document.body).removeClass('supersized-hover');
          }
        }
      );

      /* Navigation Items
         ----------------------------*/
      $(vars.next_slide).click(function() {
        api.nextSlide();
      });

      $(vars.prev_slide).click(function() {
        api.prevSlide();
      });

    },

    /* Before Slide Transition
       ----------------------------*/
    beforeAnimation: function(direction) {

      /* Update Fields
         ----------------------------*/
      // Update slide title
      if ($(vars.slide_title).length) {
        (api.getField('title')) ?
          $(vars.slide_title).html(api.getField('title')) :
          $(vars.slide_title).html('');
      }
      if ($(vars.slide_body).length) {
        (api.getField('body')) ?
          $(vars.slide_body).html(api.getField('body')) :
          $(vars.slide_body).html('');
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

    slide_title: '#slidetitle',  // Slide caption
    slide_body: '#slidebody',  // Slide caption
    slide_current: '.slidenumber',    // Current slide number
    slide_total: '.totalslides'    // Total Slides

  };

})(jQuery);
