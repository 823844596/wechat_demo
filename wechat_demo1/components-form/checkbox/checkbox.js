Page({
  data: {
    items: [
      {value: 'USA', name: '美国'},
      { value: 'CHN', name: '中国', checked: true },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
    ]
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带的value值未：', e);
    var items = this.data.items;
    var values = e.detail.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false;
      for (var j=0, lenJ= values.length; j< lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      items: items
    })
  }
})