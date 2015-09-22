(function ($) {
  Drupal.behaviors.ombugalleryAdmin = {
    attach: function(context, settings) {
      if (!$(context).hasClass('draggable')) {
        // Hide all current slide forms.
        $('table[id|="field-slide-values"] tr.draggable:not(.ombugallery-processed)', context).each(function() {
          var $form = $(this).addClass('ombugallery-processed').find("> td:nth-child(2)")
          Drupal.ombugalleryAdmin.setupForm($form);
          $form.before(Drupal.ombugalleryAdmin.createOverview($form));
        });
      }
    }
  }

  Drupal.ombugalleryAdmin = Drupal.ombugalleryAdmin || {};

  // Initially hide individual slide forms and add "Save" button when form is 
  // displayed.
  Drupal.ombugalleryAdmin.setupForm = function($form) {
    $form.addClass("slide-form").hide();
    var $button = $('<div class="form-actions"><input class="form-submit submit btn" type="button" value="Save Slide" /></div>').click(function() {
      $form.hide();
      Drupal.ombugalleryAdmin.triggerChange();
      $form.before(Drupal.ombugalleryAdmin.createOverview($form));
      return false;
    });
    $form.append($button);
  }

  // Create overview page for the add new slide form.
  Drupal.ombugalleryAdmin.createAdd = function($form) {
    var html = $(Drupal.theme('ombugalleryNewOverview'));

    html.find("a.add").click(function() {
      $form.show();
      $(this).parents('td.overview').remove();
      return false;
    });

    return html;
  };

  // Create overview page for existing slides.
  Drupal.ombugalleryAdmin.createOverview = function($form) {
    var html = $(Drupal.theme('ombugalleryOverview', $form));

    html.find(".edit").click(function() {
      $form.show();
      $('iframe', $form).height(100);
      $(this).parents('td.overview').remove();
      return false;
    });

    $('input[value="Remove"]:last', $form).appendTo($('.form-actions', html));

    return html;
  };

  // Borrow the changed warning system from tabledrag to indicate to user that 
  // form still needs to be saved.
  Drupal.ombugalleryAdmin.triggerChange = function() {
    if (Drupal.tableDrag['field-slide-values'].changed == false) {
      $(Drupal.theme('tableDragChangedWarning')).insertBefore(Drupal.tableDrag['field-slide-values'].table).hide().fadeIn('slow');
      Drupal.tableDrag['field-slide-values'].changed = true;
    }
  }

  Drupal.theme.prototype.ombugalleryNewOverview = function() {
    return '<td class="overview"><ul class="links"><li><a class="add" href="#">New Slide</a></li></ul></td>';
  }

  Drupal.theme.prototype.ombugalleryOverview = function($form) {
    var html = '<td class="overview"><div class="overview-column">';
    if ($("div.media-item", $form).html()) {
      html += $("div.media-item", $form).html();
    }
    html += '</div><div class="overview-column title">';
    if ($(".field-name-field-slide-title input", $form).val()) {
      html += $(".field-name-field-slide-title input", $form).val();
    }
    html += '</div>';
    html += '<div class="overview-column form-actions form-wrapper"><input type="button" class="form-submit edit btn" value="Edit" />';
    html += '</div>';
    html += '</td>';
    return html;
  }
})(jQuery);
