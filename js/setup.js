'use strict';

(function () {
  var mainWizardAppearance = document.querySelector('.setup-wizard-appearance');
  var mainWizardCoat = mainWizardAppearance.querySelector('.wizard-coat');
  var mainWizardCoatInput = mainWizardAppearance.querySelector('[name="coat-color"]');
  var mainWizardEyes = mainWizardAppearance.querySelector('.wizard-eyes');
  var mainWizardEyesInput = mainWizardAppearance.querySelector('[name="eyes-color"]');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('[name="fireball-color"]');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.util.userNameInput.addEventListener('invalid', function () {
    if (window.util.userNameInput.validity.tooShort) {
      window.util.userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (window.util.userNameInput.validity.tooLong) {
      window.util.userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (window.util.userNameInput.validity.valueMissing) {
      window.util.userNameInput.setCustomValidity('Обязательное поле');
    } else {
      window.util.userNameInput.setCustomValidity('');
    }
  });

  window.util.userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  mainWizardCoat.addEventListener('click', function () {
    var newMainWizardCoat = WIZARD_COAT_COLORS[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)];
    mainWizardCoat.setAttribute('style', 'fill: ' + newMainWizardCoat);
    mainWizardCoatInput.setAttribute('value', newMainWizardCoat);
  });

  mainWizardEyes.addEventListener('click', function () {
    var newMainWizardEyes = WIZARD_EYES_COLORS[Math.floor(Math.random() * WIZARD_EYES_COLORS.length)];
    mainWizardEyes.setAttribute('style', 'fill: ' + newMainWizardEyes);
    mainWizardEyesInput.setAttribute('value', newMainWizardEyes);
  });

  fireballColor.addEventListener('click', function () {
    var newFireballColor = FIREBALL_COLORS[Math.floor(Math.random() * FIREBALL_COLORS.length)];
    fireballColor.setAttribute('style', 'background: ' + newFireballColor);
    fireballColorInput.setAttribute('value', newFireballColor);
  });

  var makeWizard = function (names, surnames, coatColors, eyesColors) {
    var wizards = [];
    for (var i = 0; i < 4; i++) {
      wizards[i] =
      {
        name: names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)],
        coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
        eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
      };
    }
    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  var wizards = makeWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS);
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  window.util.userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
