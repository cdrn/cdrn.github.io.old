import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Internet delenda est",
  "date": "2023-01-02",
  "excerpt": "The internet must be destroyed."
};
const Internet_delenda_est = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Hello, I am <em>Post One.</em></p>
<p><strong>Nice to meet you!</strong></p>`;
});
export {
  Internet_delenda_est as default,
  metadata
};
