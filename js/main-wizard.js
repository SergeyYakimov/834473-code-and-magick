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
    eyesChangeHandler: function () {},
    coatChangeHandler: function () {}
  };

  var updateWizards = function () {
    window.wizards.drawWizard(wizards.sort(function (left, right) {
      var rankDiff = window.similar.getRank(right, coatColor, eyesColor) - window.similar.getRank(left, coatColor, eyesColor);
      if (rankDiff === 0) {
        rankDiff = window.similar.namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  wizardChange.eyesChangeHandler = window.debounce( function (color) {
    eyesColor = color;
    updateWizards();
  });

  wizardChange.coatChangeHandler = window.debounce( function (color) {
    coatColor = color;
    updateWizards();
  });

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
    updateWizards();
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
