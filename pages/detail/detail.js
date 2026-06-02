const app = getApp();

Page({
  data: {
    event: null,
    loading: true,
    year: null
  },

  onLoad(options) {
    if (options.year) {
      this.setData({ year: parseInt(options.year) });
      this.loadEvent(options.year);
    }
  },

  loadEvent(year) {
    const event = app.getEventByYear(parseInt(year));
    this.setData({ event: event, loading: false });
  }
});
