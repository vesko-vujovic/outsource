/*
 * This is the directive for dedicated
 */

outsource.directive('dedicated', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
            
                $("#klik").click(function(){
                alert('works');
             });
            
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/dedicated-prices.html'
	};
});