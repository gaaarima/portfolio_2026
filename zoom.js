/* Click any framed case-study image to see it full size. Esc, the close button or a click closes it. */
(function () {
  "use strict";
  var box = document.createElement("div"); box.className = "zbox"; box.hidden = true;
  box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Image, full size");
  box.innerHTML = '<button type="button" aria-label="Close">&times;</button><img alt="" />';
  document.body.appendChild(box);
  var big = box.querySelector("img"), x = box.querySelector("button"), last = null;
  function open(img) { last = img; big.src = img.currentSrc || img.src; big.alt = img.alt; box.hidden = false; document.body.style.overflow = "hidden"; x.focus(); }
  function close() { box.hidden = true; document.body.style.overflow = ""; if (last) last.focus(); }
  document.querySelectorAll(".pfig__frame img").forEach(function (img) {
    img.tabIndex = 0; img.setAttribute("role", "button");
    img.addEventListener("click", function () { open(img); });
    img.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img); } });
  });
  box.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !box.hidden) close(); });
})();
