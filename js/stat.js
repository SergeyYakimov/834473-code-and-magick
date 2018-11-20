'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var FONT_HEIGHT = 20;
var barHeight = 150;
var FONT_PARAMETER = '16px PT Mono';
var BASELINE = 'hanging';
var topOfBar = CLOUD_Y + 3 * FONT_HEIGHT + 2 * GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var writeCongratulation = function (ctx) {
  ctx.fillText('Ура, Вы победили!', CLOUD_X * 2.5, CLOUD_Y * 3);
  ctx.fillText('Список результатов:', CLOUD_X * 2.4, CLOUD_Y * 5);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var makeGraphics = function (ctx, names, times) {
  var maxTime = Math.round(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(names[i], CLOUD_X + 2 * GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + 2 * GAP + (BAR_GAP + BAR_WIDTH) * i, topOfBar + barHeight - GAP - (barHeight * times[i]) / maxTime);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.ceil(Math.random() * 1000 / 1000);
    ctx.fillRect(CLOUD_X + 2 * GAP + (BAR_GAP + BAR_WIDTH) * i, topOfBar + barHeight - (barHeight * times[i]) / maxTime, BAR_WIDTH, barHeight * times[i] / maxTime);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgb(255, 255, 255)');

  ctx.font = FONT_PARAMETER;
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.textBaseLine = BASELINE;

  writeCongratulation(ctx);

  makeGraphics(ctx, names, times);
};
