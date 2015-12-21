<?php
/**
 * @file
 * ombugallery.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function ombugallery_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'bean-ombugallery-field_slide'
  $field_instances['bean-ombugallery-field_slide'] = array(
    'bundle' => 'ombugallery',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Define the content for each slide in the slideshow.  Drag and drop the slides to order them within the slideshow.',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'field_collection',
        'settings' => array(
          'add' => '',
          'delete' => '',
          'description' => 0,
          'edit' => '',
          'view_mode' => 'full',
        ),
        'type' => 'field_collection_view',
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

  // Exported field_instance: 'field_collection_item-field_slide-field_media'
  $field_instances['field_collection_item-field_slide-field_media'] = array(
    'bundle' => 'field_slide',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'ombumedia',
        'settings' => array(),
        'type' => 'ombumedia_render',
        'weight' => 0,
      ),
    ),
    'entity_type' => 'field_collection_item',
    'field_name' => 'field_media',
    'label' => 'Media',
    'required' => 0,
    'settings' => array(
      'alt_field' => 0,
      'default_image' => 0,
      'file_directory' => '',
      'file_extensions' => 'png gif jpg jpeg',
      'max_filesize' => '',
      'max_resolution' => '',
      'min_resolution' => '',
      'title_field' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'ombumedia',
      'settings' => array(
        'allowed_schemes' => array(
          'public' => 'public',
        ),
        'allowed_types' => array(
          'audio' => 0,
          'document' => 0,
          'image' => 'image',
          'video' => 0,
        ),
        'allowed_view_modes' => array(
          'audio' => array(),
          'document' => array(),
          'image' => array(
            'default' => 'default',
          ),
          'video' => array(),
        ),
      ),
      'type' => 'ombumedia',
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
        'weight' => 2,
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
        'weight' => 1,
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
  t('Optional content text for the image.  Since there is limited space for the slideshow, it is best to keep this as short as possible.');
  t('Optional title text for the image.');
  t('Slides');
  t('Title');

  return $field_instances;
}
