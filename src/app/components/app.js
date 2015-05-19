/**
 * This is the main config file in this app, here we define initialization and all other things
 */

var outsource = angular.module('outsourceApp', []);

//module for angular routing
var routes    = angular.module('route',['ui.router']);


//config for routes
routes.config(function($stateProvider){
   $stateProvider
       .state('index',{url:"/index", templateUrl: "views/main.html"});
});
