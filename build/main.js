/**
 * Routes for outsource app
 */

// Outsource app module
var outsource = angular.module('outsourceApp', ['ui.router']);

outsource.config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('ne radi');
      /**
        * These are routes for app the first route is parent other routes are child routes
        */
      $stateProvider
        .state('home', {
          url: '/home',
          template:'',        	          
        })
            .state('index', { 
            	parent: 'home',
            	url: '/index',
            	views: {
            		inner: {
            			templateUrl: 'src/app/components/views/homepage.html',
                        controller: 'IndexCtrl' 
            		}
            	}  	
            })
            .state('packages', { 
            	parent: 'home',
            	url: '/order-service-package',
            	views: {
            		inner: {
            			templateUrl: 'src/app/components/views/order-service-package.html',
                        controller:  'servicePackageCtrl' 
            		}
            	}  	

            })
            .state('dedicated', { 
                parent: 'home',
                url: '/dedicated-team-price',
                views: {
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-price-home.html',
                        controller:  'dedicatedCtrl' 
                    }
                }   
            })
            .state('step-one', { 
                parent: 'dedicated',
                url: '/step-one',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-package-directives.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('step-two', { 
                parent: 'dedicated',
                url: '/step-two',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-step-two-directive.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('step-three', { 
                parent: 'dedicated',
                url: '/step-three',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-step-three-directive.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('step-four', { 
                parent: 'dedicated',
                url: '/step-three',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-step-four-directive.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('dedicated-team-price-homepage', { 
                parent: 'home',
                url: '/dedicated-team-price-home',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-team-price-homepage.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('dedicated-team-price-one', { 
                parent: 'dedicated-team-price-homepage',
                url: '/team-price-one',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-team-prices-step-one.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('dedicated-team-price-two', { 
                parent: 'dedicated-team-price-homepage',
                url: '/team-price-two',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-team-prices-step-two.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
             .state('service-price-list-home', { 
                parent: 'home',
                url: '/service-price-list-home',
                views: {
                    inner: {
                        templateUrl: 'src/app/components/views/service-price-list-homepage.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('service-price-list-design', { 
                parent: 'home',
                url: '/service-price-list-design',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/service-price-list-step-one.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
             .state('service-price-list-technology', { 
                parent: 'home',
                url: '/service-price-list-technology',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/service-price-list-step-two.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('why-us', { 
                parent: 'home',
                url: '/why-us',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/why-us-home.html',
                        controller:  'whyusCtrl'
                    }
                     
                }
                  
            })
            .state('why-us-testimonials', { 
                parent: 'home',
                url: ' /why-us/testimonials',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/why-us-testimonials.html',
                        controller:  'whyusCtrl'
                    }
                     
                }
                  
            })
            .state('why-us-technology', { 
                parent: 'home',
                url: ' /why-us/technology',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/why-us-technology-directive.html',
                        controller:  'whyusCtrl'
                    }
                     
                }
                  
            })
            .state('why-us-work-process', { 
                parent: 'home',
                url: ' /why-us/work-process/web',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/why-us-workprocess.html',
                        controller:  'whyusCtrl'
                    }
                     
                }
                  
            })
            .state('packageprices', { 
                parent: 'home',
                url: '/package-prices',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/package-prices-directive.html',
                        controller:  'packageAndPricesCtrl'
                    }
                     
                }
                  
            })
            .state('packageprices-technology', { 
                parent: 'home',
                url: '/package-prices-technology-services',
                views: { 
                     
                    inner: {
                        templateUrl: 'src/app/components/views/package-prices-technology-services.html',
                        controller:  'packageAndPricesCtrl'
                    }
                     
                }
                  

            })
            .state('packageprices-chosen-package', { 
                parent: 'home',
                url: '/package-prices-chosen-package',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/package-prices-chosen-package.html',
                        controller:  'packageAndPricesCtrl'
                    }
                     
                }                 

            });           
    
});

// end of outsource

//this is the main module
var app = angular.module('outsourceApp');

//define controller

app.controller('dedicatedCtrl', ['$scope', 'sharedService', function($scope, sharedService){
	
    //data for packages
	$scope.packageData         = sharedService.getData('/outsource/json/index/packages.json').then(function(data){
	    $scope.packages        = data.packages; 
	});

    


}]);

//this is the main module
var app = angular.module('outsourceApp');

//define controller
app.controller('IndexCtrl', ['$scope', 'sharedService', function($scope, sharedService){
     
     //data for slider
	$scope.slider;
	$scope.sliderData         = sharedService.getData('/outsource/json/index/slider.json').then(function(data){
	   $scope.slider          = data.slider;
	   console.log($scope.slider);
	});


    //data for navbar
	$scope.navbar;
	$scope.navbarData         = sharedService.getData('/outsource/json/header.json').then(function(data){
	    $scope.navbar         = data.header;
	    
	});

	//data for packages
	$scope.packages;
	$scope.packageData         = sharedService.getData('/outsource/json/index/packages.json').then(function(data){
	    $scope.packages        = data.packages;
	  
	});

    //data for why us 
    $scope.whyus;
	$scope.whyusData           = sharedService.getData('/outsource/json/index/whyus.json').then(function(data){
	    $scope.whyus           = data.why; 
	});

	//data about us
	$scope.aboutus;
	$scope.aboutusData         = sharedService.getData('/outsource/json/index/onama.json').then(function(data){
	    $scope.aboutus         = data.about;
	});
	
    //data for clients
    $scope.clients;
	$scope.clientData          = sharedService.getData('/outsource/json/index/klijenti.json').then(function(data){
	    $scope.clients         = data.client;
	});

    //data  for what they say
    $scope.what;
    $scope.whatData     = sharedService.getData('/outsource/json/index/stakazu.json').then(function(data){
        $scope.what     = data.stakazu;
    });

	
	
}]);

//this is the main module
var app = angular.module('outsourceApp');

//define controller

app.controller('packageAndPricesCtrl', ['$scope', 'sharedService', function($scope, sharedService){
	
    //data for packages
	$scope.packageData         = sharedService.getData('/outsource/json/index/packages.json').then(function(data){
	    $scope.packages        = data.packages; 
	});


    


}]);

//this is the main module
var app = angular.module('outsourceApp');

//define controller

app.controller('servicePackageCtrl', ['$scope', 'sharedService', function($scope, sharedService){
    

}]);
//this is our module
var app = angular.module('outsourceApp');

//here we define controller
app.controller('whyusCtrl', ['$scope', 'sharedService', function($scope, sharedService){
     
    //data for why us 
    $scope.whyus;
	$scope.whyusData           = sharedService.getData('/outsource/json/index/whyus.json').then(function(data){
	    $scope.whyus           = data.why; 
	});

	//data  for what they say
    $scope.what;
    $scope.whatData     = sharedService.getData('/outsource/json/index/stakazu.json').then(function(data){
        $scope.what     = data.stakazu;
    });

   //whyus testimonials header
    $scope.header;
    $scope.headerData     = sharedService.getData('/outsource/json/testimonials/main.json').then(function(data){
        $scope.header     = data.header;
    });

    //whyus testimonials
    $scope.testimon;
    $scope.testimonData     = sharedService.getData('/outsource/json/testimonials/main.json').then(function(data){
        $scope.testimon     = data.main;
    });


	
}]);

outsource.directive('about', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
	   	 
          
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/aboutus.html'
	};
});
/**
  * Directive for clients and partners section on index page
  * Note: Here you have also "what our clients say" section 
  */
outsource.directive('client', function(){

      return {
         restrict: 'E',
         link: function(scope, element, attribute){
        },

         replace: true,
         templateUrl: 'src/app/components/views/clients.html'
      };
});
/*
 * This is the directive for packages on first step
 */

outsource.directive('pack', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/dedicated-package.html"
	};
});
/*
 * This is the directive for dedicated-prices steps  1,2,3,4
 */

outsource.directive('dedicated', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
               
             $("#order_now ul.nav.nav-tabs > li").click(function(){
               if(!$(this).hasClass('active')) {
                  
                 $("ul.nav.nav-tabs > li").removeClass('active'); 
               	 $(this).addClass('active');
               }
             });
            
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/dedicated-prices.html'
	};
});
/*
 * This is the directive for step 4 
 */

outsource.directive('stepfour', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute) {


	   },

	   replace: true,
	   templateUrl: "src/app/components/views/dedicated-step-four.html"
	};
});
/*
 * This is the directive for packages on first step
 */

outsource.directive('dedicatedstepthree', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
          
        $("#choose_form .nav.nav-tabs li").click(function (){
        	if(!$(this).hasClass('active')){
        		
                $('#choose_form .nav.nav-tabs li').removeClass('active');
        		$(this).addClass('active');
        	}   
        });	   

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/dedicated-step-three.html"
	};
});
/*
 * This is the directive for packages on first step
 */

outsource.directive('dedicatedprices', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/dedicated-step-two.html"
	};
});
/*
 * This is the directive for dedicated-team-prices-step-one
 */

outsource.directive('dedicatedteampricestepone', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
              
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/dedicated-team-prices-step-one-directive.html'
	};
});
/*
 * This is the directive for dedicated-team-prices-step-two
 */

outsource.directive('dedicatedteampricesteptwo', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
              
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/dedicated-team-prices-step-two-directive.html'
	};
});
/**
 * Here we have custom directive
 * restrict E means that this directive will we used as an element
 * link is to connect directive to scope of controller
 */

outsource.directive('name', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
	   	 scope.fullName = attribute.first + ' ' + attribute.last;
	   },
	   replace: true,
	   template: "<h1> {{fullName}} </h1>"
	};
});
/*
 * This is the directive for order-now header
 */

outsource.directive('orderheader', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/order-header.html'
	};
});
/*
 * This is the directive for order-now header
 */

outsource.directive('ordermain', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/order-main.html'
	};
});
/*
 * This is the directive for package and prices
 */

outsource.directive('packageandprices', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/package-prices-directive.html"
	};
});
outsource.directive('packages', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
	   	 
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/packages.html'
	};
});
/*
 * This is the directive for projects ( view projects from other categories section)
 */

outsource.directive('projects', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/projects.html"
	};
});
/*
 * This is the service price list directive steo one
 */

outsource.directive('servicepriceliststepone', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute) {


	   },

	   replace: true,
	   templateUrl: "src/app/components/views/service-price-list-step-one.html"
	};
});
/**
  * Wraped slider plugin inside directive
  */ 

outsource.directive('slider', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
            angular.element('.tp-banner').show().revolution({
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
	},

	   replace: true,
	   templateUrl: 'src/app/components/views/slider.html'
	};
});
/*
 * This is the directive working areas on why-us page
 */

outsource.directive('whyusclient', function() {

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute) {

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/why-us-client.html'
	};
});
/*
 * This is the directive working areas on why-us frequent asked questions
 */
outsource.directive('whyusfaq', function() {

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/why-us-faq.html'
	};
});
/*
 * This is the directive why-us fonr part 
 * part where you have top class professionals
 */

outsource.directive('whyusfront', function(){

  return {
     restrict: 'E',
     link: function(scope, element, attribute){
     },

     replace: true,
     templateUrl: "src/app/components/views/why-us-front.html"
  };
});
/*
 * This is the directive why-us header
 */

outsource.directive('whyusheader', function(){

  return {
     restrict: 'E',
     link: function(scope, element, attribute){
     },

     replace: true,
     templateUrl: "src/app/components/views/why-us-page-header.html"
  };
});
/*
 * This is the directive why-us fonr part 
 * part where you have why us icons with text
 */

outsource.directive('whysection', function(){

  return {
     restrict: 'E',
     link: function(scope, element, attribute){
     },

     replace: true,
     templateUrl: "src/app/components/views/why-us-section.html"
  };
});
/*
 * This is the directive for why us technology
 */
outsource.directive('whyustechnology', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/why-us-technology-directive.html"
	};
});
/*
 * This is the directive for packages on first step
 */

outsource.directive('whyustestimonials', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute) {
          
	   },

	   replace: true,
	   templateUrl: "src/app/components/views/why-us-testimonials-directive.html"
	};
});
/*
 * This is the directive working areas on why-us page
 */

outsource.directive('workareas', function() {

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/why-us-work-areas.html'
	};
});
outsource.directive('whyus', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
	
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/whyus.html'
	};
});
    //service for fetching json data
    outsource.service('sharedService', function($http, $q){

        /**
         * This function fetch data from json
         * @param path - this is the url of  the json file
         */  
        this.getData = function(path) {
            //$q method to deal with async methods
            var deferred  = $q.defer();
            $http.get(path)
              .success(function(data){
                  deferred.resolve(data);
              })
              .error(function(err, status){
                  deferred.reject(err);
              });

            return deferred.promise;
        };
     
    });


