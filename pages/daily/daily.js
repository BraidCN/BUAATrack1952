const app = getApp();

Page({
  data: {
    today: '',
    todayEvent: null,
    todayEvents: [],
    recommend: [],
    loading: true,
    allEvents: []
  },

  onLoad() {
    this.setToday();
    this.loadEvents();
    this.loadTodayEvents();
  },

  setToday() {
    const d = new Date();
    const str = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    this.setData({ today: str });
  },

  loadTodayEvents() {
    const events = app.getTodayEvents();
    this.setData({ todayEvents: events });
  },

  loadEvents() {
    const events = app.getHistoryData();
    this.setData({ allEvents: events, loading: false });
    this.pickToday(events);
  },

  pickToday(events) {
    const d = new Date();
    const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
    const idx = seed % events.length;
    const todayEvent = events[idx];
    this.setData({ todayEvent });
    this.makeRecommend(events, todayEvent);
  },

  makeRecommend(events, todayEvent) {
    if (!todayEvent) return;
    const sameCat = events.filter(e => e.category === todayEvent.category && e.year !== todayEvent.year);
    for (let i = sameCat.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sameCat[i], sameCat[j]] = [sameCat[j], sameCat[i]];
    }
    this.setData({ recommend: sameCat.slice(0, 3) });
  },

  goToDetail(e) {
    const year = e.currentTarget.dataset.year;
    wx.navigateTo({
      url: `/pages/detail/detail?year=${year}`
    });
  }
});
