import { c as create_ssr_component, e as escape, b as add_attribute, d as subscribe, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
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
const PROJECTS_SLUG = "projects";
const BLOG_SLUG = "blog";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<header class="${"flex flex-row content-between w-full pl-10 pr-10"}"><nav class="${"w-full mt-10 mb-10"}"><ul class="${"flex flex-row space-x-6 text-[16px]"}"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)}>${validate_component(Link, "Link").$$render($$result, { url: "/", name: "home" }, {}, {})}</li>
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
  return `<div><div class="${"flex flex-col min-h-screen bg-monokaiBackground font-mono"}">
		<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}">
		<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}">
		<link href="${"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"}" rel="${"stylesheet"}">

		${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

		<main class="${"w-full flex flex-col flex-grow items-center w-full min-h-full box-border m-0 pr-10 pl-10"}">${slots.default ? slots.default({}) : ``}</main>

		<footer class="${"flex flex-col items-start bg-monokaiTealDark pt-10 pb-10 pl-10 pr-10"}"><p class="${"text-black"}"><a href="${"https://linkedin.com/in/cdrn"}" target="${"_blank"}" rel="${"noreferrer"}">[linkedin]</a></p>
			<p class="${"text-black"}"><a href="${"https://github.com/cdrn"}" target="${"_blank"}" rel="${"noreferrer"}">[github]</a></p></footer></div>
</div>`;
});
export {
  Layout as default
};
