import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { name = "" } = $$props;
  let { url = "" } = $$props;
  let isSelectedRoute = false;
  let currentUrl = $page.url.pathname;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  currentUrl = $page.url.pathname;
  {
    if (url === currentUrl) {
      isSelectedRoute = true;
    } else {
      isSelectedRoute = false;
    }
  }
  $$unsubscribe_page();
  return `<div><span class="${"text-white cursor-pointer hover:text-monokaiTeal transition ease-in-out delay-50 " + escape(isSelectedRoute ? "text-monokaiTealDark" : "text-white", true)}"><a${add_attribute("href", url, 0)}>[${escape(name)}]</a></span>
</div>`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="${"pt-6 pb-6 mt-10 text-monokaiGray shadow-teal border border-monokaiTeal rounded-xl w-full"}"><div><div class="${"space-y-4 pl-20 pr-20 pt-8 pb-8"}"><h2 class="${"text-2xl text-monokaiRed"}">[<a class="${"hover:underline transition ease-in-out delay-50"}"${add_attribute("href", deployedProjectUrl, 0)}>${escape(projectName)}</a>]
			</h2>
			<p class="${"text-monokaiYellow"}">${slots.default ? slots.default({}) : ``}</p>
			${validate_component(Link, "Link").$$render($$result, { name: "Github", url: projectGithubUrl }, {}, {})}</div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-9aqbvc_START -->${$$result.title = `<title>cdrn - Projects</title>`, ""}<meta name="${"description"}" content="${"A list of the projects i've worked on"}"><!-- HEAD_svelte-9aqbvc_END -->`, ""}
<div class="${"flex flex-col mt-10 items-start"}">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "This website",
      deployedProjectUrl: "https://cdrn.xyz",
      projectGithubUrl: "https://github.com/cdrn/cdrn.github.io"
    },
    {},
    {
      default: () => {
        return `This website is an experiment built in Svelte with Sveltekit. Credit to <a class="${"hover:underline"}" target="${"_blank"}" href="${"https://caitlinmacrae.me"}">Caitlin Macrae</a> for the designs!
	`;
      }
    }
  )}
	<div></div></div>`;
});
export {
  Page as default
};
