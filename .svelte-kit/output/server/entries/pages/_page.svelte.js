import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-40vkjn_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"cdrn"}"><!-- HEAD_svelte-40vkjn_END -->`, ""}

<section class="${"flex h-full"}"><h1>Hello world</h1>
</section>`;
});
export {
  Page as default
};
