(function(outsource){

   //custom directive
	outsource.module('outsourceApp')
     
    outsource.directive('helloWorld', function(){
    	return {
    		
            restrict: 'AE',
    		replace: 'true',
    		template: '<h3> Hello world </h3>'
    	};
    })
});
