var tplMyCenter = require('../tpl/myCenter.string');

SPA.defineView('myCenter', {
  html: tplMyCenter,
  plugins:['delegated',{
    name:"avalon"
  }],
  bindActions:{
    'go.weixinLogin':function(){
      SPA.open("weixinLogin")

    }
  }
});
