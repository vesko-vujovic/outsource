    //service for fetching json data
    outsource.service('sharedService', function($http, $q){

        /**
         * This function fetch data from json
         * @param path - this is the url of  the json file
         */  
        this.getData = function(path) {
            //$q method to deal with async methods
            var deferred  = $q.defer();
            $http.get(path)
              .success(function(data){
                  deferred.resolve(data);
              })
              .error(function(err, status){
                  deferred.reject(err);
              });

            return deferred.promise;
        };
     
    });


