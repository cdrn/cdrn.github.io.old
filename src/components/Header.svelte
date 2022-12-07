<script>
	import { page } from '$app/stores';
	import Link from './Link.svelte';
	import { PROJECTS_SLUG, BLOG_SLUG } from '../consts';
</script>

<header class="flex flex-row content-between w-full pl-10 pr-10">
	<nav class="w-full mt-10 mb-10">
		<ul class="flex flex-row space-x-6 text-[16px]">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<Link url="/" name="home" />
			</li>
			<li aria-current={$page.url.pathname === PROJECTS_SLUG ? 'page' : undefined}>
				<Link url={PROJECTS_SLUG} name={PROJECTS_SLUG} />
			</li>
			<li aria-current={$page.url.pathname === BLOG_SLUG ? 'page' : undefined}>
				<Link url={BLOG_SLUG} name={BLOG_SLUG} />
			</li>
		</ul>
	</nav>
</header>

<style>
</style>
