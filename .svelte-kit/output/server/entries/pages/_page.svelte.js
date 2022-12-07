import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><button class="${"px-24 py-5 border border-white shadow-white text-xl rounded-lg text-white"}">${slots.default ? slots.default({}) : ``}</button>
</div>`;
});
const ProjectsSplashCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectName = "" } = $$props;
  let { projectDescription = "" } = $$props;
  let { deployedProjectUrl = "" } = $$props;
  let { projectGithubUrl = "" } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.projectDescription === void 0 && $$bindings.projectDescription && projectDescription !== void 0)
    $$bindings.projectDescription(projectDescription);
  if ($$props.deployedProjectUrl === void 0 && $$bindings.deployedProjectUrl && deployedProjectUrl !== void 0)
    $$bindings.deployedProjectUrl(deployedProjectUrl);
  if ($$props.projectGithubUrl === void 0 && $$bindings.projectGithubUrl && projectGithubUrl !== void 0)
    $$bindings.projectGithubUrl(projectGithubUrl);
  return `<div class="${"pt-24 pb-24 pl-24 pr-24 mt-24 rounded-2xl border border-monokaiTeal shadow-teal flex flex-col justify-center items-center space-y-10"}"><h1 class="${"text-[64px] text-monokaiRed"}">[Projects]</h1>
	<p class="${"text-monokaiYellow text-[24px]"}">Check out some projects i&#39;ve hacked on and what i&#39;m hacking on now
	</p>
	${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `see all`;
    }
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-40vkjn_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"cdrn"}"><!-- HEAD_svelte-40vkjn_END -->`, ""}

<section class="${"flex h-full"}">${validate_component(ProjectsSplashCard, "ProjectsSplashCard").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Page as default
};
