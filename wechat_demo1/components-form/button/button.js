const types = ['dafault', 'primary', 'warn'];

const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  setDisabled: function (e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain: function (e) {
    this.setData({
      palin: !this.data.plain
    })
  },

  setLoading: function (e) {
    this.setData({
      plain: !this.data.palin
    })
  },

  getPhoneNumber: function (info) {
    console.log('phoneNumber: '+ info)
  },

  getUserInfo(e) {
    console.log('user info : ' + e);
    console.log(e.success)
    if (e.success) {
     
      const userInfo = e.userInfo;
      console.log('获取用户信息成功');
      console.log(userInfo)
    }
  },
  
  getContactInfo: function (e) {
    console.log('contact info: ' + e);
  },

  onShareAppMessage() {
    console.log('通过open-type=share后，用户点击转发，触发该方法')
  }

}


for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

const t = Page(pageObject);

