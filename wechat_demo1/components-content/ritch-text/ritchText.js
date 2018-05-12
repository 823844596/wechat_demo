Page({
  data: {
    nodes: [
      {
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: blue;'
        },
        children: [
          {
            type: 'text',
            text: '这是ritch-text， 支持部分html节点'
          }
        ]
      },
      {
        name: 'div',
        children: [
          {
            name: 'strong',
            children: [
              {
                type: 'text',
                text: 'strong标签？'
              }
            ]
          }
        ]
      },
      {
        name: 'img',
        attrs: {
          src: 'http://img2.imgtn.bdimg.com/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
          alt: '测试图片,仅支持网络图片',
          width: '60px',
          height: '60px'
        }
      },
      {
        name: 'a',
        children: [
          {
            type: 'text',
            text: 'a标签'
          }
        ]
      }
    ]
  },

  touchStart: function (e) {
    console.log('touch start')
  },

  touchMove: function (e) {
    console.log('touch move')
  },

  touchEnd: function (e) {
    console.log('touch end')
  },

  touchCancel: function (e) {
    console.log('touch cancel')
  },

  touchTap: function (e) {
    console.log(e)
  },

  longTap() {
    console.log('long tap')
  },

  tap() {
    console.log('tap事件')
  }
})