App({
  globalData: {
    historyEvents: [],
    years: [],
    categories: [],
    selectedCategory: null
  },

  onLaunch() {
    this.globalData.historyEvents = this.getHistoryData();
    this.globalData.years = [...new Set(this.globalData.historyEvents.map(e => e.year))].sort((a, b) => a - b);
    this.globalData.categories = [...new Set(this.globalData.historyEvents.map(e => e.category))].sort();
  },

  // ==================== 本地校史数据（72条兜底） ====================
  getHistoryData() {
    return [
      { year: 1950, month: 10, day: 25, title: "抗美援朝与航空工业决策", category: "建校", summary: "中国人民志愿军打响抗美援朝第一仗，国家航空工业建设提上日程，为后续兴办航空大学奠定背景", details: "中国人民志愿军打响抗美援朝第一仗，国家航空工业建设提上日程，为后续兴办航空大学奠定背景", image_desc: "", tags: ["校史", "建校", "抗美援朝", "北航"] },
      { year: 1951, month: 3, day: 0, title: "全国院系调整启动", category: "建校", summary: "全国高等学校院系调整开始，航空系科进行初步调整", details: "全国高等学校院系调整开始，航空系科进行初步调整", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1951, month: 5, day: 0, title: "清华大学航空工程学院成立", category: "建校", summary: "北洋大学、厦门大学、西北工学院航空系并入清华大学，成立清华大学航空工程学院", details: "北洋大学、厦门大学、西北工学院航空系并入清华大学，成立清华大学航空工程学院", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1951, month: 11, day: 18, title: "华北大学工学院更名", category: "建校", summary: "华北大学工学院更名为北京工业学院（现北京理工大学）", details: "华北大学工学院更名为北京工业学院（现北京理工大学）", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1951, month: 12, day: 10, title: "周恩来总理批示筹建航空大学", category: "建校", summary: "周恩来总理召集会议，李富春副总理提出'急需办一所航空大学'，周恩来批示同意", details: "周恩来总理召集会议，李富春副总理提出'急需办一所航空大学'，周恩来批示同意", image_desc: "", tags: ["校史", "建校", "周恩来", "北航"] },
      { year: 1952, month: 5, day: 0, title: "全国航空院系调整计划", category: "建校", summary: "中央教育部制定全国高等学校院系调整计划，对航空院系作进一步调整", details: "中央教育部制定全国高等学校院系调整计划，对航空院系作进一步调整", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1952, month: 6, day: 12, title: "北京航空工业学院正式筹建", category: "建校", summary: "中央重工业部、中央教育部决定，并经国家财经委员会批准及中央军委同意，正式筹建北京航空工业学院（北航官网记载为6月12日）", details: "中央重工业部、中央教育部决定，并经国家财经委员会批准及中央军委同意，正式筹建北京航空工业学院（北航官网记载为6月12日）", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1952, month: 10, day: 24, title: "教育部签发成立批文", category: "建校", summary: "教育部签发关于成立北京航空工业学院（成立后正式名称为北京航空学院）的批文", details: "教育部签发关于成立北京航空工业学院（成立后正式名称为北京航空学院）的批文", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1952, month: 10, day: 25, title: "北京航空学院正式成立（校庆日）", category: "建校", summary: "北京航空学院成立大会在北京工业学院礼堂（原中法大学旧址）举行，宣告正式成立，此日成为校庆日", details: "北京航空学院成立大会在北京工业学院礼堂（原中法大学旧址）举行，宣告正式成立。此日成为校庆日", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1952, month: 12, day: 1, title: "政务院正式通过成立决定", category: "建校", summary: "政务院第159次会议正式通过成立北京航空学院的决定", details: "政务院第159次会议正式通过成立北京航空学院的决定", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1953, month: 5, day: 0, title: "学院路校址选定（柏彦庄）", category: "校园", summary: "北航校址选定在海淀区柏彦庄（现学院路37号）", details: "北航校址选定在海淀区柏彦庄（现学院路37号）", image_desc: "", tags: ["北航", "校园建设", "校园"] },
      { year: 1953, month: 6, day: 1, title: "新校舍破土动工", category: "校园", summary: "北航新校舍在柏彦庄正式破土动工，数千名建筑工人日夜奋战", details: "北航新校舍在柏彦庄正式破土动工，数千名建筑工人日夜奋战", image_desc: "", tags: ["北航", "校园建设", "校园"] },
      { year: 1953, month: 10, day: 0, title: "迁入学院路新校舍", category: "校园", summary: "全体学生及部分教职工迁入新校舍，结束分散借居状态", details: "全体学生及部分教职工迁入新校舍，结束分散借居状态", image_desc: "", tags: ["北航", "校园建设", "校园"] },
      { year: 1954, month: 6, day: 0, title: "武光任首任院长", category: "建校", summary: "武光被中央任命为北京航空学院第一任院长", details: "武光被中央任命为北京航空学院第一任院长", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1954, month: 6, day: 0, title: "增设飞机设备与航空材料系", category: "教学", summary: "增设飞机设备、航空材料两个系以及航空仪表与自动器等7个专业", details: "增设飞机设备、航空材料两个系以及航空仪表与自动器等7个专业", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 1956, month: 0, day: 0, title: "专业拓展与航空工程经济系成立", category: "教学", summary: "根据12年科学规划，率先设立导弹类、管理类及空气动力学等专业，成立航空工程经济系", details: "根据12年科学规划，率先设立导弹类、管理类及空气动力学等专业，成立航空工程经济系", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 1958, month: 9, day: 22, title: "「北京二号」探空火箭发射成功", category: "科研", summary: "中国第一枚探空火箭'北京二号'在东北白城子靶场发射试验成功", details: "中国第一枚探空火箭'北京二号'在东北白城子靶场发射试验成功", image_desc: "", tags: ["北航", "北京二号", "科技创新", "科研", "火箭", "航天"] },
      { year: 1958, month: 9, day: 24, title: "「北京一号」轻型旅客机试飞成功", category: "科研", summary: "新中国第一架轻型旅客机'北京一号'在首都机场试飞成功，师生奋战100天", details: "新中国第一架轻型旅客机'北京一号'在首都机场试飞成功，师生奋战100天", image_desc: "", tags: ["北航", "科技创新", "科研", "北京一号", "飞机"] },
      { year: 1958, month: 9, day: 29, title: "「北京五号」无人驾驶飞机首飞", category: "科研", summary: "中国第一架无人驾驶飞机'北京五号'在首都机场首次试飞成功（机上有人监控），实现我国无人驾驶飞机'零的突破'", details: "中国第一架无人驾驶飞机'北京五号'在首都机场首次试飞成功（机上有人监控），实现我国无人驾驶飞机'零的突破'", image_desc: "", tags: ["北航", "无人机", "科技创新", "科研", "北京五号"] },
      { year: 1958, month: 10, day: 1, title: "「北京五号」无线电引导着陆成功", category: "科研", summary: "'北京五号'无线电引导着陆正式试飞基本成功，为国庆献礼（首次试飞成功为9月29日）", details: "'北京五号'无线电引导着陆正式试飞基本成功，为国庆献礼（首次试飞成功为9月29日）", image_desc: "", tags: ["北航", "无人机", "科技创新", "科研", "北京五号"] },
      { year: 1959, month: 1, day: 31, title: "「北京五号」全自主无人飞行", category: "科研", summary: "'北京五号'成功实现无人驾驶的自动起飞、遥控飞行、下滑着陆'单飞'", details: "'北京五号'成功实现无人驾驶的自动起飞、遥控飞行、下滑着陆'单飞'", image_desc: "", tags: ["北航", "无人机", "科技创新", "科研", "北京五号"] },
      { year: 1959, month: 2, day: 4, title: "「北京五号」公开试验飞行", category: "科研", summary: "'北京五号'在北京首都机场举行隆重的'单飞'公开试验", details: "'北京五号'在北京首都机场举行隆重的'单飞'公开试验", image_desc: "", tags: ["北航", "无人机", "科技创新", "科研", "北京五号"] },
      { year: 1959, month: 5, day: 17, title: "被确定为全国首批重点高校", category: "荣誉", summary: "中共中央发布《关于在高等学校中指定一批重点学校的决定》，北航成为全国第一批16所重点高校之一", details: "中共中央发布《关于在高等学校中指定一批重点学校的决定》，北航成为全国第一批16所重点高校之一", image_desc: "", tags: ["北航", "成就", "荣誉"] },
      { year: 1960, month: 0, day: 0, title: "增设航空核动力与工程物理系", category: "教学", summary: "增设航空核动力、航空工艺和工程物理系", details: "增设航空核动力、航空工艺和工程物理系", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 1961, month: 0, day: 0, title: "设立飞行器自动控制系", category: "教学", summary: "设立飞行器自动控制系，至此北航已设立10个系35个专业", details: "设立飞行器自动控制系，至此北航已设立10个系35个专业", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 1971, month: 6, day: 0, title: "军宣队入驻", category: "建校", summary: "'军宣队'入驻北航", details: "'军宣队'入驻北航", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1971, month: 9, day: 0, title: "革委会成立", category: "建校", summary: "第三机械工业部派陈达明任革委会主任兼党委书记", details: "第三机械工业部派陈达明任革委会主任兼党委书记", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1972, month: 4, day: 0, title: "恢复系建制", category: "建校", summary: "经第三机械工业部批准，全院大队改回为系", details: "经第三机械工业部批准，全院大队改回为系", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1976, month: 0, day: 0, title: "文化大革命结束", category: "建校", summary: "文化大革命结束", details: "文化大革命结束", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1977, month: 12, day: 0, title: "恢复全国统一高考招生", category: "教学", summary: "恢复全国高等学校统一招生（高考），北航恢复本科生招生", details: "恢复全国高等学校统一招生（高考），北航恢复本科生招生", image_desc: "", tags: ["北航", "人才培养", "教学", "高考"] },
      { year: 1978, month: 1, day: 0, title: "恢复研究生招生", category: "教学", summary: "恢复研究生招生，学制2-3年", details: "恢复研究生招生，学制2-3年", image_desc: "", tags: ["北航", "人才培养", "研究生", "教学"] },
      { year: 1978, month: 3, day: 25, title: "25项成果获全国科学大会奖", category: "科研", summary: "25项重大科技成果获全国科学大会奖励", details: "25项重大科技成果获全国科学大会奖励", image_desc: "", tags: ["科研", "科技创新", "北航"] },
      { year: 1978, month: 7, day: 21, title: "计算机科学与工程系成立", category: "教学", summary: "成立计算机科学与工程系", details: "成立计算机科学与工程系", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 1978, month: 11, day: 0, title: "恢复制造工程系建制", category: "教学", summary: "恢复制造工程系建制", details: "恢复制造工程系建制", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 1981, month: 11, day: 26, title: "获批首批博士硕士学位授予单位", category: "教学", summary: "经国务院批准，成为全国首批博士和硕士学位授予单位（国务院学位委员会于11月26日公布）", details: "经国务院批准，成为全国首批博士和硕士学位授予单位（国务院学位委员会于11月26日公布）", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 1984, month: 0, day: 0, title: "列入「七五」重点建设高校", category: "荣誉", summary: "被列为全国'七五'期间重点建设的15所高等院校之一", details: "被列为全国'七五'期间重点建设的15所高等院校之一", image_desc: "", tags: ["北航", "成就", "荣誉"] },
      { year: 1984, month: 8, day: 8, title: "获准试办研究生院", category: "教学", summary: "教育部发出通知，北航等22所高校试办研究生院", details: "教育部发出通知，北航等22所高校试办研究生院", image_desc: "", tags: ["北航", "人才培养", "研究生", "教学"] },
      { year: 1984, month: 9, day: 0, title: "研究生院正式成立", category: "教学", summary: "北京航空航天大学研究生院正式成立，曹传钧任首任院长", details: "北京航空航天大学研究生院正式成立，曹传钧任首任院长", image_desc: "", tags: ["北航", "人才培养", "研究生", "教学"] },
      { year: 1987, month: 9, day: 22, title: "向航空工业部提出更名请示", category: "建校", summary: "北京航空学院向航空工业部提出更名为北京航空航天大学的请示", details: "北京航空学院向航空工业部提出更名为北京航空航天大学的请示", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1988, month: 4, day: 0, title: "正式更名为北京航空航天大学", category: "建校", summary: "国家教委批准，北京航空学院正式改名为北京航空航天大学", details: "国家教委批准，北京航空学院正式改名为北京航空航天大学", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1988, month: 4, day: 2, title: "国家教委同意更名为北航", category: "建校", summary: "国家教委下文同意北京航空学院改名为北京航空航天大学", details: "国家教委下文同意北京航空学院改名为北京航空航天大学", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1988, month: 4, day: 11, title: "航空工业部发文祝贺更名", category: "建校", summary: "航空工业部发文祝贺更名，希望建设有航空航天特色的社会主义大学", details: "航空工业部发文祝贺更名，希望建设有航空航天特色的社会主义大学", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1988, month: 4, day: 22, title: "正式下发更改校名通知", category: "建校", summary: "《关于我院更改校名的通知》正式下发", details: "《关于我院更改校名的通知》正式下发", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1988, month: 4, day: 23, title: "第十一次党代会宣布更名", category: "建校", summary: "学校第十一次党代会上正式宣布更名", details: "学校第十一次党代会上正式宣布更名", image_desc: "", tags: ["校史", "建校", "党代会", "北航"] },
      { year: 1988, month: 5, day: 1, title: "「北京航空航天大学」校名正式启用", category: "建校", summary: "'北京航空航天大学'新校名正式启用", details: "'北京航空航天大学'新校名正式启用", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1988, month: 5, day: 17, title: "北航命名庆祝大会举行", category: "建校", summary: "北京航空航天大学命名庆祝大会举行，钱昌照、林宗棠等领导出席", details: "北京航空航天大学命名庆祝大会举行，钱昌照、林宗棠等领导出席", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1989, month: 0, day: 0, title: "列入「八五」重点建设高校", category: "荣誉", summary: "成为国家'八五'期间全国14所重点建设的高校之一", details: "成为国家'八五'期间全国14所重点建设的高校之一", image_desc: "", tags: ["北航", "成就", "荣誉"] },
      { year: 1992, month: 0, day: 0, title: "四十周年校庆", category: "建校", summary: "北航迎来四十周年校庆", details: "北航迎来四十周年校庆", image_desc: "", tags: ["校史", "建校", "北航"] },
      { year: 1993, month: 4, day: 0, title: "TD线（体育锻炼走廊）竣工", category: "校园", summary: "TD线（体育锻炼走廊）竣工投入使用，为国内第一条学生体能锻炼走廊", details: "TD线（体育锻炼走廊）竣工投入使用，为国内第一条学生体能锻炼走廊", image_desc: "", tags: ["北航", "校园建设", "校园"] },
      { year: 1995, month: 11, day: 18, title: "「211工程」正式启动", category: "荣誉", summary: "经国务院批准，'211工程'正式启动", details: "经国务院批准，'211工程'正式启动", image_desc: "", tags: ["北航", "成就", "211工程", "荣誉"] },
      { year: 1997, month: 0, day: 0, title: "进入「211工程」建设高校行列", category: "荣誉", summary: "北航进入国家'211工程'建设高校行列（首批）", details: "北航进入国家'211工程'建设高校行列（首批）", image_desc: "", tags: ["北航", "成就", "211工程", "荣誉"] },
      { year: 1999, month: 2, day: 0, title: "大学生「挑战杯」科技竞赛", category: "荣誉", summary: "大学生'挑战杯'科技竞赛启动，北航后成为唯一连续15届捧得'优胜杯'的高校", details: "大学生'挑战杯'科技竞赛启动，北航后成为唯一连续15届捧得'优胜杯'的高校", image_desc: "", tags: ["北航", "挑战杯", "成就", "荣誉"] },
      { year: 1999, month: 9, day: 0, title: "屠守锷获「两弹一星」功勋奖章", category: "荣誉", summary: "北航建校元老屠守锷获'两弹一星'功勋奖章", details: "北航建校元老屠守锷获'两弹一星'功勋奖章", image_desc: "", tags: ["北航", "成就", "荣誉"] },
      { year: 2001, month: 9, day: 0, title: "进入「985工程」建设高校行列", category: "荣誉", summary: "北航进入国家'985工程'建设高校行列", details: "北航进入国家'985工程'建设高校行列", image_desc: "", tags: ["北航", "成就", "985工程", "荣誉"] },
      { year: 2003, month: 1, day: 21, title: "第十四次党代会召开", category: "建校", summary: "中共北京航空航天大学第十四次党代会召开（1月21-24日），提出'分三步走'战略", details: "中共北京航空航天大学第十四次党代会召开（1月21-24日），提出'分三步走'战略", image_desc: "", tags: ["校史", "建校", "党代会", "北航"] },
      { year: 2009, month: 12, day: 0, title: "第十五次党代会召开", category: "建校", summary: "中共北京航空航天大学第十五次党代会召开，提出建设空天信融合特色的世界一流大学", details: "中共北京航空航天大学第十五次党代会召开，提出建设空天信融合特色的世界一流大学", image_desc: "", tags: ["校史", "建校", "党代会", "北航"] },
      { year: 2010, month: 9, day: 14, title: "沙河校区正式启用", category: "校园", summary: "沙河校区迎来首批2010级2988名新生，正式启用", details: "沙河校区迎来首批2010级2988名新生，正式启用", image_desc: "", tags: ["北航", "校园建设", "校园", "沙河校区"] },
      { year: 2011, month: 0, day: 0, title: "入选「珠峰计划」", category: "教学", summary: "入选国家'珠峰计划'（基础学科拔尖学生培养试验计划）", details: "入选国家'珠峰计划'（基础学科拔尖学生培养试验计划）", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 2012, month: 0, day: 0, title: "入选「2011计划」牵头高校", category: "荣誉", summary: "成为国家'2011计划'牵头高校", details: "成为国家'2011计划'牵头高校", image_desc: "", tags: ["北航", "成就", "荣誉"] },
      { year: 2013, month: 0, day: 0, title: "入选首批国家协同创新中心", category: "科研", summary: "入选首批'2011计划'国家协同创新中心", details: "入选首批'2011计划'国家协同创新中心", image_desc: "", tags: ["科研", "科技创新", "北航"] },
      { year: 2016, month: 12, day: 0, title: "第十六次党代会召开", category: "建校", summary: "中共北京航空航天大学第十六次党代会召开，提出'建设扎根中国大地的世界一流大学'", details: "中共北京航空航天大学第十六次党代会召开，提出'建设扎根中国大地的世界一流大学'", image_desc: "", tags: ["校史", "建校", "党代会", "北航"] },
      { year: 2017, month: 0, day: 0, title: "北航学院成立（大类培养）", category: "教学", summary: "北航学院成立，推进书院制，实行大类招生、大类培养", details: "北航学院成立，推进书院制，实行大类招生、大类培养", image_desc: "", tags: ["北航", "人才培养", "教学"] },
      { year: 2017, month: 9, day: 21, title: "入选「双一流」建设高校A类", category: "荣誉", summary: "教育部公布'双一流'名单，北航入选'一流大学建设高校'（A类），7个学科入选", details: "教育部公布'双一流'名单，北航入选'一流大学建设高校'（A类），7个学科入选", image_desc: "", tags: ["北航", "成就", "双一流", "荣誉"] },
      { year: 2018, month: 1, day: 0, title: "入选首批国家级新工科项目", category: "科研", summary: "入选教育部首批国家级新工科研究与实践项目", details: "入选教育部首批国家级新工科研究与实践项目", image_desc: "", tags: ["科研", "科技创新", "北航"] },
      { year: 2018, month: 12, day: 3, title: "与中国航天科技集团战略合作", category: "科研", summary: "与中国航天科技集团签署全面战略合作协议", details: "与中国航天科技集团签署全面战略合作协议", image_desc: "", tags: ["科研", "科技创新", "北航"] },
      { year: 2019, month: 3, day: 19, title: "沙河积极心理体验中心启用", category: "校园", summary: "沙河校区积极心理体验中心启用", details: "沙河校区积极心理体验中心启用", image_desc: "", tags: ["北航", "校园建设", "校园", "沙河校区"] },
      { year: 2020, month: 9, day: 0, title: "北航一号楼入选北京市历史建筑", category: "校园", summary: "北航一号楼被选为北京市第二批历史建筑", details: "北航一号楼被选为北京市第二批历史建筑", image_desc: "", tags: ["北航", "校园建设", "校园"] },
      { year: 2023, month: 0, day: 0, title: "杭州国际校园建成启用", category: "校园", summary: "建成启用北航杭州国际校园", details: "建成启用北航杭州国际校园", image_desc: "", tags: ["北航", "校园建设", "校园"] },
      { year: 2024, month: 3, day: 0, title: "沙河校区图书馆开工", category: "校园", summary: "沙河校区图书馆开工建设", details: "沙河校区图书馆开工建设", image_desc: "", tags: ["北航", "校园建设", "沙河校区", "图书馆", "校园"] },
      { year: 2025, month: 7, day: 0, title: "沙河图书馆提前通过验收", category: "校园", summary: "沙河校区图书馆提前通过验收", details: "沙河校区图书馆提前通过验收", image_desc: "", tags: ["北航", "校园建设", "沙河校区", "图书馆", "校园"] },
      { year: 2025, month: 8, day: 30, title: "沙河图书馆迎新试运行", category: "校园", summary: "沙河校区图书馆迎新试运行", details: "沙河校区图书馆迎新试运行", image_desc: "", tags: ["北航", "校园建设", "沙河校区", "图书馆", "校园"] },
      { year: 2025, month: 10, day: 24, title: "沙河校区图书馆正式开馆", category: "校园", summary: "沙河校区图书馆正式开馆", details: "沙河校区图书馆正式开馆", image_desc: "", tags: ["北航", "校园建设", "沙河校区", "图书馆", "校园"] }
    ];
  },

  // ==================== 数据查询工具 ====================
  getEventByYear(year) {
    return this.globalData.historyEvents.find(e => e.year === year) || null;
  },

  getEventsByCategory(category) {
    return this.globalData.historyEvents.filter(e => e.category === category);
  },

  getTimeline() {
    return [...this.globalData.historyEvents].sort((a, b) => a.year - b.year || a.month - b.month || a.day - b.day);
  },

  searchEvents(keyword) {
    const k = keyword.toLowerCase();
    return this.globalData.historyEvents.filter(e =>
      e.title.toLowerCase().includes(k) ||
      e.summary.toLowerCase().includes(k) ||
      e.details.toLowerCase().includes(k) ||
      e.tags.some(tag => tag.toLowerCase().includes(k))
    );
  },

  getTodayEvents() {
    const d = new Date();
    return this.globalData.historyEvents.filter(e => e.month === d.getMonth() + 1 && e.day === d.getDate());
  },

  pickToday(events) {
    const d = new Date();
    const seed = d.getFullYear()*10000 + (d.getMonth()+1)*100 + d.getDate();
    const idx = seed % events.length;
    return events[idx];
  },

  getEventsByYear(year) {
    return this.globalData.historyEvents.filter(e => e.year === year);
  },

  searchEvents(keyword) {
    const k = keyword.toLowerCase();
    return this.globalData.historyEvents.filter(e =>
      e.title.toLowerCase().includes(k) ||
      e.summary.toLowerCase().includes(k) ||
      e.details.toLowerCase().includes(k) ||
      e.tags.some(t => t.toLowerCase().includes(k))
    );
  },

  aiAsk(question) {
    const q = question.toLowerCase().trim();
    const qaPairs = [
      { patterns: ['北航什么时候成立', '北航成立', '成立时间', '建校时间', '什么时候成立'], answer: '北京航空学院（现北京航空航天大学）于1952年10月25日正式成立，这一天也是北航的校庆日。同年12月1日，政务院第159次会议正式通过成立决定。' },
      { patterns: ['北京航空学院', '北航原名', '学校原名'], answer: '北航原名北京航空学院，1988年4月经国家教委批准正式更名为北京航空航天大学。' },
      { patterns: ['北京一号', '北京一号是什么'], answer: '北京一号是新中国第一架轻型旅客机，由北航师生奋战100天研制，1958年9月24日在首都机场试飞成功。这是中国航空工业史上的重要里程碑。' },
      { patterns: ['北京二号', '探空火箭', '火箭发射'], answer: '北京二号是中国第一枚探空火箭，1958年9月22日在东北白城子靶场发射试验成功，标志着中国航天事业的开端。' },
      { patterns: ['北京五号', '无人机', '无人驾驶飞机'], answer: '北京五号是中国第一架无人驾驶飞机，1958年9月29日首飞成功（机上有人监控），1959年1月31日成功实现全自主无人飞行，实现中国无人机零的突破。' },
      { patterns: ['校训', '德才兼备', '知行合一'], answer: '北航校训是「德才兼备，知行合一」。校风是「艰苦朴素、勤奋好学、全面发展、勇于创新」。' },
      { patterns: ['校区', '几个校区', '有哪些校区'], answer: '北航目前主要有两个校区：学院路校区（北京市海淀区学院路37号，主校区）和沙河校区（北京市昌平区，2010年9月正式启用）。' },
      { patterns: ['学院路', '学院路校区', '学院路37号'], answer: '北航学院路校区位于北京市海淀区学院路37号，校址原为柏彦庄，1953年选定并破土动工。这里是北航的主校区。' },
      { patterns: ['沙河校区', '沙河'], answer: '北航沙河校区于2010年9月14日正式启用，位于北京市昌平区沙河高教园区，首批迎来2010级2988名新生。' },
      { patterns: ['211', '211工程'], answer: '北航于1997年进入国家「211工程」建设高校行列（首批），是首批进入211工程的重点大学之一。' },
      { patterns: ['985', '985工程'], answer: '北航于2001年9月进入国家「985工程」建设高校行列，是国家重点建设的985高校之一。' },
      { patterns: ['双一流', '一流大学'], answer: '2017年9月21日，北航入选国家「双一流」建设高校A类，7个学科入选「双一流」建设学科名单。' },
      { patterns: ['重点高校', '重点大学', '首批重点'], answer: '1959年5月17日，中共中央发布《关于在高等学校中指定一批重点学校的决定》，北航成为全国第一批16所重点高校之一。' },
      { patterns: ['桂海潮', '航天员', '载荷专家'], answer: '桂海潮教授是北航宇航学院教授、博士生导师，中国空间站首位载荷专家。2023年5月30日乘神舟十六号飞船进入中国空间站。他是北航师生的骄傲！' },
      { patterns: ['杨利伟', '载人航天'], answer: '杨利伟是中国首位进入太空的航天员（神舟五号，2003年）。北航为载人航天工程培养了数以万计的航空航天人才。北航宇航学院与航天员科研训练中心有密切合作。' },
      { patterns: ['屠守锷', '两弹一星', '功勋'], answer: '屠守锷是中国导弹与航天技术的开拓者之一，北航建校元老。1999年9月获「两弹一星」功勋奖章。他是中国航天事业的杰出代表。' },
      { patterns: ['武光', '院长', '第一任'], answer: '武光是北京航空学院第一任院长，1954年6月被中央任命。他为北航的创建和早期发展做出了重要贡献。' },
      { patterns: ['研究生院', '研究生'], answer: '北航于1984年8月获准试办研究生院（全国首批22所），同年9月研究生院正式成立，曹传钧任首任院长。' },
      { patterns: ['院士', '有几个院士'], answer: '北航先后有数十位两院院士在校任教或毕业于北航（如屠守锷、沈元、陆士嘉等），他们为中国航空航天事业做出了卓越贡献。' },
      { patterns: ['建校', '建校历史', '历史有多久'], answer: '北航自1952年建校至2026年已有74年光辉历史。从最初的北京航空学院发展为今天的综合性研究型大学，北航始终秉持空天报国的使命。' },
      { patterns: ['沈元', '名誉校长'], answer: '沈元院士是著名空气动力学家，曾任北京航空学院副院长、院长、名誉校长。他是中国空气动力学研究的开拓者之一。' },
      { patterns: ['陆士嘉', '流体力学家', '女科学家'], answer: '陆士嘉教授是中国著名流体力学家、航空教育家，世界流体力学权威普朗特唯一的中国学生（也是唯一的女弟子），北航建校元老之一。' },
      { patterns: ['挑战杯', '优胜杯'], answer: '北航是唯一连续15届捧得「挑战杯」全国大学生课外学术科技作品竞赛「优胜杯」的高校，展现了北航学子的科技创新实力。' },
      { patterns: ['珠峰计划', '拔尖计划'], answer: '2011年北航入选国家「珠峰计划」（基础学科拔尖学生培养试验计划），致力于培养基础学科领域的拔尖创新人才。' },
      { patterns: ['2011计划', '协同创新'], answer: '2012年北航入选「2011计划」牵头高校，成为国家协同创新中心建设的核心高校之一。' },
      { patterns: ['TD线', '体育锻炼走廊', '体能锻炼'], answer: '北航TD线（体育锻炼走廊）于1993年4月竣工投入使用，是国内第一条学生体能锻炼走廊，成为北航校园体育文化的标志性设施。' },
    ];

    let bestScore = 0;
    let bestAnswer = '这个问题我还不太清楚呢。你可以试试问"北航什么时候成立的？""校训是什么？""北京一号是什么？"等问题。';

    for (const qa of qaPairs) {
      for (const pattern of qa.patterns) {
        let score = 0;
        const pl = pattern.toLowerCase();
        if (q.includes(pl)) score = pl.length;
        if (pl.includes(q)) score = Math.max(score, q.length);
        if (score > bestScore) {
          bestScore = score;
          bestAnswer = qa.answer;
        }
      }
    }
    return bestAnswer;
  }
});
