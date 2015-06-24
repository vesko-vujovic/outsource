/**
 * This is the main config file in this app
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
<<<<<<< HEAD
            .state('dedicated-team-price-step-two', { 
                parent: 'home',
                url: '/dedicated-team-price-step-two',
=======
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
>>>>>>> origin/master
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
            .state('testimonials', { 
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
                  
<<<<<<< HEAD
            })         
=======
            })

            
            
>>>>>>> origin/master
    
});

// end of outsource