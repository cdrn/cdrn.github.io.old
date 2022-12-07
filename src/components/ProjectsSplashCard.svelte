<script>
	import { goto } from '$app/navigation';
	import Link from '$components/Link.svelte';
	import Button from '$components/Button.svelte';
</script>

<div
	class="m-6 p-10 md:p-24 mt-24 rounded-2xl border border-monokaiTeal shadow-teal flex flex-col justify-center items-center space-y-10"
>
	<h1 class="text-[36px] md:text-[64px] text-monokaiRed">[Projects]</h1>
	<p class="text-monokaiYellow text-[18px] md:text-[24px]">
		Come check out a (non exhaustive) list of personal projects i've hacked on. I love to talk about
		these!
	</p>
	<Button onClick={() => goto('/projects')}>see all</Button>
</div>

<style>
</style>
