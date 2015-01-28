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

    FirebaseService.findUserByName(athlete).then(function (user) {
      Measurement.create(athlete, user.key()).then(function (){
        console.log('measurement created');
      });
    });
  };
}

angular.module('app').controller('MeasurementsController', MeasurementsController);
