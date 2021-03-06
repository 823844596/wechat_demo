Page({
  canvasIdErrorCallback(e) {
    console.log(e, 'error')
  },

  onReady: function(e) {
    const context = wx.createCanvasContext('firstCanvas', this);

    context.setStrokeStyle('#00ff00');
    context.setLineWidth(5);
    context.rect(0, 0, 200, 200);
    context.stroke();
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(2);
    context.moveTo(160, 100);
    context.arc(100,100, 60, 0, 2 * Math.PI, true);
    context.moveTo(140,140);
    context.arc(100, 100, 40, 0, Math.PI, false);
    context.moveTo(85, 80);
    context.arc(85, 80, 5, 0 , 2 * Math.PI, true);
    context.moveTo(125, 80);
    context.arc(125, 80, 5, 0, 2 * Math.PI, true);
    context.stroke();
    context.draw();
  }
})