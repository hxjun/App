var app = getApp()
Page({
  data: {

  },
  onLoad: function (options) {

    var that = this

    wx.request({
      url: 'http://47.95.219.246/weGo/brandList?brandId=' + options.brand,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data
        });
      }
    })
  }

})