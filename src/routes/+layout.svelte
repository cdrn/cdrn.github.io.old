<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
	import '../app.css'; // Tailwind
</script>

<div>
	<div class="flex flex-col min-h-screen bg-monokaiBackground font-mono">
		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link
			href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
			rel="stylesheet"
		/>

		<Header />

		<main
			class="w-screen flex flex-col flex-grow items-center w-full min-h-full box-border m-0 pr-10 pl-10"
		>
			<slot />
		</main>

		<footer class="flex flex-col items-start bg-monokaiTealDark py-6 space-y-1 pl-10 pr-10 mt-20">
			<p class="text-black hover:underline pointer">
				<a href="https://linkedin.com/in/cdrn" target="_blank" rel="noreferrer">[linkedin]</a>
			</p>
			<p class="text-black hover:underline pointer">
				<a href="https://github.com/cdrn" target="_blank" rel="noreferrer">[github]</a>
			</p>
			<p class="text-black hover:underline pointer">
				<a href="https://github.com/cdrn" target="_blank" rel="noreferrer">[CV]</a>
			</p>
		</footer>
	</div>
</div>

<style>
</style>
