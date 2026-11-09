// Garima Shrestha — Portfolio interactions
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "≡";
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "≡";
      }
    });
  }

  // Scroll reveal
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && items.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }


  // ---- Audience paths: "ux" (recruiters) or "all" (everyone else) ----
  var PATH_KEY = "gs-path";
  function readPath() {
    var fromUrl = new URLSearchParams(location.search).get("path");
    if (fromUrl === "ux" || fromUrl === "all") {
      try { localStorage.setItem(PATH_KEY, fromUrl); } catch (e) {}
      return fromUrl;
    }
    try { var v = localStorage.getItem(PATH_KEY); if (v === "ux" || v === "all") return v; } catch (e) {}
    return null;
  }
  var path = readPath();

  function applyPath() {
    var p = path || "all";
    document.documentElement.setAttribute("data-path", p);
    // show/hide by tag (e.g. data-tags="ux web")
    document.querySelectorAll("[data-tags]").forEach(function (el) {
      var tags = el.getAttribute("data-tags").split(/\s+/);
      var hide = p === "ux" && tags.indexOf("ux") === -1;
      el.classList.toggle("is-hidden", hide);
    });
    // path-only copy
    document.querySelectorAll("[data-show]").forEach(function (el) {
      el.hidden = el.getAttribute("data-show") !== p;
    });
    // number the visible work rows 01, 02, ...
    var n = 0;
    document.querySelectorAll(".work-row").forEach(function (row) {
      if (row.classList.contains("is-hidden") || row.classList.contains("is-filtered")) return;
      var num = row.querySelector(".work-row__num");
      if (num) num.textContent = ("0" + (++n)).slice(-2);
    });
    document.querySelectorAll(".path-switch button").forEach(function (b) {
      var on = b.getAttribute("data-path") === p;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setPath(p) {
    path = p;
    try { localStorage.setItem(PATH_KEY, p); } catch (e) {}
    if (history.replaceState) {
      var u = new URL(location.href); u.searchParams.set("path", p);
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    }
    applyPath();
  }

  // header switch, injected on every page
  var navBar = document.querySelector(".site-head .nav");
  if (navBar) {
    var sw = document.createElement("div");
    sw.className = "path-switch";
    sw.setAttribute("role", "group");
    sw.setAttribute("aria-label", "Choose what to show");
    sw.innerHTML = '<button type="button" data-path="ux">UX</button><button type="button" data-path="all">Everything</button>';
    navBar.insertBefore(sw, navBar.querySelector(".nav-toggle"));
    sw.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-path]");
      if (b) setPath(b.getAttribute("data-path"));
    });
  }

  // path chooser cards on the home page
  document.querySelectorAll("[data-choose]").forEach(function (card) {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      setPath(card.getAttribute("data-choose"));
      var dest = card.getAttribute("data-go");
      if (dest) {
        document.body.classList.add("leaving");
        setTimeout(function () { location.href = dest; }, 280);
      }
    });
  });

  // Work page filter bar
  var filterBar = document.querySelector(".filter-bar");
  if (filterBar) {
    filterBar.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-filter]");
      if (!b) return;
      var f = b.getAttribute("data-filter");
      filterBar.querySelectorAll("button").forEach(function (x) {
        var on = x === b; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false");
      });
      document.querySelectorAll(".work-row").forEach(function (row) {
        var tags = (row.getAttribute("data-tags") || "").split(/\s+/);
        row.classList.toggle("is-filtered", f !== "all" && tags.indexOf(f) === -1);
      });
      applyPath();
    });
  }

  applyPath();

  // Case-study numbered pills + dots navigation
  (function () {
    if (!document.querySelector(".cs-hero")) return;
    var blocks = Array.prototype.filter.call(document.querySelectorAll("main .cs-body"), function (b) { return b.querySelector("h2"); });
    if (blocks.length < 2) return;
    var nav = document.createElement("nav"); nav.className = "dots-nav"; nav.setAttribute("aria-label", "Case study sections");
    var dots = [];
    blocks.forEach(function (b, i) {
      var h2 = b.querySelector("h2"), tag = b.querySelector(".phase-tag");
      var label = (tag ? tag.textContent : h2.textContent).trim();
      if (label.length > 34) label = label.slice(0, 32).trim() + "\u2026";
      var n = String(i + 1).padStart(2, "0");
      var pill = document.createElement("div"); pill.className = "sec-pill reveal";
      pill.innerHTML = "<i>" + n + "</i><b></b>"; pill.querySelector("b").textContent = label;
      if (tag) tag.remove();
      b.insertBefore(pill, b.firstChild);
      if (h2.style.marginTop) h2.style.marginTop = "0";
      b.id = b.id || "sec-" + (i + 1);
      var a = document.createElement("a"); a.href = "#" + b.id; a.setAttribute("aria-label", label);
      a.innerHTML = "<span></span>"; a.firstChild.textContent = label; nav.appendChild(a); dots.push(a);
    });
    document.body.appendChild(nav);
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { var i = blocks.indexOf(e.target); dots.forEach(function (d, j) { d.classList.toggle("on", i === j); }); } });
      }, { rootMargin: "-40% 0px -50% 0px" });
      blocks.forEach(function (b) { io.observe(b); });
    }
  })();

  // Reading progress bar on case-study pages
  if (document.querySelector(".cs-body")) {
    var bar = document.createElement("div");
    bar.className = "read-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var ticking = false;
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ")";
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
})();
