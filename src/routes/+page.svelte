<script>
	import ProjectsSplashCard from '$components/ProjectsSplashCard.svelte';
	import ArrowRightCircle from '$lib/images/ArrowRightCircle.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="cdrn" />
</svelte:head>

<section class="flex flex-col space-y-24 h-full">
	<ProjectsSplashCard />
	<!-- Blog posts cards -->
	<!-- <div>
		<h1 class="text-monokaiRed text-4xl">[Posts]</h1>
	</div> -->
	<!-- Career jobs card -->
	<div>
		<h1 class="text-monokaiRed text-4xl pb-10">[What i've worked on]</h1>
		<div
			class="shadow-teal border border-monokaiTeal rounded-2xl w-full flex justify-center items-center
			space-x-20 text-monokaiYellow p-10 text-[24px]"
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
