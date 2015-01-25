/**
 * Created by a545703 on 1/24/15.
 */
'use strict';

function Measurement($firebase, FIREBASE_URL) {
  var ref = new Firebase(FIREBASE_URL);
  var measurements = $firebase(ref.child('measurements')).$asArray();

  var Measurement = {
    all: measurements,
    create: function(measurement, userUID) {

      // add measurement to the measurement 'table' (child) in
      // firebase.
      return measurements.$add(measurement)

        // then add it to user_measurements, so we can
        // easily query which measurements belong to a specific user
        .then(function(measurementRef){

          // 1. create 'user_measurements'
          $firebase(ref.child('user_measurements')

            // 2. create a child with the user's simpleloginid
            .child(userUID))

            // 3. add the key here that corresponds to the most in the main
            // measurements table.
            .$push(measurementRef.key());

        });
    },
    get: function (measurementId) {
      return $firebase(ref.child('measurements').child(measurementId)).$asObject();
    },
    delete: function (measurement) {
      return measurements.$remove(measurement);
    },
    update: function (measurement) {
      return measurements.$save(measurement);
      // edit data here
    }
  };

  return Measurement;
}

angular.module('app').factory('Measurement', Measurement);
