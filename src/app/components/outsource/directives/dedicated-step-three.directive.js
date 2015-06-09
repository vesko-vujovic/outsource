/*
 * This is the directive for packages on first step
 */

outsource.directive('dedicatedstepthree', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
          
        $("#choose_form .nav.nav-tabs li").click(function (){
        	if(!$(this).hasClass('active')){
        		
                $('#choose_form .nav.nav-tabs li').removeClass('active');
        		$(this).addClass('active');
        	}   
        });	   

	   },

	   replace: true,
	   templateUrl: "src/app/components/views/dedicated-step-three.html"
	};
});