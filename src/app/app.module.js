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
     * Feature Areas
     */
    'app.users',
    'app.dashboard',
    'app.measurements',
    'app.layout'
    //'app.exercises',
    //'app.measurements',
    //'app.scheduling',
  ]);


})();






