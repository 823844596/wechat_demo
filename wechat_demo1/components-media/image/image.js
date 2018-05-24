Page({
  loadImage: function (e) {
    console.log('加载完图片', e.detail)
  },

  loadError: function (e) {
    console.log('加载异常触发', e.detail)
  }
})