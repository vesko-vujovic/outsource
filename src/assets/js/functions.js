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

$(document).ready(function() {
  $("#order-now").click(function() {
      var $this = $(this);
      if ($this.hasClass("clicked")) {
      $(".dropdown-nav").slideUp(300);
      $(this).removeClass('clicked');
      }
      else {
        $(".dropdown-nav").slideDown(300);
        $(this).addClass('clicked');
      }
  });
}); 

$(document).ready(function() {
  $("#testimonials-carusel").owlCarousel({
   autoPlay: 7000, 
   singleItem : true,
   pagination: false
 });
});