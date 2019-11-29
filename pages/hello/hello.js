// pages/hello/hello.js
// 倒计时时长
var remainTime = 12000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    page:1,
    stopLoadMoreTiem: false,
    current: 1,
    list: [
      {"a": "a"}, {"a": "a"}, {"a": "a"
      }, {"a": "a"}, {"a": "a"}, {"a": "a"
      }, {"a": "a"}, {"a": "a"}, {"a": "a"
      },{"a": "a"}, {"a": "a"}, {"a": "a"
      }, {"a": "a"
      }, {"a": "a"}, {"a": "a"
      }, {"a": "a"}, {"a": "a"
      }, {"a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      }, {
        "a": "a"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("pull")
    return true
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('bottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 右侧悬浮按钮的点击事件
   */
  onClick: function(e) {
    var tab = e.currentTarget.dataset.current
    if (tab == this.data.current) {
      return
    }
    this.setData({
      current: tab
    })
  },
  /**
   * 滑动视图的滑动事件
   */
  switchSwiper: function(e) {
    var tab = e.detail.current
    this.setData({
      current: tab
    })
  },

  /**
   * 滚动视图的上滑监听事件
   */
  lower: function(e) {
    var that = this
    if(that.data.stopLoadMoreTiem) {
      return
    }
    this.setData({
      page: that.data.page+1,
      stopLoadMoreTiem: true
    })
    that.getList()
  },
  /**
   * 请求数据接口
   */
  getList:function() {
    wx.showLoading({
      title: 'loading...',
    })
    var that = this
    setTimeout(function() {
      wx.hideLoading()
      that.setData({
        stopLoadMoreTiem: false,
        list: that.data.list.concat(that.data.list)
      })
    }, 2000)
  },

  /**
   * 截获竖向滑动
   */
  catchTouchMove: function (res) {
    return false
  },

  startTimer: function() {
    var that = this
    if(this.data.isLogin) {
      // 开启倒计时
      console.log("开启倒计时")

      let time = 500;
      let { listData } = this.data;
      if (remainTime <= 0) {
        setTimeout(function() {
          remainTime = 12000
          that.startTimer()
        }, 1200)
        return
      }
      let formatTime = this.getFormat(remainTime);
      remainTime -= time;
      console.log(formatTime)
      this.setData({
        hhh: formatTime.hh,
        mmm: formatTime.mm,
        sss: formatTime.ss
      });
      setTimeout(this.startTimer, time);

      //达到次数上限，只显示抽奖
      console.log("======================")
      console.log("达到次数上限，只显示抽奖")
    } else {
      wx.showLoading({
        title: 'Login...',
      })
      setTimeout(function(){
          that.setData({
            isLogin: true
          })
          wx.hideLoading()
          that.startTimer()
      }, 1200)
    }
  },

  /**
     * 格式化时间
     */
  getFormat: function (msec) {
    let ss = parseInt(msec / 1000);
    let ms = parseInt(msec % 1000);
    let mm = 0;
    let hh = 0;
    if (ss > 60) {
      mm = parseInt(ss / 60);
      ss = parseInt(ss % 60);
      if (mm > 60) {
        hh = parseInt(mm / 60);
        mm = parseInt(mm % 60);
      }
    }
    ss = ss > 9 ? ss : `0${ss}`;
    mm = mm > 9 ? mm : `0${mm}`;
    hh = hh > 9 ? hh : `0${hh}`;
    return { ms, ss, mm, hh };
  },
})