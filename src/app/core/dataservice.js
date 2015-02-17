(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice($firebase, $firebaseAuth, FIREBASE_URL, $q, $log, $stateParams) {

    // create firebase references
    var ref = new Firebase(FIREBASE_URL);
    var authObject = $firebaseAuth(ref);
    //var data = $firebase(new Firebase(FIREBASE_URL)).$asObject();

    /* DATASERVICE API */
    var service = {
      login:              login,
      logout:             logout,
      resolveUser:        resolveUser,
      createUser:         createUser,
      removeUser:         removeUser,
      findUserByName:     findUserByName,
      createProfile:      createProfile,
      sendPasswordReset:  sendPasswordResetEmail,
      resetPassword:      resetPassword,
      updateProfile:      updateProfile,
      user:               {}
    };

    function login(user) {
      return authObject.$authWithPassword({
        email   : user.email,
        password: user.password
      });
    }

    function logout() {
      return authObject.$unauth();
    }

    function resolveUser() {
      return authObject.$getAuth();
    }

    function createUser(user) {
      return authObject.$createUser(user.email, user.password);
    }

    function removeUser(user) {
      return authObject.$removeUser(user.email, user.password);
    }

    function findUserByName(user) {
      $log.debug('Athlete passed into service: ');
      $log.debug(user);

      var defer = $q.defer();
      ref.child('users').once('value', function (userPathSnapshot) {
        userPathSnapshot.forEach(function (userSnap) {

          if ( user.FirstName === userSnap.val().firstName &&
            user.LastName === userSnap.val().lastName) {

            console.log('found a match!');
            defer.resolve(userSnap);
          }

        });
      });

      return defer.promise;
    }

    function createProfile(user, authData) {
      var profile = {
        email           : user.email,

      };
      var user = $firebase(ref.child('users').child(authData.uid));

      return user.$set(profile);
    }

    function updateProfile(user) {
      // grab the current user from the URL
      var userProfile = $firebase(ref.child('users').child($stateParams.userId)).$asObject();
      userProfile.fitnessLevel = user.fitnessLevel || null;
      userProfile.email = user.email;
      userProfile.firstName = user.firstName;
      userProfile.lastName = user.lastName;
      //userProfile.$save().then(function(ref) {
      userProfile.$save().then(function(ref) {
      }, function(error) {
        console.log('error' + error);
      });

    }

    function sendPasswordResetEmail(user) {
      return authObject.$resetPassword(user.email);
    }

    function resetPassword(user) {
      return authObject.$changePassword({
        email: dataservice.user.password.email,
        oldPassword: user.oldPassword,
        newPassword: user.newPassword
      });
    }

    authObject.$onAuth(function(authData) {
      $log.debug('services/auth: $onAuth');

      // user is logged in -- let's copy info to the user object
      if (authData) {
        angular.copy(authData, service.user);
        // $asObject downloads the data into the local object
        service.user.profile = $firebase(ref.child('profile').child(service.user.uid)).$asObject();
        $log.debug(service.user);
      } else {

        // user is logged out -- destroy dession.
        if(service.user && service.user.profile) {
          service.user.profile.$destroy();
        }
        // delete current user's data
        angular.copy({}, service.user);
      }

    });


    return service;
  }
})();
