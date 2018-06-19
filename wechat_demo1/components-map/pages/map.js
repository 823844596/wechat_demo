Page({
  data: {
    latitude: 22.540822,
    lonngitude: 113.934457,
    scale: 16,
    markers: [{
      latitude: 22.540822,
      longitude: 113.934457,
      name: '腾讯大厦',
      callout: {
        conntent: '标记点上方气泡',
        color: '#fff',
        fonntSize: 15,
        borderRadius: 10,
        bgColor: '#000',
        display: 'ALWAYS'
      },
      label: {
        content: '这是腾讯大厦',
        color: '#333',
        x: 4,
        y: 0,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        bgColor: '#fff',
        padding: 2,
        textAlign: 'center'
      }
    }],
    controls: [{
      id: 1,
      position: {
        left: 10,
        top: 20,
        width: 30,
        height: 30
      },
      iconPath: '../../image/plus.png',
      clickable: true
    },{
      id: 2,
      position: {
        left: 10,
        top: 55,
        width: 30,
        height: 30
      },
      iconPath: '../../image/minus.png',
      clickable: true
    }]
  },

  tapControl(e) {
    const scaleLevel = this.data.scale;
    if (e.controlId === 1) { // 放大
      this.setData({
        scale: scaleLevel < 20 ? scaleLevel + 1 : 20
      })
    } else {
      this.setData({
        scale: scaleLevel > 5 ? scaleLevel - 1 : 5 
      })
    }
  },

  regionChange(e) {
    console.log('视野发生变化', e)
  }
})