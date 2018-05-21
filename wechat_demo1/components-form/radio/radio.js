Page({
  data: {
    items: [
      {
        value: 'USA', name: '美国'
      },
      {
        value: 'CHN', name: '中国', checked:'true'
      },
      {
        value: 'JPN', name: '日本'
      },
      {
        value: 'FRA', name: '法国'
      }
    ]
  },

  radioChange: function (e) {
    console.log('radio 发生change事件， 携带value为：',e,  e.detail.value);
    var items = this.data.items;
    for(var i =0; i< items.length; i++) {
      items[i].checked = items[i].value === e.detail.value;
    }

    this.setData({
      items: items
    })
  }
})