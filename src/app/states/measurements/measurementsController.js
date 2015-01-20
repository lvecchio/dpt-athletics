'use strict';


function MeasurementsController ($scope) {
  var vm = this;

  this.page = 'Measurements Controller';
  $scope.showContent = function($fileContent){
    $scope.content = $fileContent;
    console.log($fileContent);
  };
}

angular.module('app').controller('MeasurementsController', MeasurementsController);
