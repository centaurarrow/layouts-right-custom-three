import { createWidget } from 'discourse/widgets/widget';

export default createWidget('right-custom-html-three', {
  tagName: 'div.right-custom-html-three.widget-container',
  buildKey: () => 'right-custom-html-three',

  defaultState() {
    return {
      renderScheduled: false
    };
  },

  html(attrs, state) {
    console.log('right-custom-html-three');
    if (!state.renderScheduled) {
      let html = this.siteSettings.layouts_right_custom_html_three;

      const category = attrs.category;
      if (category && category.layouts_right_custom_html_three) {
        html = category.layouts_right_custom_html_three;
      }

      Ember.run.scheduleOnce('afterRender', this, function() {
        $("div.right-custom-html-three").html('');
        $("div.right-custom-html-three").append(`<div class='contents'>${html}</div>`);
      });
    //  state.renderScheduled = true;
    }
    return '';
  }
});
