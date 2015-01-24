'use strict';


function MeasurementsController ($scope, xmlParser, FirebaseService) {

  var vm = this;
  vm.page = 'Measurements Controller';
  vm.result = {};

  // TODO: cleanup this function -- look into better alternative to scope.$apply
  // in fileUploadDirective
  $scope.convertXML = function($fileContent){
    $scope.result = xmlParser.xml_str2json($fileContent);
    vm.result = $scope.result.newDataSet.Table;
  };

  vm.lookupAthlete = function(x) {
    console.log('look up athlete');
    FirebaseService.findUserByName(x);
  }
}

// ALGORITHM TO FILTER

angular.module('app').controller('MeasurementsController', MeasurementsController);



/*

Given a dataset (json object)

For each athlete in the data set
if athlete.FirstName + athlete.LastName matches user.FirstName + user.LastName
associate measurement record with user_measurement in FireBase
 */
