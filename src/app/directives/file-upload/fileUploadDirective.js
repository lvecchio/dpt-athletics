/**
 * Created by a545703 on 1/17/15.
 */
'use strict';

/**
 * @name dptFileUpload
 * @desc Custom directive to handle HTML5 File Uploads
 * http://jsfiddle.net/alexsuch/6aG4x/
 * @author Dan Lourenco
 */
function onReadFile($parse) {

  return {
    restrict   : 'A',
    scope: false,
    link: function(scope, elem, attrs) {
      var fn = $parse(attrs.onReadFile);
      elem.on('change', function(onChangeEvent) {

        // use HTML5 FileReader API
        var reader = new FileReader();
        reader.onload = function(onLoadEvent) {
          scope.$apply(function() {
            fn(scope, {$fileContent:onLoadEvent.target.result});
          });
        };
        reader.readAsText(onChangeEvent.target.files[0]);

      });
    }
  }
}

angular.module('app').directive('onReadFile', onReadFile);
