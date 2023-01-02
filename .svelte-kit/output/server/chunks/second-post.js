import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Post Number Two",
  "date": "2021-12-14",
  "excerpt": "The second post in the blog. Lorem ipsum etc..."
};
const Second_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Hello, I am <em>Post two.</em></p>
<p><strong>Nice to meet you two!</strong></p>`;
});
export {
  Second_post as default,
  metadata
};
