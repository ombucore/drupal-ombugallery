<?php
/**
 * @file
 * ombuslide.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function ombuslide_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_primary|field_collection_item|field_slide|default';
  $field_group->group_name = 'group_primary';
  $field_group->entity_type = 'field_collection_item';
  $field_group->bundle = 'field_slide';
  $field_group->mode = 'default';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Primary slide content',
    'weight' => '2',
    'children' => array(
      0 => 'field_image',
    ),
    'format_type' => 'div',
    'format_settings' => array(
      'label' => 'Primary slide content',
      'instance_settings' => array(
        'classes' => 'group_primary',
        'description' => '',
        'show_label' => '0',
        'label_element' => 'h3',
        'effect' => 'none',
        'speed' => 'none',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_primary|field_collection_item|field_slide|default'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_secondary|field_collection_item|field_slide|default';
  $field_group->group_name = 'group_secondary';
  $field_group->entity_type = 'field_collection_item';
  $field_group->bundle = 'field_slide';
  $field_group->mode = 'default';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Secondary slide content',
    'weight' => '3',
    'children' => array(
      0 => 'field_slide_text',
      1 => 'field_slide_title',
      2 => 'field_link',
    ),
    'format_type' => 'div',
    'format_settings' => array(
      'label' => 'Secondary slide content',
      'instance_settings' => array(
        'classes' => 'group_secondary',
        'description' => '',
        'show_label' => '0',
        'label_element' => 'h3',
        'effect' => 'none',
        'speed' => 'none',
      ),
      'formatter' => 'open',
    ),
  );
  $export['group_secondary|field_collection_item|field_slide|default'] = $field_group;

  return $export;
}
