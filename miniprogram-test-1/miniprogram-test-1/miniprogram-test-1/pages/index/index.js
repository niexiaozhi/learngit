//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dinnerTime: [{
        dId: '01',
        dName: '早餐',
        dTime: '07:30-09:30'
      },
      {
        dId: '02',
        dName: '午餐',
        dTime: '11:30-13:30',
        checked: 'true'
      },
      {
        dId: '03',
        dName: '晚餐',
        dTime: '17:30-19:30'
      }
    ],

    dinnerTimeIndex: 1,

    canteen: { "cId": "101", "cName":"广州总部一食堂"}
  },

  //选择点餐日期
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  //选择点餐时间
  radioChange: function(e) {
    var dinnerTimeIndex = e.detail.value;
    this.setData({
      dinnerTimeIndex: dinnerTimeIndex
    })
  },

  //跳转选择菜品页面
  goMenu:function(){

    //食堂
    var canteen = JSON.stringify(this.data.canteen);
    //日期
    var date = this.data.date;
    //用餐时间
    var dinnerTime = this.data.dinnerTime[this.data.dinnerTimeIndex];
    dinnerTime = JSON.stringify(dinnerTime);
    wx.navigateTo({
      url: '../menu/menu?canteen=' + canteen + "&date=" + date + "&dinnerTime=" + dinnerTime,
    })
  },

  //点击跳转到选择食堂页面
  goCoordinate:function(){
    wx.navigateTo({
      url: 'coordinate/coordinate',
    })
  },

  onLoad: function (options) {
    var that = this;

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    if (month < 10) {
      month = '0' + month;
    };
    if (day < 10) {
      day = '0' + day;
    };

    that.setData({
      date: year + '-' + month + '-' + day
    })

  },

  onShow:function(){
    var that = this;
    //接收选择好的食堂的信息
    var canteen = getApp().globalData.canteen;
    if (canteen != null){
      that.setData({
        canteen: canteen
      })
    }
  }

})