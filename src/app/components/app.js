/**
 * This is the main config file in this app, here we define initialization and all other things
 */

//create module with ui router
var outsource = angular.module('outsourceApp', ['ui.router']);

//routes for app 
outsource.config(function($stateProvider){
   $stateProvider
       .state('index',{url:"/index", templateUrl: "views/main.html"});
});
