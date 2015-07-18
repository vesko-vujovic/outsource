/**
  * Directive for clients and partners section on index page
  * Note: Here you have also "what our clients say" section 
  */
outsource.directive('client', function(){

      return {
         restrict: 'E',
         link: function(scope, element, attribute){
        },

         replace: true,
         templateUrl: 'src/app/components/views/clients.html'
      };
});