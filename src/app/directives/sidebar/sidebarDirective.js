'use strict';

/**
 * @name dptSidebar
 * @desc Custom directive for sidebar navigation
 * @doc https://github.com/toddmotto/angularjs-styleguide#directives
 */

function dptSidebar() {
  return {
    templateUrl: '/app/directives/sidebar/sidebarView.html'
  };
}

// load directive
angular.module('app').directive('dptSidebar', dptSidebar);
