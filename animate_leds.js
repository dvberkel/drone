var arDrone = require('ar-drone');
var client = arDrone.createClient();

var option = process.argv[2] || 1;
var duration = 10;

var animations = [
  /*  0 */ 'blank',
  /*  1 */ 'blinkGreen',
  /*  2 */ 'blinkGreenRed',
  /*  3 */ 'blinkOrange',
  /*  4 */ 'blinkRed',
  /*  5 */ 'blinkStandard',
  /*  6 */ 'doubleMissile',
  /*  7 */ 'fire',
  /*  8 */ 'frontLeftGreenOthersRed',
  /*  9 */ 'frontRightGreenOthersRed',
  /* 10 */ 'green',
  /* 11 */ 'leftGreenRightRed',
  /* 12 */ 'leftMissile',
  /* 13 */ 'leftRedRightGreen',
  /* 14 */ 'rearLeftGreenOthersRed',
  /* 15 */ 'rearRightGreenOthersRed',
  /* 16 */ 'red',
  /* 17 */ 'redSnake',
  /* 18 */ 'rightMissile',
  /* 19 */ 'snakeGreenRed',
  /* 20 */ 'standard'
];
var animation = animations[Math.min(Math.max(option, 0), animations.length - 1)];

client.animateLeds(animation, 1, duration);
