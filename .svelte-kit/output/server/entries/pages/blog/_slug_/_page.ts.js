import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../first-post.md": () => import("../../../../chunks/first-post.js"), "../internet-delenda-est.md": () => import("../../../../chunks/internet-delenda-est.js"), "../second-post.md": () => import("../../../../chunks/second-post.js") }), `../${params == null ? void 0 : params.slug}.md`);
  const { title, date } = post.metadata;
  const content = post.default;
  return {
    content,
    title,
    date
  };
}
export {
  load
};
