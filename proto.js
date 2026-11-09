// Interactive pieces for the Pints of Joy case study:
// before/after slider, lo-fi clickable prototype, hi-fi screen walkthrough.
(function () {
  // ---- Before / after slider ----
  var ba = document.querySelector("[data-ba]");
  if (ba) {
    var beforeImg = ba.querySelector(".ba2__before img"), afterImg = ba.querySelector(":scope > img");
    var range = ba.querySelector("input[type=range]"), tabs = document.querySelectorAll("[data-ba-tab]");
    var cap = document.querySelector("[data-ba-cap]");
    function setPos(v) { ba.style.setProperty("--pos", v + "%"); range.value = v; }
    range.addEventListener("input", function () { setPos(range.value); });
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        var n = t.getAttribute("data-ba-tab");
        beforeImg.src = "assets/pints-old-" + n + ".jpg";
        afterImg.src = "assets/pints-new-" + n + ".jpg";
        beforeImg.alt = "Before: first version of the " + n + " screen";
        afterImg.alt = "After: redesigned " + n + " screen";
        tabs.forEach(function (x) { var on = x === t; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on ? "true" : "false"); });
        if (cap) cap.textContent = t.getAttribute("data-ba-note");
        setPos(50);
      });
    });
    setPos(50);
  }

  // ---- Lo-fi clickable prototype ----
  var lf = document.querySelector("[data-lofi]");
  if (lf) {
    function go(id) {
      lf.querySelectorAll(".lf-screen").forEach(function (s) { s.hidden = s.id !== "lf-" + id; });
      lf.querySelectorAll("[data-lf-tab]").forEach(function (t) { var on = t.getAttribute("data-lf-tab") === id; t.classList.toggle("on", on); t.setAttribute("aria-pressed", on ? "true" : "false"); });
    }
    lf.addEventListener("click", function (e) {
      var g = e.target.closest("[data-lf-go]");
      if (g) { go(g.getAttribute("data-lf-go")); return; }
      var t = e.target.closest("[data-lf-tab]");
      if (t) { go(t.getAttribute("data-lf-tab")); return; }
      var s = e.target.closest("[data-lf-save]");
      if (s) { var old = s.textContent; s.textContent = "Saved ✓"; setTimeout(function () { s.textContent = old; }, 1400); }
    });
    go("signin");
  }

  // ---- Hi-fi walkthrough ----
  var hf = document.querySelector("[data-hifi]");
  if (hf) {
    var items = [].slice.call(document.querySelectorAll("[data-hf]")), img = hf.querySelector(".hf__img"), name = hf.querySelector(".hf__url"), idx = 0;
    function show(i) {
      idx = (i + items.length) % items.length;
      var it = items[idx];
      img.src = "assets/pints-hf-" + it.getAttribute("data-hf") + ".jpg";
      img.alt = "Final " + it.textContent.trim() + " screen of the Pints of Joy Inventory app";
      name.textContent = "inventory / " + it.textContent.trim().toLowerCase();
      items.forEach(function (x, j) { x.classList.toggle("on", j === idx); x.setAttribute("aria-pressed", j === idx ? "true" : "false"); });
    }
    items.forEach(function (it, i) { it.addEventListener("click", function () { show(i); }); });
    hf.querySelector("[data-hf-prev]").addEventListener("click", function () { show(idx - 1); });
    hf.querySelector("[data-hf-next]").addEventListener("click", function () { show(idx + 1); });
    img.addEventListener("click", function () { show(idx + 1); });
    hf.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") show(idx + 1); if (e.key === "ArrowLeft") show(idx - 1); });
    show(0);
  }
})();
