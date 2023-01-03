import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../posts/first-post.md": () => import("../../../../chunks/first-post.js"), "../posts/internet-delenda-est.md": () => import("../../../../chunks/internet-delenda-est.js"), "../posts/second-post.md": () => import("../../../../chunks/second-post.js") }), `../posts/${params == null ? void 0 : params.slug}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
}
const prerender = true;
export {
  load,
  prerender
};
