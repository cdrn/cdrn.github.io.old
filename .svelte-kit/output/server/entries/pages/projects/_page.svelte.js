import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { url = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div><span class="${"text-white cursor-pointer hover:text-monokaiTeal transition ease-in-out delay-50 " + escape("text-white", true)}"><a${add_attribute("href", url, 0)}>[${escape(name)}]</a></span>
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
  return `<div class="${"pt-6 pb-6 mt-10 text-monokaiGray"}">////////////////////////////////////////////
	<div class="${"space-y-4 pt-4 pb-4"}"><h2 class="${"text-lg text-monokaiTeal"}"><a${add_attribute("href", deployedProjectUrl, 0)}>${escape(projectName)}</a></h2>
		<p class="${"text-monokaiYellow"}">${escape(projectDescription)}</p>
		${validate_component(Link, "Link").$$render(
    $$result,
    {
      name: projectGithubUrl,
      url: projectGithubUrl
    },
    {},
    {}
  )}</div>
	////////////////////////////////////////////
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-g7q2io_START -->${$$result.title = `<title>Projects</title>`, ""}<meta name="${"description"}" content="${"A list of the projects i've worked on"}"><!-- HEAD_svelte-g7q2io_END -->`, ""}
<div class="${"flex flex-col max-w-[1000px] mt-10 items-start"}"><h1 class="${"mb-6 text-3xl text-monokaiTeal"}">Projects</h1>

	<p>Here&#39;s a list of personal projects i&#39;ve worked on</p>

	<div>${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "An example project",
      projectDescription: "This is an example project description",
      projectDeployedUrl: "https://github.com",
      projectGithubUrl: "https://github.com"
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Page as default
};
