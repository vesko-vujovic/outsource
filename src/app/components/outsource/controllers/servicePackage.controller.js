//this is the main module
var app = angular.module('outsourceApp');

//define controller

app.controller('servicePackageCtrl', ['$scope', 'sharedService', function($scope, sharedService){
      
	//data for packages
	$scope.packages;
	$scope.packageData         = sharedService.getData('/outsource/json/index/packages.json').then(function(data){
	    $scope.packages        = data.packages;
	  
	});

    //data  for what they say
    $scope.what;
    $scope.whatData     = sharedService.getData('/outsource/json/index/stakazu.json').then(function(data){
        $scope.what     = data.stakazu;
    });

	
	
}]);