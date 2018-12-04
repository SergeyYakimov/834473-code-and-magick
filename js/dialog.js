'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.userDialog.querySelector('.setup-close');

  var openPopup = function () {
    window.util.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', window.util.isEscEvent);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    window.util.closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, window.util.closePopup);
  });
})();
