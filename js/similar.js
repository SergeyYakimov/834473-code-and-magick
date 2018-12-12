'use strict';

(function () {
  var getRank = function (wizard, coatColor, eyesColor) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
};

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function (wizards, coatColor, eyesColor) {
    window.wizards.drawWizard(wizards.sort(function (left, right) {
      var rankDiff = getRank(right, coatColor, eyesColor) - getRank(left, coatColor, eyesColor);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.similar = {
    updateWizards: updateWizards
  };
})();
