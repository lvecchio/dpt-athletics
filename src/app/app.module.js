(function() {
  'use strict';

  /**
   * @name app
   * @desc Main module for angular app
   * @doc Using John Papa's Best Practices/Styleguide
   */
  angular.module('app', [
    /*
     *  Each feature area will have access to all methods in core.
     */
    'app.core',

    /*
     * Cross-module directives here
     */
    'app.widgets',

    /*
     * Feature Areas
     */
    'app.layout',
    'app.users',
    'app.dashboard',
    'app.measurements',
    'app.goals'

    //'app.exercises',
    //'app.measurements',
    //'app.scheduling',
  ]);


})();






