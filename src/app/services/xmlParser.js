/**
 * Created by a545703 on 1/20/15.
 */

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

angular.module('app').factory('xmlParser', xmlParser);
