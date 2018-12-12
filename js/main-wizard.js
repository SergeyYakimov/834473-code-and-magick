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
  var MAIN_WIZARD_URL = 'https://js.dump.academy/code-and-magick';
  var WIZARDS_URL = 'https://js.dump.academy/code-and-magick/data';
  var coatColor;
  var eyesColor;
  var wizards = [];
  var wizardChange = {
    eyesChangeHandler: function (color) {},
    coatChangeHandler: function (color) {}
  };

  wizardChange.eyesChangeHandler = function (color) {
    eyesColor = color;
    window.similar.updateWizards(wizards, coatColor, eyesColor);
  };

  wizardChange.coatChangeHandler = function (color) {
    coatColor = color;
    window.similar.updateWizards(wizards, coatColor, eyesColor);
  };

  var getRandomColor = function (colors) {
    return colors[Math.floor(colors.length * Math.random())];
  };

  var getWizardCoatColors = function () {
    var newMainWizardCoat = getRandomColor(WIZARD_COAT_COLORS);
    mainWizardCoat.setAttribute('style', 'fill: ' + newMainWizardCoat);
    mainWizardCoatInput.setAttribute('value', newMainWizardCoat);
    wizardChange.coatChangeHandler(newMainWizardCoat);
  };

  var getWizardEyesColors = function () {
    var newMainWizardEyes = getRandomColor(WIZARD_EYES_COLORS);
    mainWizardEyes.setAttribute('style', 'fill: ' + newMainWizardEyes);
    mainWizardEyesInput.setAttribute('value', newMainWizardEyes);
    wizardChange.eyesChangeHandler(newMainWizardEyes);
  };

  var getWizardFireballColor = function () {
    var newFireballColor = getRandomColor(FIREBALL_COLORS);
    fireballColor.setAttribute('style', 'background: ' + newFireballColor);
    fireballColorInput.setAttribute('value', newFireballColor);
  };

  var successHandler = function (data) {
    wizards = data;
    window.similar.updateWizards(wizards,coatColor, eyesColor);
  };

  window.backend.load(WIZARDS_URL, successHandler, window.errorBlock.errorHandler);

  var form = window.util.userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {

    var loadHandler = function () {
      window.util.userDialog.classList.add('hidden');
    };

    window.backend.save(MAIN_WIZARD_URL, new FormData(form), loadHandler, window.errorBlock.errorHandler);
    evt.preventDefault();
  });

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
