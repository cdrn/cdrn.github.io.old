<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from './Button.svelte';

	export let postName = '';
	export let filename = '';
	export let date = new Date();
	export let sample = '';
</script>

<div class="border border-monokaiTeal shadow-teal w-[320px] h-[300px] rounded-xl p-6 flex flex-col">
	<h2 class="text-lg text-monokaiYellow mb-2">[{postName}]</h2>
	<p class="text-monokaiRed mb-6">{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</p>
	<div class="divider border border-2 border-monokaiYellow mb-6" />
	<p class="text-md text-white">{sample}</p>
	<!-- Center align the button -->
	<div class="w-full flex flex-col items-center mt-auto">
		<Button onClick={() => goto(`/blog/${filename}`)} size="md">read more</Button>
	</div>
</div>

<style>
</style>
