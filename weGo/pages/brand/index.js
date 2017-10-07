var app = getApp()
Page({
  data: {

  },
  onLoad: function (options) {

    var that = this

    wx.request({
      url: 'http://47.95.219.246/weGo/brands?typeId=' + options.id,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          brandList: res.data
        });
      }
    })
  }

})