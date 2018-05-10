// pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year:0,
    month:0,
    empty:[],
    days:[],
    sum:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var date=new Date();
    var curYear = date.getFullYear();
    var curMonth=date.getMonth()+1;
    console.log(curYear);
    console.log(curMonth);
    that.setData({
      year: curYear,
      month: curMonth,
    })
    this.initData(curYear, curMonth);
  },
  initData: function (curYear, curMonth) {
    // 计算最近三个月的对象
    var cursum=0;
    var day=0;
    var empty=[];
    var days=[];
    for(var i=1900;i<curYear;i++)
    {
      if((i%4==0 && i%100!=0) || i%400==0)
        cursum+=366;
      else
        cursum+=365;
    }
    for(var i=1;i<=curMonth;i++)
    {
      if(i==2)
      {
        if ((curYear % 4 == 0 && curYear % 100 != 0) || curYear % 400 == 0)
        {  
          day=29;
        }
        else
        {
          day=28;
        }
      }
      else if(i==4|| i==6|| i==9 || i==11)
      {
        day=30;
      }
      else
      {
        day=31;
      }
      cursum+=day;
    }
    cursum-=day;
    cursum++;
    console.log(cursum);
    for(var i=0;i<cursum%7;i++)
    {
      empty.push(i);
    }
    console.log(empty);
    for(var i=1;i<=day;i++)
    {
      days.push(i);
    }
    console.log(days);
    this.setData({
      empty:empty,
      days:days,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})