//custom directive

outsource.directive('name', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
	   	 scope.fullName = attribute.first + '' + attribute.last
	   },
	   replace: true,
	   template: "<h1> {{fullName}} </h1>"
	}
});