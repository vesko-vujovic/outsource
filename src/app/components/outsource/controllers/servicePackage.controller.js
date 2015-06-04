//this is the main module
var app = angular.module('outsourceApp');

//define controller

app.controller('servicePackageCtrl', ['$scope', 'sharedService', function($scope, sharedService){
    
    //data for packages
	$scope.packageData         = sharedService.getData('/outsource/json/index/packages.json').then(function(data){
	    $scope.packages        = data.packages; 
	});

}]);