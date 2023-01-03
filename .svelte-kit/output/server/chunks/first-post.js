import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Post One",
  "date": "2021-12-14",
  "excerpt": "The first post in the blog"
};
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Hello, I am <em>Post One.</em></p>
<p><strong>Nice to meet you!</strong></p>`;
});
export {
  First_post as default,
  metadata
};
