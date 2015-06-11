//this is our module
var app = angular.module('outsourceApp');

//here we define controller
app.controller('whyusCtrl', ['$scope', 'sharedService', function($scope, sharedService){
     
   //data for why us 
    $scope.whyus;
	$scope.whyusData           = sharedService.getData('/outsource/json/index/whyus.json').then(function(data){
	    $scope.whyus           = data.why; 
	});
	
}]);
