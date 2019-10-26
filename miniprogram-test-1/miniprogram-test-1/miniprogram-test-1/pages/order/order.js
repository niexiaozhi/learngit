// pages/order/order.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  //支付成功跳转至订单详情页
  goOrderDetails: function() {
    wx.showToast({
      title: '支付完成',
      icon: 'success',
      duration: 2000,
      success: function() {
        setTimeout(function () {
          //要延时执行的代码
          wx.navigateTo({
            url: '../order-details/order-details',
          })
        }, 500) //延迟时间 
      }
    })

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    //食堂
    var canteen = JSON.parse(options.canteen);
    //日期
    var date = options.date;
    //用餐时间
    var dinnerTime = JSON.parse(options.dinnerTime);
    //菜品信息
    var foodJson = JSON.parse(options.foodJson);

    this.setData({
      canteen: canteen,
      date: date,
      dinnerTime: dinnerTime,
      foodJson: foodJson
    })

    //总价
    var totalPrice = 0;
    for (var i = 0; i < foodJson.length; i++){
      totalPrice += foodJson[i].money * foodJson[i].testNum
    }
    this.setData({
      totalPrice: totalPrice.toFixed(2)
    })

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})