Page({
  clickMe(e) {
    console.log(e)
  },
  clickA(e){
    console.log('click A')
  },
  clickB(e){
    console.log('click B')
  },
  clickC(e) {
    console.log('click C')
  },
  captureClickB(e) {
    console.log('捕获事件')
  },
  captureCactchClickC(e) {
    console.log('取消冒泡/捕获事件');
  }
})