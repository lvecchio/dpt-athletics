'use strict';


function MeasurementsController ($scope, xmlParser, FirebaseService, Measurement) {

  var vm = this;
  vm.page = 'Measurements Controller';
  vm.result = {};

  // TODO: cleanup this function -- look into better alternative to scope.$apply

  // in fileUploadDirective
  $scope.convertXML = function($fileContent){
    $scope.result = xmlParser.xml_str2json($fileContent);
    vm.result = $scope.result.newDataSet.Table;
  };

  vm.lookupAthlete = function(athlete) {

    FirebaseService.findUserByName(athlete)
      .then(function (user) {
        return user;
      })
      .then(function(user) {
        console.log(user);
        console.log(user.key());
        console.log(user.val());
        Measurement.create(athlete, user.key());
      })
      .then(null, function(error) {
        console.error(error);
      });
  }
};

angular.module('app').controller('MeasurementsController', MeasurementsController);


