const app = getApp();

Page({
  data: {
    messages: [
      {
        id: 0,
        role: 'ai',
        content: '你好！我是航迹1952的校史小助手，欢迎了解北京航空航天大学的历史。你想问什么？'
      }
    ],
    inputValue: '',
    canSend: false,
    scrollToId: 'scroll-bottom',
    nextId: 1
  },

  onInput(e) {
    const v = e.detail.value;
    this.setData({ inputValue: v, canSend: v.trim().length > 0 });
  },

  sendMessage() {
    const content = this.data.inputValue.trim();
    if (!content) return;

    const userMsg = {
      id: this.data.nextId,
      role: 'user',
      content: content
    };
    const nextId = this.data.nextId + 1;
    const messages = [...this.data.messages, userMsg];
    this.setData({
      messages: messages,
      inputValue: '',
      canSend: false,
      nextId: nextId,
      scrollToId: 'scroll-bottom'
    });

    const answer = app.aiAsk(content);
    const aiMsg = {
      id: this.data.nextId,
      role: 'ai',
      content: answer
    };
    this.setData({
      messages: [...this.data.messages, aiMsg],
      nextId: this.data.nextId + 1,
      scrollToId: 'scroll-bottom'
    });
  },

  quickAsk(e) {
    const q = e.currentTarget.dataset.q;
    this.setData({ inputValue: q, canSend: true }, () => {
      this.sendMessage();
    });
  }
});
