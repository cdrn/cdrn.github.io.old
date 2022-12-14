<script>
	export let onClick = () => {};
	export let size = 'lg';
</script>

<div>
	<button
		class="border border-white shadow-white rounded-lg text-white hover:text-black hover:bg-white hover:border-black hover:shadow-black transition ease-in-out duration-50
		{size === 'lg' && 'text-xl py-5 px-24'}
		{size === 'md' && 'text-md py-2 px-16'}
		"
		on:click={() => {
			onClick();
		}}
	>
		<slot />
	</button>
</div>

<style>
</style>
