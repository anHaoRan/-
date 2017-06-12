//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '首页',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    //加载模块初始化时触发事件
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo,'userInfo')
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function () {
    //当页面加载完成是触发事件
  },
  onShow: function () {
    //当页面显示时触发事件
  },
  onHide: function () {
    //当页面隐藏时触发事件
  },
  onUnload: function () {
    //当页面卸载时触发事件
  },
  onPullDownRefresh: function () {
    //当页面下拉时做点什么
  },
  onReachBottom: function () {
    //当页面到达底部时触发事件
  },
  onShareAppMessage: function () {
    //当用户点击分享时触发事件
  }

})
