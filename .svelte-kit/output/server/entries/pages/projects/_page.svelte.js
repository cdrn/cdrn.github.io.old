import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectName = "" } = $$props;
  let { deployedProjectUrl = "" } = $$props;
  let { projectGithubUrl = "" } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.deployedProjectUrl === void 0 && $$bindings.deployedProjectUrl && deployedProjectUrl !== void 0)
    $$bindings.deployedProjectUrl(deployedProjectUrl);
  if ($$props.projectGithubUrl === void 0 && $$bindings.projectGithubUrl && projectGithubUrl !== void 0)
    $$bindings.projectGithubUrl(projectGithubUrl);
  return `<div><div>${escape(projectName)}
		${escape(deployedProjectUrl)}
		${escape(projectGithubUrl)}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-g7q2io_START -->${$$result.title = `<title>Projects</title>`, ""}<meta name="${"description"}" content="${"A list of the projects i've worked on"}"><!-- HEAD_svelte-g7q2io_END -->`, ""}
<div class="${"flex flex-col max-w-[1000px] mt-10 items-start"}"><h1 class="${"mb-6 text-3xl"}">Projects</h1>

	<p>Here&#39;s a list of personal projects i&#39;ve worked on</p>

	<div>${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "hello world",
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
