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
   
    //this functions calls service method to load data from json file
    $scope.client = [];
	$scope.data   = sharedService.getData().then(function(data){
		console.log(data);
	    $scope.client = data;  
	});

	//console.log($scope.client);
	
}]);


    //service for fetching json data
    outsource.service('sharedService', function($http, $q){

        /**
         * This function fetch data from json
         * @param path - this is the url of file
         */  
        this.getData = function() {
            
            //$q method to deal with async methods
            var deferred  = $q.defer();
            $http.get("/outsource/json/index/klijenti.json")
              .success(function(data){
                  console.log('radi');
                  deferred.resolve(data);
              })
              .error(function(err, status){
                  deferred.reject(err);
              });

            return deferred.promise;
        };
     
    });


