/* ================================================================
   Research Archive · Rendering Functions
   ================================================================
   Four template renderers, one shared content-block renderer.
   编辑内容应该改 data.js，编辑样式应该改 style.css。
   这个文件只在加新模板类型或改渲染逻辑时才需要动。
   ================================================================ */

// ---------- Shared block renderer ----------
// 把 data.js 里的内容块数组转成 HTML 字符串
function renderBlocks(blocks) {
  if (!blocks) return "";
  return blocks.map(block => {
    if (block.p) return `<p>${block.p}</p>`;
    if (block.h3) return `<h3>${block.h3}</h3>`;
    if (block.pullquote) return `<p class="pullquote">${block.pullquote}</p>`;
    if (block.scenario) {
      return `<p><span class="scenario-label">${block.scenario.label}</span> ${block.scenario.text}</p>`;
    }
    if (block.leadIn) {
      return `<p><span class="lead-in">${block.leadIn.label}</span> ${block.leadIn.text}</p>`;
    }
    if (block.checklist) {
      const items = block.checklist.map(item =>
        `<li><strong>${item.strong}</strong> ${item.text}</li>`
      ).join("");
      return `<ol class="checklist">${items}</ol>`;
    }
    return "";
  }).join("");
}

// ---------- Shared header ----------
function renderHeader(memo) {
  const byline = memo.byline
    ? memo.byline.map(([k, v]) => `<span>${k} /</span> ${v}`).join("<br>")
    : "";
  return `
    <div class="memo-masthead">
      <span class="left">Research Archive · ${memo.meta.category}</span>
      <span>${formatDate(memo.date)}</span>
    </div>
    <div class="memo-header">
      <h1>${memo.title}</h1>
      <p class="memo-subtitle">${memo.subtitle}</p>
      ${byline ? `<div class="memo-byline">${byline}</div>` : ""}
    </div>
  `;
}

function renderKeyFacts(facts) {
  if (!facts || !facts.length) return "";
  const rows = facts.map(([k, v]) =>
    `<div class="r"><span class="k">${k}</span><span class="v">${v}</span></div>`
  ).join("");
  return `<div class="keyfacts">${rows}</div>`;
}

function renderLede(lede) {
  if (!lede || !lede.length) return "";
  const paras = lede.map(p => `<p>${p}</p>`).join("");
  return `<div class="memo-lede">${paras}</div>`;
}

function renderClosing(memo) {
  let html = "";
  if (memo.closing) {
    html += `<div class="memo-closing"><p>${memo.closing}</p></div>`;
  }
  if (memo.footer) {
    html += `<footer class="memo-footer">
      <p>End of Note.</p>
      <p>${memo.footer}</p>
    </footer>`;
  }
  return html;
}

function formatDate(d) {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  return `${y}.${parseInt(m)}.${parseInt(day)}`;
}

// ================================================================
//   TEMPLATE 1 · MEMO (base)
// ================================================================
function renderMemoTemplate(memo) {
  const sections = (memo.sections || []).map(s => `
    <section class="memo-section">
      <div class="sec-num">${s.num} · ${s.label}</div>
      <h2>${s.title}</h2>
      ${renderBlocks(s.body)}
    </section>
  `).join("");

  return `
    <article class="memo-page">
      <a href="index.html" class="back-link">Research Archive</a>
      ${renderHeader(memo)}
      ${renderLede(memo.lede)}
      ${renderKeyFacts(memo.keyFacts)}
      ${sections}
      ${renderClosing(memo)}
    </article>
  `;
}

// ================================================================
//   TEMPLATE 2 · EVIDENCE (sidenotes)
// ================================================================
function renderEvidenceTemplate(memo) {
  // Each section renders into main column; sidenotes into aside column.
  // We wrap each section + its sidenotes as a .evidence-row (contents grid).

  const sections = (memo.sections || []).map(s => {
    const main = `
      <section class="memo-section">
        <div class="sec-num">${s.num} · ${s.label}</div>
        <h2>${s.title}</h2>
        ${renderBlocks(s.body)}
      </section>
    `;
    const notes = (s.sidenotes || []).map(n => {
      const tableRows = (n.table || []).map(row => {
        const hi = row.length === 3 && row[2] ? "hi" : "";
        return `<tr class="${hi}"><td>${row[0]}</td><td>${row[1]}</td></tr>`;
      }).join("");
      return `
        <div class="sidenote">
          <div class="sidenote-head">${n.heading}</div>
          ${n.table ? `<table>${tableRows}</table>` : ""}
          ${n.cite ? `<div class="cite">${n.cite}</div>` : ""}
        </div>
      `;
    }).join("");
    return `
      <div class="evidence-row">
        <main>${main}</main>
        <aside>${notes}</aside>
      </div>
    `;
  }).join("");

  // Lede and closing live in a full-width row (aside is empty).
  return `
    <article class="evidence-page">
      <a href="index.html" class="back-link">Research Archive</a>
      ${renderHeader(memo)}
      <div class="evidence-layout">
        <div class="evidence-row">
          <main>
            ${renderLede(memo.lede)}
            ${renderKeyFacts(memo.keyFacts)}
          </main>
          <aside></aside>
        </div>
        ${sections}
        <div class="evidence-row">
          <main>${renderClosing(memo)}</main>
          <aside></aside>
        </div>
      </div>
    </article>
  `;
}

// ================================================================
//   TEMPLATE 3 · DASHBOARD
// ================================================================
function renderDashboardTemplate(memo) {
  const d = memo.dashboard || {};

  // Price module
  const priceHtml = d.price ? `
    <div class="dash-module">
      <div class="dash-head">
        <span class="dash-label">${memo.meta.ticker} · 股价</span>
      </div>
      <div class="price-main">${d.price.value || ""}</div>
      <div class="price-change">${d.price.change || ""}</div>
      ${d.price.subtext ? `<div class="price-change" style="color:var(--ink-muted)">${d.price.subtext}</div>` : ""}
    </div>
  ` : "";

  // Financial cards
  const finHtml = d.financials && d.financials.length ? `
    <div class="dash-grid-2">
      ${d.financials.map(f => `
        <div class="fin-cell">
          <div class="fin-label">${f.label}</div>
          <div class="fin-value">${f.value}</div>
          <div class="fin-delta ${f.warn ? 'warn' : ''}">${f.delta || ""}</div>
        </div>
      `).join("")}
    </div>
  ` : "";

  // Bar chart
  const barHtml = d.bars && d.bars.items ? `
    <div class="dash-module">
      <div class="dash-head">
        <span class="dash-label">${d.bars.label}</span>
      </div>
      <div class="bar-chart">
        ${d.bars.items.map(b => {
          const pct = Math.round((b.value / (d.bars.max || 1)) * 100);
          return `
            <div class="bar-item">
              <div class="bar-fill ${b.latest ? 'latest' : ''}" style="height: ${pct}%"></div>
              <div class="bar-label">${b.label}</div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  ` : "";

  const dashboardHtml = (priceHtml || finHtml || barHtml) ? `
    <div class="dashboard">
      ${priceHtml}
      ${finHtml}
      ${barHtml}
    </div>
  ` : "";

  const sections = (memo.sections || []).map(s => `
    <section class="memo-section">
      <div class="sec-num">${s.num} · ${s.label}</div>
      <h2>${s.title}</h2>
      ${renderBlocks(s.body)}
    </section>
  `).join("");

  return `
    <article class="dashboard-page">
      <a href="index.html" class="back-link">Research Archive</a>
      ${renderHeader(memo)}
      ${dashboardHtml}
      ${renderLede(memo.lede)}
      ${renderKeyFacts(memo.keyFacts)}
      ${sections}
      ${renderClosing(memo)}
    </article>
  `;
}

// ================================================================
//   TEMPLATE 4 · MULTIVIEW
// ================================================================
function renderMultiviewTemplate(memo) {
  const mv = memo.multiview || {};

  // Brief view
  const briefStats = (mv.brief && mv.brief.stats) ? `
    <div class="brief-stats">
      ${mv.brief.stats.map(s => `
        <div class="brief-stat">
          <div class="brief-stat-label">${s.label}</div>
          <div class="brief-stat-value">${s.value}</div>
          <div class="brief-stat-delta ${s.warn ? 'warn' : ''}">${s.delta || ""}</div>
        </div>
      `).join("")}
    </div>
  ` : "";

  const briefBullets = (mv.brief && mv.brief.bullets) ? `
    <ol class="checklist">
      ${mv.brief.bullets.map(b => `
        <li><strong>${b.strong}</strong> ${b.text}</li>
      `).join("")}
    </ol>
  ` : "";

  const briefHtml = `
    <div class="mv-view active" id="view-brief">
      ${mv.brief && mv.brief.thesis ? `<div class="brief-thesis">${mv.brief.thesis}</div>` : ""}
      ${briefStats}
      ${briefBullets}
    </div>
  `;

  // Full view (same as memo template content)
  const sections = (memo.sections || []).map(s => `
    <section class="memo-section">
      <div class="sec-num">${s.num} · ${s.label}</div>
      <h2>${s.title}</h2>
      ${renderBlocks(s.body)}
    </section>
  `).join("");
  const fullHtml = `
    <div class="mv-view" id="view-full">
      ${renderLede(memo.lede)}
      ${renderKeyFacts(memo.keyFacts)}
      ${sections}
      ${memo.closing ? `<div class="memo-closing"><p>${memo.closing}</p></div>` : ""}
    </div>
  `;

  // Data view
  const dataBlocks = (mv.data || []).map(d => {
    const rows = d.rows.map(row => {
      const hi = row.length === 3 && row[2] ? "hi" : "";
      return `<tr class="${hi}"><td>${row[0]}</td><td>${row[1]}</td></tr>`;
    }).join("");
    return `
      <div class="data-table-block">
        <h4>${d.heading}</h4>
        ${d.desc ? `<div class="desc">${d.desc}</div>` : ""}
        <table class="data-table">${rows}</table>
      </div>
    `;
  }).join("");
  const dataHtml = `
    <div class="mv-view" id="view-data">
      <div class="data-grid">${dataBlocks}</div>
    </div>
  `;

  return `
    <article class="multiview-page">
      <a href="index.html" class="back-link">Research Archive</a>
      ${renderHeader(memo)}

      <div class="view-switch" role="tablist">
        <button class="vs-btn active" data-view="brief">
          <span class="vs-num">01</span>Brief
          <span class="vs-sub">2 分钟 · 结论与关键数</span>
        </button>
        <button class="vs-btn" data-view="full">
          <span class="vs-num">02</span>Full Memo
          <span class="vs-sub">完整论证</span>
        </button>
        <button class="vs-btn" data-view="data">
          <span class="vs-num">03</span>Data
          <span class="vs-sub">只看数字</span>
        </button>
      </div>

      ${briefHtml}
      ${fullHtml}
      ${dataHtml}

      ${memo.footer ? `<footer class="memo-footer" style="max-width:720px;"><p>End of Note.</p><p>${memo.footer}</p></footer>` : ""}
    </article>
  `;
}

// ================================================================
//   DISPATCHER
// ================================================================
function renderMemo(memo) {
  switch (memo.template) {
    case "evidence":  return renderEvidenceTemplate(memo);
    case "dashboard": return renderDashboardTemplate(memo);
    case "multiview": return renderMultiviewTemplate(memo);
    case "memo":
    default:          return renderMemoTemplate(memo);
  }
}

// Multiview tab switching (called after render)
function initMultiview() {
  const buttons = document.querySelectorAll('.vs-btn');
  const views = document.querySelectorAll('.mv-view');
  if (!buttons.length) return;

  function activate(name) {
    buttons.forEach(b => b.classList.toggle('active', b.dataset.view === name));
    views.forEach(v => v.classList.toggle('active', v.id === 'view-' + name));
  }

  buttons.forEach(b => {
    b.addEventListener('click', () => activate(b.dataset.view));
  });

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === '1') activate('brief');
    if (e.key === '2') activate('full');
    if (e.key === '3') activate('data');
  });
}
