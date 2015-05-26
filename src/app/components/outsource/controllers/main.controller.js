//this is the main controller
var app = angular.module('outsourceApp');

//define controller

app.controller('indexCtrl', ['$scope', 'sharedService', function($scope, sharedService){
      
	//data for packages
	$scope.packages;
	$scope.packageData   = sharedService.getData('/outsource/json/index/packages.json').then(function(data){
	    $scope.packages  = data.packages;
	  
	});
    //data for why us 
    $scope.whyus;
	$scope.whyusData     = sharedService.getData('/outsource/json/index/whyus.json').then(function(data){
	    $scope.whyus     = data.why; 
	});
	//data about us
	$scope.aboutus;
	$scope.aboutusData     = sharedService.getData('/outsource/json/index/onama.json').then(function(data){
	    $scope.aboutus     = data.about;
	});
    //data for clients
    $scope.client;
	$scope.clientData          = sharedService.getData('/outsource/json/index/klijenti.json').then(function(data){
	    $scope.client    = data.client;
	});




	
	
}]);
