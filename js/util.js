'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var userDialog = document.querySelector('.setup');
  var userNameInput = userDialog.querySelector('.setup-user-name');

  var isEscEvent = function (evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== userNameInput) {
      closePopup();
    }
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    userDialog.style.top = '';
    userDialog.style.left = '';
    document.removeEventListener('keydown', isEscEvent);
  };


  window.util = {
    isEscEvent: isEscEvent,

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    userNameInput: userNameInput,
    userDialog: userDialog,
    closePopup: closePopup
  };
})();
