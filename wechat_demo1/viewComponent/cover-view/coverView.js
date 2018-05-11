Page({
  onReady() {
    // 通过wx.createVideoContext方式获取video对象context
    this.videoCtx = wx.createVideoContext('myVideo', this)
  },

  play() {
    this.videoCtx.play();
  },

  pause() {
    this.videoCtx.pause();
  }
})