<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
	import '../app.css'; // Tailwind
</script>

<div
	class="flex flex-col min-h-screen pr-10 pl-10 bg-monokaiBackground text-monokaiYellow font-mono"
>
	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
		rel="stylesheet"
	/>

	<Header />

	<main class="w-full flex flex-col flex-grow items-center w-full min-h-full box-border m-0">
		<slot />
	</main>

	<footer class="flex justify-start items-center space-x-4 pt-10 pb-10">
		<p><a href="https://linkedin.com/in/cdrn" target="_blank" rel="noreferrer">linkedin</a></p>
		<p><a href="https://github.com/cdrn" target="_blank" rel="noreferrer">github</a></p>
	</footer>
</div>

<style>
</style>
