/*
 * This is the directive for packages on first step
 */

outsource.directive('dedicatedstepthree', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/dedicated-step-three.html"
	};
});