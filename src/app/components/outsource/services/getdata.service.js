    //service for fetching json data
    outsource.service('sharedService', function($http, $q){

        /**
         * This function fetch data from json
         * @param path - this is the url of file
         */  
        this.getData = function() {
            
            //$q method to deal with async methods
            var deferred  = $q.defer();
            $http.get("/outsource/json/index/klijenti.json")
              .success(function(data){
                  console.log('radi');
                  deferred.resolve(data);
              })
              .error(function(err, status){
                  deferred.reject(err);
              });

            return deferred.promise;
        };
     
    });


