/*
 * This is the directive for packages on first step
 */

outsource.directive('pack', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/dedicated-package.html"
	};
});