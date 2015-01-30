'use strict';

/**
 * @name DashboardController
 * @desc Controller for the dashboard screen.
 * @doc https://github.com/toddmotto/angularjs-styleguide#controllers
 */
function DashboardController(FirebaseService) {

  // create reference to view model
  var dashboard = this;

  dashboard.title = "dashboard view";
  dashboard.user = FirebaseService.resolveUser().uid;


  /**
   * @name doSomething
   * @desc Does something awesome
   * @param {Number} x - First number to do something with
   * @param {Number} y - Second number to do something with
   * @returns {Number}
   */
  dashboard.doSomething = function (x, y) {

  };


}

// resolve
DashboardController.resolve = {

};

// load controller
angular.module('app').controller('DashboardController', DashboardController);
