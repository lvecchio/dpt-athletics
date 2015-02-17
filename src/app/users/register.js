(function() {
  'use strict';
  angular
    .module('app.users')
    .controller('Register', Register);

  /* @ngInject */
  function Register(dataservice, $state, $log) {
    var vm = this;
    vm.registerUser = registerUser;

    function registerUser() {
      var user = {
        email: vm.email,
        password: vm.password
      };

      dataservice.createUser(user)
        .then(function () {
          // log in the new user
          return dataservice.login(user);
        })
        .then(function (authData) {
          $log.debug("Logged in as: " + authData.uid);
          $state.go('base.profile', {userId: authData.uid});
          // create a profile w/ our user
          return dataservice.createProfile(user, authData);
        });

    }
  }
})();
