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
            .state('paketi', { 
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
            
            
    

});


// end of outsource

//this is the main module
var app = angular.module('outsourceApp');

//define controller

app.controller('dedicatedCtrl', ['$scope', 'sharedService', function($scope, sharedService){
      	
}]);

//this is the main module
var app = angular.module('outsourceApp');

//define controller

app.controller('indexCtrl', ['$scope', 'sharedService', function($scope, sharedService){
      
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
 * This is the directive for order-now header
 */

outsource.directive('dedicated', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/dedicated-prices.html'
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


