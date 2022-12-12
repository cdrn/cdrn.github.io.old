<!-- src/routes/[slug]/+page.svelte -->
<script>
	export let data = { title: '', date: '', content: 'content' };
</script>

<article class="text-white">
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>
