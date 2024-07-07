import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}> test <br>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`index`);
      } else {
        return [
          createTextVNode("index")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/test1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`test1`);
      } else {
        return [
          createTextVNode("test1")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { test2 as default };
//# sourceMappingURL=test2-BLiWonLC.mjs.map
