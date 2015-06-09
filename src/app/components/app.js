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
            .state('step-one', { 
                parent: 'dedicated',
                url: '/step-one',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-package.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })
            .state('step-two', { 
                parent: 'dedicated',
                url: '/step-two',
                views: {
                     
                    inner: {
                        templateUrl: 'src/app/components/views/dedicated-step-two.html',
                        controller:  'dedicatedCtrl'
                    }
                     
                }
                  
            })


            
            
    

});


// end of outsource