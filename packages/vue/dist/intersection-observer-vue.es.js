import { ref as i, onMounted as c, onUnmounted as u, defineComponent as f, computed as d, watch as m, openBlock as p, createBlock as v, resolveDynamicComponent as h, normalizeClass as y, normalizeStyle as g, withCtx as b, renderSlot as l } from "vue";
function w(e, t = {}) {
  return new IntersectionObserver((n) => {
    n.forEach(e);
  }, t);
}
function C(e) {
  const t = i(null), r = i(!1);
  return c(() => {
    if (!t.value)
      return;
    const n = w((o) => {
      r.value = o.isIntersecting, o.isIntersecting && n.unobserve(o.target);
    }, e);
    n.observe(t.value), u(() => {
      n.disconnect();
    });
  }), {
    ref: t,
    inView: r
  };
}
const R = f({
  name: "LazyRender",
  props: {
    as: { type: String, default: "div" },
    threshold: { type: [Number, Array], default: 0 },
    onChange: Function,
    className: String,
    style: [String, Object]
  },
  setup(e, { slots: t }) {
    const { ref: r, inView: n } = C({
      threshold: e.threshold
    }), o = d(() => typeof t.default == "function"), a = (s) => {
      r.value = s;
    };
    return m(n, (s) => {
      e.onChange && e.onChange(s);
    }), {
      elementRef: r,
      inView: n,
      isRenderProp: o,
      setNode: a
    };
  }
}), V = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, o] of t)
    r[n] = o;
  return r;
};
function $(e, t, r, n, o, a) {
  return e.isRenderProp ? l(e.$slots, "default", {
    key: 1,
    inView: e.inView,
    ref: e.setNode
  }) : (p(), v(h(e.as), {
    key: 0,
    ref: e.elementRef,
    class: y(e.className),
    style: g(e.style)
  }, {
    default: b(() => [
      l(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "style"]));
}
const I = /* @__PURE__ */ V(R, [["render", $]]);
export {
  I as LazyRender,
  C as useInView
};
