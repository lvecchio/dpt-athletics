'use strict';

/**
 * @name dptHeader
 * @desc Custom directive for site header
 * @doc https://github.com/toddmotto/angularjs-styleguide#directives
 */

function dptHeader() {
  return {
    templateUrl: '/app/directives/header/headerView.html'
  };
}

// load directive
angular.module('app').directive('dptHeader', dptHeader);


