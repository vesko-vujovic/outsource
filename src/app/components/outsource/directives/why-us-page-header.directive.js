/*
 * This is the directive why-us header
 */

outsource.directive('whyusheader', function(){

  return {
     restrict: 'E',
     link: function(scope, element, attribute){
     },

     replace: true,
     templateUrl: "src/app/components/views/why-us-page-header.html"
  };
});