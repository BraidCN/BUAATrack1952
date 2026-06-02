const app = getApp();

Page({
  data: {
    timeline: [],
    allEvents: [],
    loading: true,
    categories: [],
    currentFilter: null
  },

  onLoad() {
    this.loadTimeline();
  },

  onShow() {
    const cat = app.globalData.selectedCategory;
    if (cat && this.data.allEvents.length > 0) {
      this.applyFilter(cat);
      app.globalData.selectedCategory = null;
    } else if (this.data.timeline.length === 0) {
      this.loadTimeline();
    }
  },

  loadTimeline() {
    const events = app.getHistoryData();
    const cats = [...new Set(events.map(e => e.category))];
    this.setData({
      allEvents: events,
      timeline: events,
      categories: cats,
      loading: false,
      currentFilter: null
    });
  },

  applyFilter(category) {
    const filtered = this.data.allEvents.filter(e => e.category === category);
    this.setData({
      timeline: filtered,
      currentFilter: category
    });
  },

  filterByCategory(e) {
    const category = e.currentTarget.dataset.category;
    this.applyFilter(category);
  },

  clearFilter() {
    this.setData({
      timeline: this.data.allEvents,
      currentFilter: null
    });
  },

  goToDetail(e) {
    const year = e.currentTarget.dataset.year;
    wx.navigateTo({
      url: `/pages/detail/detail?year=${year}`
    });
  }
});
