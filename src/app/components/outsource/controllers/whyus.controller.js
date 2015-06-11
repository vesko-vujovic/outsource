//this is our module
var app = angular.module('outsourceApp');

//here we define controller
app.controller('whyusCtrl', ['$scope', 'sharedService', function($scope, sharedService){
     
    //data for why us 
    $scope.whyus;
	$scope.whyusData           = sharedService.getData('/outsource/json/index/whyus.json').then(function(data){
	    $scope.whyus           = data.why; 
	});

	//data  for what they say
    $scope.what;
    $scope.whatData     = sharedService.getData('/outsource/json/index/stakazu.json').then(function(data){
        $scope.what     = data.stakazu;
    });

   //whyus testimonials header
    $scope.header;
    $scope.headerData     = sharedService.getData('/outsource/json/testimonials/main.json').then(function(data){
        $scope.header     = data.header;
    });

    //whyus testimonials
    $scope.testimon;
    $scope.testimonData     = sharedService.getData('/outsource/json/testimonials/main.json').then(function(data){
        $scope.testimon     = data.main;
    });


	
}]);
