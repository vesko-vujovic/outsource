/**
 * This is the main config file in this app, here we define initialization and all other things
 */

//create module with ui router
var outsource = angular.module('outsourceApp', ['ui.router']);

//here i will define routes for this module



//this is the main controller
var app = angular.module('outsourceApp');

//define controller
app.controller('mainCtrl', ['$scope', function($scope){
        alert('radi');
}]);

(function(outsource){

   //custom directive
	outsource.module('outsourceApp')
     
    outsource.directive('helloWorld', function(){
    	return {
    		
            restrict: 'AE',
    		replace: 'true',
    		template: '<h3> Hello world </h3>'
    	}
    })
});

    //service for fetching json data
    outsource.service('getService', function($http){

        //fetch data from json file
        /**
         * @param path - this is the url of file
         * @param part - this is the part of json array you want 
         */
       
        this.fetchData = function(path, part){

        };
    });


