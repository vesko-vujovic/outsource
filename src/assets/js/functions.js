$(document).ready(function() {
  $('.us-left').addClass("hideit").viewportChecker({
    classToAdd: 'visibleit animated fadeInLeft ',
    offset: 100
  });
  $('.us-right').addClass("hideit").viewportChecker({
    classToAdd: 'visibleit animated fadeInRight',
    offset: 100
  });
  $('.client-logo img').addClass("hideit").viewportChecker({
    classToAdd: 'visibleit animated flipInX',
    offset: 200
  });
});

/*
$(document).ready(function() {


  setTimeout(function(){


  $('.tp-banner').show().revolution({
            delay:9000,
            startwidth:980,
            startheight:520,
            hideThumbs:10,
            onHoverStop: "off",
            navigationType: "none",
            navigationStyle: "preview4",
            touchenabled: "off",
            hideTimerBar: "on",
            parallax:"mouse",
            parallaxBgFreeze:"on",
            parallaxLevels:[10,7,4,3,2,5,4,3,2,1]
    });         
   
 }, 15);
 
}); 
*/

  this.menu     = function(e) {
      var obj = $(e);
      if (obj.hasClass("clicked")) {
      $(".dropdown-nav").slideUp(300);
        obj.removeClass('clicked');
      }
      else {
        $(".dropdown-nav").slideDown(300);
        obj.addClass('clicked');
      }
  };
  
    


$(document).ready(function() {
  $("#testimonials-carusel").owlCarousel({
   autoPlay: 7000, 
   singleItem : true,
   pagination: false
 });
});



this.changeClass          = function(e) {
      var obj = $(e);
      if (!obj.hasClass("clicked")) {
        obj.addClass("clicked")
      }
     
};

this.resetActiveClass     = function(e) {
      $("#order_now ul.nav.nav-tabs > li").removeClass('active');
      $("#order_now ul > li:first-child").addClass('active');
}





