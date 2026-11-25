/* Portfolio assistant: a small bird with a "?" in the bottom-right corner.
   Answers questions about this portfolio from the facts below. No backend; nothing is sent anywhere. */
(function () {
  "use strict";
  /* ---------- What the bird knows ---------- */
  var EMAIL = "gaaarima11@gmail.com";
  var P = [
    { id: "nwgn", page: "nwgnca.html", name: "NWGN-CA", alias: ["nwgn", "nwgnca", "nwgn ca", "non profit", "nonprofit", "nepalese women", "women global network", "charity"],
      summary: "NWGN-CA is a redesign of the California chapter of the Nepalese Women Global Network's website: members' faces first, clear ways to join and donate, and mobile-first. It's live at nwgnca.com.",
      role: "Garima led UX/UI design and built the front end; Rishta Karki helped with content, forms and navigation updates.",
      team: "Garima worked with Rishta Karki, who handled content, forms and navigation updates.",
      timeline: "June to November 2026, with the main redesign in October.",
      tools: "Plain HTML, CSS and JavaScript with no frameworks or build step, hosted free on GitHub Pages on a custom domain.",
      problem: "Members' faces were hidden behind a dark overlay, donating and joining were hard to find, the colours had no system, and the old site had gone down, so content had to be recovered from the Internet Archive.",
      process: "Content audit and recovery, a moodboard, lo-fi wireframes, a lo-fi prototype of the join, donate and mobile flows, then about 60 rounds of hi-fi iteration and a launch with HTTPS.",
      testing: "Client reviews shaped it: cards with initials for past presidents felt “AI-generated”, so they became a plain ruled list. It was checked at six screen widths from 1920 to 390px, with reduced motion, alt text, focus outlines and 44px touch targets.",
      outcome: "Live on www.nwgnca.com with HTTPS: 107 commits, five forms with spam protection, and a site the board can maintain itself.",
      design: "A palette taken from the logo (wine #6E2232, rose #B23A3A, marigold #E6A93B, ivory and ink) with serif headings and a clean sans body.",
      users: "Nepalese women of all ages in the Bay Area, so it needed to feel warm and elegant and work well on phones.",
      live: ["https://www.nwgnca.com", "Visit nwgnca.com"] },
    { id: "bishal", page: "bishal.html", name: "Bishal Imagery", alias: ["bishal", "imagery", "photographer website", "photography website", "wedding photographer"],
      summary: "Bishal Imagery is a bookings-ready website for a Bay Area wedding and portrait photographer: a gallery that lets the work breathe and an inquiry form that turns visitors into leads.",
      role: "Garima did everything solo: UX, UI and the front-end build.",
      team: "It was a solo project: Garima handled the UX, UI and front end.",
      timeline: "It was designed and launched over a few weeks.",
      tools: "HTML, CSS, JavaScript and Schema.org structured data, with the form wired to a form service.",
      problem: "Bishal had no professional site and no online path from “interested” to “inquiry”. The brief came down to three jobs: show the work, be discoverable, and capture bookings.",
      process: "One scroll mapped to how a client decides (hero, portfolio, services, testimonials, about, booking), with desktop and mobile wireframes locking the structure before any photos went in.",
      testing: "The biggest fix wasn't cosmetic: the old form showed “thank you” but silently discarded every inquiry. Now it's delivered to the owner's inbox with required fields and real success and error states, tested end to end.",
      outcome: "A live production site on a custom domain with HTTPS, and the client's first online booking channel.",
      design: "A warm, earthy palette (paper, sand, #C4A882, #8B7355 and ink) with Cormorant Garamond and Jost, so the photographs carry the emotion.",
      users: "Couples and families looking for a Bay Area wedding or portrait photographer.",
      live: ["https://bishalphotography.com", "Visit the live site"] },
    { id: "pints", page: "pints-of-joy.html", name: "Pints of Joy", alias: ["pints", "pint", "pints of joy", "ice cream", "icecream", "excel", "spreadsheet", "stock flow", "part 2"],
      summary: "Pints of Joy is Part 2 of the inventory story: an operations web app for a real small-batch ice-cream business with a factory and three Bay Area stores. It replaced their weekly Excel routine and now runs their weekly operations.",
      role: "Garima owned the UX and product design; Vijay built the AI layer.",
      team: "Garima worked with Vijay, who built the AI layer, and designed alongside the owner and manager every week.",
      timeline: "2025, iterated week by week with the manager.",
      tools: "Designed in Figma and built as a web app with role-based access, so each store sees only its own data.",
      problem: "Every week the manager counted stock and typed every number into Excel by hand, then built the production plan. It took hours and could never show a trend.",
      process: "Garima sat with the owner and manager to map the real weekly ritual, reimagined it so the app drafts the production plan while the manager stays in charge, then iterated screen by screen.",
      testing: "Every version was tested in the manager's real weekly workflow. Version 1 had a side menu and a marketing headline; the redesign has icon pills, a plain “Stock Flow” title, per-store planning and a floating Save button.",
      outcome: "It's live in the business's real weekly operations across one factory and three stores, with 7+ connected workflows from planning to task assignment.",
      design: "Sheet-style grids that match how the team already worked in Excel, real flavour and store names, and auto-numbered invoices.",
      users: "The owner and manager of Pints of Joy, plus staff at the Sunnyvale, Fremont and Palo Alto stores." },
    { id: "inventory", page: "inventory-app.html", name: "Inventory App", alias: ["inventory app", "inventory", "capstone", "restaurant", "google ux capstone", "part 1", "stock app"],
      summary: "Inventory App is Part 1 and Garima's Google UX capstone: a mobile app that helps restaurant managers count and reorder stock, from interviews to a usability-tested prototype.",
      role: "Garima was the UX designer and researcher.",
      team: "It was a solo capstone project.",
      timeline: "September 2024 to March 2025.",
      tools: "Figma and Illustrator.",
      problem: "Counting stock takes time, people forget, and most inventory apps are built for warehouses, not restaurants.",
      process: "Interviews, a persona (Sugam, a restaurant manager), paper sketches, digital wireframes, a lo-fi prototype and a hi-fi prototype.",
      testing: "Two rounds of in-person usability testing. Users asked for a back button, easier scanning, a tabulated item list and more information on the home screen, which turned the yellow first hi-fi into the final purple design.",
      outcome: "A tested hi-fi prototype whose home screen answers “what do I need to order?” at a glance. It later became the real Pints of Joy app.",
      design: "A calm purple (#876AD6) with colour-coded stock tiles: green in stock, yellow low, red out.",
      users: "Restaurant managers and owners." },
    { id: "fittrack", page: "fittrack.html", name: "FitTrack", alias: ["fittrack", "fit track", "fitness", "gym", "workout", "protein", "weight tracking"],
      summary: "FitTrack is a personal mobile app concept: workouts, protein and weight tracking in one free app, with AI suggestions on top.",
      role: "Solo: research, UX and UI design.",
      team: "It was a solo personal project.",
      timeline: "October to December 2025.",
      tools: "Figma.",
      problem: "People are motivated by visible results but juggle separate apps for workouts, food and weight, and generic plans leave them unsure what to do next.",
      process: "Gray-box wireframes for every core screen, digital wireframes, a mapped user flow, then high-fidelity screens and a small component library.",
      testing: "It hasn't been user-tested yet. The next step is usability testing of the AI suggestions and a full accessibility pass.",
      outcome: "Ten high-fidelity screens, including a tappable body diagram, workout log, protein and weight tracking, stats and a streak.",
      design: "Black and maroon gym energy, high-contrast type and a bottom nav built for one hand mid-workout.",
      users: "Gym beginners and fitness enthusiasts, starting with Garima herself." },
    { id: "nyc", page: "nyc-lifestyle.html", name: "NYC Nepali Lifestyle", alias: ["nyc", "new york", "queens", "nepali lifestyle", "film studio", "studio website"],
      summary: "NYC Nepali Lifestyle is a live 12-page website framework for a Queens photo, film and events studio, from content audit to launch, built so the studio can fill it with its own work.",
      role: "Sole designer and developer, as a pro bono project.",
      team: "Garima worked solo, directly with the studio's founder.",
      timeline: "About 25 hours in October 2026.",
      tools: "HTML, CSS and JavaScript on design tokens, hosted on Vercel.",
      problem: "A busy studio with 200+ videos had no website that matched its work, and its copy arrived in two briefs that contradicted each other.",
      process: "A content audit that turned every conflict into 16 questions for the client, one shared page skeleton, then a full visual pivot.",
      testing: "Version one was editorial white and gold; the client wanted energy, so it became a black “night shoot” system. Fonts were picked from four live mockups.",
      outcome: "A live 12-page site on the studio's own domain and hosting, handed over so they own it outright.",
      design: "Black with orange #FF6B1A and teal #2EC4B6, set in Unbounded and Archivo.",
      users: "Couples, families and brands booking photo and film work in New York.",
      live: ["https://nycnepalilifestyle.com", "Visit the live site"] },
    { id: "rabina", page: "rabina.html", name: "Rabina Beauty Parlor", alias: ["rabina", "salon", "beauty parlor", "beauty parlour", "kathmandu", "bridal"],
      summary: "Rabina Beauty Parlor is an accessible 11-page website for a family-run salon and CTEVT-affiliated training centre in Kathmandu.",
      role: "Solo UX/UI design and build.",
      team: "It was a solo project.",
      timeline: "About three weeks in 2026.",
      tools: "HTML, CSS and vanilla JavaScript.",
      problem: "The salon grew on word of mouth alone. New clients couldn't browse services or prices online, and students couldn't find the training courses.",
      process: "Four goals (warmth, scannable prices, a clear next step for both audiences, phone first), a seven-destination site map, then lo-fi wireframes before any colour.",
      testing: "It was checked from 375px phones to wide desktop with an accessibility and SEO pass. A usability test with first-time visitors is the next step.",
      outcome: "11 pages, two audiences served and fully responsive: a new client can book in under a minute.",
      design: "Ivory and charcoal with a single rose accent (#FD5DA5), Playfair Display, Jost and Great Vibes.",
      users: "Beauty clients and aspiring students in the Kathmandu Valley." }
  ];
  var ATTR = {
    role: ["role", "your part", "her part", "responsib", "what did you do", "what did she do", "what did garima do", "contribution", "position", "did you design", "did you build"],
    team: ["team", "who else", "collaborat", "worked with", "work with", "who helped", "with whom", "partner", "solo", "alone", "by herself", "by yourself"],
    timeline: ["timeline", "how long", "when", "duration", "what year", "date", "weeks", "months", "time did"],
    tools: ["tool", "software", "built with", "build it", "made with", "tech", "stack", "framework", "program", "what did you use", "language"],
    problem: ["problem", "challenge", "why", "goal", "brief", "pain point", "issue", "purpose", "need"],
    process: ["process", "approach", "research", "how was it", "design thinking", "steps", "wireframe", "method", "prototype", "how did you design", "how did she design"],
    testing: ["test", "tested", "testing", "usability", "feedback", "iterat", "before and after", "change", "improve", "version"],
    outcome: ["outcome", "result", "impact", "metric", "success", "achieve", "learn", "takeaway", "numbers"],
    live: ["live", "link", "url", "visit", "domain", "see it", "launched", "published"],
    design: ["color", "colour", "palette", "font", "typeface", "typography", "style", "design system", "look", "brand"],
    users: ["user", "persona", "audience", "who is it for", "who was it for", "client", "customer", "target"]
  };
  var ART = [
    { t: "Harmony of the Soul", y: "2025", s: "12 in diameter", m: "acrylic, acrylic marker and pen on canvas", d: "Mandalas are Garima's form of meditation: a symbol of unity and the circle of life.", alias: ["harmony", "soul", "round mandala", "circle", "disc"] },
    { t: "Echoes and Embers", y: "2023", s: "12 × 24 in", m: "charcoal and gel pen on canvas", d: "Contrasting patterns stand for the many paths that together make one emotional journey.", alias: ["echoes", "embers", "colour blocked", "color blocked"] },
    { t: "Triumph in Tranquility", y: "2021", s: "18 × 24 in", m: "acrylic on canvas", d: "Colour as a language for emotion, with blue standing for tranquility.", alias: ["triumph", "tranquility", "blue and gold", "abstract"] },
    { t: "Whirlwind of Emotions", y: "2025", s: "8 × 10 in", m: "acrylic on canvas", d: "Tranquility in blue, pulled into a spiral.", alias: ["whirlwind", "vortex", "spiral", "swirl"] },
    { t: "Tapashya", y: "2020", s: "21 × 28 in", m: "charcoal on paper", d: "A happy girl drawn in black and white, to show the contrast between outward appearance and inner emotion.", alias: ["tapashya", "tapasya", "girl", "charcoal portrait"] },
    { t: "Page of Faces", y: "2022", s: "18 × 24 in", m: "charcoal on paper", d: "Inspired by Ruth Asawa's Wall of Faces at the Cantor Arts Center: how differently each of us experiences emotion.", alias: ["page of faces", "wall of faces", "faces", "masks", "ruth asawa"] }
  ];
  var WORK = ["work.html", "See all work"], ARTLINK = ["work.html#art", "See the art"], CONTACT = ["contact.html", "Go to Contact"];
  var INTENTS = [
    { k: ["hello", "hi", "hey", "hiya", "good morning", "good afternoon", "good evening", "yo"], a: "Hi! I know Garima's portfolio inside out. Ask about any project (NWGN-CA, Bishal Imagery, Pints of Joy, Inventory App, FitTrack, NYC Nepali Lifestyle, Rabina), the art, skills, background or how to get in touch." },
    { k: ["who are you", "what are you", "are you a bot", "are you ai", "are you real", "your name", "chirp", "bird"], a: "I'm Garima's portfolio bird. I answer questions about the work on this site, right here in your browser. Nothing you type is sent anywhere." },
    { k: ["thank", "thanks", "thx", "appreciate", "helpful", "great", "awesome", "cool"], a: "You're welcome! Anything else you'd like to know about Garima's work?" },
    { k: ["bye", "goodbye", "see you later", "see ya", "cya", "that s all", "nothing else"], a: "Thanks for stopping by! You can reach Garima any time at " + EMAIL + ".", link: CONTACT },
    { k: ["contact", "email", "e mail", "mail", "reach", "get in touch", "touch", "talk", "message", "connect", "phone", "call", "number", "speak", "write to", "dm"], a: "The quickest way is email: " + EMAIL + ". The Contact page also has a phone number and a short form.", link: CONTACT },
    { k: ["why should", "why hire", "why garima", "what makes", "stand out", "unique", "different from", "value", "bring to"], a: "Garima designs and builds: research, flows and prototypes, then the front end, so nothing gets lost in handoff. The work is real, too: live sites for a non-profit, a photographer, a film studio and a salon, and an app an ice-cream business runs its week on.", link: WORK },
    { k: ["hire", "hiring", "job", "available", "availability", "open to", "opportunit", "looking for work", "freelance", "intern", "internship", "full time", "part time", "contract", "remote", "relocat", "start date", "salary"], a: "Yes, Garima is open to UX and digital design roles and freelance projects. Email " + EMAIL + " to talk about a role, availability or location.", link: CONTACT },
    { k: ["resume", "cv", "curriculum"], a: "You can download Garima's resume as a PDF.", link: ["assets/Garima-Shrestha-Resume.pdf", "Download resume"] },
    { k: ["who is", "about garima", "about her", "tell me about garima", "tell me about yourself", "background", "bio", "introduce", "who made", "the designer", "about you"], a: "Garima Shrestha is a UX and digital designer in the Bay Area who also builds the front end, so designs ship the way they were intended. Garima started outside design, in fine jewelry and restaurant management, which taught her to watch how people really work.", link: ["about.html", "Read the About page"] },
    { k: ["education", "school", "degree", "gpa", "bachelor", "certificate", "certification", "google ux", "study", "studied", "student", "college", "university", "graduat", "qualif"], a: "Garima is finishing a Bachelor's in Web & Digital Design with a 4.0 GPA and holds the Google UX Design Professional Certificate." },
    { k: ["experience", "before design", "career", "previous", "worked before", "jewelry", "jewellery", "restaurant management", "years"], a: "Before UX, Garima spent years in fine jewelry and restaurant management. Since then Garima has designed and shipped work for real clients: a non-profit, a photographer, an ice-cream business, a film studio and a salon." },
    { k: ["skill", "tools", "tool", "software", "figma", "tech", "code", "coding", "develop", "html", "css", "javascript", "shopify", "wordpress", "adobe", "illustrator", "indesign", "lightroom", "can she", "good at", "strength"], a: "Figma; UX research, prototyping and usability testing; Adobe Illustrator, InDesign and Lightroom; accessibility-minded design; HTML, CSS, JavaScript, Shopify/Liquid and WordPress; and AI-assisted building with Claude Code, GitHub Copilot and Lovable." },
    { k: ["ai", "artificial intelligence", "claude", "copilot", "lovable", "chatgpt"], a: "Garima uses AI-assisted building (Claude Code, GitHub Copilot, Lovable) to ship front ends faster, and designs AI features carefully: in FitTrack, AI tips are clearly labelled as suggestions, and in Pints of Joy the app drafts the plan but the manager decides." },
    { k: ["process", "how do you work", "how does she work", "method", "approach", "workflow", "design thinking", "philosophy"], a: "Listen, simplify, ship: sit with the people who use the product, turn scattered tasks into one clear flow, then build, test and iterate on real feedback. Every case study follows empathize, define, ideate, prototype and test." },
    { k: ["best project", "best", "favorite", "favourite", "proud", "start with", "where to start", "recommend", "strongest", "first look", "only one", "highlight", "featured"], a: "Start with Pints of Joy: a real business, designed from their weekly Excel routine, now running their operations. NWGN-CA and Bishal Imagery are the other featured projects: both live sites for real clients.", link: ["pints-of-joy.html", "Open Pints of Joy"] },
    { k: ["projects", "project", "case study", "case studies", "portfolio", "what work", "all work", "list", "everything", "how many"], a: "Seven UX case studies: NWGN-CA, Bishal Imagery, Pints of Joy, Inventory App, FitTrack, NYC Nepali Lifestyle and Rabina Beauty Parlor, plus art, photography and digital design.", link: WORK },
    { k: ["mobile", "app", "apps", "ios", "android", "phone app"], a: "The mobile apps are Inventory App (Garima's Google UX capstone) and FitTrack (a fitness concept with AI suggestions). Pints of Joy is a web app.", link: WORK },
    { k: ["website", "websites", "web design", "site", "sites", "landing page"], a: "Website projects: NWGN-CA, Bishal Imagery, NYC Nepali Lifestyle, Rabina Beauty Parlor and the Pints of Joy web app. All of them are live and built by Garima.", link: WORK },
    { k: ["real client", "clients", "client work", "freelance work", "paid"], a: "Real clients include NWGN-CA (non-profit), Bishal Imagery (photographer), Pints of Joy (ice-cream business), NYC Nepali Lifestyle (film studio) and Rabina Beauty Parlor (salon)." },
    { k: ["art", "artwork", "paint", "painting", "paintings", "mandala", "mandalas", "abstract", "charcoal", "drawing", "draw", "sketch", "artist", "creative work", "canvas"], a: "Garima paints and draws: mandalas as meditation, abstract work that uses colour as a language for emotion, and charcoal portraits. Six pieces are on the Works page: Harmony of the Soul, Echoes and Embers, Triumph in Tranquility, Whirlwind of Emotions, Tapashya and Page of Faces.", link: ARTLINK },
    { k: ["photo", "photos", "photograph", "photography", "camera", "architecture", "golden gate", "vessel", "oculus", "church", "padlock"], a: "The photography set is architecture and city scenes: the Golden Gate in fog, the Vessel, a patterned facade, a church doorway, the Oculus, and the bridge through the padlocks.", link: ARTLINK },
    { k: ["zion", "poster", "map", "digital design", "illustration"], a: "The Zion National Park poster is an illustrated map with trails, river, landmarks and a map key, made in Adobe Illustrator.", link: ARTLINK },
    { k: ["teesa", "jewelry brand", "brand", "newari", "heritage"], a: "Garima is building Teesa, a jewelry brand rooted in Nepali heritage and Newari craftsmanship." },
    { k: ["accessib", "wcag", "a11y", "screen reader", "inclusive", "contrast", "alt text"], a: "Accessibility runs through the work: strong contrast, icons plus labels, alt text, skip links, visible focus, 44px touch targets and reduced-motion support." },
    { k: ["this site", "this website", "portfolio site", "built this", "made this", "how was this"], a: "Garima designed and built this portfolio by hand in HTML, CSS and JavaScript, hosted on GitHub Pages. The palette is cobalt blue #0C45B0 with terracotta #7A3E26 and a red accent #891229, set in Fraunces and Plus Jakarta Sans." },
    { k: ["where", "location", "located", "based", "live", "bay area", "california", "city"], a: "Garima is based in the Bay Area, California." },
    { k: ["language", "speak", "nepali"], a: "Garima's work often serves Nepali communities, from NWGN-CA in the Bay Area to Rabina Beauty Parlor in Kathmandu. For anything else, email " + EMAIL + "." }
  ];
  var CHIPS = ["What's the best project to start with?", "What did Garima do on NWGN-CA?", "Is Garima open to work?", "How do I get in touch?"];
  var FALLBACK = "I'm not sure about that one. Try asking about a project (“what was the problem in Pints of Joy?”), a painting, Garima's skills or background, or email " + EMAIL + ".";

  function norm(q) { return " " + q.toLowerCase().replace(/[’']/g, " ").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim() + " "; }
  // short words must match whole; longer single words also match their endings (tool -> tools, test -> tested); phrases match exactly
  function hit(t, w) { w = norm(w).trim(); if (w.indexOf(" ") > -1 || w.length <= 3) return t.indexOf(" " + w + " ") > -1; return t.indexOf(" " + w) > -1; }
  function score(t, list) { var s = 0; for (var i = 0; i < list.length; i++) if (hit(t, list[i])) s += list[i].length > 5 ? 2 : 1; return s; }

  function answer(q) {
    var t = norm(q), i;
    // a specific project?
    var proj = [], ps = 0;
    for (i = 0; i < P.length; i++) { var s = score(t, P[i].alias.concat([P[i].name])); if (s) proj.push([P[i], s]); }
    proj.sort(function (a, b) { return b[1] - a[1]; });
    // a specific artwork?
    var art = null, as = 0;
    for (i = 0; i < ART.length; i++) { var sa = score(t, ART[i].alias.concat([ART[i].t])); if (sa > as) { as = sa; art = ART[i]; } }
    // which detail are they asking for?
    var attr = null, bs = 0;
    for (var key in ATTR) { var sk = score(t, ATTR[key]); if (sk > bs) { bs = sk; attr = key; } }
    // general topics
    var best = null, gs = 0;
    for (i = 0; i < INTENTS.length; i++) { var sg = score(t, INTENTS[i].k); if (sg > gs) { gs = sg; best = INTENTS[i]; } }

    if (proj.length > 1 && /compare|difference|versus| vs |and/.test(t)) {
      var out = []; for (i = 0; i < proj.length && i < 3; i++) out.push(proj[i][0].summary);
      return { a: out.join(" "), link: WORK };
    }
    if (proj.length && (gs <= proj[0][1] + (attr ? 2 : 0) || attr)) {
      var p = proj[0][0];
      if (attr === "live") return p.live ? { a: p.name + " is live.", link: p.live } : { a: p.name + " isn't a public website, but the full case study is on this site.", link: [p.page, "Open " + p.name] };
      return { a: attr && p[attr] ? p[attr] : p.summary, link: [p.page, "Open " + p.name] };
    }
    if (art) return { a: art.t + ", " + art.y + ": " + art.m + ", " + art.s + ". " + art.d, link: ARTLINK };
    if (best) return best;
    if (attr === "tools") { for (i = 0; i < INTENTS.length; i++) if (INTENTS[i].k[0] === "skill") return INTENTS[i]; }
    return null;
  }

  var BIRD = '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><g fill="#082F7C"><circle cx="53" cy="41" r="4.6"/><circle cx="56.5" cy="36.5" r="3.8"/><circle cx="55.5" cy="45.5" r="3.6"/></g><path d="M30 19 q-3-8 2-10 M33 19 q1-7 6-7 M28 20 q-6-4-4-9" stroke="#082F7C" stroke-width="2.4" stroke-linecap="round" fill="none"/><g fill="#2A62D0"><circle cx="50.5" cy="37.0" r="5.2"/><circle cx="49.1" cy="43.7" r="5.2"/><circle cx="45.1" cy="49.4" r="5.2"/><circle cx="39.1" cy="53.2" r="5.2"/><circle cx="32.0" cy="54.5" r="5.2"/><circle cx="24.9" cy="53.2" r="5.2"/><circle cx="18.9" cy="49.4" r="5.2"/><circle cx="14.9" cy="43.7" r="5.2"/><circle cx="13.5" cy="37.0" r="5.2"/><circle cx="14.9" cy="30.3" r="5.2"/><circle cx="18.9" cy="24.6" r="5.2"/><circle cx="24.9" cy="20.8" r="5.2"/><circle cx="32.0" cy="19.5" r="5.2"/><circle cx="39.1" cy="20.8" r="5.2"/><circle cx="45.1" cy="24.6" r="5.2"/><circle cx="49.1" cy="30.3" r="5.2"/></g><circle cx="32" cy="37" r="18.5" fill="#2A62D0"/><circle cx="28" cy="31" r="13" fill="#3C74E0" opacity=".55"/><g fill="#F6E7D6"><circle cx="36.9" cy="47.4" r="3.2"/><circle cx="34.1" cy="49.9" r="3.2"/><circle cx="30.2" cy="51.3" r="3.2"/><circle cx="25.8" cy="51.3" r="3.2"/><circle cx="21.9" cy="49.9" r="3.2"/><circle cx="19.1" cy="47.4" r="3.2"/></g><ellipse cx="28" cy="43" rx="10.5" ry="8" fill="#F6E7D6"/><path d="M41 36 q8 2 7 11 q-6 1 -9 -4 q-1 -4 2 -7z" fill="#0C45B0"/><circle cx="19.5" cy="32" r="4.2" fill="#1b0f0a"/><circle cx="18.2" cy="30.6" r="1.6" fill="#fff"/><circle cx="20.8" cy="33.6" r=".7" fill="#fff"/><circle cx="31.5" cy="32" r="3.6" fill="#1b0f0a"/><circle cx="30.4" cy="30.8" r="1.35" fill="#fff"/><circle cx="32.6" cy="33.4" r=".6" fill="#fff"/><ellipse cx="15.5" cy="37.5" rx="3" ry="1.9" fill="#FF8FA3" opacity=".75"/><ellipse cx="35.5" cy="37.5" rx="2.6" ry="1.7" fill="#FF8FA3" opacity=".75"/><path d="M25.6 35.4 L20.6 37.8 L25.8 39.4 Q27.2 37.4 25.6 35.4z" fill="#E8913A"/><path d="M27 55 v4 M25 59 h4 M36 55 v4 M34 59 h4" stroke="#E8913A" stroke-width="2" stroke-linecap="round"/></svg>';

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
