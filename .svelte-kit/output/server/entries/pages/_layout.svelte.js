import { c as create_ssr_component, b as add_attribute, e as escape, d as subscribe, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { url = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<div><span class="${"text-monokaiRed text-lg hover:text-white hover:bg-monokaiRed hover:text-monokaiBackground cursor-pointer "}"><a${add_attribute("href", url, 0)}>[${escape(name)}]</a></span>
</div>`;
});
const PROJECTS_SLUG = "projects";
const BLOG_SLUG = "blog";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<header class="${"flex flex-row content-between w-full"}"><nav class="${"w-full mt-10 mb-10"}"><ul class="${"flex flex-row space-x-6"}"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)}>${validate_component(Link, "Link").$$render($$result, { url: "/", name: "home" }, {}, {})}</li>
			<li${add_attribute(
    "aria-current",
    $page.url.pathname === PROJECTS_SLUG ? "page" : void 0,
    0
  )}>${validate_component(Link, "Link").$$render($$result, { url: PROJECTS_SLUG, name: PROJECTS_SLUG }, {}, {})}</li>
			<li${add_attribute("aria-current", $page.url.pathname === BLOG_SLUG ? "page" : void 0, 0)}>${validate_component(Link, "Link").$$render($$result, { url: BLOG_SLUG, name: BLOG_SLUG }, {}, {})}</li></ul></nav>
</header>`;
});
const styles = "";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col min-h-screen pr-10 pl-10 bg-monokaiBackground text-monokaiYellow font-mono"}">
	<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}">
	<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}">
	<link href="${"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"}" rel="${"stylesheet"}">

	${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"w-full flex flex-col flex-grow items-center w-full min-h-full box-border m-0"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"flex justify-start items-center space-x-4 pt-10 pb-10"}"><p><a href="${"https://linkedin.com/in/cdrn"}" target="${"_blank"}" rel="${"noreferrer"}">linkedin</a></p>
		<p><a href="${"https://github.com/cdrn"}" target="${"_blank"}" rel="${"noreferrer"}">github</a></p></footer>
</div>`;
});
export {
  Layout as default
};
