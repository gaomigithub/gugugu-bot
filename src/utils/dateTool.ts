var dateTool = {
  weekString: '日一二三四五六',
  // 获取当前日期
  now: function (withWeek:any) {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var week = d.getDay();
    var curDateTime = year.toString();
    if (month > 9) {
      curDateTime = curDateTime + '年' + month;
    } else {
      curDateTime = curDateTime + '年0' + month;
    }
    if (date > 9) {
      curDateTime = curDateTime + '月' + date + '日';
    } else {
      curDateTime = curDateTime + '月0' + date + '日';
    }
    if (withWeek) {
      var weekday = '星期' + this.weekString[week];
      curDateTime = curDateTime + ' ' + weekday;
    }
    return curDateTime;
  },
};

module.exports = dateTool;