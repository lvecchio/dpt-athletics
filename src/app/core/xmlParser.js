(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('xmlParser', xmlParser);

  function xmlParser () {
    var x2js = new X2JS();
    return {
      xml2json: x2js.xml2json,
      xml_str2json: function (args) {
        return angular.bind(x2js, x2js.xml_str2json, args)();
      },
      json2xml: x2js.json2xml_str
    }
  }

})();

