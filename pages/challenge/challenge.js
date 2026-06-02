const app = getApp();

Page({
  data: {
    status: 'idle',
    level: 1,
    totalLevels: 3,
    errorCount: 0,
    events: [],
    selectedIndex: -1,
    allEvents: [],
    levelEvents: [],
    // 知识问答
    quizIndex: 0,
    quizTotal: 3,
    quizQuestion: {},
    quizSelected: -1,
    quizShowResult: false
  },

  onLoad() {
    this.loadEvents();
  },

  loadEvents() {
    const events = app.getHistoryData();
    this.setData({ allEvents: events });
    this.prepareLevels(events);
  },

  prepareLevels(allEvents) {
    const shuffled = [...allEvents];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const levelEvents = [
      shuffled.slice(0, 4),
      shuffled.slice(4, 8),
      shuffled.slice(8, 12)
    ];
    this.setData({ levelEvents });
  },

  startGame() {
    this.setData({
      status: 'playing',
      level: 1,
      errorCount: 0,
      selectedIndex: -1,
      quizIndex: 0,
      quizSelected: -1,
      quizShowResult: false
    });
    this.loadLevel(1);
  },

  loadLevel(level) {
    const events = [...this.data.levelEvents[level - 1]];
    for (let i = events.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [events[i], events[j]] = [events[j], events[i]];
    }
    this.setData({ events, selectedIndex: -1 });
  },

  selectCard(e) {
    const idx = e.currentTarget.dataset.index;
    const selected = this.data.selectedIndex;
    if (selected === -1) {
      this.setData({ selectedIndex: idx });
    } else if (selected === idx) {
      this.setData({ selectedIndex: -1 });
    } else {
      const events = [...this.data.events];
      [events[selected], events[idx]] = [events[idx], events[selected]];
      this.setData({ events, selectedIndex: -1 });
    }
  },

  confirmOrder() {
    const events = this.data.events;
    const sorted = [...events].sort((a, b) => a.year - b.year);
    const correct = events.every((e, i) => e.year === sorted[i].year);

    if (correct) {
      if (this.data.level >= this.data.totalLevels) {
        this.generateQuiz();
      } else {
        this.setData({ status: 'levelPass' });
      }
    } else {
      wx.showToast({ title: '排序错误，再试试', icon: 'none' });
      this.setData({ errorCount: this.data.errorCount + 1 });
      this.loadLevel(this.data.level);
    }
  },

  nextLevel() {
    const next = this.data.level + 1;
    this.setData({ status: 'playing', level: next, selectedIndex: -1 });
    this.loadLevel(next);
  },

  // ====== 知识问答 ======
  generateQuiz() {
    const all = this.data.allEvents;
    // 随机抽取3个不同事件作为题目
    const pool = [...all];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const targets = pool.slice(0, 3);

    // 第1道：事件选年份；第2、3道：年份选事件
    const types = ['event2year', 'year2event', 'year2event'];
    const questions = targets.map((target, idx) => {
      const type = types[idx];
      const others = all.filter(e => e.year !== target.year);
      for (let i = others.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [others[i], others[j]] = [others[j], others[i]];
      }
      const distractors = others.slice(0, 3);

      let stem, options, correctIndex;
      if (type === 'event2year') {
        stem = `"${target.title}" 发生在哪一年？`;
        options = [target.year, ...distractors.map(e => e.year)];
        options.sort(() => Math.random() - 0.5);
        correctIndex = options.indexOf(target.year);
      } else {
        stem = `${target.year} 年发生了什么大事？`;
        options = [target.title, ...distractors.map(e => e.title)];
        options.sort(() => Math.random() - 0.5);
        correctIndex = options.indexOf(target.title);
      }

      return { type, stem, options, correctIndex, answer: options[correctIndex] };
    });

    this.setData({
      status: 'quiz',
      quizQuestions: questions,
      quizIndex: 0,
      quizQuestion: questions[0],
      quizSelected: -1,
      quizShowResult: false
    });
  },

  selectQuizOption(e) {
    if (this.data.quizShowResult) return;
    this.setData({ quizSelected: e.currentTarget.dataset.index });
  },

  confirmQuiz() {
    const { quizSelected, quizQuestion, quizIndex, quizTotal, errorCount } = this.data;
    if (quizSelected === -1) return;

    const correct = quizSelected === quizQuestion.correctIndex;
    this.setData({ quizShowResult: true });

    if (!correct) {
      this.setData({ errorCount: errorCount + 1 });
      wx.showToast({ title: `错误！正确答案是 ${quizQuestion.answer}`, icon: 'none', duration: 2000 });
    } else {
      wx.showToast({ title: '回答正确！', icon: 'success', duration: 1000 });
    }

    setTimeout(() => {
      if (quizIndex + 1 >= quizTotal) {
        wx.navigateTo({
          url: `/pages/poster/poster?error=${this.data.errorCount}`
        });
      } else {
        const next = quizIndex + 1;
        this.setData({
          quizIndex: next,
          quizQuestion: this.data.quizQuestions[next],
          quizSelected: -1,
          quizShowResult: false
        });
      }
    }, correct ? 1200 : 2200);
  }
});
