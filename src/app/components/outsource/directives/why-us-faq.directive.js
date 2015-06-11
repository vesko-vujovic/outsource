/*
 * This is the directive working areas on why-us frequent asked questions
 */
outsource.directive('whyusfaq', function() {

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/why-us-faq.html'
	};
});