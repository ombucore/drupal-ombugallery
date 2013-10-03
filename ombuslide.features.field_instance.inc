<?php
/**
 * @file
 * ombuslide.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function ombuslide_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'bean-ombuslide-field_slide'
  $field_instances['bean-ombuslide-field_slide'] = array(
    'bundle' => 'ombuslide',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Define the content for each slide in the slideshow.  Drag and drop the slides to order them within the slideshow.',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'ombuslide',
        'settings' => array(
          'style' => 'responsive',
          'style_options' => '{}',
        ),
        'type' => 'ombuslide_collection',
        'weight' => 1,
      ),
    ),
    'entity_type' => 'bean',
    'field_name' => 'field_slide',
    'label' => 'Slides',
    'required' => 0,
    'settings' => array(
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'field_collection',
      'settings' => array(),
      'type' => 'field_collection_embed',
      'weight' => 0,
    ),
  );

  // Exported field_instance: 'field_collection_item-field_slide-field_image'
  $field_instances['field_collection_item-field_slide-field_image'] = array(
    'bundle' => 'field_slide',
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'image',
        'settings' => array(
          'image_link' => '',
          'image_style' => '',
        ),
        'type' => 'image',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'field_collection_item',
    'field_name' => 'field_image',
    'label' => 'Image',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => 'slide',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'media',
      'settings' => array(
        'allowed_schemes' => array(
          0 => 'public',
          1 => 'private',
        ),
        'allowed_types' => array(
          0 => 'image',
        ),
        'browser_plugins' => array(
          'media_default--media_browser_1' => 'media_default--media_browser_1',
          'media_default--media_browser_my_files' => 0,
          'media_internet' => 0,
          'upload' => 'upload',
        ),
        'preview_image_style' => 'thumbnail',
        'progress_indicator' => 'throbber',
      ),
      'type' => 'media_generic',
      'weight' => 1,
    ),
  );

  // Exported field_instance: 'field_collection_item-field_slide-field_slide_text'
  $field_instances['field_collection_item-field_slide-field_slide_text'] = array(
    'bundle' => 'field_slide',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Optional content text for the image.  Since there is limited space for the slideshow, it is best to keep this as short as possible.',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 3,
      ),
    ),
    'entity_type' => 'field_collection_item',
    'field_name' => 'field_slide_text',
    'label' => 'Content',
    'required' => 0,
    'settings' => array(
      'text_processing' => 1,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'rows' => 4,
      ),
      'type' => 'text_textarea',
      'weight' => 3,
    ),
  );

  // Exported field_instance: 'field_collection_item-field_slide-field_slide_title'
  $field_instances['field_collection_item-field_slide-field_slide_title'] = array(
    'bundle' => 'field_slide',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Optional title text for the image.',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'text',
        'settings' => array(),
        'type' => 'text_default',
        'weight' => 2,
      ),
    ),
    'entity_type' => 'field_collection_item',
    'field_name' => 'field_slide_title',
    'label' => 'Title',
    'required' => 0,
    'settings' => array(
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 2,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Content');
  t('Define the content for each slide in the slideshow.  Drag and drop the slides to order them within the slideshow.');
  t('Image');
  t('Optional content text for the image.  Since there is limited space for the slideshow, it is best to keep this as short as possible.');
  t('Optional title text for the image.');
  t('Slides');
  t('Title');

  return $field_instances;
}
