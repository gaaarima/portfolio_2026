/* Portfolio assistant: a small bird with a "?" in the bottom-left corner.
   Answers questions about this portfolio from the facts below. No backend; nothing is sent anywhere. */
(function () {
  "use strict";
  var KB = [
    { k: ["hello", "hi", "hey", "who are you", "what are you", "assistant", "chirp"], a: "Hi! I'm the portfolio assistant. Ask me about Garima's projects, skills, art, background, or how to get in touch." },
    { k: ["who is", "about", "garima", "background", "story", "yourself", "designer", "bio", "introduce"], a: "Garima Shrestha is a UX and digital designer in the Bay Area who also builds the front end, so designs ship the way they were intended. Garima is finishing a Bachelor's in Web & Digital Design (4.0 GPA) and holds the Google UX Design Professional Certificate.", link: ["about.html", "Read the About page"] },
    { k: ["project", "work", "case study", "case studies", "portfolio", "show", "best", "recommend", "start", "first", "list", "everything"], a: "There are seven case studies: Inventory App (Part 1) and Pints of Joy (Part 2), FitTrack, Bishal Imagery, NWGN-CA, NYC Nepali Lifestyle and Rabina Beauty. If you only look at one, start with Pints of Joy: a real business, a real build.", link: ["work.html", "See all work"] },
    { k: ["inventory", "capstone", "restaurant", "part 1"], a: "Inventory App is Part 1 of the inventory story and Garima's Google UX capstone: interviews with restaurant managers, personas, wireframes, lo-fi and hi-fi prototypes, and two rounds of usability testing.", link: ["inventory-app.html", "Open Inventory App"] },
    { k: ["pints", "joy", "ice cream", "excel", "stock flow", "part 2"], a: "Pints of Joy is Part 2: the same idea rebuilt for a real small-batch ice-cream business, replacing a weekly Excel routine with a live app they use in daily operations.", link: ["pints-of-joy.html", "Open Pints of Joy"] },
    { k: ["fittrack", "fitness", "gym", "workout", "protein", "weight", "nutrition", "coach"], a: "FitTrack is a personal concept: an all-in-one mobile app for workouts, nutrition and weight, with AI coaching.", link: ["fittrack.html", "Open FitTrack"] },
    { k: ["bishal", "imagery", "booking", "bookings"], a: "Bishal Imagery is a bookings-ready website for a Bay Area photographer, live on a custom domain. Garima did the UX, UI and front-end.", link: ["bishal.html", "Open Bishal Imagery"] },
    { k: ["nwgn", "non-profit", "nonprofit", "women", "donate", "nepalese", "join"], a: "NWGN-CA is a mobile-first redesign of the Nepalese Women Global Network California chapter's website: real faces first, clear ways to join and donate. It's live at nwgnca.com.", link: ["nwgnca.html", "Open NWGN-CA"] },
    { k: ["rabina", "salon", "beauty", "kathmandu", "training center"], a: "Rabina Beauty is an accessible 11-page website built from scratch for a beauty salon and training center in Kathmandu.", link: ["rabina.html", "Open Rabina Beauty"] },
    { k: ["nyc", "queens", "film", "lifestyle", "studio"], a: "NYC Nepali Lifestyle is a live 12-page website framework for a Queens photo and film studio, from content audit to launch.", link: ["nyc-lifestyle.html", "Open NYC Nepali Lifestyle"] },
    { k: ["art", "paint", "painting", "mandala", "abstract", "charcoal", "drawing", "draw", "portrait", "tapasya", "wall of faces", "artist"], a: "Garima paints and draws: mandalas as a form of meditation, abstract work that uses colour as a language for emotion, and charcoal portraits like Tapasya and a Wall of Faces series. Six pieces are in the gallery on the home page.", link: ["index.html#gallery", "See the gallery"] },
    { k: ["photo", "photography", "architecture", "golden gate", "vessel", "oculus", "camera"], a: "The photography gallery has six architecture and city photos, including the Golden Gate in fog, the Vessel, a patterned facade and the Oculus.", link: ["index.html#gallery", "See the photos"] },
    { k: ["zion", "poster", "map", "digital design", "illustrator poster"], a: "The Zion National Park poster is an illustrated map with trails, river, landmarks and a map key, made in Illustrator.", link: ["index.html#gallery", "See the poster"] },
    { k: ["skill", "tool", "figma", "software", "tech", "code", "coding", "html", "css", "shopify", "wordpress", "illustrator", "javascript"], a: "Figma; UX research, prototyping and usability testing; Adobe Illustrator, InDesign and Lightroom; accessibility-minded design; HTML5, CSS, Shopify/Liquid and WordPress; and AI-assisted building with Claude Code, GitHub Copilot and Lovable." },
    { k: ["process", "how do you work", "method", "approach", "workflow"], a: "Listen, simplify, ship: sit with the people who use the product, turn scattered tasks into one clear flow, then build, test and iterate on real feedback." },
    { k: ["education", "school", "degree", "gpa", "certificate", "google", "study", "student", "college", "university"], a: "Garima is completing a Bachelor's in Web & Digital Design with a 4.0 GPA and holds the Google UX Design Professional Certificate." },
    { k: ["hire", "job", "available", "open to", "role", "opportunit", "looking", "freelance", "intern"], a: "Yes, Garima is open to UX and digital design opportunities. Email is the fastest way to reach out.", link: ["contact.html", "Go to Contact"] },
    { k: ["contact", "email", "reach", "talk", "message", "connect", "phone"], a: "Email Garima at gaaarima11@gmail.com, or use the Contact page.", link: ["contact.html", "Go to Contact"] },
    { k: ["resume", "cv", "download"], a: "You can download the resume as a PDF.", link: ["assets/Garima-Shrestha-Resume.pdf", "Download resume"] },
    { k: ["jewelry", "jewellery", "teesa", "newari", "nepali", "heritage", "before design", "career"], a: "Before design, Garima spent years in fine jewelry and restaurant management, which shapes how products get designed around real users. Garima is also developing a luxury jewelry brand, Teesa, drawing on Nepali heritage and Newari craftsmanship." },
    { k: ["accessib", "wcag", "contrast", "a11y"], a: "Accessibility runs through the work: strong colour contrast, icons plus labels, back buttons, alt text and reduced-motion support." },
    { k: ["color", "colour", "palette", "theme", "font", "typeface"], a: "This site uses cobalt blue #0C45B0, terracotta brown #7A3E26 text and a sand #DFBFA0 background, with a serif for headings." },
    { k: ["where", "location", "live", "bay area", "california"], a: "Garima is based in the Bay Area, California." }
  ];
  var CHIPS = ["What's the best project to start with?", "What tools do you use?", "Is Garima open to work?", "How do I get in touch?"];
  var FALLBACK = "I couldn't find that on this site. Try asking about a project, the art, skills, background, or how to reach Garima. Or email gaaarima11@gmail.com.";

  function answer(q) {
    var t = " " + q.toLowerCase().replace(/[^a-z0-9\- ]/g, " ") + " ";
    var best = null, bs = 0;
    KB.forEach(function (e) {
      var s = 0;
      e.k.forEach(function (w) { if (t.indexOf(w.length < 4 ? " " + w + " " : w) > -1) s += w.length > 5 ? 2 : 1; });
      if (s > bs) { bs = s; best = e; }
    });
    return best;
  }

  var BIRD = '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">' +
    '<path d="M14 40 L3 34 L5 46 Z" fill="#082F7C"/>' +
    '<path d="M27 15 q-2-8 3-9 M32 14 q0-8 5-8 M37 16 q3-6 7-4" stroke="#082F7C" stroke-width="2.4" stroke-linecap="round" fill="none"/>' +
    '<circle cx="32" cy="36" r="21" fill="#0C45B0"/>' +
    '<ellipse cx="34" cy="43" rx="13" ry="10" fill="#EBD5BE"/>' +
    '<path d="M18 36 q-4 14 12 14 q-4-8 -4-16 z" fill="#082F7C"/>' +
    '<circle cx="40" cy="29" r="4.6" fill="#fff"/><circle cx="41.2" cy="29.4" r="2.5" fill="#2a160d"/><circle cx="42" cy="28.4" r=".9" fill="#fff"/>' +
    '<path d="M50 31 L60 35 L50 39 Z" fill="#7A3E26"/>' +
    '<path d="M28 56 v5 M36 56 v5" stroke="#7A3E26" stroke-width="2.6" stroke-linecap="round"/></svg>';

  var btn = document.createElement("button");
  btn.type = "button"; btn.className = "ask";
  btn.setAttribute("aria-label", "Ask a question about this portfolio"); btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = BIRD + '<span class="ask__q" aria-hidden="true">?</span>';
  document.body.appendChild(btn);

  var panel = document.createElement("section");
  panel.className = "ask-panel"; panel.hidden = true;
  panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "Portfolio assistant");
  panel.innerHTML =
    '<header><div class="ask-panel__av">' + BIRD + '</div><div><b>Portfolio assistant</b><span>Ask anything about this portfolio</span></div><button type="button" class="ask-panel__x" aria-label="Close">&times;</button></header>' +
    '<div class="ask-panel__log" aria-live="polite"></div><div class="ask-panel__chips"></div>' +
    '<form class="ask-panel__form"><input type="text" placeholder="Ask a question…" aria-label="Your question" autocomplete="off" maxlength="200" /><button type="submit" aria-label="Send">&#10148;</button></form>' +
    '<p class="ask-panel__note">Answers come from what is written on this site.</p>';
  document.body.appendChild(panel);
  var log = panel.querySelector(".ask-panel__log"), chips = panel.querySelector(".ask-panel__chips"),
      form = panel.querySelector("form"), input = form.querySelector("input");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function add(cls, html) { var d = document.createElement("div"); d.className = "ask-msg ask-msg--" + cls; d.innerHTML = html; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; }
  function reply(q) {
    add("me", esc(q));
    var typing = add("bot", '<span class="ask-dots"><i></i><i></i><i></i></span>');
    setTimeout(function () {
      var e = answer(q);
      typing.innerHTML = esc(e ? e.a : FALLBACK) + (e && e.link ? '<a class="ask-msg__go" href="' + e.link[0] + '"' + (/\.pdf$/.test(e.link[0]) ? ' download' : '') + '>' + esc(e.link[1]) + ' &rarr;</a>' : "");
      log.scrollTop = log.scrollHeight;
    }, reduce ? 0 : 450);
  }
  CHIPS.forEach(function (c) {
    var b = document.createElement("button"); b.type = "button"; b.textContent = c;
    b.addEventListener("click", function () { reply(c); }); chips.appendChild(b);
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); var q = input.value.trim(); if (!q) return; input.value = ""; reply(q); });

  var greeted = false;
  function open() { panel.hidden = false; btn.setAttribute("aria-expanded", "true"); if (!greeted) { greeted = true; add("bot", "Hi! Ask me anything about Garima's portfolio: projects, art, skills, background or contact."); } setTimeout(function () { input.focus(); }, 50); }
  function close() { panel.hidden = true; btn.setAttribute("aria-expanded", "false"); }
  btn.addEventListener("click", function () { panel.hidden ? open() : close(); });
  panel.querySelector(".ask-panel__x").addEventListener("click", function () { close(); btn.focus(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) { close(); btn.focus(); } });
})();
