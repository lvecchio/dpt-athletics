'use strict';


function MeasurementsController ($scope, xmlParser) {

  var vm = this;
  vm.page = 'Measurements Controller';
  vm.result = {};

  // TODO: cleanup this function -- look into better alternative to scope.$apply
  // in fileUploadDirective
  $scope.convertXML = function($fileContent){
    $scope.result = xmlParser.xml_str2json($fileContent);
    vm.result = $scope.result.newDataSet.Table;
  };

}

angular.module('app').controller('MeasurementsController', MeasurementsController);
