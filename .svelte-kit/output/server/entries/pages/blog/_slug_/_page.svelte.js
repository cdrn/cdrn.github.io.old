import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = { title: "", date: "", content: "content" } } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `


<article class="${"text-white"}"><h1 class="${"text-monokaiRed text-4xl pb-4"}">${escape(data.title)}</h1>
	<p class="${"text-monokaiYellow pb-10"}">[Published: ${escape(data.date)}]</p>
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</article>`;
});
export {
  Page as default
};
