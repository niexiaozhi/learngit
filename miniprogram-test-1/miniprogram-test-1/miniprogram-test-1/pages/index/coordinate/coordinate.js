// pages/index/coordinate/coordinate.js
//获取应用实例
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    canteen: [{
      "cId": "101",
      "cName": "广州总部一食堂"
    }, {
      "cId": "102",
      "cName": "广州总部二食堂"
    }, {
      "cId": "103",
      "cName": "日本分社食堂"
    }]
  },

  //选择食堂
  option: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var canteen = that.data.canteen[index];

    // wx.reLaunch({
    //   url: '../index?cId=' + canteen.cId + '&cName=' + canteen.cName,
    // })
    getApp().globalData.canteen = canteen;
    wx.switchTab({
      url: '../index',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

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