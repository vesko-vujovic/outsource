/**
  * Wraped slider plugin inside directive
  */ 

outsource.directive('slider', function(){

	return {
	   restrict: 'E',
	   link: function(scope, element, attribute){
            angular.element('.tp-banner').show().revolution({
	   	delay:9000,
            startwidth:980,
            startheight:520,
            hideThumbs:10,
            onHoverStop: "off",
            navigationType: "none",
            navigationStyle: "preview4",
            touchenabled: "off",
            hideTimerBar: "on",
            parallax:"mouse",
            parallaxBgFreeze:"on",
            parallaxLevels:[10,7,4,3,2,5,4,3,2,1]
        });
	},

	   replace: true,
	   templateUrl: 'src/app/components/views/slider.html'
	};
});