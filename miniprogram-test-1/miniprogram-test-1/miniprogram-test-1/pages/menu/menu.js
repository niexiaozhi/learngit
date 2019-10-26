// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classfiySelect: "",
    itemHeight: 0,
    itemTitleHeight: 0,

    num: 0,
    minusStatus: 'disabled',

    leftText: [{
        id: "01",
        text1: "卤菜系列"
      }, {
        id: "02",
        text1: "主荤系列"
      },
      {
        id: "03",
        text1: "甜点系列"
      },
      {
        id: "04",
        text1: "饮料"
      },
      {
        id: "05",
        text1: "简餐系列"
      },
      {
        id: "06",
        text1: "其他系列"
      }
    ],

    rightData: [{
        id: "01",
        title: "卤菜系列",
        frist: [{
            url: "../images/21.jpg",
            text: "香辣鸭脖",
          introduce: "主要原料： 鸭脖、辣椒",
            money: 10.5,
            sum: 20,
            id: '001'
          },
          {
            url: "../images/23.jpg",
            text: "五香毛豆",
            introduce: "主要原料： 毛豆、辣椒",
            money: 12.5,
            sum: 20,
            id: '002'
          },
          {
            url: "../images/24.jpg",
            text: "绝味海带",
            introduce: "主要原料： 海带、辣椒",
            money: 15.5,
            sum: 20,
            id: '003'
          }
        ]
      },
      {
        id: "02",
        title: "主荤系列",
        frist: [{
            url: "../images/01.jpg",
            text: "香辣花甲",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 20.5,
            sum: 20,
            id: '004'
          },
          {
            url: "../images/01.jpg",
            text: "啤酒鸭",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 18.5,
            sum: 20,
            id: '005'
          },
          {
            url: "../images/01.jpg",
            text: "辣椒炒肉",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 15.5,
            sum: 20,
            id: '006'
          }
        ]
      },
      {
        id: "03",
        title: "甜点系列",
        frist: [{
            url: "../images/01.jpg",
            text: "肉丝蛋糕",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 5.5,
            sum: 20,
            id: '007'
          },
          {
            url: "../images/01.jpg",
            text: "葡式蛋挞",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 2.5,
            sum: 20,
            id: '008'
          },
          {
            url: "../images/01.jpg",
            text: "曲奇饼",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 2.5,
            sum: 20,
            id: '009'
          }
        ]
      },
      {
        id: "04",
        title: "饮料",
        frist: [{
            text: "可口可乐",
            url: "../images/01.jpg",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 3.0,
            sum: 20,
            id: '010'
          },
          {
            url: "../images/01.jpg",
            text: "百事可乐",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 3.0,
            sum: 20,
            id: '011'
          },
          {
            url: "../images/01.jpg",
            text: "菠萝啤",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 3.5,
            sum: 20,
            id: '012'
          }
        ]
      },
      {
        id: "05",
        title: "简餐系列",
        frist: [{
            url: "../images/01.jpg",
            text: "扬州炒饭",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 10.5,
            sum: 20,
            id: '013'
          },
          {
            url: "../images/01.jpg",
            text: "鸭腿饭",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 15.5,
            sum: 20,
            id: '014'
          },
          {
            url: "../images/01.jpg",
            text: "烤肉饭",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 12.5,
            sum: 20,
            id: '015'
          }
        ]
      },
      {
        id: "06",
        title: "其他系列",
        frist: [{
            url: "../images/01.jpg",
            text: "白米饭",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 1.0,
            sum: 20,
            id: '016'
          },
          {
            url: "../images/01.jpg",
            text: "辣椒酱",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 0.5,
            sum: 20,
            id: '017'
          },
          {
            url: "../images/01.jpg",
            text: "芥末",
            introduce: "主要原料： 面粉、鸡蛋",
            money: 0.5,
            sum: 20,
            id: '018'
          }
        ]
      }
    ]
  },

  /* 点击加号 */
  bindPlus: function(e) {
    var that = this;

    //所选商品的下标
    const rightIndex = e.currentTarget.dataset.rightindex;
    const fristIndex = e.currentTarget.dataset.fristindex;

    var arr = that.data.rightData;
    //所选商品原始数量
    var num = arr[rightIndex].frist[fristIndex].testNum;
    //数量加一
    num = num + 1;
    //将更新的数量放入该商品中
    arr[rightIndex].frist[fristIndex].testNum = num;

    that.setData({
      rightData: arr
    })

    //更新总价
    var price = 0;
    if (num > 0) {
      for (var i = 0; i < that.data.rightData.length; i++) {
        for (var j = 0; j < that.data.rightData[i].frist.length; j++) {
          var QB = that.data.rightData[i].frist[j].money; //单价
          var QR = that.data.rightData[i].frist[j].testNum; //数量
          price += QB * QR; //总价
        }
      }
    }
    that.setData({
      price: price.toFixed(2)
    })

  },

  /* 点击减号 */
  bindMinus: function(e) {
    var that = this;

    //所选商品的下标
    const rightIndex = e.currentTarget.dataset.rightindex;
    const fristIndex = e.currentTarget.dataset.fristindex;

    var arr = that.data.rightData;
    //所选商品原始数量
    var num = arr[rightIndex].frist[fristIndex].testNum;
    //数量减一
    num = num - 1;
    //将更新的数量放入该商品中
    arr[rightIndex].frist[fristIndex].testNum = num;

    that.setData({
      rightData: arr
    })

    //更新总价
    var price = 0;
    for (var i = 0; i < that.data.rightData.length; i++) {
      for (var j = 0; j < that.data.rightData[i].frist.length; j++) {
        var QB = that.data.rightData[i].frist[j].money; //单价
        var QR = that.data.rightData[i].frist[j].testNum; //数量
        price += QB * QR; //总价
      }
    }
    that.setData({
      price: price.toFixed(2)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    var price = 0;
    that.setData({
      price: price.toFixed(2)
    })

    var array = that.data.rightData;
    array.forEach((r) => { //r = rightData[0]的所有数据，这样直接 r.新属性 = 属性值 即可
      r.frist.forEach((r2) => {
        r2.testNum = 0;
      })
    })
    that.setData({ //需要重新setData 下才能js 和 wxml 同步，wxml才能渲染新数据
      rightData: array
    })

    var query = wx.createSelectorQuery();
    //获取每一个展示菜名元素的高度
    query.select('.listItem2').boundingClientRect(function(rect) {
      that.setData({
        itemHeight: rect.height
      })
    }).exec();

    query.select('.itemTitle').boundingClientRect(function(rect) {
      that.setData({
        itemTitleHeight: rect.height
      })
    }).exec();

    this.setData({
      classfiySelect: this.data.leftText[0].id
    })

    //食堂
    var canteen = JSON.parse(options.canteen);
    //日期
    var date = options.date;
    //用餐时间
    var dinnerTime = JSON.parse(options.dinnerTime);
    this.setData({
      canteen: canteen,
      date: date,
      dinnerTime: dinnerTime
    })

    // 访问后台
    var strJson = { "diningHallId": 1, "mealTimeId": 2 }
    wx.request({
      url: 'http://localhost:8888/sell/ProductInfoList',
      data: JSON.stringify(strJson),
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data.data);
        
      }
    })

  },

  //滚动触发
  scroll: function(e) {
    var scrollTop = e.detail.scrollTop,
      h = 0,
      classfiySelect;
    var that = this;
    that.data.leftText.forEach(function(clssfiy, i) {
      var _h = that.data.itemTitleHeight + that.length(clssfiy['id']) * that.data.itemHeight;
      if (scrollTop >= h) {
        classfiySelect = clssfiy['id'];
      }
      h += _h;
    })
    that.setData({
      classfiySelect: classfiySelect,
    })
  },
  //求每一栏高度
  length: function(e) {
    var that = this;
    var rightData = that.data.rightData;
    for (var i = 0; i < rightData.length; i++) {
      if (rightData[i]['id'] == e) {
        return rightData[i]['frist'].length;
      }
    }
  },
  //点击左边事件
  left_list: function(e) {
    var that = this;
    var l_id = e.currentTarget.dataset.id;
    that.setData({
      rigId: l_id,
      classfiySelect: l_id
    });
  },
  //跳转详情界面
  particulars: function(e) {

  },

  //跳转订单支付画面
  goOrder: function() {
    var that = this;
    //食堂
    var canteen = JSON.stringify(this.data.canteen);
    //日期
    var date = this.data.date;
    //用餐时间
    var dinnerTime = this.data.dinnerTime;
    dinnerTime = JSON.stringify(dinnerTime);

    //选择的菜品信息
    var foodJson = [];
    for (var i = 0; i < that.data.rightData.length; i++) {
      for (var j = 0; j < that.data.rightData[i].frist.length; j++) {
        if (that.data.rightData[i].frist[j].testNum > 0) {
          foodJson.push(that.data.rightData[i].frist[j]);
        }
      }
    }
    foodJson = JSON.stringify(foodJson);

    wx.navigateTo({
      url: '../order/order?canteen=' + canteen + "&date=" + date + "&dinnerTime=" + dinnerTime + "&foodJson=" + foodJson,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

})