Page({
  data: {
    focus: true
  },

  bindTextAreaBlur: function (e) {
    console.log(e.detail.value, 'bindblur')
  }
})