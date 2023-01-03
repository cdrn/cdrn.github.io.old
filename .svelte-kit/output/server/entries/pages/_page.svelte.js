import { c as create_ssr_component, e as escape, v as validate_component, f as each } from "../../chunks/index.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { onClick = () => {
  } } = $$props;
  let { size = "lg" } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div><button class="${"border border-white shadow-white rounded-lg text-white hover:text-black hover:bg-white hover:border-black hover:shadow-black transition ease-in-out duration-50 " + escape(size === "lg" && "text-xl py-5 px-24", true) + " " + escape(size === "md" && "text-md py-2 px-16", true)}">${slots.default ? slots.default({}) : ``}</button>
</div>`;
});
const ProjectsSplashCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"m-6 p-10 md:p-24 mt-24 rounded-2xl border border-monokaiTeal shadow-teal flex flex-col justify-center items-center space-y-10 max-w-[1200px]"}"><h1 class="${"text-[36px] md:text-[64px] text-monokaiRed"}">[Projects]</h1>
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
const BlogPostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postName = "" } = $$props;
  let { filename = "" } = $$props;
  let { date = new Date() } = $$props;
  let { sample = "" } = $$props;
  if ($$props.postName === void 0 && $$bindings.postName && postName !== void 0)
    $$bindings.postName(postName);
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.sample === void 0 && $$bindings.sample && sample !== void 0)
    $$bindings.sample(sample);
  return `<div class="${"border border-monokaiTeal shadow-teal w-[320px] h-[300px] rounded-xl p-6 flex flex-col"}"><h2 class="${"text-lg text-monokaiYellow mb-2"}">[${escape(postName)}]</h2>
	<p class="${"text-monokaiRed mb-6"}">${escape(date.getDate())}.${escape(date.getMonth() + 1)}.${escape(date.getFullYear())}</p>
	<div class="${"divider border border-2 border-monokaiYellow mb-6"}"></div>
	<p class="${"text-md text-white"}">${escape(sample)}</p>
	
	<div class="${"w-full flex flex-col items-center mt-auto"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      onClick: () => goto(`/blog/${filename}`),
      size: "md"
    },
    {},
    {
      default: () => {
        return `read more`;
      }
    }
  )}</div>
</div>`;
});
const ArrowRightCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"}" stroke="${"#EEC461"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M12 16L16 12L12 8"}" stroke="${"#EEC461"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M8 12H16"}" stroke="${"#EEC461"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [
    {
      metadata: { date: "", title: "", excerpt: "" },
      filename: ""
    }
  ] } = $$props;
  let sortedPosts = Object.values(data).sort((x, y) => Number(new Date(y == null ? void 0 : y.metadata.date)) - Number(new Date(x == null ? void 0 : x.metadata.date))).slice(0, 3);
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-10kry9j_START -->${$$result.title = `<title>cdrn</title>`, ""}<meta name="${"description"}" content="${"cdrn"}"><!-- HEAD_svelte-10kry9j_END -->`, ""}

<section class="${"flex flex-col space-y-24 h-full justify-center items-center"}">${validate_component(ProjectsSplashCard, "ProjectsSplashCard").$$render($$result, {}, {}, {})}
	
	<div class="${"p-6 w-full"}"><h1 class="${"text-monokaiRed text-4xl md:text-left text-center pb-10"}">[Posts]</h1>
		<div class="${"flex flex-col md:space-x-10 md:flex-row items-center space-y-10 md:space-y-0 py-4"}">${each(sortedPosts, (post) => {
    return `${validate_component(BlogPostCard, "BlogPostCard").$$render(
      $$result,
      {
        postName: post == null ? void 0 : post.metadata.title,
        date: new Date(post == null ? void 0 : post.metadata.date),
        sample: post == null ? void 0 : post.metadata.excerpt,
        filename: post == null ? void 0 : post.filename
      },
      {},
      {}
    )}`;
  })}</div></div>
	
	<div class="${"p-6 w-full"}"><h1 class="${"text-monokaiRed text-center md:text-left text-4xl pb-10"}">[What i&#39;ve worked on]</h1>
		<div class="${"md:block flex md:flex flex-col md:flex-row shadow-teal border border-monokaiTeal rounded-2xl w-full justify-center items-center md:space-x-20 text-monokaiYellow pt-4 pb-4 md:p-10 text-[24px]"}"><div class="${"hover:underline flex justify-center items-center space-x-2"}"><a href="${"https://chainflip.io"}">Chainflip</a>${validate_component(ArrowRightCircle, "ArrowRightCircle").$$render($$result, {}, {}, {})}</div>
			<div class="${"hover:underline flex justify-center items-center space-x-2"}"><a href="${"https://www.klarna.com/de/bank-account/"}">Klarna</a>${validate_component(ArrowRightCircle, "ArrowRightCircle").$$render($$result, {}, {}, {})}</div>
			<div class="${"hover:underline flex justify-center items-center space-x-2"}"><a href="${"https://www.kapiche.com"}">Kapiche</a>${validate_component(ArrowRightCircle, "ArrowRightCircle").$$render($$result, {}, {}, {})}</div></div></div>
</section>`;
});
export {
  Page as default
};
