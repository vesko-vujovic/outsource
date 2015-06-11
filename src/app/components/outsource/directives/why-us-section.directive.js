/*
 * This is the directive why-us fonr part 
 * part where you have why us icons with text
 */

outsource.directive('whysection', function(){

  return {
     restrict: 'E',
     link: function(scope, element, attribute){
     },

     replace: true,
     templateUrl: "src/app/components/views/why-us-section.html"
  };
});