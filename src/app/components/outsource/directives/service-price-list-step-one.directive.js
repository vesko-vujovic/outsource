/*
 * This is the service price list directive steo one
 */

outsource.directive('servicepriceliststepone', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute) {


	   },

	   replace: true,
	   templateUrl: "src/app/components/views/service-price-list-step-one.html"
	};
});