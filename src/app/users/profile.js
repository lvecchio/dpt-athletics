(function(){
  'use strict';
  angular
    .module('app.users')
    .controller('Profile', Profile);

  /* @ngInject */
  function Profile($log, dataservice) {
    /*jshint validthis: true */
    var vm = this;
    vm.title = 'Profile';
    vm.saveProfile = saveProfile;

    function saveProfile() {

      vm.user.email = dataservice.user.password.email;
      vm.user.fitnessLevel = 'testing';

      dataservice.updateProfile(vm.user);
    }

    //TODO: Create method to save profile data back to Firebase
  }
})();
