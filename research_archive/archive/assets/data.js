/* ================================================================
   Research Archive · Data File
   ================================================================
   添加新研究只需要在 MEMOS 数组顶部加一个新对象。
   字段说明见 README 注释（文件末尾）。
   ================================================================ */

const MEMOS = [

  /* ============================================================
     MEMO 1 · Argan Inc. 深度分析
     Template: memo · 最朴素的备忘录格式
     ============================================================ */
  {
    id: "argan-2026-04",
    template: "memo",

    title: "为什么 Argan 能在一年里涨 <em>330%</em>？",
    subtitle: "一家原本'无聊的'小型电力工程承包商，如何被 AI 数据中心的电力饥荒重新估值——以及它现在走到了什么位置。",
    date: "2026-04-19",

    meta: {
      ticker: "AGX",
      company: "Argan, Inc.",
      industry: "电力 EPC",
      category: "深度分析",
      tags: ["AI 基建", "天然气", "德州", "EPC"],
      readingTime: 12,
      status: "已定稿"
    },

    summary: "AGX 是一家真正受益于 AI 基建周期的好公司，但股价已经把未来三年的执行成功提前定价完了——TTM P/E 达 60 倍，几乎所有卖方目标价都低于当前股价。",

    byline: [
      ["主题", "Argan, Inc. (NYSE: AGX)"],
      ["日期", "2026 年 4 月 19 日"],
      ["依据", "FY2026 Q4 业绩说明会随附演示材料"]
    ],

    lede: [
      "这份备忘录试图回答三个问题——Argan 这份 PPT 到底讲了什么、为什么这只股票能在 12 个月里从 $126 涨到 $598、以及在当前估值下它接下来可能怎么演绎。",
      "先说结论：AGX 是一家真正受益于 AI 基建周期的好公司，管理层靠谱，资产负债表接近科技公司水平。但股价已经把未来三年的执行成功提前定价完了——目前卖方目标价中位数<span class='fig'>低于</span>当前股价，TTM P/E 达到 <span class='fig'>60 倍</span>，是其历史区间的三倍。"
    ],

    keyFacts: [
      ["股价（2026.4.17）", "$597.88"],
      ["12 个月涨幅", "+246%"],
      ["项目订单储备（年末）", "$2.9 Bn"],
      ["FY2026 稀释 EPS", "$9.74（+58%）"],
      ["现金与投资", "$895M / 零债务"],
      ["卖方目标价中位数", "$360 – $473"]
    ],

    sections: [
      {
        num: "I",
        label: "The Presentation",
        title: "这份演示材料到底讲了什么",
        body: [
          { p: "Argan 在 2026 财年 Q4 及全年业绩说明会上随附的投资者 PPT，日期是 2026 年 3 月 26 日。结构上是一份标准的'业绩加战略'展示，分六部分。" },
          { h3: "公司概览与业务板块" },
          { p: "Argan 是一家纯粹的电力 EPC 承包商，通过四家子公司运营——<b>Gemma Power Systems</b>（核心，美国本土燃气与可再生电厂）、<b>Atlantic Projects Company</b>（国际，爱尔兰 Platin Power Station）、<b>The Roberts Company</b>（工业建设）、<b>SMC Infrastructure Solutions</b>（电信基建）。业务分 Power、Industrial、Telecom 三段，Power 占收入 <b>77% 到 80%</b>。" },
          { h3: "FY2026 全年业绩" },
          { p: "财年截至 2026 年 1 月 31 日。全年收入 <span class='fig'>9.446 亿美元</span>（同比 +8.1%），净利润 1.378 亿美元 / 稀释 EPS 9.74 美元（同比 <b>+61%</b>），EBITDA 1.628 亿。Q4 单季尤其亮眼：毛利率从去年同期 20.5% 飙升到 <span class='fig'>25.0%</span>，Q4 EPS 3.47 美元，远超市场预期的 1.98——归因于 Ohio 的 Trumbull Energy Center 提前完工、以及多个太阳能加储能项目执行顺利。" },
          { h3: "订单储备的爆炸式增长" },
          { p: "整份 PPT 最关键的一张图。年末合并订单储备 <span class='fig'>29 亿美元</span>，较上年 14 亿翻倍以上；年内新增合同价值 25 亿。EPC 公司的 backlog 是未来两到三年收入的直接前瞻指标，所以这一数字的意义远大于当期收入。" },
          { h3: "项目组合" },
          { p: "重点展示德州几个巨型燃气联合循环项目——<b>CPV Basin Ranch</b>（1,350 到 1,400 MW，GE 7HA.03 燃气轮机，预留碳捕集接口，2028 年完工）、另一座 860 MW ERCOT 区域燃气电厂、Orange County Advanced Power Station。算上其他 10 到 12 个在建项目，大约 <b>6 GW 装机</b>正在同时施工。" },
          { h3: "财务状况与股东回报" },
          { p: "零债务，现金与投资 8.95 亿美元，约每股 64 美元现金；2025 年 9 月股息上调 33%，这是连续第三年上调；回购计划从 1.5 亿美元扩大到 2 亿。管理层在开场词里把调子定为'需求异常强劲'——呼应 AI 数据中心的结构性驱动。" }
        ]
      },
      {
        num: "II",
        label: "What to Watch",
        title: "真正需要追踪的<em>五件事</em>",
        body: [
          { p: "这份 PPT 的数字都是后视镜。要判断未来是否还值得持有，真正该盯的是下面五条暗线。" },
          { leadIn: { label: "一 · 订单储备的'质'胜于'量'。", text: "29 亿 backlog 里约 <b>77% 是燃气</b>，<b>19% 到 20% 是可再生及 gas+BESS 混合</b>，工业和电信合计不到 4%。要追踪三件事：每季新签合同的 run rate、Gas 对 Renewable 的结构变化、以及 Orange County 和 Basin Ranch 这类巨项目在 backlog 中的占比。集中度越高，执行风险越大。" } },
          { leadIn: { label: "二 · 毛利率的可持续性。", text: "Q4 的 25% 是 AGX 历史上最高水平，远远高于它过去 10% 到 14% 的长期区间。市场目前正在给它'永久性 margin 扩张'定价，但 Q4 毛利的一部分来自 Trumbull 提前完工激励——本质上具备<em>周期性</em>。假如未来四到八个季度毛利回落到 18% 到 20%，EPS 会明显收缩。" } },
          { leadIn: { label: "三 · 收入确认的'块状性'。", text: "Q3 FY26 收入同比还下滑 2.3%，紧接着 Q4 才猛增——EPC 按完工百分比法确认收入，新签的德州项目要到 2026 年下半年才真正进入大规模施工。中间很可能出现一两个季度的收入真空，历史上这种节奏多次引发股价急跌（Q3 报告后一天从 357 美元跌到 300 美元就是最近的案例）。" } },
          { leadIn: { label: "四 · 客户与地理集中度。", text: "德州 ERCOT 市场（AI 数据中心爆发地）是目前增量的主力，Competitive Power Ventures（CPV）是核心客户。这是顺风，但也是单一行情依赖。" } },
          { leadIn: { label: "五 · 资本配置与内部人行为。", text: "资产负债表接近科技公司水平。但要注意 2026 年 1 月以来，CEO 和多位董事通过 Rule 10b5-1 计划持续卖出。这通常不是看空信号，但<em>量级在放大</em>，值得记账。" } }
        ]
      },
      {
        num: "III",
        label: "The Rally",
        title: "为什么涨幅巨大而且<em>持续</em>",
        body: [
          { p: "把时间轴拉开，AGX 过去 12 到 18 个月的上涨本质是三层独立叙事在同一时点撞在了一起。" },
          { leadIn: { label: "第一层：故事的切换。", text: "Argan 原本被归类为'无聊的'小型工程承包商，P/E 长期在 15 到 20 倍。2024 年下半年开始，市场意识到 AI 数据中心'拿不到电就搞不成 AI'，而 24/7 可调度电力目前只有燃气能提供。Argan 被重新估值为'AI 基建铲子股'。" } },
          { leadIn: { label: "第二层：业绩反复超预期。", text: "FY2025 收入 +52%，FY2026 Q4 毛利率飙到 25%，Q4 EPS 3.47 对 1.98 的预期超出 <span class='fig'>75%</span>。每次财报都在验证叙事、消灭一部分疑虑派。" } },
          { leadIn: { label: "第三层：供给端缺口。", text: "美国 2026 年计划并网 86 GW 大型电力装机；德州 ERCOT 市场尤其紧张。能做这些项目的承包商就那么几家——<b>定价权和订单节奏都在承包商手里</b>。" } },
          { pullquote: "'类科技公司的资产负债表加工业公司的现金流'——这种罕见组合让 AGX 在成长、价值、高股息、AI 主题的投资者眼里同时吃得开。" }
        ]
      },
      {
        num: "IV",
        label: "Scenarios",
        title: "未来怎么<em>演绎</em>",
        body: [
          { p: "中短期看好的逻辑还在。29 亿 backlog 的大部分会在 FY27 到 FY28 转化为收入；德州项目进入全速施工期；管理层暗示 backlog 有可能在 FY27 突破 <span class='fig'>40 亿</span>。" },
          { p: "但估值是最大的反身性风险。当前股价约 598 美元，TTM P/E 约 <b>60 倍</b>（历史区间 15 到 25 倍）；卖方共识目标价中位数 360 到 473 美元——<em>几乎所有分析师目标价都低于当前股价</em>。任何季度的收入放缓或毛利回归都会触发 20% 到 30% 级别的回撤。" },
          { p: "三种合理的情景——" },
          { scenario: { label: "Base case —", text: "backlog 平稳消化，FY27 收入 +25% 到 30%，EPS 冲到 12 到 14 美元，但 P/E 被压缩到 30 到 35 倍，股价在 <b>400 到 650 美元</b>之间横盘震荡。最可能的剧本。" } },
          { scenario: { label: "Bull case —", text: "AI 资本开支加速、backlog 继续翻倍（突破 45 到 50 亿）、毛利稳定在 22% 以上，FY28 EPS 看到 18 到 20 美元，股价可以<b>冲破 700 美元</b>。" } },
          { scenario: { label: "Bear case —", text: "某个大项目出现执行事故，或者某一个季度收入大幅不及预期，或者'AI 资本开支见顶论'发酵。高估值下很容易回到 <b>350 到 400 美元</b>。" } }
        ]
      },
      {
        num: "V",
        label: "Research Agenda",
        title: "要继续深入应该<em>做什么</em>",
        body: [
          { p: "重点是把思路从'跟上叙事'切换到'<em>验证季度执行</em>'。" },
          { checklist: [
            { strong: "分解 backlog 细表。", text: "把过去四个季度 10-Q 的订单数据拉出来，手工分解 Gas、Renewable、Industrial 各自的年化增速和结构变化。" },
            { strong: "判断毛利率周期性。", text: "对比 FY22 到 FY26 的季度毛利率轨迹，识别 25% 到底是'结构性抬升'还是'项目组合窗口'。" },
            { strong: "跟踪 NTP 公告。", text: "Gemma Power Systems 每次拿到 Notice-to-Proceed 都会发新闻稿——这是最早于 backlog 的领先信号。" },
            { strong: "关注客户资本开支计划。", text: "CPV、Vistra、NRG、TVA 这四家是 AGX 最重要的潜在客户。" },
            { strong: "跟踪 ERCOT 与 FERC。", text: "德州电力市场的紧张程度与燃气电厂许可政策是订单节奏的宏观驱动。" },
            { strong: "关注 behind-the-meter 趋势。", text: "Hyperscaler 直接和 IPP 合建专属电厂是中期顺风；SMR 核电是中期逆风。" }
          ] }
        ]
      }
    ],

    closing: "最后一句定性——AGX 是一个好公司、处于好赛道、在正确的时点起飞。但在当前价位，继续持有或加仓需要你把心态从'跟上一个故事'切换到'验证具体的季度执行'。换句话说：前一轮的 330% 是估值重估赚的钱，下一轮要赚的是兑现的钱，而这两种钱的赚法完全不同。",

    footer: "本文基于公开资料完成，仅作个人业务与估值分析之用，不构成任何投资建议。持有头寸前请独立核实数据并考虑自身风险承受能力。"
  },

  /* ============================================================
     DEMO 1 · Evidence 模板演示
     右栏显示数据证据，正文讲逻辑
     ============================================================ */
  {
    id: "demo-evidence",
    template: "evidence",

    title: "模板演示 · <em>Evidence</em> 边栏版",
    subtitle: "正文讲论证，右栏给数据。适合需要大量数据支撑的研究——每段论断旁边放一个带小表格的证据框，读者可以对着核实。",
    date: "2026-04-19",

    meta: {
      ticker: "DEMO",
      company: "Template Demo",
      industry: "示例",
      category: "模板演示",
      tags: ["Template", "Sidenotes"],
      readingTime: 2,
      status: "示例"
    },

    summary: "Evidence 模板的演示文档。每段论述右边都有对应的数据证据框，展示财务数据、同业对比、时间序列等。窄屏自动折叠为可展开按钮。",

    byline: [
      ["模板", "evidence"],
      ["用途", "数据密集型研究"]
    ],

    lede: [
      "这是 Evidence 模板的演示。它的特色是<b>双栏布局</b>——左边 720px 正文，右边 280px 的证据栏。每个关键段落旁可以放一个带小数据表的边注。"
    ],

    sections: [
      {
        num: "I",
        label: "Example",
        title: "一个有证据的段落长什么样",
        body: [
          { p: "在这个示例段落中，我们讨论某公司的毛利率扩张是否可持续。仅靠文字很难说服读者；但如果右边放一张过去 8 个季度的毛利率走势表，结论就立刻有了支撑。" },
          { p: "读者在桌面端会看到右边的数据表；在手机上，证据栏自动折叠成'展开证据'按钮，点击才显示。" }
        ],
        sidenotes: [
          {
            label: "A · 示例数据",
            heading: "Sample Quarterly Margins",
            table: [
              ["Q1 FY25", "14.2%"],
              ["Q2 FY25", "16.8%"],
              ["Q3 FY25", "18.1%"],
              ["Q4 FY25", "20.5%", true],
              ["Q1 FY26", "22.0%", true]
            ],
            cite: "替换成真实数据即可。"
          }
        ]
      },
      {
        num: "II",
        label: "Structure",
        title: "每个 section 可以带多个 sidenote",
        body: [
          { p: "一个 section 可以配一个或多个 sidenote。它们会在右栏按顺序堆叠显示。建议每段关键论断配一个，不要每段都配——否则右栏会太满，失去重点。" }
        ],
        sidenotes: [
          {
            label: "B · 原则",
            heading: "Sidenote 设计原则",
            table: [
              ["每 section 配", "1-3 个"],
              ["单个高度", "< 15 行"],
              ["优先放", "可量化数据"]
            ]
          }
        ]
      }
    ],

    closing: "Evidence 模板最适合研究密度高、需要'可核查'感的报告。写法略重，但读起来显得严肃。",

    footer: "这是模板演示。写真实 memo 时直接复制这个结构并替换内容。"
  },

  /* ============================================================
     DEMO 2 · Dashboard 模板演示
     顶部仪表盘 + 下方长文
     ============================================================ */
  {
    id: "demo-dashboard",
    template: "dashboard",

    title: "模板演示 · <em>Dashboard</em> 仪表盘版",
    subtitle: "顶部一眼看完关键数据，下方是完整论证。适合需要快速传达核心事实、同时保留深度阅读的场景。",
    date: "2026-04-19",

    meta: {
      ticker: "DEMO",
      company: "Template Demo",
      industry: "示例",
      category: "模板演示",
      tags: ["Template", "Dashboard"],
      readingTime: 2,
      status: "示例"
    },

    summary: "Dashboard 模板的演示。顶部四个模块并排展示股价、关键财务数据、柱状图、情景区间。点击模块可跳转到相关章节。",

    // Dashboard 模板专用数据
    dashboard: {
      price: {
        value: "$597.88",
        change: "+246% / 12 months",
        subtext: "52W range: $126 – $620"
      },
      financials: [
        { label: "Revenue", value: "$944.6M", delta: "+8.1% YoY" },
        { label: "EPS", value: "$9.74", delta: "+58% YoY" },
        { label: "Gross Margin", value: "25.0%", delta: "+450bps" },
        { label: "Cash", value: "$895M", delta: "Zero Debt" }
      ],
      bars: {
        label: "Backlog 季度轨迹（$B）",
        items: [
          { label: "Q1", value: 0.75 },
          { label: "Q2", value: 0.80 },
          { label: "Q3", value: 0.82 },
          { label: "Q4", value: 1.40 },
          { label: "Q5", value: 1.90 },
          { label: "Q6", value: 2.00 },
          { label: "Q7", value: 3.00 },
          { label: "Q8", value: 2.90, latest: true }
        ],
        max: 3.0
      }
    },

    lede: [
      "这是 Dashboard 模板的演示。顶部仪表盘上面所有数据一屏看完，然后下方进入完整的 memo 正文。这种结构特别适合给上级或同事看——他们可能没时间读完全文，但看完仪表盘就能 get 核心结论。"
    ],

    sections: [
      {
        num: "I",
        label: "Example",
        title: "正文和 memo 模板完全一样",
        body: [
          { p: "Dashboard 模板的正文部分和 memo 模板结构完全一致——就是普通的段落、小标题、scenario、checklist。区别只在顶部多了那一块仪表盘。" },
          { p: "额外需要填写的字段是 <b>dashboard</b>：包括股价模块、财务卡片、柱状图数据。所有内容都在 data.js 里，无需任何 SVG 编辑。" }
        ]
      }
    ],

    closing: "Dashboard 模板适合发给忙人看——他们会先扫仪表盘，觉得有意思再往下读。",

    footer: "演示文档。真实使用时在 dashboard 字段替换数据即可。"
  },

  /* ============================================================
     DEMO 3 · Multiview 模板演示
     三视图切换：Brief / Full / Data
     ============================================================ */
  {
    id: "demo-multiview",
    template: "multiview",

    title: "模板演示 · <em>Multi-View</em> 三视图版",
    subtitle: "同一份研究提供三种阅读深度——2 分钟速览、12 分钟完整、5 分钟只看数据。适合分享给不同时间预算的读者。",
    date: "2026-04-19",

    meta: {
      ticker: "DEMO",
      company: "Template Demo",
      industry: "示例",
      category: "模板演示",
      tags: ["Template", "Multiview"],
      readingTime: 5,
      status: "示例"
    },

    summary: "Multiview 模板的演示。读者可以在顶部切换 Brief（简报）、Full（完整）、Data（纯数据）三种视图。URL 记住状态，可按键盘 1/2/3 切换。",

    // Multiview 专属数据
    multiview: {
      brief: {
        thesis: "这是 Brief 视图——只放核心论点。通常用一句话把结论讲清，然后用几个关键数字和 5 个要点支撑。读完大约 2 分钟。",
        stats: [
          { label: "核心数 1", value: "$598", delta: "+246%" },
          { label: "核心数 2", value: "60x", delta: "历史 3 倍", warn: true },
          { label: "核心数 3", value: "$2.9B", delta: "+107%" }
        ],
        bullets: [
          { strong: "要点一", text: "用一句话概括最关键的洞察" },
          { strong: "要点二", text: "第二重要的事实或风险" },
          { strong: "要点三", text: "一个容易被忽略的细节" }
        ]
      },
      data: [
        {
          heading: "示例数据 1",
          desc: "简短描述这张表告诉了我们什么",
          rows: [
            ["FY22", "$506M"],
            ["FY23", "$466M"],
            ["FY24", "$573M"],
            ["FY25", "$874M", true],
            ["FY26", "$945M", true]
          ]
        },
        {
          heading: "示例数据 2",
          desc: "另一组相关的数据点",
          rows: [
            ["A 项", "77%"],
            ["B 项", "14%"],
            ["C 项", "5%"],
            ["D 项", "4%"]
          ]
        }
      ]
    },

    // Full 视图使用 sections（和 memo 模板一致）
    lede: [
      "这是 Full 视图——和 memo 模板完全一致的完整论证。读者如果想深读就切到这里。"
    ],

    sections: [
      {
        num: "I",
        label: "Example",
        title: "Full 视图和 memo 模板一致",
        body: [
          { p: "Full 视图用同样的 sections 结构渲染。所以如果你已经有一份 memo 模板的 memo，想升级成 multiview，只需要额外填 brief 和 data 两个字段。" }
        ]
      }
    ],

    closing: "Multiview 最适合'同时要发给老板和同事和自己'的研究——一份文档三种用途。",

    footer: "演示文档。按 1/2/3 键切换视图。"
  }

];

/* ================================================================
   ADDING A NEW MEMO · 新增研究的字段速查
   ================================================================

   所有模板共用的字段：
     id           唯一标识，会出现在 URL 中
     template     "memo" | "evidence" | "dashboard" | "multiview"
     title        支持 <em> 标记斜体红色
     subtitle     副标题，一两句话
     date         "YYYY-MM-DD"

     meta.ticker      股票代码
     meta.company     公司全名
     meta.industry    行业
     meta.category    分类（"深度分析" / "跟踪更新" / "快评" 等，自由）
     meta.tags        标签数组，随便打
     meta.readingTime 阅读分钟数
     meta.status      "已定稿" / "初稿" / "跟踪中" 等

     summary      在首页卡片上显示的两三句摘要

     byline       数组，每项 [key, value]，例如 [["主题", "..."], ["日期", "..."]]

     lede         数组，每项是一个段落字符串，首段会有 drop cap
     keyFacts     数组，每项 [label, value]，会渲染为上下边框的数据条
     sections     数组，见下
     closing      结语，斜体渲染
     footer       页脚免责声明

   section 结构：
     num          "I" / "II" / "III" 等罗马数字
     label        "The Presentation" 这类英文小标签
     title        中文大标题，支持 <em>
     body         内容块数组，每块是 {type: content} 的对象：
                    { p: "..." }                                 普通段落
                    { h3: "..." }                                三级小标题
                    { pullquote: "..." }                         引用块
                    { scenario: {label, text} }                  情景段落
                    { leadIn: {label, text} }                    带小标题的段落
                    { checklist: [{strong, text}, ...] }         编号清单
     sidenotes    （仅 evidence 模板）数组，每项包含 label / heading / table / cite

   富文本标记（可以在任何 p/text 字段里使用）：
     <b>文字</b>                 粗体黑色
     <em>文字</em>               斜体
     <span class="fig">数字</span>  红色强调数字

   ================================================================

   Dashboard 模板额外需要 dashboard 字段：
     dashboard.price.value / change / subtext
     dashboard.financials  [{label, value, delta, warn}, ...]
     dashboard.bars.label / items / max

   Multiview 模板额外需要 multiview 字段：
     multiview.brief.thesis / stats / bullets
     multiview.data  [{heading, desc, rows}, ...]

   ================================================================ */
