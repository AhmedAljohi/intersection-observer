"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  LazyRender: () => LazyRender,
  useInView: () => useInView
});
module.exports = __toCommonJS(index_exports);

// src/LazyRender.tsx
var import_react2 = __toESM(require("react"));

// src/useInView.tsx
var import_react = require("react");
var import_core = require("@intersection-observer/core");
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
function LazyRender({
  children,
  as = "div",
  onChange,
  threshold = 0,
  className,
  style
}) {
  const { ref, inView } = useInView({ threshold });
  import_react2.default.useEffect(() => {
    if (onChange) onChange(inView);
  }, [inView]);
  const props = {
    ref,
    className,
    style
  };
  if (typeof children === "function") {
    return children({
      inView,
      ref: (node) => {
        if (ref && typeof ref === "object" && "current" in ref) {
          ref.current = node;
        }
      }
    });
  }
  return import_react2.default.createElement(as, props, children);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LazyRender,
  useInView
});
