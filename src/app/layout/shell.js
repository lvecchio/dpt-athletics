(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('Shell', Shell);

  /* @ngInject */
  function Shell($log) {
    /*jshint validthis: true */
    var vm = this;
    $log.debug('shell loaded.');
  }
})();
