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
<<<<<<< HEAD
       /*
=======
      
      /**
>>>>>>> 01cb3217118d6be48fe1fe74ea634b58715ab86a
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
<<<<<<< HEAD
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
            
            
                  
=======
            });
            
            
>>>>>>> 01cb3217118d6be48fe1fe74ea634b58715ab86a

       

});


// end of outsource