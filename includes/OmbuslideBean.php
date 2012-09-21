<?php
/**
 * @file
 * ombuslide.bean.inc
 */

class OmbuslideBean extends BeanPlugin {

  /**
   * Implements the value() method.
   */
  public function values() {
    $values = parent::values();
    $values += array(
      'style' => 'default',
    );
    return $values;
  }

  /**
   * Implements the form() method.
   */
  public function form($bean, $form, &$form_state) {

    $form = parent::form($bean, $form, $form_state);

    $styles = array(
      'default' => 'Default',
      'fullscreen' => 'Full Screen',
    );

    $form['style'] = array(
      '#title' => t('Style'),
      '#type' => 'select',
      '#required' => TRUE,
      '#options' => $styles,
      '#default_value' => $bean->style,
    );
    return $form;
  }
}
