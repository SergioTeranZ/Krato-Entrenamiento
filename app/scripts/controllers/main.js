'use strict';

/**
 * @ngdoc function
 * @name kratoAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kratoAdminApp
 */
angular.module('kratoAdminApp',['firebase'])
  .controller('MainCtrl', function ($scope,$firebase) {
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  
    // connect to firebase 
  var ref = new Firebase("https://angularprueba-55b94.firebaseio.com/comercios");  
  var fb = $firebase(ref);

    // sync as object 
  var syncObject = fb.$asObject();

    // three way data binding
  syncObject.$bindTo($scope, 'comercios');
  console.log("comercios");
  /*console.log(comercios);*/

  });
