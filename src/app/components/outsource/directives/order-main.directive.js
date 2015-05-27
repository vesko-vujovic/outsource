/*
 * This is the directive for order-now header
 */

outsource.directive('ordermain', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){

	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/order-main.html'
	};
});