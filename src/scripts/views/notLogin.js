var tplNotLogin=require("../tpl/notLogin.string");
SPA.defineView("notLogin",{
  html:tplNotLogin,
  plugins:['delegated',{
    name:"avalon"
  }],
  bindActions:{
    'show.weixinLogin':function(){
      SPA.open("weixinLogin")
    }
  }
});
