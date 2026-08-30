const copy = {
  en: {
    name: "Ruoxi Yu",
    lead: [
      { text: " is currently studying " },
      { text: "Digital Media Art (Web and Smart Media Design Direction)", strong: true },
      { text: " at Communication University of China. Her work spans " },
    ],
    links: {
      pd: "Product & Interaction Design",
      dm: "Digital Media",
      gd: "Graphic Design",
      tf: "Theatre & Film",
      aigc: "AIGC practices",
    },
    between: [", ", ", ", ", ", ", and "],
    end: ".",
    extended: "With experience in ToC products, interaction design, and AI-assisted prototyping, she rapidly builds Web and interactive prototypes for concept validation and experience iteration. She has a long-standing interest in young users’ content consumption, community behaviors, and global popular culture, and translates insights from real-world contexts and cultural nuances into opportunities for better products and experiences.",
    tags: {
      pd: "Product & Interaction Design", dm: "Digital Media", gd: "Graphic Design",
      tf: "Theatre & Film", aigc: "AIGC", games: "Digital Media - Games",
      interactive: "Digital Media - Interactive installations", "digital-art": "Digital Media - Digital art",
      campaign: "Graphic Design - Operational Design", "campaign-design": "Graphic Design - Campaign",
      branding: "Graphic Design - Branding", posters: "Graphic Design - Posters",
      editorial: "Graphic Design - Editorial design", typography: "Graphic Design - Typography",
      scriptwriter: "Theatre & Film - Scriptwriter", director: "Theatre & Film - Director",
    },
  },
  zh: {
    name: "余若曦",
    lead: [
      { text: "目前就读于" },
      { text: "中国传媒大学数字媒体艺术专业（网络与智能媒体设计方向）", strong: true },
      { text: "，主要从事" },
    ],
    links: {
      pd: "产品与体验设计", dm: "数字媒体", gd: "平面设计", tf: "戏剧影视", aigc: "AIGC 相关实践",
    },
    between: ["、", "、", "、", "，以及 "],
    end: "。除设计实践外，她也持续探索产品、技术与内容领域的更多可能。",
    extended: "她具备 ToC 产品、交互设计与 AI 辅助原型开发经验，能够快速搭建 Web 与交互原型，并用于产品验证与体验迭代。长期关注年轻用户的内容消费、社区行为与全球流行文化，善于从具体场景与文化语境中发现需求，并转化为产品与体验机会。",
    tags: {
      pd: "产品与交互设计", dm: "数字媒体", gd: "平面设计", tf: "戏剧影视", aigc: "AIGC",
      games: "数字媒体 - 游戏", interactive: "数字媒体 - 装置艺术", "digital-art": "数字媒体 - 数字艺术",
      campaign: "平面设计 - 运营设计", "campaign-design": "平面设计 - 广告设计",
      branding: "平面设计 - 品牌", posters: "平面设计 - 海报",
      editorial: "平面设计 - 版式设计", typography: "平面设计 - 字体设计",
      scriptwriter: "戏剧影视 - 编剧", director: "戏剧影视 - 导演",
    },
  },
};

const categoryGroups = {
  games: "dm", interactive: "dm", "digital-art": "dm",
  campaign: "gd", "campaign-design": "gd", branding: "gd", posters: "gd", editorial: "gd", typography: "gd",
  scriptwriter: "tf", director: "tf",
};

const categoryChildren = {
  dm: {
    en: [["games", "Games"], ["interactive", "Interactive installations"], ["digital-art", "Digital art"]],
    zh: [["games", "游戏"], ["interactive", "装置艺术"], ["digital-art", "数字艺术"]],
  },
  gd: {
    en: [["campaign", "Operational Design"], ["campaign-design", "Campaign"], ["branding", "Branding"], ["posters", "Posters"], ["editorial", "Editorial design"], ["typography", "Typography"]],
    zh: [["campaign", "运营设计"], ["campaign-design", "广告设计"], ["branding", "品牌"], ["posters", "海报"], ["editorial", "版式设计"], ["typography", "字体设计"]],
  },
  tf: {
    en: [["scriptwriter", "Scriptwriter"], ["director", "Director"]],
    zh: [["scriptwriter", "编剧"], ["director", "导演"]],
  },
};

const menuTranslations = {
  zh: {
    pd: "产品与交互设计", aigc: "AIGC", dm: "数字媒体", games: "游戏",
    interactive: "装置艺术", "digital-art": "数字艺术", gd: "平面设计",
    campaign: "运营设计", "campaign-design": "广告设计", branding: "品牌", posters: "海报",
    editorial: "版式设计", typography: "字体设计", tf: "戏剧影视", scriptwriter: "编剧", director: "导演",
  },
  en: {
    pd: "Product & Interaction Design", aigc: "AIGC", dm: "Digital Media", games: "Games",
    interactive: "Interactive installations", "digital-art": "Digital art", gd: "Graphic Design",
    campaign: "Operational Design", "campaign-design": "Campaign", branding: "Branding", posters: "Posters",
    editorial: "Editorial design", typography: "Typography", tf: "Theatre & Film", scriptwriter: "Scriptwriter", director: "Director",
  },
};

const state = {
  language: "en",
  bioOpen: false,
  menuOpen: false,
  category: null,
  compact: false,
  detail: false,
  projectId: null,
};

const els = {
  body: document.body,
  menuButton: document.getElementById("menuButton"),
  menuPanel: document.getElementById("menuPanel"),
  languageSwitch: document.getElementById("languageSwitch"),
  homeLink: document.getElementById("homeLink"),
  introCopy: document.getElementById("introCopy"),
  categoryArea: document.getElementById("categoryArea"),
  categoryPrimary: document.getElementById("categoryPrimary"),
  categorySecondary: document.getElementById("categorySecondary"),
  projectGrid: document.getElementById("projectGrid"),
  projectDetail: document.getElementById("projectDetail"),
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>\"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;",
  })[character]);
}

function localized(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[state.language] ?? value.en ?? value.zh ?? "";
  }
  return value ?? "";
}

function assetPath(file) {
  return `assets/site_img/${encodeURIComponent(file).replaceAll("%2F", "/")}`;
}

function coverPath(project) {
  return assetPath(project.cover.replace(/\.png$/i, ".webp"));
}

function projectMeta(project) {
  return `${localized(project.title)}\n\n${localized(project.type)}\n${project.year}`;
}

function buildIntro() {
  const text = copy[state.language];
  els.introCopy.innerHTML = "";

  if (state.language === "en" && matchMedia("(max-width: 768px)").matches) {
    buildEnglishMobileIntro(text);
    bindIntroControls();
    return;
  }

  const placeholder = document.createElement("span");
  placeholder.className = "home-placeholder";
  placeholder.textContent = text.name;
  els.introCopy.appendChild(placeholder);

  text.lead.forEach(part => {
    const span = document.createElement("span");
    span.textContent = part.text;
    if (part.strong) span.className = "intro-strong";
    els.introCopy.appendChild(span);
  });

  ["pd", "dm", "gd", "tf", "aigc"].forEach((key, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "intro-link";
    button.dataset.category = key;
    button.textContent = text.links[key];
    els.introCopy.appendChild(button);
    if (index < text.between.length) els.introCopy.appendChild(document.createTextNode(text.between[index]));
  });
  els.introCopy.appendChild(document.createTextNode(`${text.end} `));

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "bio-toggle";
  toggle.setAttribute("aria-label", state.bioOpen ? "Close extended biography" : "Open extended biography");
  toggle.setAttribute("aria-expanded", String(state.bioOpen));
  els.introCopy.appendChild(toggle);

  const extended = document.createElement("span");
  extended.className = "bio-extended";
  extended.hidden = !state.bioOpen;
  if (state.bioOpen) {
    extended.appendChild(document.createTextNode(" "));
    appendRevealWords(extended, text.extended);
  }
  els.introCopy.appendChild(extended);
  bindIntroControls();
}

function buildEnglishMobileIntro(text) {
  els.introCopy.innerHTML = `
    <span class="mobile-en-line"><span class="home-placeholder">${text.name}</span> is currently studying</span>
    <span class="mobile-en-line intro-strong">Digital Media Art (Web and Smart</span>
    <span class="mobile-en-line"><span class="intro-strong">Media Design Direction)</span> at</span>
    <span class="mobile-en-line">Communication University of</span>
    <span class="mobile-en-line">China. Her work spans <button type="button" class="intro-link" data-category="pd">Product</button></span>
    <span class="mobile-en-line"><button type="button" class="intro-link" data-category="pd">&amp; Interaction Design</button>, <button type="button" class="intro-link" data-category="dm">Digital</button></span>
    <span class="mobile-en-line"><button type="button" class="intro-link" data-category="dm">Media</button>, <button type="button" class="intro-link" data-category="gd">Graphic Design</button>, <button type="button" class="intro-link" data-category="tf">Theatre</button></span>
    <span class="mobile-en-line"><button type="button" class="intro-link" data-category="tf">&amp; Film</button>, and <button type="button" class="intro-link" data-category="aigc">AIGC practices</button>. <button type="button" class="bio-toggle" aria-label="${state.bioOpen ? "Close" : "Open"} extended biography" aria-expanded="${state.bioOpen}"></button></span>`;
  if (state.bioOpen) {
    const extended = document.createElement("span");
    extended.className = "bio-extended mobile-en-extended";
    appendRevealWords(extended, text.extended);
    els.introCopy.appendChild(extended);
  }
}

function bindIntroControls() {
  els.introCopy.querySelectorAll(".bio-toggle").forEach(toggle => toggle.addEventListener("click", toggleBio));
  els.introCopy.querySelectorAll(".intro-link").forEach(button => {
    button.addEventListener("click", () => selectCategory(button.dataset.category, false));
  });
}

function appendRevealWords(container, value) {
  const chinese = state.language === "zh";
  const tokens = chinese
    ? (value.match(/[A-Za-z0-9]+|[\u3400-\u9fff]|[^A-Za-z0-9\u3400-\u9fff\s]|\s+/g) || [])
    : value.split(/(\s+)/);
  let revealIndex = 0;
  tokens.forEach(token => {
    if (/^\s+$/.test(token)) {
      container.appendChild(document.createTextNode(token));
      return;
    }
    const wrap = document.createElement("span");
    wrap.className = "word-wrap";
    const inner = document.createElement("span");
    inner.className = "word-inner";
    inner.textContent = token;
    wrap.appendChild(inner);
    container.appendChild(wrap);
    window.setTimeout(() => inner.classList.add("revealed"), revealIndex * (chinese ? 32 : 70));
    revealIndex += 1;
  });
}

function gridTop() {
  return els.projectGrid.getBoundingClientRect().top;
}

function animateGridShift(beforeTop) {
  requestAnimationFrame(() => {
    const delta = beforeTop - gridTop();
    if (!delta || matchMedia("(prefers-reduced-motion: reduce)").matches || typeof els.projectGrid.animate !== "function") return;
    els.projectGrid.animate(
      [{ transform: `translateY(${delta}px)` }, { transform: "translateY(0)" }],
      { duration: 850, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
    );
  });
}

function animateBioIcon(toggle, opening) {
  if (!toggle) return;
  els.body.classList.toggle("bio-expanded", opening);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || typeof toggle.animate !== "function") return;
  const animation = toggle.animate(
    opening
      ? [{ transform: "rotate(0deg)" }, { transform: "rotate(45deg)" }]
      : [{ transform: "rotate(45deg)" }, { transform: "rotate(0deg)" }],
    { duration: 350, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "both" },
  );
  animation.finished.then(() => animation.cancel()).catch(() => {});
}

function toggleBio() {
  const before = gridTop();
  state.bioOpen = !state.bioOpen;
  if (state.bioOpen) {
    buildIntro();
    animateBioIcon(els.introCopy.querySelector(".bio-toggle"), true);
  } else {
    const toggle = els.introCopy.querySelector(".bio-toggle");
    animateBioIcon(toggle, false);
    els.introCopy.querySelectorAll(".bio-extended").forEach(extended => { extended.hidden = true; });
    buildIntro();
  }
  animateGridShift(before);
}

function projectMatchesCategory(project, category) {
  if (!category) return true;
  if (project.categories.includes(category)) return true;
  return project.categories.some(projectCategory => categoryGroups[projectCategory] === category);
}

function renderProjects() {
  const visibleProjects = projects.filter(project => projectMatchesCategory(project, state.category));
  els.projectGrid.innerHTML = visibleProjects.map((project, index) => {
    const title = localized(project.title);
    const priority = !state.category && index < 4;
    return `
      <article class="project-card" tabindex="0" role="link" data-project-id="${project.id}" aria-label="${escapeHtml(title)}">
        <div class="project-media">
          <img src="${coverPath(project)}" alt="${escapeHtml(title)}" ${priority ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async">
        </div>
        <div class="project-meta">${escapeHtml(projectMeta(project))}</div>
      </article>`;
  }).join("");
  els.projectGrid.querySelectorAll(".project-card").forEach(card => {
    const open = () => openDetail(card.dataset.projectId);
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function categoryMarkup(category) {
  if (!category) return "";
  const text = copy[state.language];
  const group = categoryGroups[category];
  if (!group) {
    const node = state.detail
      ? `<button type="button" data-category="${category}">${escapeHtml(text.tags[category])}</button>`
      : `<span>${escapeHtml(text.tags[category])}</span>`;
    return node;
  }
  const [parent, child = ""] = text.tags[category].split(" - ");
  if (matchMedia("(max-width: 768px)").matches) {
    return mobileCategoryUnionMarkup(group, category, parent, child);
  }
  const childNode = state.detail
    ? `<button type="button" data-category="${category}">${escapeHtml(child)}</button>`
    : `<span>${escapeHtml(child)}</span>`;
  return `<span class="category-union"><button type="button" data-category="${group}">${escapeHtml(parent)}</button><span> - </span>${childNode}</span>`;
}

let tagMeasureCanvas;

function measureMobileTagText(value) {
  tagMeasureCanvas ||= document.createElement("canvas");
  const context = tagMeasureCanvas.getContext("2d");
  context.font = state.language === "zh"
    ? '400 24px "PingFang SC", sans-serif'
    : '400 24px "Helvetica Neue", Helvetica, Arial, sans-serif';
  return context.measureText(value).width;
}

function mobileCategoryUnionMarkup(group, category, parent, child) {
  const joiner = state.language === "zh" ? "" : " ";
  const tokens = state.language === "zh" ? [...child] : child.split(/\s+/).filter(Boolean);
  const availableWidth = Math.max(180, window.innerWidth - 79);
  const lines = [{ prefix: `${parent} - `, tokens: [] }];
  tokens.forEach(token => {
    const line = lines.at(-1);
    const candidateTokens = [...line.tokens, token];
    if (line.tokens.length && measureMobileTagText(`${line.prefix}${candidateTokens.join(joiner)}`) > availableWidth) {
      lines.push({ prefix: "", tokens: [token] });
    } else {
      line.tokens.push(token);
    }
  });

  const lineMarkup = lines.map((line, index) => {
    const childText = line.tokens.join(joiner);
    const childNode = childText
      ? (state.detail
        ? `<button type="button" data-category="${category}">${escapeHtml(childText)}</button>`
        : `<span>${escapeHtml(childText)}</span>`)
      : "";
    const prefixNode = index === 0
      ? `<button type="button" data-category="${group}">${escapeHtml(parent)}</button><span> - </span>`
      : "";
    return `<span class="category-union-line" style="--line-layer:${lines.length - index}">${prefixNode}${childNode}</span>`;
  }).join("");
  return `<span class="category-union-stack${lines.length > 1 ? " is-multiline" : ""}">${lineMarkup}</span>`;
}

function renderCategory() {
  if (!state.category) {
    els.categoryArea.hidden = true;
    els.body.classList.remove("has-category");
    return;
  }

  els.body.classList.add("has-category");
  els.categoryArea.hidden = false;
  els.categoryArea.classList.toggle("child-selected", Boolean(categoryGroups[state.category]));
  els.categoryPrimary.innerHTML = categoryMarkup(state.category);
  els.categoryArea.classList.toggle("union-multiline", Boolean(els.categoryPrimary.querySelector(".is-multiline")));
  els.categorySecondary.hidden = true;
  els.categorySecondary.innerHTML = "";
  els.categoryArea.classList.remove("has-secondary");

  const labels = !state.detail && categoryChildren[state.category]?.[state.language];
  if (labels) {
    els.categoryArea.classList.add("has-secondary");
    els.categorySecondary.hidden = false;
    els.categorySecondary.innerHTML = labels
      .map(([key, label]) => `<button type="button" class="subcategory-pill" data-category="${key}">${escapeHtml(label)}</button>`)
      .join("");
  }

  els.categoryArea.querySelectorAll("button[data-category]").forEach(button => {
    button.addEventListener("click", () => selectCategory(button.dataset.category, true));
  });
}

function renderMediaImage(file, eager = false) {
  return `<img src="${assetPath(file)}" alt="" ${eager ? 'loading="eager"' : 'loading="lazy"'} decoding="async">`;
}

function renderEmbed(item) {
  const fixedHeight = Number(item.fixedHeight) || 0;
  return `
    <div class="detail-embed provider-${escapeHtml(item.provider || "web")}${fixedHeight ? " has-fixed-height" : ""}" style="--embed-ratio:${Number(item.ratio) || 56.25}%;${fixedHeight ? `--embed-height:${fixedHeight}px` : ""}">
      <iframe src="${escapeHtml(item.src)}" title="${escapeHtml(item.title || "Embedded project media")}" loading="${item.autoplay ? "eager" : "lazy"}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen></iframe>
    </div>`;
}

function renderImages(item) {
  return `<div class="detail-media-group${item.gap === false ? " no-gap" : " has-gap"}${item.mobileSingle ? " mobile-single" : ""}">
    ${item.rows.map(row => `
      <div class="media-row" style="--media-columns:${row.length}">
        ${row.map(file => `<figure>${renderMediaImage(file)}</figure>`).join("")}
      </div>`).join("")}
  </div>`;
}

function renderStrips(item) {
  return `<div class="strips-layout">
    ${item.groups.map(group => `
      <div class="media-strip" role="group" aria-label="Scrollable project images">
        ${group.map(file => `<figure>${renderMediaImage(file)}</figure>`).join("")}
      </div>`).join("")}
  </div>`;
}

function renderPaired(item) {
  return `<div class="detail-paired">
    ${item.items.map(media => media.type === "embed"
      ? renderEmbed(media)
      : `<figure class="paired-image">${renderMediaImage(media.file)}</figure>`).join("")}
  </div>`;
}

function renderAccordion(item, index, mediaMarkup = "") {
  const open = item.open || Boolean(mediaMarkup);
  const title = localized(item.title);
  const body = localized(item.body);
  return `
    <section class="detail-accordion${open ? " is-open" : ""}">
      <button type="button" class="detail-accordion-toggle" aria-expanded="${open}" aria-controls="accordion-${index}">
        <span>${escapeHtml(title)}</span><span class="detail-plus" aria-hidden="true"></span>
      </button>
      <div class="detail-accordion-panel" id="accordion-${index}">
        <div class="detail-accordion-inner">
          ${body ? `<div class="detail-body-copy">${escapeHtml(body).replaceAll("\n", "<br>")}</div>` : ""}
          ${mediaMarkup}
        </div>
      </div>
    </section>`;
}

function renderContent(project) {
  const markup = [];
  for (let index = 0; index < project.content.length; index += 1) {
    const item = project.content[index];
    if (item.type === "accordion") {
      markup.push(renderAccordion(item, index));
    } else if (item.type === "heading") {
      const next = project.content[index + 1];
      let media = "";
      if (next?.type === "images") media = renderImages(next);
      if (next?.type === "strips") media = renderStrips(next);
      if (next?.type === "embed") media = renderEmbed(next);
      if (next?.type === "paired") media = renderPaired(next);
      markup.push(renderAccordion({ title: item.title, open: true }, index, media));
      if (media) index += 1;
    } else if (item.type === "link") {
      markup.push(`<p class="detail-resource"><a href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">${escapeHtml(localized(item.label))}</a></p>`);
    } else if (item.type === "images") {
      markup.push(renderImages(item));
    } else if (item.type === "strips") {
      markup.push(renderStrips(item));
    } else if (item.type === "embed") {
      markup.push(renderEmbed(item));
    } else if (item.type === "paired") {
      markup.push(renderPaired(item));
    }
  }
  return markup.join("");
}

function updateSummaryFade() {
  els.projectDetail.querySelectorAll(".detail-summary-shell").forEach(shell => {
    const summary = shell.querySelector(".detail-summary");
    shell.classList.toggle("is-overflowing", summary.scrollHeight - summary.clientHeight > 2 && summary.scrollTop + summary.clientHeight < summary.scrollHeight - 2);
    summary.onscroll = () => {
      shell.classList.toggle("is-overflowing", summary.scrollTop + summary.clientHeight < summary.scrollHeight - 2);
    };
  });
}

function bindDetailControls() {
  els.projectDetail.querySelectorAll(".detail-accordion-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const accordion = button.closest(".detail-accordion");
      const open = !accordion.classList.contains("is-open");
      accordion.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    });
  });
}

function renderDetail(project) {
  const title = localized(project.title);
  els.projectDetail.dataset.project = project.id;
  els.projectDetail.innerHTML = `
    <div class="detail-hero">
      <div class="detail-cover"><img src="${coverPath(project)}" alt="" loading="eager" fetchpriority="high" decoding="async"></div>
      <div class="detail-copy">
        <div class="detail-meta">${escapeHtml(projectMeta(project))}</div>
        <div class="detail-summary-shell">
          <div class="detail-summary">${escapeHtml(localized(project.intro)).replaceAll("\n", "<br>")}</div>
        </div>
      </div>
    </div>
    <div class="detail-body">${renderContent(project)}</div>`;
  bindDetailControls();
  requestAnimationFrame(updateSummaryFade);
  document.title = `${title} — ${copy[state.language].name}`;
}

function selectCategory(category, fromMenu = false) {
  const before = gridTop();
  state.category = category;
  state.compact = fromMenu;
  state.detail = false;
  state.projectId = null;
  state.bioOpen = false;
  els.body.classList.remove("bio-expanded", "detail-open");
  els.body.classList.toggle("compact", state.compact);
  els.projectDetail.hidden = true;
  els.projectGrid.hidden = false;
  closeMenu();
  buildIntro();
  renderCategory();
  renderProjects();
  animateGridShift(before);
  document.title = `${copy[state.language].tags[category]} — ${copy[state.language].name}`;
  history.replaceState(null, "", `#${category}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openDetail(projectId) {
  const project = projects.find(entry => entry.id === projectId);
  if (!project) return;
  state.detail = true;
  state.compact = true;
  state.projectId = project.id;
  if (!state.category || !projectMatchesCategory(project, state.category)) state.category = project.categories[0];
  els.body.classList.add("compact", "detail-open", "has-category");
  closeMenu();
  renderCategory();
  els.projectGrid.hidden = true;
  els.projectDetail.hidden = false;
  renderDetail(project);
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", `#${project.id}`);
}

function goHome() {
  state.category = null;
  state.compact = false;
  state.detail = false;
  state.projectId = null;
  state.bioOpen = false;
  els.body.classList.remove("compact", "detail-open", "has-category", "bio-expanded");
  els.projectDetail.hidden = true;
  els.projectGrid.hidden = false;
  buildIntro();
  renderCategory();
  renderProjects();
  closeMenu();
  document.title = `${copy[state.language].name} — Portfolio`;
  history.replaceState(null, "", location.href.split("#")[0]);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateMenuLanguage() {
  const labels = menuTranslations[state.language];
  els.menuPanel.querySelectorAll("[data-category]").forEach(element => {
    const key = element.dataset.category;
    if (!labels[key]) return;
    if (key === "pd" && element.classList.contains("menu-main") && state.language === "en") {
      element.innerHTML = "Product &amp;<br>Interaction Design";
    } else {
      element.textContent = labels[key];
    }
  });
}

function renderCurrentView() {
  buildIntro();
  renderCategory();
  if (state.detail && state.projectId) {
    const project = projects.find(entry => entry.id === state.projectId);
    if (project) renderDetail(project);
  } else {
    renderProjects();
  }
}

function toggleLanguage() {
  state.language = state.language === "en" ? "zh" : "en";
  els.body.classList.toggle("lang-zh", state.language === "zh");
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  els.languageSwitch.setAttribute("aria-label", state.language === "en" ? "Switch to Chinese" : "切换到英文");
  els.homeLink.textContent = copy[state.language].name;
  updateMenuLanguage();
  renderCurrentView();
}

function setLanguage(language) {
  if (language !== state.language) toggleLanguage();
}

function openMenu() {
  state.menuOpen = true;
  els.body.classList.add("menu-open");
  els.menuButton.classList.add("open");
  els.menuButton.setAttribute("aria-expanded", "true");
  els.menuButton.setAttribute("aria-label", "Close menu");
  els.menuPanel.classList.add("open");
  els.menuPanel.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  state.menuOpen = false;
  els.body.classList.remove("menu-open");
  els.menuButton.classList.remove("open");
  els.menuButton.setAttribute("aria-expanded", "false");
  els.menuButton.setAttribute("aria-label", "Open menu");
  els.menuPanel.classList.remove("open");
  els.menuPanel.setAttribute("aria-hidden", "true");
}

function toggleMenu() {
  state.menuOpen ? closeMenu() : openMenu();
}

function loadHash() {
  const hash = decodeURIComponent(location.hash.slice(1));
  if (!hash) return;
  if (projects.some(project => project.id === hash)) openDetail(hash);
  else if (copy.en.tags[hash]) selectCategory(hash, true);
}

els.menuButton.addEventListener("click", toggleMenu);
els.languageSwitch.querySelector(".language-zh").addEventListener("click", event => {
  event.stopPropagation();
  setLanguage("zh");
});
els.languageSwitch.querySelector(".language-en").addEventListener("click", event => {
  event.stopPropagation();
  setLanguage("en");
});
els.languageSwitch.addEventListener("click", toggleLanguage);
els.homeLink.addEventListener("click", () => {
  if (els.body.classList.contains("scrolled") || state.compact || state.detail) goHome();
});
els.menuPanel.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (button) selectCategory(button.dataset.category, true);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") state.menuOpen ? closeMenu() : goHome();
});
window.addEventListener("scroll", () => {
  els.body.classList.toggle("scrolled", window.scrollY > 40 || state.compact || state.detail);
}, { passive: true });
let resizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    buildIntro();
    renderCategory();
    updateSummaryFade();
  }, 120);
});

els.body.classList.remove("lang-zh");
document.documentElement.lang = "en";
els.homeLink.textContent = copy.en.name;
buildIntro();
updateMenuLanguage();
renderProjects();
loadHash();
