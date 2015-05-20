//this is the main controller
var app = angular.module('outsourceApp');

//define controller
app.controller('mainCtrl', ['$scope', 'sharedService', function($scope, sharedService){

	$scope.data = sharedService.getData();
	console.log($scope.data);

        
}]);
