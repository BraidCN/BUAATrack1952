Page({
  data: {
    errorCount: 0,
    rankLabel: '',
    rankDesc: '',
    rankClass: ''
  },

  onLoad(options) {
    const err = parseInt(options.error || '0', 10);
    this.computeRank(err);
  },

  computeRank(err) {
    let label, desc, cls;
    if (err === 0) {
      label = '夯';
      desc = '一命通关，北航校史活字典！';
      cls = 'rank-hang';
    } else if (err <= 3) {
      label = '顶级';
      desc = '近乎完美，北航历史达人！';
      cls = 'rank-top';
    } else if (err <= 10) {
      label = '人上人';
      desc = '表现优异，对校史颇有了解！';
      cls = 'rank-human';
    } else if (err <= 20) {
      label = 'NPC';
      desc = '还需努力，多来了解北航历史吧！';
      cls = 'rank-npc';
    } else {
      label = '拉完了';
      desc = '任重道远，建议重新学习校史！';
      cls = 'rank-la';
    }
    this.setData({
      errorCount: err,
      rankLabel: label,
      rankDesc: desc,
      rankClass: cls
    });
  },

  savePoster() {
    const query = wx.createSelectorQuery();
    query.select('#posterCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        if (!res[0] || !res[0].node) {
          wx.showToast({ title: '保存失败', icon: 'none' });
          return;
        }
        const canvas = res[0].node;
        const ctx = canvas.getContext('2d');
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = 750 * dpr;
        canvas.height = 1200 * dpr;
        ctx.scale(dpr, dpr);

        this.drawPoster(ctx);

        wx.canvasToTempFilePath({
          canvas: canvas,
          success(temp) {
            wx.saveImageToPhotosAlbum({
              filePath: temp.tempFilePath,
              success() {
                wx.showToast({ title: '保存成功' });
              },
              fail() {
                wx.showToast({ title: '保存失败', icon: 'none' });
              }
            });
          },
          fail() {
            wx.showToast({ title: '生成失败', icon: 'none' });
          }
        });
      });
  },

  drawPoster(ctx) {
    const w = 750;
    const h = 1200;
    const { rankLabel, rankDesc, errorCount, rankClass } = this.data;

    // 背景
    const colors = {
      'rank-hang': ['#f1c40f', '#e67e22'],
      'rank-top': ['#2ecc71', '#27ae60'],
      'rank-human': ['#3498db', '#2980b9'],
      'rank-npc': ['#95a5a6', '#7f8c8d'],
      'rank-la': ['#34495e', '#2c3e50']
    };
    const [c1, c2] = colors[rankClass] || colors['rank-human'];

    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, c1);
    grad.addColorStop(1, c2);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // 装饰圆
    ctx.beginPath();
    ctx.arc(w / 2, 350, 200, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fill();

    // 标题
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('航迹1952', w / 2, 180);

    ctx.font = '28px sans-serif';
    ctx.fillText('北航校史闯关挑战', w / 2, 230);

    // 评级大字
    ctx.font = 'bold 160px sans-serif';
    ctx.fillText(rankLabel, w / 2, 500);

    // 评级描述
    ctx.font = '32px sans-serif';
    ctx.fillText(rankDesc, w / 2, 580);

    // 分隔线
    ctx.beginPath();
    ctx.moveTo(150, 640);
    ctx.lineTo(600, 640);
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 统计数据
    ctx.font = '32px sans-serif';
    ctx.fillText(`错误次数：${errorCount} 次`, w / 2, 720);
    ctx.fillText('通关关卡：3 / 3', w / 2, 780);

    // 底部
    ctx.font = '24px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('空天报国 · 逐梦一流', w / 2, 1000);
    ctx.fillText('北京航空航天大学', w / 2, 1050);
  }
});
