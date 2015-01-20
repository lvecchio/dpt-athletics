'use strict';


function MeasurementsController ($scope, xmlParser) {
  var vm = this;

  vm.page = 'Measurements Controller';
  $scope.convertXML = function($fileContent){
    $scope.result = xmlParser.xml_str2json($fileContent);
    console.log($scope.result);
  };

}

angular.module('app').controller('MeasurementsController', MeasurementsController);
