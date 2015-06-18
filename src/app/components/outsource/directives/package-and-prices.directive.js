/*
 * This is the directive for package and prices
 */

outsource.directive('packageandprices', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/package-prices-directive.html"
	};
});