/**
 * This is the main config file in this app, here we define initialization and all other things
 */

/**
 * outsource app module
 *
 */
var outsource = angular.module('outsourceApp', ['ui.router']);

outsource.config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('ne radi');
      /**
        * These are route for app the first route is parent other routes are child routes
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
                        controller: 'indexCtrl' 
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

app.controller('indexCtrl', ['$scope', 'sharedService', function($scope, sharedService){
     
     //data for slider
	$scope.slider;
	$scope.sliderData         = sharedService.getData('/outsource/json/index/slider.json').then(function(data){
	    $scope.slider         = data.slider;

	    
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
outsource.directive('client', function(){

      return {
         restrict: 'E',
         link: function(scope, element, attribute){
         },

         replace: true,
         templateUrl: 'src/app/components/views/klijenti.html'
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
outsource.directive('packages', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
	   	 
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/packages.html'
	};
});
/**
 * This is the custom directive for slider
 * I've wraped jquery plugin with angular
 */

/*
outsource.directive('slider', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
	   	 element.show().revolution({
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


