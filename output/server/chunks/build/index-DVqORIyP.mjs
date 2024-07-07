import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><div><h1>HELLO</h1>`);
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
      _push(`<br>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/test2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`test2`);
          } else {
            return [
              createTextVNode("test2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><button>button</button></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DVqORIyP.mjs.map
