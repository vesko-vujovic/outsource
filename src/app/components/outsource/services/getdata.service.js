    //service for fetching json data
    outsource.service('sharedService', function($http, $q){

        /**
         * This function fetch data from json
         * @param path - this is the url of file
         */  
        this.getData = function() {
            
          var defer  = $q.defer();
          $http.get('json/index/klijenti.json')
             .success(function(result){
               defer.resolve(result);
          });

          return defer.promise;  

        };
     
    });


