var app = getApp()
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
  },

  onLoad: function (options) {

    var that = this

    // 商品详情
    wx.request({
      url: 'http://47.95.219.246/weGo/detail?goodsid=' + options.id,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.data.shopppingDetails = res.data;

        var prefix = "http://47.95.219.246/weGo/images/detail/";
        var goodsPicsInfo = [];
        var goodsPicsObj = {};
        var goodspic = res.data.url;
        var goodspics = goodspic.substring(0, goodspic.length);
        var goodspicsArr = goodspics.split("#");
        console.log(goodspicsArr);
        for (var i = 0; i < goodspicsArr.length; i++) {
          goodsPicsInfo.push({
            "picurl": prefix+goodspicsArr[i]
          });
        }
        that.setData({
          goodsPicsInfo: goodsPicsInfo
        })
      }
    })

  }
})
