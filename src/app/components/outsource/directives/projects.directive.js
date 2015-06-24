/*
 * This is the directive for projects ( view projects from other categories section)
 */

outsource.directive('projects', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/projects.html"
	};
});