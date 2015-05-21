/**
 * This is the main config file in this app, here we define initialization and all other things
 */

/**
 * outsource app module
 *
 */
var outsource = angular.module('outsourceApp', ['ui.router']);

outsource.config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home.html',
          controller: 'indexCtrl'
          	
          
        })
        .state('slider',{
          url: '/slider',
          templateUrl: 'src/app/components/views/slider.html',
          controller: 'indexCtrl'

        });


});








// end of outsource