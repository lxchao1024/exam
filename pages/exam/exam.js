var datas = require("../../data/mndl.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  onOpinionClick: function() {
    wx.navigateTo({
      url: '/pages/exam/panduan/panduan',
    })
  },

  onSingleClick: function() {
    wx.navigateTo({
      url: '/pages/exam/danxuan/danxuan',
    })
  }
})