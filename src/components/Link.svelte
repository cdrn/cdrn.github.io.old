<script>
	import { onMount } from 'svelte';
	export let name = '';
	export let url = '';
	let isSelectedRoute = false;
	let currentRoute;
	onMount(async () => {
		currentRoute = window.location.pathname;
		if (currentRoute === url) {
			console.log('currentRoute', currentRoute);
			isSelectedRoute = true;
		}
		console.log(currentRoute, url);
	});
</script>

<div>
	<span
		class="text-white cursor-pointer hover:text-monokaiTeal transition ease-in-out delay-50 
		{isSelectedRoute ? 'text-monokaiTealDark' : 'text-white'}"><a href={url}>[{name}]</a></span
	>
</div>

<style>
</style>
