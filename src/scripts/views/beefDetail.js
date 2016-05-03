var tplBeefDetail=require("../tpl/beefDetail.string");
SPA.defineView('Detail',{
  html:tplBeefDetail,
  plugins:['delegated',{
    name:'avalon'
  }],
  bindActions:{
    'tap.back':function(){
      this.hide();
    },
    'go.cart':function(){
      this.hide();
      SPA.getView('index', function (view) {
      view.modules.indexContent.launch('cart');
      view.setActive('cart');
    })
    }
  }



})
