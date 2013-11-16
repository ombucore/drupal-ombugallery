<?php

/**
 * @file
 * Carousel bean style.
 */

class CarouselBeanStyle extends SlideshowBeanStyle {
  protected $theme_function = 'ombuslide_carousel';

  /**
   * Implements parent::prepareFieldCollectionItems().
   */
  protected function prepareFieldCollectionItems($build) {
    foreach (element_children($build['field_slide']) as $delta) {
      $item =& $build['field_slide'][$delta];

      $fid = key($item['entity']['field_collection_item']);
      $fc = $item['entity']['field_collection_item'][$fid]['#entity'];

      $dom_id = 'ombuslide-carousel-' . $fc->item_id;

      // Change image style to carousel style.
      $image =& $item['entity']['fc'][$fc->item_id]['field_image'][0];

      // Wrap the image to enable client-side scaling, positioning, and cropping
      $image['#prefix'] = '<div id="' . $dom_id . '" class="slide-image-outer"><div class="slide-image-inner">';
      $image['#suffix'] = '</div></div>';

      // Wrap all content with link.
      if (isset($item['entity']['fc'][$fc->item_id]['field_link'])) {
        $link =& $item['entity']['fc'][$fc->item_id]['field_link'][0];
        if ($link) {
          $item['data']['#prefix'] = '<a href="' . $link['#element']['url'] . '">';
          $item['data']['#suffix'] = '</a>';
        }
      }

      $this->items[] = array(
        'data' => $item,
        'class' => array('item-' . $delta),
        'id' => $dom_id,
      );
    }
  }
}
