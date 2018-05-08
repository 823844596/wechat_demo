var order = ['red', 'yellow', 'blue', 'green', 'red'];

Page({
  data: {
    toView: 'red',
    scrollTop: 0
  },
  /**
   * scroll-view api
   */
  upper: function(e) {
    console.log('upper', e, '滚动条滚动到顶部/左边，会触发 scrolltoupper 事件');
  },
  lower: function (e) {
    console.log('lower', e, '滚动到底部/右边，会触发 scrolltolower 事件');
  },

  scroll: function (e) {
    console.log('scroll', e, '滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}');
  },

  tap: function (e) {
    console.log('通过scroll-into-view属性绑定对应的数值，手动改变指向数值， 切换到滚动子元素地方')
    for (var i = 0; i< order.length; i++) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        });
        break;
      }
    }
  },

  tapMove: function (e) {
    console.log('通过scroll-top属性绑定scrollTop属性值，移动滚动条位置')
    this.setData({
      scrollTop: this.data.scrollTop + 20
    })
  }
})