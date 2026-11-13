/* Library home: one list of projects drives the shelf, the index and the book reader. */
(function () {
  "use strict";
  var BOOKS = [
    { id: "inventory", cover: "assets/cover-pints.jpg", tags: "ux", t: "Inventory App", ty: "Mobile app · Part 1", s: "My Google UX capstone", c: "#4a45c8", dk: "#2c2990", epi: "The task isn’t hard; human error makes it hard.",
      img: "assets/pints-home.png", cap: "The home screen after two rounds of usability testing.", href: "inventory-app.html", by: "Mobile app · Google UX capstone · Part 1 of 2",
      story: ["My first UX project, end to end: interviews with restaurant managers, personas, wireframes, and lo-fi and hi-fi prototypes.", "Two rounds of usability testing moved the home screen from navigation-only to live stock counts and a one-tap review of what needs ordering."],
      quote: "Testing asked for more on the home screen, so counts and alerts moved front and centre.",
      facts: [["Type", "Mobile app"], ["Role", "Research, UX, UI"], ["Process", "Personas, wireframes, prototypes, usability studies"], ["Outcome", "A tested hi-fi prototype"]] },
    { id: "pints", cover: "assets/cover-pints-joy.jpg", tags: "ux", t: "Pints of Joy", ty: "Web app · Real business", s: "From Excel to a live app", c: "#b4601c", dk: "#6e3509", epi: "A weekly spreadsheet became the tool the week runs on.",
      img: "assets/pints-new-dashboard.jpg", cap: "The redesigned Stock Flow dashboard.", href: "pints-of-joy.html", by: "Web app · Real client · Part 2 of 2",
      story: ["Pints of Joy is a small-batch Indian ice-cream maker. Every week, inventory, production and store transfers lived in a hand-typed Excel sheet.", "I mapped the real workflow with the owner and manager and designed the app that replaced it, iterating weekly with the person who uses it."],
      quote: "The best decisions came from watching someone use the app in their actual week.",
      facts: [["Type", "Web app"], ["Role", "UX and product design"], ["Team", "Me + Vijay (AI layer)"], ["Outcome", "Live in daily operations"]] },
    { id: "fittrack", cover: "assets/cover-fittrack.jpg", tags: "ux", t: "FitTrack", ty: "Mobile app · Personal", s: "A free AI fitness companion", c: "#0f5c55", dk: "#093b37", epi: "One app for training, protein and weight.",
      img: "assets/fittrack-userflow-hifi.png", cap: "High-fidelity screens: start page, body diagram, workout plan.", href: "fittrack.html", by: "Mobile app · Personal project · Solo",
      story: ["I started going to the gym and wanted one place to track it all. At the time there was no easy, free AI fitness tracker, so I designed one.", "It adds my own customisations: weight and protein tracking, a tap-a-muscle body diagram and AI suggestions, all in one app."],
      quote: "Visible progress and encouragement keep people coming back.",
      facts: [["Type", "Mobile app"], ["Role", "Solo: research, UX and UI"], ["Tools", "Figma"], ["Outcome", "Ten hi-fi screens and a full flow"]] },
    { id: "bishal", cover: "assets/cover-bishal.jpg", tags: "ux web", t: "Bishal Imagery", ty: "Website · Freelance", s: "A photographer’s booking website", c: "#26262f", dk: "#14141a", epi: "Let the work breathe.",
      img: "assets/bishal-hero-desktop.jpg", cap: "The live homepage, desktop view.", href: "bishal.html", by: "Website · Freelance client · UX, UI and front-end",
      story: ["A Bay Area photographer needed a site that lets the photographs lead and makes booking effortless.", "I designed and built it end to end, and it now lives on a custom domain."],
      quote: "Big images, little chrome, one clear way to book.",
      facts: [["Type", "Website, live"], ["Role", "UX, UI, front-end"], ["Client", "Bay Area photographer"], ["Outcome", "Bookings-ready site on a custom domain"]] },
    { id: "nwgnca", cover: "assets/cover-nwgnca.jpg", tags: "ux web", t: "NWGN-CA", ty: "Website redesign · Non-profit", s: "A non-profit, redesigned", c: "#8a2b52", dk: "#5c1a37", epi: "Real faces first.",
      img: "assets/nwgnca-after-hero.jpg", cap: "After: the new homepage.", href: "nwgnca.html", by: "Website redesign · Non-profit · Live",
      story: ["The California chapter of the Nepalese Women Global Network had a crowded, hard-to-maintain site.", "The redesign puts real members’ faces first and makes two actions impossible to miss: join, and donate."],
      quote: "A calm, premium look the board can maintain itself.",
      facts: [["Type", "Website redesign"], ["Client", "NWGN-CA, a real chapter"], ["Focus", "Join and donate, mobile-first"], ["Live", "nwgnca.com"]] },
    { id: "nyc", cover: "assets/cover-nyc.jpg", tags: "web", t: "NYC Nepali Lifestyle", ty: "Website · Client", s: "A studio website, audit to launch", c: "#2c4a7a", dk: "#1b3052", epi: "From content audit to launch.",
      img: "", href: "nyc-lifestyle.html", by: "Website · Client work",
      story: ["A live website framework for a Queens photo and film studio, taken from content audit all the way to launch."],
      quote: "",
      facts: [["Type", "Website, live"], ["Client", "Queens photo and film studio"], ["Scope", "Content audit to launch"]] },
    { id: "rabina", cover: "assets/cover-rabina.jpg", tags: "web", t: "Rabina Beauty", ty: "Website · Client", s: "A salon and training center site", c: "#c2573a", dk: "#8b3a24", epi: "Built from scratch, built to be accessible.",
      img: "", href: "rabina.html", by: "Website · Client work",
      story: ["A full, accessible website built from scratch for a beauty salon and training center in Kathmandu."],
      quote: "",
      facts: [["Type", "Website"], ["Client", "Beauty salon and training center, Kathmandu"], ["Focus", "Accessible, built from scratch"]] }
  ];
  var ROM = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

  /* ---------- shelf + index ---------- */
  var shelf = document.getElementById("shelf"), rows = document.getElementById("rows");
  var lastFocus = null;
  var SC = ["#8f9bd8", "#e6b7a0", "#9fc3b4", "#c9a5d6", "#e9d28a", "#7d86b8", "#d98b8b", "#a7b8c9"];
  function spine(k) {
    var s = document.createElement("i"); s.className = "spine" + (k % 5 === 3 ? " lean" : "");
    s.style.cssText = "--w:" + (13 + (k * 7) % 14) + "px;--h:" + (0.78 + ((k * 5) % 7) / 30).toFixed(2) + ";--sc:" + SC[(k * 3) % SC.length];
    return s;
  }
  var rowEls = [], PER = Math.ceil(BOOKS.length / 2);
  for (var q = 0; q < 2; q++) {
    var re = document.createElement("div"); re.className = "shelf-row";
    shelf.appendChild(re); rowEls.push(re);
    var pl = document.createElement("div"); pl.className = "plank"; shelf.appendChild(pl);
  }
  var base = document.createElement("div"); base.className = "case__base"; shelf.appendChild(base);
  rowEls.forEach(function (re, qi) { re.appendChild(spine(qi * 4 + 1)); re.appendChild(spine(qi * 4 + 2)); });
  BOOKS.forEach(function (b, i) {
    var c = document.createElement("button");
    c.type = "button"; c.className = "cover-card"; c.dataset.tags = b.tags; c.style.cssText = "--c:" + b.c + ";--i:" + i;
    c.setAttribute("aria-label", "Open the book: " + b.t);
    c.innerHTML = '<img src="' + b.cover + '" alt="" loading="lazy" /><span class="no">No. ' + ROM[i] + '</span><span class="go" aria-hidden="true">↗</span><span class="cap"><span class="tt">' + b.t + '</span><span class="ty">' + b.ty + '</span></span>';
    c.addEventListener("click", function () { lastFocus = c; openBook(b); });
    var re = rowEls[Math.floor(i / PER)];
    re.appendChild(c);
    if (i % PER === PER - 1 || i === BOOKS.length - 1) { re.appendChild(spine(i + 9)); re.appendChild(spine(i + 12)); }

    var r = document.createElement("div"); r.className = "row"; r.dataset.tags = b.tags;
    r.innerHTML = '<span class="row__no work-row__num">' + ROM[i] + '</span><button type="button" class="row__open">' + b.t + '</button><span class="row__type">' + b.ty + '</span><a class="row__cta" href="' + b.href + '">Case study <span aria-hidden="true">→</span></a>';
    r.querySelector(".row__open").addEventListener("click", function (e) { lastFocus = e.currentTarget; openBook(b); });
    rows.appendChild(r);
  });

  /* creative work: art + photography rows in the same index (open the gallery viewer) */
  [["art", "Art", "Mandalas and abstract · 6 pieces", "View"], ["photo", "Photography", "Architecture · 6 photos", "View"]].forEach(function (g, k) {
    var n = BOOKS.length + k;
    var r = document.createElement("div"); r.className = "row"; r.dataset.tags = "art";
    r.innerHTML = '<span class="row__no work-row__num">' + ROM[n] + '</span><button type="button" class="row__open">' + g[1] + '</button><span class="row__type">' + g[2] + '</span><a class="row__cta" href="#gallery">Gallery <span aria-hidden="true">↓</span></a>';
    r.querySelector(".row__open").addEventListener("click", function () {
      var first = document.querySelector('.g-item[data-group="' + g[0] + '"]'); if (first) first.click();
    });
    rows.appendChild(r);
  });

  /* ---------- view switch in the hero mirrors the header switch ---------- */
  document.querySelectorAll(".view .path-switch button").forEach(function (b) {
    b.addEventListener("click", function () {
      var hb = document.querySelector('.site-head .path-switch button[data-path="' + b.dataset.path + '"]');
      if (hb) hb.click();
    });
  });

  /* ---------- book reader ---------- */
  var overlay = document.getElementById("overlay"), book = document.getElementById("book"), stack = document.getElementById("stack");
  var prevB = document.getElementById("prev"), nextB = document.getElementById("next"), where = document.getElementById("where");
  var leaves = [], N = 0, s = 0;
  function run(l, r) { return '<div class="run"><span>' + l + '</span><span>' + r + '</span></div>'; }
  function folio(n) { return '<div class="folio">' + n + '</div>'; }
  function page(inner, cls) { return '<div class="inner ' + (cls || "") + '">' + inner + '</div>'; }

  function pagesFor(b) {
    var P = [];
    P.push('<div class="cover" role="button" aria-label="Open the book" tabindex="0"><img src="' + b.cover + '" alt="" /><div class="cover__bar"><span class="k">A case study</span><div class="t">' + b.t + '</div><div class="s">' + b.s + '</div></div><span class="open-hint">Open →</span></div>');
    P.push('<div class="endpaper"><q>' + b.epi + '</q></div>');
    P.push(page(run("Contents", "Garima Shrestha") + '<div class="toc"><h3>Inside</h3><ol><li><a href="#" data-go="2"><i>01</i><b>Title page</b><span>3</span></a></li><li><a href="#" data-go="2"><i>02</i><b>The work</b><span>4</span></a></li><li><a href="#" data-go="3"><i>03</i><b>The story</b><span>5</span></a></li><li><a href="#" data-go="3"><i>04</i><b>In brief</b><span>6</span></a></li></ol></div>' + folio(2)));
    P.push(page(run("Garima Shrestha", "Case study") + '<div class="k">Case study</div><h2>' + b.t + '</h2><div class="sub">' + b.s + '</div><div class="rule"></div>' + folio(3), "h-title"));
    var plate = b.img ? '<div class="frame"><img src="' + b.img + '" alt="' + b.t + ' screens" /></div>' : '<div class="frame solid">' + b.t.charAt(0) + '</div>';
    P.push(page(run("The work", b.t) + '<figure class="plate" style="margin-top:6cqw">' + plate + '<figcaption><b>The work</b>' + (b.cap || b.s) + '</figcaption></figure>' + folio(4)));
    P.push(page(run("Garima Shrestha", b.t) + '<div class="story"><h3>The story</h3><div class="by">' + b.by + '</div>' + b.story.map(function (t) { return '<p>' + t + '</p>'; }).join("") + (b.quote ? '<p class="quote">' + b.quote + '</p>' : "") + '</div>' + folio(5)));
    P.push(page(run(b.t, "In brief") + '<div class="facts"><h3>In brief</h3><dl>' + b.facts.map(function (f) { return '<dt>' + f[0] + '</dt><dd>' + f[1] + '</dd>'; }).join("") + '</dl></div><a class="turn" href="' + b.href + '">Read the full case study →</a>' + folio(6)));
    P.push('<div class="endpaper"></div>');
    return P;
  }
  function openBook(b) {
    overlay.style.setProperty("--cloth", b.c); overlay.style.setProperty("--cloth-dk", b.dk);
    leaves.forEach(function (l) { l.remove(); }); leaves = [];
    var P = pagesFor(b); N = P.length / 2; s = 0;
    for (var k = 0; k < N; k++) {
      var leaf = document.createElement("div"); leaf.className = "leaf";
      var f = document.createElement("div"); f.className = "face front"; f.innerHTML = P[2 * k] + '<span class="hit" data-d="1"></span>';
      var bk = document.createElement("div"); bk.className = "face back"; bk.innerHTML = P[2 * k + 1] + '<span class="hit" data-d="-1"></span>';
      [f, bk].forEach(function (face) { if (face.firstElementChild && face.firstElementChild.classList.contains("inner")) face.classList.add("page"); });
      leaf.appendChild(f); leaf.appendChild(bk); stack.appendChild(leaf); leaves.push(leaf);
    }
    overlay.classList.add("on"); document.body.style.overflow = "hidden";
    render(null);
    setTimeout(function () { go(1); }, 600);
    document.getElementById("close").focus();
  }
  function closeBook() { overlay.classList.remove("on"); document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  function render(prev) {
    leaves.forEach(function (l, i) {
      var flipped = i < s, was = prev != null && i < prev; l.classList.toggle("flipped", flipped);
      var moving = prev != null && flipped !== was; l.style.zIndex = moving ? N + 2 : (flipped ? i : N - i);
      if (moving) setTimeout(function () { l.style.zIndex = flipped ? i : N - i; }, 1000);
    });
    book.dataset.s = s === N ? "end" : s;
    prevB.disabled = s === 0; nextB.disabled = s === N;
    where.textContent = s === 0 ? "Cover" : s === N ? "Back cover" : "Pages " + (2 * s - 1 < 2 ? "i" : 2 * s - 1) + " and " + 2 * s;
  }
  function go(n) { n = Math.max(0, Math.min(N, n)); if (n === s) return; var p = s; s = n; render(p); }
  nextB.onclick = function () { go(s + 1); }; prevB.onclick = function () { go(s - 1); };
  document.getElementById("close").onclick = closeBook;
  overlay.addEventListener("click", function (e) { if (e.target === overlay) closeBook(); });
  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("on")) return;
    if (e.key === "Escape") closeBook(); if (e.key === "ArrowRight") go(s + 1); if (e.key === "ArrowLeft") go(s - 1);
  });
  book.addEventListener("click", function (e) {
    var g = e.target.closest("[data-go]"); if (g) { e.preventDefault(); go(+g.dataset.go); return; }
    if (e.target.closest("a")) return;
    if (e.target.closest(".cover")) { go(1); return; }
    var h = e.target.closest(".hit"); if (h) go(s + +h.dataset.d);
  });
  book.addEventListener("keydown", function (e) { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("cover")) { e.preventDefault(); go(1); } });
  var sx = null; book.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  book.addEventListener("touchend", function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(s + (dx < 0 ? 1 : -1)); sx = null; });
})();
