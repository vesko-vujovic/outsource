//this is the main module
var app = angular.module('outsourceApp');

//define controller

app.controller('indexCtrl', ['$scope', 'sharedService', function($scope, sharedService){
      
    //data for navbar
	$scope.navbar;
	$scope.navbarData         = sharedService.getData('/outsource/json/header.json').then(function(data){
	    $scope.navbar         = data.header;
	    
	});

	//data for packages
	$scope.packages;
	$scope.packageData         = sharedService.getData('/outsource/json/index/packages.json').then(function(data){
	    $scope.packages        = data.packages;
	  
	});
    //data for why us 
    $scope.whyus;
	$scope.whyusData           = sharedService.getData('/outsource/json/index/whyus.json').then(function(data){
	    $scope.whyus           = data.why; 
	});
	//data about us
	$scope.aboutus;
	$scope.aboutusData         = sharedService.getData('/outsource/json/index/onama.json').then(function(data){
	    $scope.aboutus         = data.about;
	});
    //data for clients
    $scope.clients;
	$scope.clientData          = sharedService.getData('/outsource/json/index/klijenti.json').then(function(data){
	    $scope.clients         = data.client;
	});
    //data  for what they say
    $scope.what;
    $scope.whatData     = sharedService.getData('/outsource/json/index/stakazu.json').then(function(data){
        $scope.what     = data.stakazu;
    });

	
	
}]);
