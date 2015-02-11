(function () {
  'use strict';

  angular
    .module('app.users')
    .controller('ForgotPassword', ForgotPassword);

  /* @ngInject */
  function ForgotPassword(dataservice, $log, $state) {
    /*jshint validthis: true */
    var vm = this;
    vm.sendPasswordResetEmail = sendPasswordResetEmail;

    ///////////////////
    function sendPasswordResetEmail() {
      var user = {
        email: vm.email
      };

      $log.debug('ForgotPassword Controller: sendPasswordResetEmail called');

      dataservice.sendPasswordReset(user)
        .then(function() {
          $log.debug('Password reset email sent successfully');
          $state.go('reset');
        })
        .catch(function(error) {
          $log.error('Error:' + error);
        });
    }
  }

})();
