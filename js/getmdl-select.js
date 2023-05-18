"use strict"
!(function () {
  function e() {
    getmdlSelect.init(".getmdl-select")
  }
  window.addEventListener
    ? window.addEventListener("load", e, !1)
    : window.attachEvent && window.attachEvent("onload", e)
})()
var getmdlSelect = {
  _defaultValue: { width: 300 },
  _addEventListeners: function (e) {
    var t = e.querySelector("input"),
      n = e.querySelector('input[type="hidden"]'),
      l = e.querySelectorAll("li"),
      a = e.querySelector(".mdl-js-menu"),
      o = e.querySelector(".mdl-icon-toggle__label"),
      i = "",
      c = "",
      s = "",
      u = !1,
      d = function (o) {
        var i = o.textContent.trim()
        if (
          ((t.value = i),
          l.forEach(function (e) {
            e.classList.remove("selected")
          }),
          o.classList.add("selected"),
          e.MaterialTextfield.change(i),
          setTimeout(function () {
            e.MaterialTextfield.updateClasses_()
          }, 250),
          (n.value = o.dataset.val || ""),
          (c = t.value),
          (s = n.value),
          "createEvent" in document)
        ) {
          var u = document.createEvent("HTMLEvents")
          u.initEvent("change", !1, !0),
            a.MaterialMenu.hide(),
            t.dispatchEvent(u)
        } else t.fireEvent("onchange")
      },
      r = function () {
        ;(u = !1),
          (t.value = c),
          (n.value = s),
          e
            .querySelector(".mdl-menu__container")
            .classList.contains("is-visible") ||
            e.classList.remove("is-focused")
        var l = document.querySelectorAll(".getmdl-select .mdl-js-menu")
        ;[].forEach.call(l, function (e) {
          e.MaterialMenu.hide()
        })
        var o = new Event("closeSelect")
        a.dispatchEvent(o)
      }
    document.body.addEventListener("click", r, !1),
      (e.onkeydown = function (l) {
        9 == l.keyCode &&
          ((t.value = c),
          (n.value = s),
          a.MaterialMenu.hide(),
          e.classList.remove("is-focused"))
      }),
      (t.onfocus = function (e) {
        a.MaterialMenu.show(), a.focus(), (u = !0)
      }),
      (t.onblur = function (e) {
        e.stopPropagation()
      }),
      (t.onclick = function (t) {
        t.stopPropagation(),
          a.classList.contains("is-visible")
            ? (a.MaterialMenu.hide(), (u = !1))
            : (a.MaterialMenu.show(),
              r(),
              e.classList.add("is-focused"),
              (u = !0))
      }),
      (t.onkeydown = function (l) {
        27 == l.keyCode &&
          ((t.value = c),
          (n.value = s),
          a.MaterialMenu.hide(),
          e.MaterialTextfield.onBlur_(),
          "" !== i &&
            ((e.querySelector(".mdl-textfield__label").textContent = i),
            (i = "")))
      }),
      a.addEventListener("closeSelect", function (l) {
        ;(t.value = c),
          (n.value = s),
          e.classList.remove("is-focused"),
          "" !== i &&
            ((e.querySelector(".mdl-textfield__label").textContent = i),
            (i = ""))
      }),
      (a.onkeydown = function (l) {
        27 == l.keyCode &&
          ((t.value = c),
          (n.value = s),
          e.classList.remove("is-focused"),
          "" !== i &&
            ((e.querySelector(".mdl-textfield__label").textContent = i),
            (i = "")))
      }),
      o &&
        (o.onclick = function (l) {
          l.stopPropagation(),
            u
              ? (a.MaterialMenu.hide(),
                (u = !1),
                e.classList.remove("is-focused"),
                e.MaterialTextfield.onBlur_(),
                (t.value = c),
                (n.value = s))
              : (r(),
                e.MaterialTextfield.onFocus_(),
                t.focus(),
                a.MaterialMenu.show(),
                (u = !0))
        }),
      [].forEach.call(l, function (n) {
        ;(n.onfocus = function () {
          e.classList.add("is-focused")
          var l = n.textContent.trim()
          ;(t.value = l),
            e.classList.contains("mdl-textfield--floating-label") ||
              "" != i ||
              ((i = e
                .querySelector(".mdl-textfield__label")
                .textContent.trim()),
              (e.querySelector(".mdl-textfield__label").textContent = ""))
        }),
          (n.onclick = function () {
            d(n)
          }),
          n.dataset.selected && d(n)
      })
  },
  init: function (e) {
    var t = document.querySelectorAll(e)
    ;[].forEach.call(t, function (e) {
      getmdlSelect._addEventListeners(e),
        componentHandler.upgradeElement(e),
        componentHandler.upgradeElement(e.querySelector("ul"))
    })
  },
}
//# sourceMappingURL=getmdl-select.min.js.map
