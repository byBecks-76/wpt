// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.pattern.alpha
// Description:Shadows are drawn correctly for partially-transparent fill patterns
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  var response = await fetch('/images/transparent50.png')
  var blob = await response.blob();
  var img = await createImageBitmap(blob);
  var pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.shadowOffsetY = 50;
  ctx.shadowColor = '#00f';
  ctx.fillStyle = pattern;
  ctx.fillRect(0, -50, 100, 50);

  _assertPixelApprox(canvas, 50,25, 127,0,127,255, 2);
}, "Shadows are drawn correctly for partially-transparent fill patterns");
done();