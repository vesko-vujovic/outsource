/*
 * This is the directive working areas on why-us page
 */

outsource.directive('whyusclient', function() {

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute) {

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/why-us-client.html'
	};
});