// pages/exam/danxuan/danxuan.js
var datas = require("../../../data/mndl.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    isRight: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: 'Loading...',
    })
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenHeight - res.statusBarHeight)
        that.setData({
          height: 1334 - res.statusBarHeight - res.statusBarHeight,
          danxuan: datas.dataList.danxuan
        })
        setInterval(function() {
          wx.hideLoading()
        }, 1500)
      },
    })
  },

  funA: function(e) {
    console.log(e)
    console.log(this.data.danxuan[e.currentTarget.dataset.index])
    console.log(this.data.danxuan[e.currentTarget.dataset.index].ans)
    console.log("D" == this.data.danxuan[e.currentTarget.dataset.index].ans)
    this.verify("A", this.data.danxuan[e.currentTarget.dataset.index].ans)
  },

  funB: function (e) {
    this.verify("B", this.data.danxuan[e.currentTarget.dataset.index].ans)
  },

  funC: function (e) {
    this.verify("C", this.data.danxuan[e.currentTarget.dataset.index].ans)
  },

  funD: function (e) {
    this.verify("D", this.data.danxuan[e.currentTarget.dataset.index].ans)
  },

  verify: function(objA, objB) {
    var that = this
    if(objA == objB) {
      this.setData({
        isRight: false,
        current: that.data.current + 1,
        activeColor: 'black'
      })
    } else {
      this.setData({
        isRight: true,
        activeColor: 'red'
      })
    }
  },

  onChanged: function (e) {
    this.setData({
      isRight: false,
      current: e.detail.current
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})