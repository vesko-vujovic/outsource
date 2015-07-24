/**
  * Main file for jquery DOM manipulation inside Outsource app
  * Note: Please have in mind that on some places DOM manipulation 
  * is done from directive
  */


// Dropdown menu for ORDER NOW  
this.menu     = function(e) {
 
  $('ul.nav.navbar-nav li:nth-child(3)').removeClass('clicked');
  $('ul.nav.navbar-nav li:nth-child(4)').removeClass('clicked');
  $(".packageprices, .whyus").slideUp(300);

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


// Dropdown menu for WHY US
this.whyUs     = function(e) {

    // Slide up and remove all active class, when clicked on whyus
    $('ul.nav.navbar-nav li:nth-child(3)').removeClass('clicked');
    $('ul.nav.navbar-nav li:nth-child(6)').removeClass('clicked');
    $(".packageprices, .dropdown-nav").slideUp(300);
  
 var obj = $(e);
 if (obj.hasClass("clicked")) {
  $(".whyus").slideUp(300);
  obj.removeClass('clicked');
  
}
else {
  $(".whyus").slideDown(300);
  obj.addClass('clicked');
}

};

// Dropdown menu for package and prices
this.packagePrices     = function(e) {
  
     // Slide up and remove all active class, when clicked on packagePrices
    $('ul.nav.navbar-nav li:nth-child(4)').removeClass('clicked');
    $('ul.nav.navbar-nav li:nth-child(6)').removeClass('clicked');
    $(".whyus, .dropdown-nav").slideUp(300);
    

 var obj = $(e);
 if (obj.hasClass("clicked")) {
  $(".packageprices").slideUp(300);
  obj.removeClass('clicked');
  
  }
  else {
  $(".packageprices").slideDown(300);
  obj.addClass('clicked');
  }

}; 


// Click on home page removes all opened dropdowns
this.homePage       = function(e) {

   $('ul.nav.navbar-nav li:nth-child(3)').removeClass('clicked');
   $('ul.nav.navbar-nav li:nth-child(4)').removeClass('clicked');
   $('ul.nav.navbar-nav li:nth-child(6)').removeClass('clicked');
   $(".whyus, .dropdown-nav, .packageprices").slideUp(300);
};

// Process flow animation on page /why-us/work-process/web 
  this.showNum = function(e){
    
    var roundLink = $(e).children();
    /*$(e).removeClass( "hvr-pulse" );*/
    roundLink.first().addClass('zoomOut');
    roundLink.last().removeClass('removeIt').addClass('zoomIn');

  }

  this.hideNum = function(e){
    
    var roundLink = $(e).children();    
    roundLink.first().removeClass('zoomOut');
    roundLink.last().removeClass('zoomIn').addClass('removeIt');
   /* $(e).addClass( "hvr-pulse" );*/

  }

  this.expandLinePart = function(e){

    var roundProc = $(e).parent();
    roundProc.next().removeClass('removeIt').addClass('fadeIn');
    roundProc.prev().removeClass('removeIt');
    roundProc.prev().children().addClass('animateFlip');
    $(e).addClass('keepIt');
    roundProc.mouseover(function(){
      $(e).removeClass('zoomIn');
    });
  }

  this.expandNum6 = function(e){

    var roundProc = $(e).parent().next().next();
    roundProc.removeClass('hvr-pulse');
    roundProc.children().last().removeClass('removeIt').addClass('animateFlip').addClass('keepIt');
  }
   

