//this is the main controller
var app = angular.module('outsourceApp');

//define controller

app.controller('mainCtrl', ['$scope', 'sharedService', function($scope, sharedService){
   
    //this functions calls service method to load data from json file
	$scope.data   = sharedService.getData().then(function(data){
	    $scope.data = data.client;
	});
	console.log($scope.data);
}]);
