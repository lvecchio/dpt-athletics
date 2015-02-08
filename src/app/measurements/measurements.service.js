(function() {
  'use strict';

  angular
    .module('app.measurements')
    .factory('measurementservice, measurementservice');

  /* @ngInject */
  function measurementservice($firebase, $firebaseAuth, FIREBASE_URL, $q) {
    var ref = new Firebase(FIREBASE_URL);
    var measurements = $firebase(ref.child('measurements')).$asArray();

    var service = {
      all: all,
      create: create,
      get: get,
      delete: del,
      update: update
    };

    return service;

    function all() {
      return measurements;
    }

    function create(measurement, userUID) {

      // add measurement to the measurement 'table' (child) in
      // firebase.
      return measurements.$add(measurement)

        // then add it to user_measurements, so we can
        // easily query which measurements belong to a specific user
        .then(function (measurementRef) {

          // 1. create or reference 'user_measurements'
          $firebase(ref.child('user_measurements')

            // 2. create a child with the user's simpleloginid
            .child(userUID))

            // 3. add the key here that corresponds to the most in the main measurements table.
            .$push(measurementRef.key());

        });
    }

    function get(measurementId) {
      return $firebase(ref.child('measurements').child(measurementId)).$asObject();
    }

    function del(measurement) {
      return measurements.$remove(measurement);
    }

    function update(measurement) {
      return measurements.$save(measurement);
    }

  }
})();
