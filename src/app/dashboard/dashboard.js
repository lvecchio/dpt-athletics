(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('Dashboard', Dashboard);

  function Dashboard(dataservice) {
    /* @ngInject */
    var vm = this;

    vm.title = 'Dashboard View';
    vm.user = dataservice.resolveUser().uid;

  }
})();
