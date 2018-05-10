//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: '',
    dh: '',
    xb: '男',
    yx: '',
    motto: 'Hello World！',
    userInfo: {},
    view: 'MINA',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sexyitems: [
      { name: 'man', value: '男', checked: 'ture' },
      { name: 'woman', value: '女' },
    ]
  },
  //事件处理函数
  changeText: function () {
    this.setData({
      motto: '123'
    })
  },
  inputxm: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  radioChange: function (e) {
    this.setData({
      xb: e.detail.value
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changepage: function () {
    wx.setStorage({
      key: 'xm',
      data: this.data.name,
    })
    wx.setStorage({
      key: 'xb',
      data: this.data.xb,
    })
    wx.navigateTo({
      url: '../test/test'
    })
  },
  onLoad: function () {
    //两种可能，一种已经获取用户信息
    //第二种，暂时还没有获取到，就放一个回调函数，等获取到了用户信息，再调用这个函数加载用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    //微信get获取信息
    
    wx.request({
      url: 'http://localhost:50088/api/product/aaa',
      method:'POST',
      success:function(res){
        console.log(res.data)
      }
    })
    wx.request({
      url: 'http://localhost:50088/api/Test/PostUpdate/',
      method:'POST',
      data:{
        id:1,
        name:'123',
        category:'234',
        price:'345'
      },
      success:function(res){
        console.log(res.data)
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
