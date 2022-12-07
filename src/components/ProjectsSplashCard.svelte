<script>
	import Link from '$components/Link.svelte';
	import Button from '$components/Button.svelte';

	export let projectName = '';
	export let projectDescription = '';
	export let deployedProjectUrl = '';
	export let projectGithubUrl = '';
</script>

<div
	class="pt-24 pb-24 pl-24 pr-24 mt-24 rounded-2xl border border-monokaiTeal shadow-teal flex flex-col justify-center items-center space-y-10"
>
	<h1 class="text-[64px] text-monokaiRed">[Projects]</h1>
	<p class="text-monokaiYellow text-[24px]">
		Check out some projects i've hacked on and what i'm hacking on now
	</p>
	<Button>see all</Button>
</div>

<style>
</style>
