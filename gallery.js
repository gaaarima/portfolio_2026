/* Gallery lightbox for the art and photography rows on the home page. */
(function () {
  "use strict";
  var lb = document.getElementById("lightbox"); if (!lb) return;
  var img = document.getElementById("lb-img"), cap = document.getElementById("lb-cap");
  var items = [], idx = 0, last = null;
  function show(i) {
    idx = (i + items.length) % items.length;
    var b = items[idx], im = b.querySelector("img");
    img.src = im.src; img.alt = im.alt; cap.textContent = b.dataset.cap || ""; document.getElementById("lb-desc").textContent = b.dataset.desc || "";
  }
  function open(b) {
    items = Array.prototype.slice.call(document.querySelectorAll('.g-item[data-group="' + b.dataset.group + '"]'));
    last = b; show(items.indexOf(b)); lb.hidden = false; document.body.style.overflow = "hidden"; document.getElementById("lb-close").focus();
  }
  function close() { lb.hidden = true; document.body.style.overflow = ""; if (last) last.focus(); }
  document.querySelectorAll(".g-item").forEach(function (b) { b.addEventListener("click", function () { open(b); }); });
  document.getElementById("lb-close").addEventListener("click", close);
  document.getElementById("lb-prev").addEventListener("click", function () { show(idx - 1); });
  document.getElementById("lb-next").addEventListener("click", function () { show(idx + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(idx - 1); else if (e.key === "ArrowRight") show(idx + 1);
  });
})();
