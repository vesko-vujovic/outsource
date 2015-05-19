/**
 * This is the main config file in this app, here we define initialization and all other things
 */

var outsource = angular.module('outsourceApp', ['ui.router']);
(function(outsource){
    //we are calling module
	outsource.module('outsourceApp')

    //define controller
    outsource.controller('mainCtrl', [$scope], function($scope){
     console.log('radi');
    });


});
