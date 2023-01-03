import { _ as __variableDynamicImportRuntimeHelper } from "../../chunks/dynamic-import-helper.js";
import { m as manifest } from "../../chunks/manifest.js";
async function load({ params }) {
  try {
    const postPromises = manifest.map(
      (filename) => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./blog/posts/first-post.md": () => import("../../chunks/first-post.js"), "./blog/posts/internet-delenda-est.md": () => import("../../chunks/internet-delenda-est.js"), "./blog/posts/second-post.md": () => import("../../chunks/second-post.js") }), `./blog/posts/${filename}.md`).then((val) => {
        return { ...val, filename };
      })
    );
    const posts = await Promise.all(postPromises);
    return posts;
  } catch (e) {
    console.error("WRONG dynamic import - update the manifest", e);
  }
}
const prerender = true;
export {
  load,
  prerender
};
