<script>
	export let onClick = () => {};
</script>

<div>
	<button
		class="px-24 py-5 border border-white shadow-white text-xl rounded-lg text-white hover:text-black hover:bg-white hover:border-black hover:shadow-black transition ease-in-out duration-50"
		on:click={() => {
			onClick();
		}}
	>
		<slot />
	</button>
</div>

<style>
</style>
