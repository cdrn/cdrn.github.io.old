<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data = { title: '', date: '', content: 'content' };
</script>

<article class="text-white">
	<h1 class="text-monokaiRed text-4xl pb-4">{data.title}</h1>
	<p class="text-monokaiYellow pb-10">[Published: {data.date}]</p>
	<svelte:component this={data.content} />
</article>
