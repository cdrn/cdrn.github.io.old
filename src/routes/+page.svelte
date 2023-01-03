<script>
	import ProjectsSplashCard from '$components/ProjectsSplashCard.svelte';
	import BlogPostCard from '$components/BlogPostCard.svelte';
	import ArrowRightCircle from '$lib/images/ArrowRightCircle.svelte';

	// Default shape of the expected blog object. Not sure how to type properly in this version of sveltekit.
	export let data = [{ metadata: { date: '', title: '', excerpt: '' }, filename: '' }];

	let sortedPosts = Object.values(data)
		.sort((x, y) => Number(new Date(y?.metadata.date)) - Number(new Date(x?.metadata.date))) // dumb linting rule forces us to coerce to number -- despite dates supporting arithmetic operation
		.slice(0, 3);
	console.log(data);
</script>

<svelte:head>
	<title>cdrn</title>
	<meta name="description" content="cdrn" />
</svelte:head>

<section class="flex flex-col space-y-24 h-full justify-center items-center">
	<ProjectsSplashCard />
	<!-- Blog posts cards -->
	<div class="p-6 w-full">
		<h1 class="text-monokaiRed text-4xl md:text-left text-center pb-10">[Posts]</h1>
		<div class="flex flex-col md:space-x-10 md:flex-row items-center space-y-10 md:space-y-0 py-4">
			{#each sortedPosts as post}
				<BlogPostCard
					postName={post?.metadata.title}
					date={new Date(post?.metadata.date)}
					sample={post?.metadata.excerpt}
					filename={post?.filename}
				/>
			{/each}
		</div>
	</div>
	<!-- Career jobs card -->
	<div class="p-6 w-full">
		<h1 class="text-monokaiRed text-center md:text-left text-4xl pb-10">[What i've worked on]</h1>
		<div
			class="md:block flex md:flex flex-col md:flex-row shadow-teal border border-monokaiTeal rounded-2xl w-full justify-center items-center
			md:space-x-20 text-monokaiYellow pt-4 pb-4 md:p-10 text-[24px]"
		>
			<div class="hover:underline flex justify-center items-center space-x-2">
				<a href="https://chainflip.io">Chainflip</a><ArrowRightCircle />
			</div>
			<div class="hover:underline flex justify-center items-center space-x-2">
				<a href="https://www.klarna.com/de/bank-account/">Klarna</a><ArrowRightCircle />
			</div>
			<div class="hover:underline flex justify-center items-center space-x-2">
				<a href="https://www.kapiche.com">Kapiche</a><ArrowRightCircle />
			</div>
		</div>
	</div>
</section>

<style>
</style>
