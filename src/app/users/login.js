(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('Login', Login);

  /* @ngInject */
  function Login(dataservice, $state, $log) {
    /*jshint validthis: true */
    var vm = this;
    vm.signIn = signIn;
    vm.register = register;
    vm.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;



    function signIn() {
      // create user object with login information
      var user = {
        email: vm.email,
        password: vm.password
      };

      dataservice.login(user)
        .then(function (authData) {
          $log.debug('Logged in as: ', authData.password.email);
          $state.go('base.dashboard');
        })
        .catch(function (error) {
          $log.error('Authentication failed: ', error);
        });
    };

    function register() {
      $state.go('register');
    }


  }

})();
