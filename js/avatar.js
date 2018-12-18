'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var upload = document.querySelector('.upload');
  var fileChooser = upload.querySelector('input[type=file]');
  var preview = upload.querySelector('.setup-user-pic');

  var verifyFileName = function (fileName) {
    return FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });
  };

  var fileChangeHandler = function (evt) {
    evt.preventDefault();

    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    if (verifyFileName(fileName)) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  };

  fileChooser.addEventListener('change', fileChangeHandler);
})();
