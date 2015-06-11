/*
 * This is the directive for packages on first step
 */

outsource.directive('whyustestimonials', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute) {
          
	   },

	   replace: true,
	   templateUrl: "src/app/components/views/why-us-testimonials-directive.html"
	};
});