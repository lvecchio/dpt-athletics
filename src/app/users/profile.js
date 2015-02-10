(function(){
  'use strict';
  angular
    .module('app.users')
    .controller('Profile', Profile);

  /* @ngInject */
  function Profile() {
    /*jshint validthis: true */
    var vm = this;
    vm.title = 'Profile';

    // current user
    vm.user = {
      userType: 'Client',
      firstName: 'Laura',
      lastName: 'Vecchio',
      bodyFat: '25',
      fitnessLevel: 'Blue',
      classesAttended: '78'
    }

    //TODO: Create method to save profile data back to Firebase
  }
})();
