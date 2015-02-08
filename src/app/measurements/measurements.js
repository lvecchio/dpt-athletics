(function() {
  'use strict';

  angular
    .module('app.measurements')
    .controller('Measurements', Measurements);

  /* @ngInject */
  function Measurements(measurementservice, $scope, $log) {
    var vm = this;
    vm.page = 'Measurements';
    vm.result = {};

    // add back to argument list for measurements xmlParser,
    // in fileUploadDirective
    //$scope.convertXML = function($fileContent){
    //  $scope.result = xmlParser.xml_str2json($fileContent);
    //  vm.result = $scope.result.newDataSet.Table;
    //};

  }

})();
