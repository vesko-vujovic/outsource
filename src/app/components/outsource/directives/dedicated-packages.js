/*
 * This is the directive for dedicated-packages, group of packages
 */

outsource.directive('dedicated-packages', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
            
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/dedicated-package.html'
	};
});