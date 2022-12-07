<script>
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	export let name = '';
	export let url = '';
	let isSelectedRoute = false;
	let currentUrl = $page.url.pathname;
	$: currentUrl = $page.url.pathname;
	$: if (url === currentUrl) {
		isSelectedRoute = true;
	} else {
		isSelectedRoute = false;
	}
</script>

<div>
	<span
		class="text-white cursor-pointer hover:text-monokaiTeal transition ease-in-out delay-50 
		{isSelectedRoute ? 'text-monokaiTealDark' : 'text-white'}"><a href={url}>[{name}]</a></span
	>
</div>

<style>
</style>
