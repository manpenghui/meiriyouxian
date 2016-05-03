var tplWeixinLogin = require('../tpl/weixinLogin.string');

SPA.defineView('weixinLogin', {
  html: tplWeixinLogin,
  plugins:['delegated'],
  bindActions:{
    'tap.back':function(){
      this.hide();
    }
  }
});
