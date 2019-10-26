// pages/order-details/order-details.js
Page({

  /**
   * Page initial data
   */
  data: {
    orderDetails: [{
      "orderId": "WX20190809144550255",
      "dining-number": "WX0005",
      "canteenName": "广州总部一食堂",
      "creation-time": "2019-08-09 14:46:50",
      "dining-time": "2019-08-02 17:30-19:30",
      "order-status": "1",
      "payment-method": "1",
      "food": [{ "fId": "001", "fName": "香辣花甲", "unit-price": "25.00", "fNumber": "1" }, { "fId": "002", "fName": "扬州炒饭", "unit-price": "25.00", "fNumber": "1" }],
      "remarks": "不要香菜",
      "total-price": "50.00"}]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})