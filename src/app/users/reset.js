(function () {
  'use strict';

  angular
    .module('app.users')
    .controller('ResetPassword', ResetPassword);

  /*ngInject */
  function ResetPassword(dataservice, $log, $state) {
    /*jshint validthis: true */
    var vm = this;
    vm.resetUserPassword = resetUserPassword;

    ///////////////////
    function resetUserPassword() {

      var user = {
        email: vm.email,
        oldPassword: vm.oldPassword,
        newPassword: vm.newPassword
      };

      $log.debug('ResetPassword Controller: reset called');

      dataservice.resetPassword(user)
        .then(function() {
          $log.debug('Password changed successfully');
          $state.go('base.dashboard');
        })
        .catch(function(error) {
          $log.error('Error: ' + error);
        });
    };
  }
})();
