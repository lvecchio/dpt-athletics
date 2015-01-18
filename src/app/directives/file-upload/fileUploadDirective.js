/**
 * Created by a545703 on 1/17/15.
 */
'use strict';

/**
 * @name dptFileUpload
 * @desc Custom directive to handle HTML5 File Uploads
 * @author Dan Lourenco
 */
function dptFileUpload() {

  function handleFileSelect(scope, elem, attrs) {
    console.log('yo');

  }

  return {
    restrict   : 'E',
    templateUrl: '/app/directives/file-upload/fileUploadView.html',
    link: function(scope, elem, attrs) {
      handleFileSelect(scope, elem, attrs);
    }
  }
}

angular.module('app').directive('dptFileUpload', dptFileUpload);
