<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import { PROJECTS_SLUG, BLOG_SLUG } from '../consts';
</script>

<header class="flex flex-row content-between w-full">
	<nav class="w-full mt-10 mb-10">
		<ul class="flex flex-row space-x-6">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">home</a>
			</li>
			<li aria-current={$page.url.pathname === PROJECTS_SLUG ? 'page' : undefined}>
				<a href="/projects">{PROJECTS_SLUG}</a>
			</li>
			<li aria-current={$page.url.pathname === BLOG_SLUG ? 'page' : undefined}>
				<a href="/about">{BLOG_SLUG}</a>
			</li>
		</ul>
	</nav>
</header>

<style>
</style>
