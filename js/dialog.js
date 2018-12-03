'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var dialogHandle = userDialog.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var dialogHandleMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var movement = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - movement.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - movement.x) + 'px';
    };

    var dialogHandleMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', dialogHandleMouseMoveHandler);
      document.removeEventListener('mouseup', dialogHandleMouseUpHandler);

      if (dragged) {
        var dialogHandleClickPreventDefault = function (dragEvt) {
          dragEvt.preventDefault();
          dialogHandle.removeEventListener('click', dialogHandleClickPreventDefault);
        };
        dialogHandle.addEventListener('click', dialogHandleClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', dialogHandleMouseMoveHandler);
    document.addEventListener('mouseup', dialogHandleMouseUpHandler);
  });
})();
