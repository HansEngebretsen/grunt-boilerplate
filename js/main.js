import page from './modules/page';

$(document).ready(() => {
  window.Universal  = window.Universal || {};
  window.Universal.site = window.Universal.site || {};

  window.Universal.site.mobile =  window.matchMedia( `( max-width: 720px)`).matches;

  window.Universal.site.ie9 = $('.lte-ie9')[0];

  let Page = new page({
    class: '.page'
  });

});
