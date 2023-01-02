import { _ as __variableDynamicImportRuntimeHelper } from "../../chunks/dynamic-import-helper.js";
import { m as manifest } from "../../chunks/manifest.js";
async function load({ params }) {
  try {
    const postPromises = manifest.map(
      (filename) => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./blog/first-post.md": () => import("../../chunks/first-post.js"), "./blog/internet-delenda-est.md": () => import("../../chunks/internet-delenda-est.js"), "./blog/second-post.md": () => import("../../chunks/second-post.js") }), `./blog/${filename}.md`).then((val) => {
        return { ...val, filename };
      })
    );
    console.log("promises constructed");
    const posts = await Promise.all(postPromises);
    console.log({ posts });
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
