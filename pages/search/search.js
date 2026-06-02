const app = getApp();

Page({
  data: {
    keyword: '',
    results: [],
    hasSearched: false,
    total: 0
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value });
  },

  onSearch() {
    if (!this.data.keyword.trim()) return;
    const results = app.searchEvents(this.data.keyword);
    this.setData({
      results: results,
      total: results.length,
      hasSearched: true
    });
  },

  quickSearch(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ keyword: key }, () => {
      this.onSearch();
    });
  },

  goToDetail(e) {
    const year = e.currentTarget.dataset.year;
    wx.navigateTo({
      url: `/pages/detail/detail?year=${year}`
    });
  }
});
