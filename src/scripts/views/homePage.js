var tplHomePage = require('../tpl/homePage.string');

SPA.defineView('homePage', {
  html: tplHomePage,
  plugins: ['delegated'],
  inint:{
    mySwiper:null,
    indexSwiper:null
  },
  bindActions: {
   'swipe': function (e) {
     var index = $(e.el).index();
     console.log(index);
     this.indexSwiper.slideTo(index);
   },
   'open.detail':function(){
       SPA.open("Detail")
   }

  },
  bindEvents: {
    'beforeShow': function () {
      var self = this;
      var that=this;
      this.mySwiper = new Swiper('#bannerContainer', {
        autoplay: 2000,
        pagination : '.swiper-pagination',

      });
      that.indexSwiper = new Swiper('#index-swiper', {
        loop: false,
        onSlideChangeStart: function () {
          var $curLi = $('nav ul li').eq(self.indexSwiper.activeIndex);
          $curLi.addClass('active').siblings().removeClass('active');
         }
      });



    }
  }
});
