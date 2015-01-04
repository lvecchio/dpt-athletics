'use strict';

/**
 * @name dptSidebarRight
 * @desc Custom directive for right sidebar navigation
 * @doc https://github.com/toddmotto/angularjs-styleguide#directives
 */

function dptSidebarRight() {
  return {
    templateUrl: '/app/directives/sidebarRight/sidebarRightView.html'
  };
}

// load directive
angular.module('app').directive('dptSidebarRight', dptSidebarRight);
