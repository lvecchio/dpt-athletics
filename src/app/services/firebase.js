'use strict';

/**
 * @name FirebaseService
 * @desc Service for all Firebase logic
 * @doc https://github.com/toddmotto/angularjs-styleguide#services-and-factory
 */
function FirebaseService ($firebase, $firebaseAuth, FIREBASE_URL) {

  var FirebaseService = {};

  // create firebase references
  FirebaseService.ref = new Firebase(FIREBASE_URL);
  FirebaseService.authObj = $firebaseAuth(FirebaseService.ref);

  /**
   * @name login
   * @desc Login user with firebase credentials
   * @param {string} email - Email entered in Login controller
   * @param {password} password - Password entered in Login controller
   */
  FirebaseService.login = function (email, password) {

    FirebaseService.authObj.$authWithPassword({
      email: email,
      password: password
    }).then(function(authData){
      console.log('Logged in as: ', authData.password.email);
    }).catch(function(error){
      console.error('Authentication failed: ', error);
    });

  };

  /**
   * @name createUser
   * @desc Creates new user in "users" object in Firebase
   * @param {string} email - User's email to create account with
   * @param {password} password - User's password
   */
  FirebaseService.createUser = function (email, password) {

    FirebaseService.authObj.$createUser(email, password).then(function(){
      console.log("User created successfully");

      // Once user is created, automatically log user into app
      return FirebaseService.authObj.$authWithPassword({
        email: email,
        password: password
      });

    }).then(function(authData){

      console.log("Logged in as: ", authData.uid);
      console.log(authData);

      // create user record with uid & email
      var newUser = {
        email: authData.password.email
      };

      // store user data in profile object
      var profileRef = $firebase(FirebaseService.ref.child('users'));
      profileRef.$set(authData.uid, newUser);

    }).catch(function(error) {
      console.log("Error: ", error);
    });

  };

  return FirebaseService;
}



// load controller
angular.module('app').factory('FirebaseService', FirebaseService);
