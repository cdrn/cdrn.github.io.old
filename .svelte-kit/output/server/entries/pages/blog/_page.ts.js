import "typescript";
import { m as manifest } from "../../../chunks/manifest.js";
async function load({ params }) {
  try {
    const postPromises = manifest.map(
      (filename) => import(`./${filename}.md`).then((val) => {
        return { ...val, filename };
      })
    );
    const posts = await Promise.all(postPromises);
    const postMetadata = posts.map((post) => post.metadata);
  } catch (e) {
    console.error("WRONG dynamic import - update the manifest", e);
  }
}
const prerender = true;
export {
  load,
  prerender
};
