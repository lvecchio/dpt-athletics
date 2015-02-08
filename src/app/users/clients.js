(function(){
  'use strict';
  angular
    .module('app.users')
    .controller('Clients', Clients);

  /* @ngInject */
  function Clients() {
    /*jshint validthis: true */
    var vm = this;

    vm.data = [
      {
        "firstName": "Laura",
        "lastName": "Vecchio"
      },
      {
        "firstName": "Dan",
        "lastName": "Lourenco"
      }
    ];

    vm.gridOptions = {
      data: 'data',
      columnDefs: [
        {field:'firstName', displayName:'First Name'},
        {field:'lastName', displayName:'Last Name'}
      ]
    };

  }
})();
