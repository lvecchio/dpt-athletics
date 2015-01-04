'use strict';

/**
 * @name dptSidebarLeft
 * @desc Custom directive for left sidebar navigation
 * @doc https://github.com/toddmotto/angularjs-styleguide#directives
 */

function dptSidebarLeft() {
  return {
    templateUrl: '/app/directives/sidebarLeft/sidebarLeftView.html'
  };
}

// load directive
angular.module('app').directive('dptSidebarLeft', dptSidebarLeft);
