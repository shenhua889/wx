//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    video: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/56d8f2530e79fd3ebfe0d2c5eed07200.mp4',
    image_1: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/baobaoxiong_1.jpg',
    image_2: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/baobaoxiong_2.jpg',
    image_3: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/baobaoxiong_3.jpg',
    image_4: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/baobaoxiong_4.jpg',
    image_5: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/baobaoxiong_5.jpg',
    image_6: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/baobaoxiong_6.jpg',
    image_7: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/baobaoxiong_7.jpg',
    image_8: 'https://lamian-1255684020.cos.ap-chengdu.myqcloud.com/baobaoxiong_8.jpg',
    marker: [{
      id: 0,
      latitude: 30.19775,
      longitude: 120.22122,
    }],
    name:'',
    age:'',
    tel:'',
    add:'',
  },

  updateData:function(e){
    var that=this;
    console.log(that.data.name);
    that.setData({
      name:e.detail.value.name,
      age: e.detail.value.age,
      tel: e.detail.value.tel,
      add: e.detail.value.add,
    })
    console.log(that.data.name);
    wx.showToast({
      title: '请等待',
      icon:'loading',
      mask:true,
    })
    wx.request({
      url: 'https://www.lamianalamian.xyz/api/Test/PostUpdate/',
      method: 'POST',
      data:{
        name:that.data.name,
        add:'抱抱熊',
        tel:that.data.tel,
        age:that.data.age,
      },
      success:function(res){
        wx.showToast({
          title: '提交完成',
          icon:'success',
          mask:true,

        })
        console.log(res.data);
      },
      fail:function(res){
        wx.hideToast();
      },
      complete:function(res){
        that.setData({
          name: '',
          age: '',
          tel: '',
          add: '',
        })
      }
    })
  },
  onShareAppMessage:function(){
    return{
      title: "数据驱动 共赢未来",
      desc: "杭州互联网广告研发基地",
      path: "/pages/index/index"
    }
  },
  mapclick: function () {
    wx.openLocation({
      latitude: 30.19775,
      longitude: 120.22122
    })
  },

  makephone:function(){
    wx.makePhoneCall({
      phoneNumber: '0571-86780421',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that=this;
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
