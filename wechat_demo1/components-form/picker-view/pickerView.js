const date = new Date();
const years =[];
const months = [];
const days = [];

for(let i = 1990; i< date.getFullYear(); i ++) {
  years.push(i);
}

for(let j = 1; j<=12; j++) {
  months.push(j);
}

for(let k = 1; k<=31; k++) {
  days.push(k);
}

Page({
  data: {
    years: years,
    months: months,
    days: days,
    month: 2,
    day: 2,
    year: date.getFullYear(),
    value: [0,1,1]
  },

  bindChange: function (e) {
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  }
})