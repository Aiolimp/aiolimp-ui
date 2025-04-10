import { defineComponent as o, createElementBlock as r, openBlock as a, normalizeClass as s, renderSlot as l } from "vue";
const n = /* @__PURE__ */ o({
  __name: "Button",
  props: {
    type: {
      type: String,
      default: "default",
      validator: function(t) {
        return typeof t == "string" && ["primary", "default"].includes(t);
      }
    }
  },
  setup(t) {
    return (e, u) => (a(), r("button", {
      class: s(["px-4 py-2 rounded text-white", t.type === "primary" ? "bg-blue-500" : "bg-gray-400"])
    }, [
      l(e.$slots, "default")
    ], 2));
  }
});
n.install = (t) => {
  t.component("MyButton", n);
};
const p = [n], c = (t) => {
  p.forEach((e) => {
    t.component(e.name, e);
  });
}, d = { install: c };
export {
  n as Button,
  d as default
};
