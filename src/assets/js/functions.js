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


