Page({
  stateChange(e) {
    console.log('live-player code:', e.detail.code)
  },

  error(e) {
    console.log('live-player error', e.detail.errMsg)
  },

  netStatus(e) {
    console.log('net status', e.detail)
  }
})