<script>
	import Link from '$components/link.svelte';

	export let projectName = '';
	export let projectDescription = '';
	export let deployedProjectUrl = '';
	export let projectGithubUrl = '';
</script>

<div
	class="pt-6 pb-6 mt-10 text-monokaiGray shadow-teal border border-monokaiTeal rounded-xl w-full"
>
	<div>
		<div class="space-y-4 pl-20 pr-20 pt-8 pb-8">
			<h2 class="text-2xl text-monokaiRed">
				[<a class="hover:underline transition ease-in-out delay-50" href={deployedProjectUrl}
					>{projectName}</a
				>]
			</h2>
			<p class="text-monokaiYellow"><slot /></p>
			<Link name={'Github'} url={projectGithubUrl} />
		</div>
	</div>
</div>

<style>
</style>
