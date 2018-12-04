'use strict';

(function () {
  var mainWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var mainWizardCoat = mainWizardAppearance.querySelector('.wizard-coat');
  var mainWizardCoatInput = mainWizardAppearance.querySelector('[name="coat-color"]');
  var mainWizardEyes = mainWizardAppearance.querySelector('.wizard-eyes');
  var mainWizardEyesInput = mainWizardAppearance.querySelector('[name="eyes-color"]');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('[name="fireball-color"]');
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomColor = function (colors) {
    return colors[Math.floor(colors.length * Math.random())];
  };

  var getWizardCoatColors = function () {
    var newMainWizardCoat = getRandomColor(WIZARD_COAT_COLORS);
    mainWizardCoat.setAttribute('style', 'fill: ' + newMainWizardCoat);
    mainWizardCoatInput.setAttribute('value', newMainWizardCoat);
  };

  var getWizardEyesColors = function () {
    var newMainWizardEyes = getRandomColor(WIZARD_EYES_COLORS);
    mainWizardEyes.setAttribute('style', 'fill: ' + newMainWizardEyes);
    mainWizardEyesInput.setAttribute('value', newMainWizardEyes);
  };

  var getWizardFireballColor = function () {
    var newFireballColor = getRandomColor(FIREBALL_COLORS);
    fireballColor.setAttribute('style', 'background: ' + newFireballColor);
    fireballColorInput.setAttribute('value', newFireballColor);
  };

  window.mainWizard = {
    getWizardCoatColors: getWizardCoatColors,
    getWizardEyesColors: getWizardEyesColors,
    getWizardFireballColor: getWizardFireballColor,
    mainWizardCoat: mainWizardCoat,
    mainWizardEyes: mainWizardEyes,
    fireballColor: fireballColor,
    coatColors: WIZARD_COAT_COLORS,
    eyesColors: WIZARD_EYES_COLORS
  };
})();
