/**
 * This is the main config file in this app, here we define initialization and all other things
 */

//create module with ui router
var outsource = angular.module('outsourceApp', ['ui.router']);

//here i will define routes for this module



//this is the main controller
var app = angular.module('outsourceApp');

//define controller
app.controller('mainCtrl', ['$scope', 'sharedService', function($scope, sharedService){

	$scope.data = sharedService.getData();
	console.log($scope.data);

        
}]);


    //service for fetching json data
    outsource.service('sharedService', function($http, $q){

        /**
         * This function fetch data from json
         * @param path - this is the url of file
         */  
        this.getData = function() {
            
          var defer  = $q.defer();
          $http.get('json/index/klijenti.json')
             .success(function(result){
               defer.resolve(result);
          });

          return defer.promise;  

        };
     
    });


