<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data = { title: '', date: '', content: '' };
</script>

<article class="text-white max-w-[800px]">
	<h1 class="text-monokaiRed text-4xl pb-4">{data.title}</h1>
	<p class="text-monokaiYellow pb-10">[Published: {data.date}]</p>
	<div>
		<svelte:component this={data?.content} />
	</div>
</article>

<style>
</style>
