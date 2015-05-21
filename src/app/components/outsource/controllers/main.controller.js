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
