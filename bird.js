/* Chirp — the portfolio bird.
   - Perches on top of the page title; when you click a link it flies there first, then the next page loads and it flies in.
   - Click the bird to ask questions. It answers from the facts written below (no backend, nothing is sent anywhere). */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SIZE = 64;

  /* ---------- Knowledge base: only things already stated on this site ---------- */
  var KB = [
    { k: ["hello", "hi", "hey", "who are you", "chirp"], a: "Chirp! I'm the portfolio bird. Ask me about Garima's projects, skills, background, or how to get in touch." },
    { k: ["who", "about", "garima", "background", "story", "yourself", "designer"], a: "Garima Shrestha is a UX and digital designer who also builds the front end herself, so designs ship the way she intended. She's finishing a Bachelor's in Web & Digital Design (4.0 GPA) and holds the Google UX Design Professional Certificate.", link: ["about.html", "Read the About page"] },
    { k: ["project", "work", "case study", "case studies", "portfolio", "show", "projects", "best"], a: "There are six case studies: Pints of Joy (inventory app), FitTrack (fitness app), Bishal Imagery (photographer website), NWGN-CA (non-profit redesign), NYC Nepali Lifestyle (studio website) and Rabina Beauty (salon website). Recruiters usually start with Pints of Joy.", link: ["work.html", "See all work"] },
    { k: ["pints", "inventory", "joy", "restaurant", "stock"], a: "Pints of Joy is an inventory app in two parts. Part 1 is Garima's Google UX capstone: research, personas, wireframes, lo-fi and hi-fi prototypes and two usability studies. Part 2 is the real build for an actual business, with before/after screens, wireframes and prototypes.", link: ["pints-of-joy.html", "Open Pints of Joy"] },
    { k: ["fittrack", "fitness", "gym", "workout", "protein", "weight", "ai app"], a: "FitTrack is a solo personal project: a free all-in-one fitness app with AI coaching plus weight and protein tracking. Garima started going to the gym, found no easy free AI tracker, and designed one with her own customizations.", link: ["fittrack.html", "Open FitTrack"] },
    { k: ["bishal", "photographer", "photography", "booking", "imagery"], a: "Bishal Imagery is a bookings-ready website for a Bay Area photographer, live on a custom domain. Garima did the UX, UI and front-end.", link: ["bishal.html", "Open Bishal Imagery"] },
    { k: ["nwgn", "nwgnca", "non-profit", "nonprofit", "women", "donate", "nepalese"], a: "NWGN-CA is a redesign of the Nepalese Women Global Network's California chapter website: real members' faces first, and clear ways to join and donate. It's live at nwgnca.com.", link: ["nwgnca.html", "Open NWGN-CA"] },
    { k: ["rabina", "salon", "beauty", "kathmandu"], a: "Rabina Beauty is a full website Garima built from scratch for a beauty salon and training center in Kathmandu.", link: ["rabina.html", "Open Rabina Beauty"] },
    { k: ["nyc", "queens", "studio", "film", "lifestyle"], a: "NYC Nepali Lifestyle is a live website framework for a Queens photo and film studio, from content audit to launch.", link: ["nyc-lifestyle.html", "Open NYC Nepali Lifestyle"] },
    { k: ["skill", "tool", "figma", "software", "tech", "code", "coding", "html", "css", "shopify", "wordpress", "illustrator"], a: "Figma; UX research, prototyping and usability testing; Adobe Illustrator, InDesign and Lightroom; accessibility-minded design; HTML5, CSS, Shopify/Liquid and WordPress; and AI-assisted building with Claude Code, GitHub Copilot and Lovable." },
    { k: ["process", "how do you work", "method", "approach"], a: "Listen, simplify, ship: sit with the people who use the product, turn scattered tasks into one clear flow, then build, test and iterate on real feedback." },
    { k: ["education", "school", "degree", "gpa", "certificate", "google", "study", "student"], a: "Garima is completing a Bachelor's in Web & Digital Design with a 4.0 GPA and holds the Google UX Design Professional Certificate." },
    { k: ["hire", "job", "available", "open", "role", "opportunit", "looking"], a: "Yes, Garima is actively looking for UX and digital design roles. The fastest way to reach her is email.", link: ["contact.html", "Go to Contact"] },
    { k: ["contact", "email", "reach", "talk", "message", "connect"], a: "Email Garima at gaaarima11@gmail.com, or use the Contact page.", link: ["contact.html", "Go to Contact"] },
    { k: ["resume", "cv"], a: "A downloadable resume isn't up on the site yet. Email gaaarima11@gmail.com and Garima can send it." },
    { k: ["jewelry", "teesa", "newari", "nepali", "heritage"], a: "Before design, Garima spent years in fine jewelry and restaurant management. She's also building a luxury jewelry brand, Teesa, which draws on her Nepali heritage and Newari craftsmanship." },
    { k: ["illustration", "art", "creative", "photo"], a: "Beyond UX, Garima does illustration, nature photography and brand and packaging design. Choose the \"Everything\" view at the top of the site to see the full range." },
    { k: ["accessib", "wcag", "contrast"], a: "Accessibility runs through the work: high-contrast color, icons plus labels, back buttons, alt text and reduced-motion support." }
  ];
  var CHIPS = ["Show me the best project", "What are her skills?", "Is she open to work?", "How do I contact her?"];
  var FALLBACK = "I only know what's written on this site, and I couldn't find that. Try asking about a project, her skills, her background, or how to reach her. Or email gaaarima11@gmail.com.";

  function answer(q) {
    var t = " " + q.toLowerCase().replace(/[^a-z0-9\- ]/g, " ") + " ";
    var best = null, bs = 0;
    KB.forEach(function (e) {
      var s = 0;
      e.k.forEach(function (w) { if (t.indexOf(w.length < 4 ? " " + w + " " : w) > -1) s += w.length > 5 ? 2 : 1; });
      if (s > bs) { bs = s; best = e; }
    });
    return bs ? best : null;
  }

  /* ---------- Bird ---------- */
  var SVG = '<svg viewBox="0 0 64 64" width="' + SIZE + '" height="' + SIZE + '" aria-hidden="true" focusable="false">' +
    '<g class="chirp__flip">' +
    '<path d="M14 40 L3 34 L5 46 Z" fill="#3a36a8"/>' +
    '<path d="M27 15 q-2-8 3-9 M32 14 q0-8 5-8 M37 16 q3-6 7-4" stroke="#3a36a8" stroke-width="2.4" stroke-linecap="round" fill="none"/>' +
    '<circle cx="32" cy="36" r="21" fill="#4a45c8"/>' +
    '<ellipse cx="34" cy="43" rx="13" ry="10" fill="#e9e8fb"/>' +
    '<g class="chirp__wing"><path d="M18 36 q-4 14 12 14 q-4-8 -4-16 z" fill="#3a36a8"/></g>' +
    '<circle cx="44" cy="35" r="3.6" fill="#ffb4a0" opacity=".7"/>' +
    '<g class="chirp__eye"><circle cx="40" cy="29" r="4.6" fill="#fff"/><circle cx="41.2" cy="29.4" r="2.5" fill="#14132e"/><circle cx="42" cy="28.4" r=".9" fill="#fff"/></g>' +
    '<path d="M50 31 L60 35 L50 39 Z" fill="#ff9b71"/>' +
    '<path d="M28 56 v5 M36 56 v5" stroke="#ff9b71" stroke-width="2.6" stroke-linecap="round"/>' +
    '</g></svg>';

  var bird = document.createElement("button");
  bird.type = "button"; bird.className = "chirp";
  bird.setAttribute("aria-label", "Ask Chirp, the portfolio bird, a question");
  bird.innerHTML = SVG + '<span class="chirp__tip">Ask me!</span>';
  document.body.appendChild(bird);
  var cx = 0, cy = 0, face = 1, cur = null;

  function place(x, y) { cx = x; cy = y; bird.style.transform = "translate(" + x + "px," + y + "px)"; }
  function setFace(dx) { if (Math.abs(dx) > 4) { face = dx >= 0 ? 1 : -1; bird.style.setProperty("--face", face); } }

  function fly(x, y, ms, done) {
    setFace(x - cx);
    if (reduce) { place(x, y); bird.classList.remove("chirp--fly"); if (done) done(); return; }
    bird.classList.add("chirp--fly");
    var mx = (cx + x) / 2, my = Math.min(cy, y) - 90;
    var a = bird.animate([
      { transform: "translate(" + cx + "px," + cy + "px)" },
      { transform: "translate(" + mx + "px," + my + "px)", offset: .5 },
      { transform: "translate(" + x + "px," + y + "px)" }
    ], { duration: ms, easing: "cubic-bezier(.4,.1,.3,1)" });
    a.onfinish = function () { place(x, y); bird.classList.remove("chirp--fly"); setFace(1); if (done) done(); };
  }

  /* where to perch: top of the page title (the word itself, not the full-width box) */
  function perchPoint() {
    var h = document.querySelector(".stage h1") || document.querySelector("main h1") || document.querySelector(".logo, .brand, header a");
    if (!h) return { x: window.innerWidth - 100, y: 80 };
    var r = h.getBoundingClientRect();
    try { var rg = document.createRange(); rg.selectNodeContents(h); var rr = rg.getBoundingClientRect(); if (rr.width) r = rr; } catch (e) {}
    var x = r.left + Math.min(r.width * 0.84, r.width - 40) - SIZE / 2 + window.scrollX;
    var fs = parseFloat(getComputedStyle(h).fontSize) || 16;
    var y = r.top + window.scrollY - SIZE + 6 + Math.min(fs * 0.2, 40);
    return { x: Math.max(8, x), y: Math.max(8, y) };
  }
  function perch(animate) {
    var p = perchPoint();
    if (animate) fly(p.x, p.y, 1100); else place(p.x, p.y);
  }

  /* entrance: start where the last click happened (or off-screen), then fly to the perch */
  var start = null;
  try { start = JSON.parse(sessionStorage.getItem("chirp-from")); sessionStorage.removeItem("chirp-from"); } catch (e) {}
  if (start && typeof start.x === "number") place(start.x, start.y + window.scrollY);
  else place(window.innerWidth + 40, -80);
  setTimeout(function () { perch(true); }, 250);
  window.addEventListener("resize", function () { if (!bird.classList.contains("chirp--fly")) perch(false); });
  window.addEventListener("load", function () { if (!bird.classList.contains("chirp--fly")) perch(false); });

  /* clicking an internal link: fly to it, then go */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    var u; try { u = new URL(a.href, location.href); } catch (er) { return; }
    if (u.origin !== location.origin || !/\.html?$|\/$/.test(u.pathname) || (u.pathname === location.pathname && u.search === location.search)) return;
    e.preventDefault();
    var r = a.getBoundingClientRect();
    var vy = Math.max(6, r.top - SIZE + 6);
    var tx = r.left + r.width / 2 - SIZE / 2 + window.scrollX, ty = vy + window.scrollY;
    try { sessionStorage.setItem("chirp-from", JSON.stringify({ x: r.left + r.width / 2 - SIZE / 2, y: vy })); } catch (er) {}
    closePanel();
    var went = false, go = function () { if (!went) { went = true; location.href = a.href; } };
    fly(tx, ty, reduce ? 0 : 650, go);
    setTimeout(go, reduce ? 0 : 900);   /* fallback: never get stuck if the animation event doesn't fire */
  }, true);

  /* ---------- Chat ---------- */
  var panel = document.createElement("section");
  panel.className = "chirp-panel"; panel.hidden = true;
  panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "Chat with Chirp");
  panel.innerHTML =
    '<header><div class="chirp-panel__av">' + SVG + '</div><div><b>Chirp</b><span>Ask about this portfolio</span></div><button type="button" class="chirp-panel__x" aria-label="Close chat">&times;</button></header>' +
    '<div class="chirp-panel__log" aria-live="polite"></div>' +
    '<div class="chirp-panel__chips"></div>' +
    '<form class="chirp-panel__form"><input type="text" placeholder="Ask a question…" aria-label="Your question" autocomplete="off" maxlength="200" /><button type="submit" aria-label="Send">&#10148;</button></form>' +
    '<p class="chirp-panel__note">Answers come from what\'s written on this site.</p>';
  document.body.appendChild(panel);
  var log = panel.querySelector(".chirp-panel__log"), chips = panel.querySelector(".chirp-panel__chips"),
      form = panel.querySelector("form"), input = form.querySelector("input");

  function add(cls, html) { var d = document.createElement("div"); d.className = "chirp-msg chirp-msg--" + cls; d.innerHTML = html; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function reply(q) {
    add("me", esc(q));
    var typing = add("bot", '<span class="chirp-dots"><i></i><i></i><i></i></span>');
    setTimeout(function () {
      var e = answer(q);
      typing.innerHTML = esc(e ? e.a : FALLBACK) + (e && e.link ? '<a class="chirp-msg__go" href="' + e.link[0] + '">' + esc(e.link[1]) + ' &rarr;</a>' : "");
      log.scrollTop = log.scrollHeight;
    }, reduce ? 0 : 550);
  }
  CHIPS.forEach(function (c) {
    var b = document.createElement("button"); b.type = "button"; b.textContent = c;
    b.addEventListener("click", function () { reply(c); });
    chips.appendChild(b);
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); var q = input.value.trim(); if (!q) return; input.value = ""; reply(q); });

  var greeted = false;
  function openPanel() {
    panel.hidden = false; bird.classList.add("chirp--hop"); setTimeout(function () { bird.classList.remove("chirp--hop"); }, 600);
    if (!greeted) { greeted = true; add("bot", "Chirp chirp! I'm Chirp. Ask me anything about Garima's portfolio."); }
    setTimeout(function () { input.focus(); }, 50);
  }
  function closePanel() { panel.hidden = true; }
  bird.addEventListener("click", function (e) { e.stopPropagation(); panel.hidden ? openPanel() : (closePanel(), bird.focus()); });
  panel.querySelector(".chirp-panel__x").addEventListener("click", function () { closePanel(); bird.focus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) { closePanel(); bird.focus(); } });
})();
