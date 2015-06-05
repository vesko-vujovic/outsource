/*
 * This is the directive for dedicated
 */

outsource.directive('dedicated', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
            
             $("#order_now ul.nav.nav-tabs > li").click(function(){
               if(!$(this).hasClass('active')){
                  
                 $("ul.nav.nav-tabs > li").removeClass('active'); 
               	 $(this).addClass('active');
               }
             });
            
	   },

	   replace: true,
	   templateUrl: 'src/app/components/views/dedicated-prices.html'
	};
});