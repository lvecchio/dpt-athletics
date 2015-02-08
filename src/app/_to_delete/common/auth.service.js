/**
 * Created by a545703 on 1/28/15.
 */

'use strict';


/**
 * @name Auth
 * @desc Service for all Firebase logic
 * @doc https://github.com/toddmotto/angularjs-styleguide#services-and-factory
 */
function AuthFactory ($firebase, $firebaseAuth, FIREBASE_URL, $q) {

  var Auth = {};

  // create firebase references
  var ref = new Firebase(FIREBASE_URL);
  var authObject = $firebaseAuth(ref);
  var data = $firebase(new Firebase(FIREBASE_URL)).$asObject();

  /**
   * @name resolveUser
   * @desc Synchronously retrieves the current authentication state of the client.
   * If the user is authenticated, an object containing the fields uid (the unique user ID),
   * provider (string identifying the provider), auth (the authentication token payload),
   * and expires (expiration time in seconds since the Unix epoch) - and more,
   * depending upon the provider used to authenticate - will be returned.
   * Otherwise, the return value will be null.
   */
  Auth.resolveUser = function () {
    return authObject.$getAuth();
  };

  /**
   * @name login
   * @desc Authenticates a Firebase client using an email / password combination.
   * This function takes two arguments: an object containing email and password attributes
   * corresponding to the user account and an object containing optional client arguments,
   * such as configuring session persistence.
   * @param {string} email
   * @param {password} password
   */
  Auth.login = function (user) {
    console.log(user);
    return authObject.$authWithPassword({
      email   : user.email,
      password: user.password
    });
  };

  /**
   * @name logout
   * @desc Unauthenticates a Firebase client.
   * This method should be called when you want to log out the current user.
   * It takes no arguments and returns no value. When logout is called, the $onAuth() callback(s) will be fired.
   */
  Auth.logout = function () {
    return authObject.$unauth();
  };

  /**
   * @name createUser
   * @desc Creates a new user account using an email / password combination.
   * This function returns a promise that is resolved with an object containing
   * user data about the created user. Currently, the object only contains the created user’s uid.
   * @param {object} user
   */
  Auth.createUser = function (user) {
    return authObject.$createUser(user.email, user.password);
  };

  /**
   * @name removeUser
   * @desc Removes an existing user account using an email / password combination.
   * This function returns a promise that is resolved when the user
   * has been successfully removed on the Firebase servers.
   * @param {object} user
   */
  Auth.removeUser = function (user) {
    return authObject.$removeUser(user.email, user.password);
  };

  /**
   * @name createProfile
   * @desc The $set() method takes one or two arguments. If a key is provided,
   * it sets the value of a child record to data. Otherwise, it replaces the
   * entire $firebase path with the data provided. This is the equivalent of calling set(value) on a Firebase reference.
   * @param {object} user
   */
  Auth.createProfile = function (user, authData) {
    var profile = {
      email        : user.email,
      firstName    : '',
      lastName     : '',
      age          : '',
      accountStatus: '',
      fitnessLevel : ''
    };
    var user = $firebase(ref.child('users').child(authData.uid));
    return user.$set(profile);
  };

  // TODO: Refactor this service
  Auth.findUserByName = function (user) {

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
  };

  Auth.getProfile = function (uid) {
    return data;
  };

  return Auth;

}


// load controller
angular.module('app').factory('AuthFactory', AuthFactory);