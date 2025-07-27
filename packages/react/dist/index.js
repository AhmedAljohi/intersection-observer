"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  LazyRender: () => LazyRender
});
module.exports = __toCommonJS(index_exports);

// src/useInView.tsx
var import_react = require("react");
var import_core = require("@viewport-utils/core");
function useInView(options) {
  const ref = (0, import_react.useRef)(null);
  const [inView, setInView] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (!ref.current) return;
    const observer = (0, import_core.createInViewObserver)((entry) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return { ref, inView };
}

// src/LazyRender.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var LazyRender = ({
  children,
  className
}) => {
  const { ref, inView } = useInView();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref,
      className: `${className || ""} ${inView ? "in-view" : ""}`,
      children: inView ? children : null
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LazyRender
});
