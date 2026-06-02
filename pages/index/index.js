const app = getApp();

Page({
  data: {
    years: 0,
    eventsCount: 0,
    categoriesCount: 0
  },

  onLoad() {
    this.loadStats();
  },

  onShow() {
    if (this.data.eventsCount === 0) {
      this.loadStats();
    }
  },

  loadStats() {
    const events = app.getHistoryData();
    const categories = new Set(events.map(e => e.category));
    this.setData({
      years: 2026 - 1952,
      eventsCount: events.length,
      categoriesCount: categories.size
    });
  },

  goToTimeline(e) {
    const category = e.currentTarget.dataset.category;
    app.globalData.selectedCategory = category || null;
    wx.switchTab({
      url: '/pages/timeline/timeline'
    });
  },

  goToAI() {
    wx.switchTab({
      url: '/pages/ai/ai'
    });
  },

  goToDaily() {
    wx.navigateTo({
      url: '/pages/daily/daily'
    });
  },

  goToChallenge() {
    wx.navigateTo({
      url: '/pages/challenge/challenge'
    });
  }
});
