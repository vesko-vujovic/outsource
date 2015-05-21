/**
 * This is the main config file in this app, here we define initialization and all other things
 */

//create module with ui router
var outsource = angular.module('outsourceApp', ['ui.router']);

//here i will define routes for this module



//this is the main controller
var app = angular.module('outsourceApp');

//define controller

app.controller('indexCtrl', ['$scope', 'sharedService', function($scope, sharedService){
   
    //this functions calls service method to load data from json file
    $scope.client;
	$scope.data   = sharedService.getData('/outsource/json/index/klijenti.json').then(function(data){
	    $scope.client = data.client;
	});

	
	
}]);

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
/**
 * This is the directive for slider 
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


