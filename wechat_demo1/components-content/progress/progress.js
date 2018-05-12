Page({
  data: {
    percent: 0
  },

  onLoad() {
    let timer;
    timer = () => {
      setTimeout(() => {
        const value = this.data.percent;
        this.setData({
          percent: value < 100 ? value + 10 : value
        });
        timer();
      },  2000);
    }
    timer();
  }
})