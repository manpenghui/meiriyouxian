var tplIndex = require('../tpl/index.string');

SPA.defineView('index', {
  html: tplIndex,

  plugins: ['delegated'],

  modules: [{
    name: 'indexContent',
    container: '.m-index-body',
    views: ['homePage', 'notLogin', 'cart', 'myCenter'],
    defaultTag: 'homePage'
  }],
  init:{
    setActive:function(tag){
    $('[data-tag="' + tag + '"]').addClass("active").siblings().removeClass("active");
    }
  },

  bindActions: {
    'tap.switch': function (el, data) {
      this.modules.indexContent.launch(data.tag);
      $(el.el).addClass("active").siblings().removeClass("active");
    }
  },

  bindEvents: {
    'beforeShow': function() {

    }
  }
});
