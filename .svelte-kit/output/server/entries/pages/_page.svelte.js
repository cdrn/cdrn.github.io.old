import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick = () => {
  } } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<div><button class="${"px-24 py-5 border border-white shadow-white text-xl rounded-lg text-white hover:text-black hover:bg-white hover:border-black hover:shadow-black transition ease-in-out duration-50"}">${slots.default ? slots.default({}) : ``}</button>
</div>`;
});
const ProjectsSplashCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"m-6 p-10 md:p-24 mt-24 rounded-2xl border border-monokaiTeal shadow-teal flex flex-col justify-center items-center space-y-10"}"><h1 class="${"text-[36px] md:text-[64px] text-monokaiRed"}">[Projects]</h1>
	<p class="${"text-monokaiYellow text-[18px] md:text-[24px]"}">Come check out a (non exhaustive) list of personal projects i&#39;ve hacked on. I love to talk about
		these!
	</p>
	${validate_component(Button, "Button").$$render($$result, { onClick: () => goto("/projects") }, {}, {
    default: () => {
      return `see all`;
    }
  })}
</div>`;
});
const ArrowRightCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}" stroke="${"#EEC461"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 16L16 12L12 8"}" stroke="${"#EEC461"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M8 12H16"}" stroke="${"#EEC461"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-10kry9j_START -->${$$result.title = `<title>cdrn</title>`, ""}<meta name="${"description"}" content="${"cdrn"}"><!-- HEAD_svelte-10kry9j_END -->`, ""}

<section class="${"flex flex-col space-y-24 h-full"}">${validate_component(ProjectsSplashCard, "ProjectsSplashCard").$$render($$result, {}, {}, {})}
	
	
	
	<div><h1 class="${"text-monokaiRed text-center md:text-left text-4xl pb-10"}">[What i&#39;ve worked on]</h1>
		<div class="${"md:block flex md:flex flex-col md:flex-row shadow-teal border border-monokaiTeal rounded-2xl w-full justify-center items-center md:space-x-20 text-monokaiYellow pt-4 pb-4 md:p-10 text-[24px]"}"><div class="${"hover:underline flex justify-center items-center space-x-2"}"><a href="${"https://chainflip.io"}">Chainflip</a>${validate_component(ArrowRightCircle, "ArrowRightCircle").$$render($$result, {}, {}, {})}</div>
			<div class="${"hover:underline flex justify-center items-center space-x-2"}"><a href="${"https://www.klarna.com/de/bank-account/"}">Klarna</a>${validate_component(ArrowRightCircle, "ArrowRightCircle").$$render($$result, {}, {}, {})}</div>
			<div class="${"hover:underline flex justify-center items-center space-x-2"}"><a href="${"https://www.kapiche.com"}">Kapiche</a>${validate_component(ArrowRightCircle, "ArrowRightCircle").$$render($$result, {}, {}, {})}</div></div></div>
</section>`;
});
export {
  Page as default
};
