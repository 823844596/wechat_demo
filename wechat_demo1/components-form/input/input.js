Page({
  data: {
    focus: false,
    inputValue: ''
  },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  bindReplaceInput: function (e) {
    const value = e.detail.value;
    let pos = e.detail.cursor;
    let left;
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos);
      // 计算光标的位置
      pos = left.replace(/11/g, '2');
    }
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }
  },
  
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      wx.hideKeyboard();
    }
  }


})